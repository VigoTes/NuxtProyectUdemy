import Vuex from 'vuex'
const createStore = () => {

    return new Vuex.Store({

        state : {
            loadedPosts:[]
        },
        mutations : {
            setPosts(state,posts){
                state.loadedPosts = posts
            }
        },
        actions: {

            nuxtServerInit(vuexContext,context){
                    return new Promise(  (resolve,reject) => {
                        setTimeout(  ()=>{
                            vuexContext.commit('setPosts',
                                    [
                                        {
                                            id:"1",
                                            title:"first post",
                                            previewText:"hola mundo",
                                            thumbnail:"https://gestion.cedepas.org/img/LogoCedepas.png"
                                        }
                                    ]
                            );
                            resolve();
            
                        },1000);
            
                    });
                

            },

            setPosts(vuexContext,posts){
                vuexContext.commit('setPosts',posts);
            }
        },
        getters: {
            loadedPosts(state){
                return state.loadedPosts
            }
        }
    })

}

export default createStore