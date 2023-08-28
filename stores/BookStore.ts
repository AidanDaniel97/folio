import { defineStore } from 'pinia'

type State = {
  books: Book[]
  loading: boolean
}

type Book = {
  id: string
  title: string
}
 
export const useBookStore = defineStore('BookStore', {
    state: (): State => ({
      books: [
        { id: "ABC123", title: 'The Great Gatsby' },
        { id: "ABC123", title: 'The Da Vinci Code' },
        { id: "ABC123", title: 'Angels & Demons' },
      ],
      loading: false
    }),
    getters: {
      allBooks: (state) => state.books,
      book: (state: State): ((id: string) => Book | undefined) => {
        return (id: string) => {
          return state.books.find(book => book.id === id);
        };
      }
    },
    actions: {
      addBook: (state: State, book: Book) => state.books.push(book)
    }
} )

 