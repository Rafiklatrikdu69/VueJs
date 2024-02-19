
export default {
    props:["mode"],
    emits:["supprimer"],
    setup(props) {

        let date = Vue.ref(new Date())
        let intervalId;
        Vue.onMounted(()=>{
            intervalId=setInterval(() => {
              date.value = new Date()
                console.log(date.value)
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
    
        return { props,display };
    },
    template:/*html*/
    
    `
    <p>Avec le mode {{props.mode}},l'horloge indique : <strong id='display'> {{display()}} </strong> </p>
    <button @click="$emit('supprimer')">Supprimer</button>`
}