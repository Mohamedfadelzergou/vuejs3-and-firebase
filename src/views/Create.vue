<template>
    <div class="row">
        <div class="col-md-6 mx-auto">
            <form @submit.prevent="persistePost(post)">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" v-model="post.title" id="title" class="form-control">
                </div>
                <div class="form-group">
                    <label for="content">Content</label>
                    <textarea type="text" v-model="post.content" id="content" class="form-control"></textarea>
                </div>
                <button class="form-control btn btn-primary btn-sm my-2">Add</button>
            </form>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
import {db} from './../firebase/config.js';
import { useRoute, useRouter } from 'vue-router';
export default {
    setup(){
        const post = reactive({
            title:'',
            content:'',
            tags:['javascripte'] 
            }
        );
        const error = ref(null);
        
        const router= useRouter();
        //methode
        const persistePost = async (post) =>{
            try {
                const res = await db.collection('posts').add(post);
                router.push({path:'/blog'});
            } catch (error) {
                error.value=error.message;
            }
        }
        return {post,persistePost}
    }
}
</script>

<style>

</style>