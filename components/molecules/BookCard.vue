<template>
  <div class="bg-gray-200 rounded-md p-4 flex">
    <div v-if="imageSrc" class="relative w-32 h-48 flex-shrink-0">
      <img
        :src="imageSrc"
        :alt="`Front cover of the book '${title}'.`"
        class="w-full h-full object-cover rounded-md"
      />
    </div>
    <div v-if="title || subtitle || description" class="ml-4">
      <h2 v-if="title" class="text-xl font-semibold">{{ title }}</h2>
      <p v-if="subtitle" class="text-gray-600">{{ subtitle }}</p>
      <p v-if="description" class="text-gray-600 mt-3">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  imageSrc: {
    type: String,
    required: false,
    default: "",
  },
  title: {
    type: String,
    required: false,
    default: "",
  },
  subtitle: {
    type: String,
    required: false,
    default: "",
  },
  description: {
    type: String,
    required: false,
    default: "",
  },
});
</script> 
