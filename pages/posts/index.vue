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
    },
    computed:{
        loadedPosts(){
            console.log("AAAAAAAAAAA")
            return this.$store.getters.loadedPosts
        }
    }

}
</script>
