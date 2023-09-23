<template>
  <div v-if="!loading" class="bg-gray-200 rounded-md p-4 flex h-full">
    <div class="relative w-32 h-48 flex-shrink-0">
      <img
        :src="image"
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
  <div v-else class="bg-gray-200 rounded-md p-4 flex h-full">
    <div class="animate-pulse relative w-32 h-48 flex-shrink-0">
      <div class="bg-gray-400 w-full h-full rounded-md"></div>
    </div>
    <div class="ml-4 w-full flex flex-col">
      <div class="animate-pulse bg-gray-400 w-100 h-4 rounded-md"></div>
      <div
        class="animate-pulse bg-gray-400 w-100 rounded-md mt-2 flex-grow"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
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
  loading: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const image = computed(() => {
  if (props.imageSrc) {
    return props.imageSrc;
  }
  return "/images/placeholder.webp";
});
</script> 
