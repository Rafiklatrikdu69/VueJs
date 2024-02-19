import horloge from "./js/horloge.js";

export default {
    props:['mode'],
    setup() {
        const listeHorloge = Vue.ref([])
        const mode = Vue.ref([{mode:null}])
        
        function ajout(event){
            console.log("click !")
            if (event.target.tagName === "BUTTON"){
                console.log(mode.value.mode)
                 listeHorloge.value.push({mode :mode.value.mode})
            }
        }
        function reset(){
            listeHorloge.value = [];
        }
        return {listeHorloge,ajout,mode,reset}
    },
    components: {
        horloge  
    },
    template:/*html*/
    `
    <div>
  
        <button @click="ajout">ajouter une horloge</button> qui indique 
        <select v-model="mode.mode" mutiple>
            <option :value="0" selected>juste l'heure</option>
            <option :value="1">juste la date</option>
            <option :value="2">la date et l'heure</option>
        </select>
        <div v-for="l in listeHorloge" :key="l.mode">
        <ul>
        <li>
            <horloge :mode="l.mode"/>
            </li>
            </ul>
        </div>
    </div>
    <button @click="reset()">Supprimer</button>
    `
}
