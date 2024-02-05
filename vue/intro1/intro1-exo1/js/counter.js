export default {
    props:["start"],
    setup(props) {
       
        const count = Vue.ref(0);
        let intervalId;
        Vue.onMounted(()=>{
            intervalId=setInterval(() => {
                count.value += 1;
            }, 1000);
        });
        Vue.onUnmounted(()=>clearInterval(intervalId));
        function display(){ // méthode display
            if(count.value< props.start){
                return"En attente"
            }
            else{ 
                let s = count.value%60;
                let m = Math.floor(count.value/60);
                return m + " minutes et " + s + " secondes" ;
            }
        }
        // exposition pour le template de la méthode
        return { display };
    },
    template:`<p>temps écoulé: {{display()}}</p>
    <button @click>Recommencer</button>`
}