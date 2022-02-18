export default function (context){

    console.log("Middleware check out]")


    context.store.dispatch("initAuth",context.req);
 
    
}