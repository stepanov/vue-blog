import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'
import Post from '@/components/Post.vue'
import Hello from  '@/components/Hello.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Hello,
    },
    {
      path: '/posts/:id',
      name: 'Post',
      component: Post,
      props: true,
    }
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
