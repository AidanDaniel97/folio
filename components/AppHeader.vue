<template>
    <header class="flex items-center justify-between p-4 bg-white border-gray-200 border-b-2">
        <div class="flex items-center">
        <!-- <img src="" alt="Logo" class="w-8 h-8 mr-2"> -->
        <div class="w-10 h-10 rounded-full bg-gray-200 mr-2"></div>
        <h1 class="text-white text-xl font-bold">Folio</h1>
        </div>
        <AtomsInput @input="fetchBooks" />
    </header>
</template>
<script setup lang="ts">
import { useBookStore } from '@/stores/BookStore';
const BookStore = useBookStore();

const fetchBooks = (event: Event) : undefined => {
    console.log(event); 

}
</script>
  