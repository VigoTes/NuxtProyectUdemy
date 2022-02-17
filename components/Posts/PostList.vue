<template>
    
      <div class="posts-page">

        
        <section class="post-list">


            <PostPreview
            id="1"
            :is-admin="isAdmin"
            thumbnail ="https://gestion.cedepas.org/img/LogoCedepas.png"
            title="Hello there"
            previewText = "este es mi primer post"
            />

                 
            <PostPreview
            id="1"
             :is-admin="isAdmin"
            thumbnail ="https://gestion.cedepas.org/img/LogoCedepas.png"
            title="Hello there"
            previewText = "este es mi primer post"
            />

 

    

        </section>
            
    </div>

</template>
<script>
 import PostPreview from '@/components/Posts/PostPreview'

 export default {
     components:  {
         PostPreview
     },
     props:{
         isAdmin :{
             type: Boolean,
             default: false
         }
     }
 }
</script>


<style scoped>
    .posts-page{
        display:flex;
        justify-content: center;
        align-items: center;

    }

    .post-list {
        display: flex;
        padding: 20px;
        box-sizing: border-box;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

</style>