import horloge from "./js/horloge.js";

export default {
    props:['mode'],
    setup() {
        const listeHorloge = Vue.ref([])
        const mode = Vue.ref(0)
        
        function ajout(event){
            console.log("click !")
            if (event.target.tagName === "BUTTON"){
                console.log(mode.value)
                 listeHorloge.value.push({mode :mode.value})
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
        <select v-model="mode">
            <option :value="0">juste l'heure</option>
            <option :value="1">juste la date</option>
            <option :value="2">la date et l'heure</option>
        </select>
        <div v-for="(l,index) in listeHorloge" :key="l.mode">
        <ul>
        <li>
            <horloge :mode="l.mode" @supprimer="listeHorloge.splice(index,1)"/>
            </li>
            </ul>
        </div>
    </div>
    <button @click="reset()">Supprimer</button>
    `
}
