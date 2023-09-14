import { defineStore } from 'pinia';
import { ref } from 'vue';
import { searchBooks } from '../assets/ts/apiClient';

type Book = {
  id: string;
  title: string;
};

type State = {
  books: Book[] | any; // TODO: REMOVE ANY
  loading: boolean;
  searchTerm: string;
};

export const useBookStore = defineStore('BookStore', () => {
  const books = ref<State['books']>([]); 
  const loading = ref<State['loading']>(false);
  const searchTerm = ref<State['searchTerm']>('');

  async function searchBooksAction(term: string) {
    loading.value = true;
    searchTerm.value = term;
    books.value = await searchBooks(term);
    loading.value = false;
  }

  function getBookById(id: string): Book | undefined {
    return books.value.find((book: Book) => book.id === id);
  }

  return {
    books,
    loading,
    searchTerm,
    searchBooks: searchBooksAction,
    getBookById,
  };
});