<template>
    <div class="border rounded-lg p-4 bg-white shadow hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
      <h2 class="text-xl font-semibold mb-2 line-clamp-2">{{ post.title }}</h2>
      <p class="text-gray-600 flex-grow line-clamp-3">{{ post.body.slice(0, 100) }}...</p>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    post: {
      id: number
      title: string
      body: string
      userId: number
    }
  }>()
  </script>
  