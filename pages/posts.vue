<template>
    <div class="p-6 max-w-7xl mx-auto">
      <h1 class="text-3xl font-bold mb-8 text-center">Posts Page</h1>
  
      <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="post in posts"
          :key="post.id"

          :to="`/posts/${post.id}`"
          class="block transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg"
        >
          <PostCard :post="post" />
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { usePostsStore } from '~/stores/posts'
  import PostCard from '~/components/PostCard.vue'
  
  // Use Pinia store
  const store = usePostsStore()
  
  // Ensure posts are fetched before rendering (SSR-compatible)
  await useAsyncData('posts', () => store.fetchPosts())
  
  // Get the posts from the store
  const posts = store.posts
  </script>
  