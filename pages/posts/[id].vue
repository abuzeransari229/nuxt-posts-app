<template>
    <div class="p-6 max-w-3xl mx-auto">
      <NuxtLink to="/posts" 
      class="inline-block mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">← Back to Posts</NuxtLink>
  
      <div v-if="post" class="bg-white rounded shadow p-6">
        <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
        <p class="text-gray-700 leading-relaxed">{{ post.body }}</p>
        <p class="mt-6 text-sm text-gray-500">Post ID: {{ post.id }} | User ID: {{ post.userId }}</p>
      </div>
  
      <p v-else class="text-center text-gray-500">Loading post...</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { ref, onMounted } from 'vue'
  
  const route = useRoute()
  const post = ref<any>(null)
  
  onMounted(async () => {
    const id = route.params.id
    post.value = await $fetch(`https://dummyjson.com/posts/${id}`)
  })
  </script>
  