<template>
    <div>
        <h2> {{ post.title }}</h2>
        <p> {{ post.content }}</p>
        <div class="my-3">
            <span class="badge badge-primary" v-for="(tag,index) in post.tags" :key="index">
                {{tag}}
            </span>
            <button @click="deletepost(post.id)" class="btn btn-sm btn-primary">
                DELETE
            </button>
        </div>
        <div class="alert alert-primary" role="alert" v-if="error">
            <strong>{{error}}</strong>
        </div>

    </div>
</template>

<script>
import getOnePost from './../composables/posts/getOnePosts.js';
import {db} from './../firebase/config.js';
import {useRoute, useRouter} from 'vue-router';
export default {
    setup(){
        const route=useRoute();
        const router=useRouter();
        const {post,error,load}=getOnePost();
        const id=route.params.id;
        load(id);
        const deletepost=async(id)=>{
            try {
                const res = await db.collection('posts').doc(id).delete();
                router.push({path:'/blog'});
            } catch (error) {
                error.value=error.message;
            }
        }
        return {post,error,deletepost}
    }
}
</script>

<style>

</style>