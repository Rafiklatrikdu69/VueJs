export default {
    props:["mode"],
    setup(props) {
       let time0 = Vue.ref("")
       let time1 = Vue.ref("")
       let time2 = Vue.ref("")

        let intervalId;
        Vue.onMounted(()=>{
            intervalId=setInterval(() => {
                let date = new Date();
                time0.value = date.toLocaleTimeString()
                time1.value  = date.toLocaleDateString()
                time2.value = date.toLocaleTimeString() +"-"+ date.toLocaleDateString()
            }, 1000);
        });
        Vue.onUnmounted(()=>clearInterval(intervalId));
        function display(){ // méthode display
            if(props.mode===0){
                return time0.value
            }else if (props.mode===1){
                return time1.value
            }else {
                return time2.value  
            }
        }
    
        return { props,display };
    },
    template:"<p>Avec le mode {{props.mode}} : <strong> {{display()}} </strong> </p>"
}