<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
        </section>
    </div>
</template>


<script>
import AdminPostForm  from '@/components/Admin/AdminPostForm'

export default {
    middleware: ['check-auth','auth' ],
    layout:'admin',
    components:{
        AdminPostForm
    },

      asyncData(context){
        var rutaAConsultar =  '/posts/' + context.params.postid + '.json';
         
        return context.$axios.$get(rutaAConsultar)
            .then( data => {
                console.log("Se hizo una consulta a " + rutaAConsultar)
                console.log("LA RES ES:")
                console.log(data)

                if( data === null){
                    throw new Error(e)
                }
                    
                return {
                    loadedPost :  {...data , id: context.params.postid}
                };
            })
            .catch( e => {
                console.log("HUBO UN ERROR")
                context.error(e)
            })

    },
    methods:{

        onSubmitted(editedPost){
            
            this.$store.dispatch('editPost',editedPost).then(  ()=>{

                this.$router.push('/admin')
            } )
            
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