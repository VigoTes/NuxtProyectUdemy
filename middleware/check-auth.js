export default function (context){

    console.log("Middleware check out]")

    if(process.client){

        context.store.dispatch("initAuth");

    }
    
}