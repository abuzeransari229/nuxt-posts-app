import { defineStore } from 'pinia'

interface Post {
  id: number
  title: string
  body: string
  userId: number
}

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [] as Post[],
    lastFetched: 0,
  }),
  actions: {
    async fetchPosts() {
      const now = Date.now()
      // Check if cache is valid (15 minutes = 900000 ms)
      if (this.posts.length && (now - this.lastFetched < 15 * 60 * 1000)) {
        // Cache valid, don't fetch again
        return
      }
      try {
        const data = await $fetch('https://dummyjson.com/posts')
        this.posts = data.posts
        this.lastFetched = now
      } catch (error) {
        console.error('Failed to fetch posts:', error)
      }
    },
  },
})
