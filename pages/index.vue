<template>
  <div>
    <section class="mt-10 px-10">
      <!-- Search results -->
      <div
        v-if="books.length > 0"
        class="flex flex-auto flex-wrap justify-between gap-10"
      >
        <MoleculesBookCard
          v-for="(book, key) in books"
          :key="`book-${key}`"
          class="w-1/3 flex-grow"
          :title="book.volumeInfo?.title"
          :subtitle="book.volumeInfo?.subtitle"
          :description="formattedDescription(book.volumeInfo?.description)"
          :imageSrc="book.volumeInfo?.imageLinks?.thumbnail"
        ></MoleculesBookCard>
      </div>

      <!-- No Results -->
      <div
        v-else-if="books.length < 0 && searchTerm"
        class="flex flex-col items-center justify-center"
      >
        <h1 class="text-3xl font-bold">No books found</h1>
        <p class="text-gray-600 mt-3">Try searching for something else.</p>
      </div>

      <!-- Initial search message - no search term entered -->
      <div v-else class="flex flex-col items-center justify-center">
        <h1 class="text-3xl font-bold">Search for a book!</h1>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { useBookStore } from "~/stores/BookStore";
import { storeToRefs } from "pinia";
import { truncateString } from "~/assets/ts/utils";

const BookStore = useBookStore();
const { books, searchTerm } = storeToRefs(BookStore);

const formattedDescription = (description: string): string => {
  return truncateString(description, 200);
};
</script>