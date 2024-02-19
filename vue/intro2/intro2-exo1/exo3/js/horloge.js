
export default {
    props:["mode"],
    emits:["supprimer","informer"],
    setup(props,ctx) {
        const initDt = Date.now();
        let date = Vue.ref(new Date())
        let intervalId;
        Vue.onMounted(()=>{
            intervalId=setInterval(() => {
              date.value = new Date()
                // console.log(date.value)
            }, 1000);
        });
        Vue.onUnmounted(()=>clearInterval(intervalId));
        function display(){ // méthode display
            if(props.mode===0){
                return new Date(date.value).toLocaleTimeString()
            }else if (props.mode===1){
                return new Date(date.value).toLocaleDateString()
            }else {
                return new Date(date.value).toLocaleTimeString() +" - "+ new Date(date.value).toLocaleDateString()
            }
        }
        function supprimer(){
            ctx.emit("supprimer")
        }
        function finInformer(){
            ctx.emit("informer",(date.value-initDt)/1000)
        }
    
        return { props,display ,supprimer,finInformer};
    },
    template:/*html*/
    
    `
    <p>Avec le mode {{props.mode}},l'horloge indique : <strong id='display'> {{display()}} </strong> </p>
    <button @click="supprimer()">Supprimer</button>
    <button @click="finInformer">informer</button>`
}