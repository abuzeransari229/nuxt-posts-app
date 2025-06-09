<template>
    <div class="p-6">
      <h1 class="text-3xl font-bold mb-6">Posts Page</h1>
  
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="post in posts"
          :key="post.id"
          :to="`/posts/${post.id}`"
          class="block"
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
  