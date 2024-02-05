
export default {
    props:["mode"],
    setup(props) {

        let date = Vue.ref(new Date())
        let intervalId;
        Vue.onMounted(()=>{
            intervalId=setInterval(() => {
              date.value = new Date()
               
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
    template:"<p>Avec le mode {{props.mode}},l'horloge indique : <strong id='display'> {{display()}} </strong> </p>"
}