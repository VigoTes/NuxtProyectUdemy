<template>
    <div class="admin-new-post-page">
        <section class="new-post-form">
        <AdminPostForm @submit="onSubmitted"/>
        </section>
    </div>
</template>
<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
import axios from 'axios'

export default {
    layout:'admin',
    components:{
        AdminPostForm,
        
    },
    methods:{
        onSubmitted(postData){  
            console.log("SUBMITEANDO")

            axios.post('https://nuxt-blog-1a161-default-rtdb.firebaseio.com/posts.json',postData)
                .then(result => console.log(result))
                .catch(e => console.log(e))

        }


    }
}
</script>
<style>
.new-post-form{
    width: 90%;
    margin:20px auto
}
@media (min-width:768px){
    .new-post-form{
        width:500px
    }
}

</style>