<template>
  <div>
    <section class="mt-10 px-10">
      <!-- Search results or loading state -->
      <div
        v-if="books?.length > 0 || loading"
        class="flex flex-auto flex-wrap justify-between gap-10"
      >
        <template v-if="books?.length > 0 && !loading">
          <NuxtLink
            v-for="(book, key) in books"
            :key="`book-${key}`"
            :to="{
              name: 'books-title',
              params: { title: titleToSlug(book.volumeInfo?.title) },
              query: { id: book.id },
            }"
            class="w-1/3 flex-grow"
          >
            <MoleculesBookCard
              :title="book.volumeInfo?.title"
              :subtitle="book.volumeInfo?.subtitle"
              :description="formattedDescription(book.volumeInfo?.description)"
              :imageSrc="book.volumeInfo?.imageLinks?.thumbnail"
            ></MoleculesBookCard>
          </NuxtLink>
        </template>
        <template v-else-if="loading">
          <div
            v-for="(_, key) in [1, 2, 3, 4, 5, 6]"
            :key="`book-${key}`"
            class="w-1/3 flex-grow"
          >
            <MoleculesBookCard loading></MoleculesBookCard>
          </div>
        </template>
      </div>

      <!-- No Results -->
      <div
        v-else-if="books?.length < 0 && searchTerm"
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
import { truncateString, titleToSlug } from "~/assets/ts/utils";

const BookStore = useBookStore();
const { books, searchTerm, loading } = storeToRefs(BookStore);

const formattedDescription = (description: string): string => {
  return truncateString(description, 150);
};
</script>