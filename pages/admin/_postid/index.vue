<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
        </section>
    </div>
</template>


<script>
import AdminPostForm  from '@/components/Admin/AdminPostForm'
import axios from 'axios'
export default {
    layout:'admin',
    components:{
        AdminPostForm
    },

      asyncData(context){
        var rutaAConsultar = 'https://nuxt-blog-1a161-default-rtdb.firebaseio.com/posts/' + context.params.postid + '.json';
         
        return axios.get(rutaAConsultar)
            .then( res => {
                console.log("Se hizo una consulta a " + rutaAConsultar)
                console.log("LA RES ES:")
                console.log(res.data)

                if(res.data === null){
                    throw new Error(e)
                }
                    
                return {
                    loadedPost : res.data
                }
            })
            .catch( e => {
                console.log("HUBO UN ERROR")
                context.error(e)
            })

    },
    methods:{

        onSubmitted(editedPost){
            axios.put( 'https://nuxt-blog-1a161-default-rtdb.firebaseio.com/posts/' + this.$route.params.postid + '.json',editedPost)
            .then(res => {
                this.$router.push('/admin')
                console.log(res)
            })
            .catch( e => console.log(e))
        }
    }
     

}
</script>
<style scoped>
    .update-form{
        width:90%;
        margin:20px auto;
    }

    @media (min-width:768px) {
        .update-form{
            width:500px
        }
    }

</style>