import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [] as any[],
    lastFetched: 0
  }),
  actions: {
    async fetchPosts() {
      const now = Date.now()
      if (this.posts.length && now - this.lastFetched < 15 * 60 * 1000) return
      const res = await $fetch('https://dummyjson.com/posts')
      this.posts = res.posts
      this.lastFetched = now
    }
  }
})
