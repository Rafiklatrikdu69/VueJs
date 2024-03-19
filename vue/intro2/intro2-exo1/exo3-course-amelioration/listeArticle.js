import Courses from "./js/courses.js"
export default {
    setup() {
      // const isActive = ref(true)
      // const hasError = ref(false)
      const button = Vue.ref("");
      let nouvelId= Vue.ref(-1);
      function listen(event) {
        if (event.target.tagName === "BUTTON")
        button.value = event.target.textContent;
        // console.log(button.value);
        // console.log(nouveau.value);
        nouvelId.value +=1
        listec.value.push({ id: nouvelId.value,...nouveau.value});
        console.log(listec.value);
        nouveau.urgent="";
        nouveau.nom="";
      }
      function reset(){
        listec.value =[]
      }
      function modifier(nouveauNom,nouveauUrgent,nouveauID){
        for (let i = 0 ;i<listec.value.length;i++){
                if(listec.value[i].id==nouveauID){
                    listec.value[i] = {id: nouveauID, nom: nouveauNom, urgent: nouveauUrgent};
                }
        }
       
      
                // console.log(nouveauNom)
                // console.log(nouveauUrgent)
                // console.log(nouveauID)
      }

      function supprimer(idRecherche){
        for (let i = 0 ;i<listec.value.length;i++){
            if(listec.value[i].id==idRecherche){
                listec.value.splice(i,1)
            }
    }
      }
      const listec = Vue.ref([]);//refrence vers un objet 
      
      const nouveau = Vue.ref({ nom: "", urgent: false });
      return { listec, nouveau, button, listen,reset ,modifier,supprimer};
    },
    components:{
        Courses
    },
    template: /* html */
    `
    <ul>
      
        <li v-for="c in listec" :key="c.id">
            <Courses :nom="c.nom" :urgent="c.urgent" :id="c.id" @modifier="modifier" @supprimer="supprimer"/> 
        </li>
  
    </ul> 
  
    <label for="article"> Ajouter un article :</label>
    <input id="article" v-model.lazy.trim="nouveau.nom" />
      <button @click="listen">Ajouter </button>
    <label>
    <input type="checkbox" v-model="nouveau.urgent" />
    urgent</label>
    <p>Vous souhaitez ajouter: {{ nouveau.nom }}
      <strong v-if="nouveau.urgent">(urgent)</strong>
    </p>
    <button @click="reset">Reset</button>`

  };
  