<template>
    <div class="posts-page">
        <PostList :posts="loadedPosts"/>
    </div>
  
</template>
<script>
import PostList from '@/components/Posts/PostList'

export default {

    components:{
        PostList
    },asyncData(context){

        return new Promise(  (resolve,reject) => {
            setTimeout(  ()=>{
                resolve({ 
                        loadedPosts: 
                        [
                            {
                                id:"1",
                                title:"first post",
                                previewText:"hola mundo",
                                thumbnail:"https://gestion.cedepas.org/img/LogoCedepas.png"
                            }
                        ]
                    })

            },1000)

        } ).then(data=>{
            return data

        }) .catch( e => {
            context.error(new Error())
        });
    },
    created(){
        this.$store.dispatch('setPosts',this.loadedPosts)
        console.log("-----------")
        console.log(this.$store.getters.loadedPosts)
    }

}
</script>
