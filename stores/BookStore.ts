import { defineStore } from 'pinia';
import { ref } from 'vue';
import { searchBooks, searchBookById } from '../assets/ts/apiClient';

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
    if(term){
      loading.value = true;
      searchTerm.value = term;
      books.value = await searchBooks(term);
      loading.value = false;
      return;
    }
    books.value = [];
   
  }

  async function searchBookByIdAction(id: string) {
    loading.value = true; 
    books.value.push(await searchBookById(id));
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
    searchBookById: searchBookByIdAction,
    getBookById,
  };
});