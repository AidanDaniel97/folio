<template>
  <div>
    <!-- Display book data -->
    <div v-if="!pending && book">
      <MoleculesBookCard
        :title="book.volumeInfo?.title"
        :subtitle="book.volumeInfo?.subtitle"
        :description="book.volumeInfo?.description"
        :imageSrc="book.volumeInfo?.imageLinks?.thumbnail"
      ></MoleculesBookCard>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useBookStore } from "~/stores/BookStore";
import { storeToRefs } from "pinia";

const BookStore = useBookStore();
const { books } = storeToRefs(BookStore);
const { searchBookById } = BookStore;

const route = useRoute();

const { data, pending } = useAsyncData(async () => {
  let storeBook: Book | null = getStoreBookById(route.query.id as string);
  if (storeBook) {
    return storeBook;
  }
  return await searchBookById(route.query.id as string);
});

const book = ref(data);

function getStoreBookById(bookId: string | null = null): Book | null {
  if (books.value.length > 0) {
    return books.value.find((book: Book) => book.id === bookId);
  }
  return null;
}
</script>