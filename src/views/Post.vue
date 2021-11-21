<template>
    <h1>List of Posts</h1>
    <div v-for="post in posts" :key="post.id">
        <one-post :post="post"/>
    </div>
</template>
<script>
import OnePost from '../components/OnePost.vue';
import loudPosts from './../composables/posts/getPosts.js';
export default {
  components: { OnePost },
    setup(){
        const {posts,error,load}=loudPosts();
        load();
        return {posts}
    }
}
</script>

<style>

</style>