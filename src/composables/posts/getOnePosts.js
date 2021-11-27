import { ref } from 'vue'
import {db} from './../../firebase/config.js';
const loudPost=()=>{
    const post=ref({});
    const error=ref(null);
    const load = async (id) => {
        try{
            const res = await db.collection('posts').doc(id).get();
                post.value={...res.data(),id}; 
                if(!res.exists){
                    throw Error('this post not exists');
                }
        }catch(err){
            error.value=err.message
        }
    }
    return {post,error,load}
    
}
export default loudPost;