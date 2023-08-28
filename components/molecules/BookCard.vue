<template>
    <div class="bg-gray-200 rounded-md p-4 flex">
        <div v-if="imageSrc" class="relative w-32 h-48">
            <img :src="imageSrc" :alt="`Front cover of the book '${title}'.`" class="w-full h-full object-cover rounded-md">
        </div>
        <div v-if="title || text" class="ml-4">
            <h2 v-if="title" class="text-xl font-semibold">{{ title }}</h2>
            <p v-if="text" class="text-gray-600">{{ text }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">

defineProps({
    imageSrc: {
        type: String,
        required: false,
        default: ''
    },
    title: {
        type: String,
        required: false,
        default: ''
    },
    text: {
        type: String,
        required: false,
        default: '',
    }
});

</script> 
