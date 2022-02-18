import Vuex from 'vuex'

const createStore = () => {

    return new Vuex.Store({

        state : {
            loadedPosts:[]
        },
        mutations : {
            setPosts(state,posts){
                state.loadedPosts = posts
            },
            addPost(state,post){
                state.loadedPosts.push(post)
            },editPost(state,editedPost){
                const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
                state.loadedPosts[postIndex] = editedPost;

            },
            setToken(state,token){
                state.token = token;
            }
        },
        actions: {

            nuxtServerInit(vuexContext,context){
 
                return context.app.$axios.$get(  '/posts.json')
                    .then(  data => {
                        const postsArray = [];
                        for (const key in data){
                            postsArray.push( {... data[key] ,id: key })
                        }
                        console.log("el postsArray es:")
                        console.log(postsArray)
                        vuexContext.commit('setPosts',postsArray)
                    } )
                    .catch(e => {
                        console.log(e)
                        context.error(e)

                    } )

            },

            setPosts(vuexContext,posts){
                vuexContext.commit('setPosts',posts);
            },
            addPost(vuexContext,post){
                const createdPost = {
                    ...post,
                    updatedDate : new Date()
                }
                this.$axios.$post(   '/posts.json?auth=' + vuexContext.state.token, createdPost)
                .then(data => {
                    vuexContext.commit('addPost',{... createdPost,id:data.name})
                     
                    })
                .catch(e => console.log(e))
                
            },
            editPost(vuexContext,editedPost){
                console.log("GUARDANDO UN EDITED POST")
                console.log(editedPost)
                return this.$axios.$put(  '/posts/' + editedPost.id + '.json?auth=' + vuexContext.state.token,editedPost)
                    .then(data => {
                        vuexContext.commit('editPost',editedPost)
                        console.log(data)
                    })
                    .catch( e => console.log(e))

            },
            authenticateUser(vuexContext,authData){
                    
                let authUrl = '';
                if(!authData.isLogin){ //MODO REGISTRAR
                    authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.fbAPIKey
                
                }else{ //modo login
                    authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.fbAPIKey

                }

                return this.$axios.$post(authUrl ,{ 
                    email: authData.email,
                    password:authData.password,
                    returnSecureToken:true
                }).then( result => {
                    vuexContext.commit('setToken',result.idToken)
                    console.log(result);
                }).catch(e => {

                    
                });

            }
        },
        getters: {
            loadedPosts(state){
                return state.loadedPosts
            },
            isAuthenticated(state){
                return state.token != null;
            }
        }
    })

}

export default createStore