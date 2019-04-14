<template>
  <div id="app">
    <header>
      <h1>Vue.js SPA</h1>
    </header>
    <main>
      <aside class="sidebar">
        <router-link
          v-for="post in posts"
          :key="post.id"
          active-class="is-active"
          class="link"
          :to="{ name: 'name', params: { id: post.id } }">
            {{ post.id }}. {{ post.title }}
        </router-link>
      </aside>
      <div class="content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    props: ['id'],
    data () {
      return {
        posts: null,
        endpoint: 'https://jsonplaceholder.typicode.com/posts/'
      }
    },
    created() {
      this.getAllPosts();
    },
    methods: {
      getPost(id) {
        axios(this.endpoint + id)
          .then(response => {
            this.post = response.data
          })
          .catch(error => {
            console.log(error)
          })
      },
      created() {
        this.getPost(this.id);
      },
      getAllPosts() {
        axios.get(this.endpoint)
          .then(response => {
            this.posts = response.data
          })
          .catch(error => {
            console.log(error);
          })
      }
    }
  }
</script>
