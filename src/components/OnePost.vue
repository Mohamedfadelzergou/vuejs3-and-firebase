<template>
        <h2 @click="show=!show">{{post.title}}</h2>
        <p v-if="show">{{extract}}</p>
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