<template>
    <div class="row">
        <div class="col-md-6">
            <h1>List of Posts</h1>
        </div>
        <div class="col-md-6">
            <router-link to="/blog/add" class="text-rigth btn btn-sm btn-info">Create</router-link>
        </div>
    </div>
    <div class="row">
    <div class="col-md-6" v-for="post in posts" :key="post.id">
        <one-post :post="post"/>
    </div>
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