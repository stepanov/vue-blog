<template lang="html">
  <div class="post" v-if="post">
    <h2 class="post__title">{{ post.title }}</h2>
    <p class="post__body">{{ post.body }}</p>
    <p class="post__id">{{ post.id }}</p>
  </div>
</template>
