<template>
        <h2 @click="show=!show">{{post.title}}</h2>
        <div class="well" v-if="show">
            <p>{{extract}}</p>
            <span v-for="tag in post.tags" class="badge bg-primary me-2">
                #{{tag}}
            </span>
        </div>
        <div class="my-3">
            <router-link :to="{name:'Blog-show',params:{id:post.id,title:post.title,content:content}}" class="btn btn-sm btn-info" >Show</router-link>
            <button class="btn btn-sm btn-warning ms-2" @click="Edit">Edit</button>
            <button class="btn btn-sm btn-danger ms-2" @click="Delete">Delete</button>
        </div>
</template>

<script>
import { ref,computed, onMounted, onUpdated, onUnmounted } from 'vue'
export default {
    props:['post'],
    setup(props){
        const extract = computed(()=>props.post.content.substring(0,50)+'...');
        onUnmounted(()=>{
            console.log('on Post UNMounted')
        });
        onMounted(()=>{
            console.log('on Post Mounted')
        });
        onUpdated(()=>{
            console.log('on Post Updated')
        });
        const show = ref(true);
        return {extract,show}
    }
}
</script>

<style>

</style>