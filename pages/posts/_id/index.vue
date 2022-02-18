<template>
    <div class="single-post-page">

        <section class="post">
            <h1 class="post-title">
                {{loadedPost.title}}
            </h1>
            <div class="post-details">
                <div class="post-detail">
                    Last updated on: {{loadedPost.updatedDate}}
                </div>
                <div class="post-detail">
                    Writen by {{loadedPost.author}}
                </div>
                <p class="post-content">
                    {{loadedPost.content}}
                </p>
            </div>
        </section>
        <section class="post-feedback">
            <p>
                Let me know enviando correo a 
                <a href="mailto:diego.vigo@janaq.com">
                    Diego Vigo
                </a>
            </p>

        </section>
    </div>
</template>

<script>

import axios from 'axios'

export default {

    head:{
        title : "Blog eñ"
    },
    asyncData(context){
        var rutaAConsultar =process.env.baseUrl + '/posts/' + context.params.id + '.json';
         
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

    }
}
</script>

<style scoped>
    .single-post-page {
    padding: 30px;
    text-align: center;
    box-sizing: border-box;
    }

    .post {
    width: 100%;
    }

    @media (min-width: 768px) {
    .post {
        width: 600px;
        margin: auto;
    }
    }

    .post-title {
    margin: 0;
    }

    .post-details {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 3px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    }

    @media (min-width: 768px) {
    .post-details {
        flex-direction: row;
    }
    }

    .post-detail {
    color: rgb(88, 88, 88);
    margin: 0 10px;
    }

    .post-feedback a {
    color: red;
    text-decoration: none;
    }

    .post-feedback a:hover,
    .post-feedback a:active {
    color: salmon;
    }
</style>