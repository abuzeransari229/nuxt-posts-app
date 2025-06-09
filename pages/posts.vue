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
  import { onMounted } from 'vue'
  
  const store = usePostsStore()
  
  onMounted(() => {
    store.fetchPosts()
  })
  
  const posts = store.posts
  </script>
  