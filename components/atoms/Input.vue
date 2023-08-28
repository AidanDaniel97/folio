<template>
    <div class="relative">
      <input
        :type="type"
        :placeholder="placeholder"
        class="border border-gray-200 rounded py-1 px-2 pr-8 focus:outline-none focus:border-blue-300"
      />
      <div class="absolute top-0 right-0 flex items-center h-full px-2 pointer-events-none">
        <svg v-if="icon" class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM2 10a8 8 0 018-8 1 1 0 012 0 8 8 0 018 8 1 1 0 01-2 0 8 8 0 01-8-8 1 1 0 010-2z"/>
        </svg>
      </div>
    </div>
  </template>
  
  <script setup lang="ts"> 
  defineProps({
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: 'Search...',
    },
    icon: {
      type: Boolean,
      default: false,
    },
  });
  </script>
  