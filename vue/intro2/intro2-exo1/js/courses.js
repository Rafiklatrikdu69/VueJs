export default {
  setup() {
    // const isActive = ref(true)
    // const hasError = ref(false)
    const button = Vue.ref("");
    let nouvelId= Vue.ref(-1);;
    function listen(event) {
      if (event.target.tagName === "BUTTON")
      button.value = event.target.textContent;
      console.log(button.value);
      console.log(nouveau.value);
      listec.value.push({ id: nouvelId+1,...nouveau.value});
      console.log(listec.value);
      nouveau.urgent="";
      nouveau.nom="";
    }
    function reset(){
      listec.value =[]
    }
    const listec = Vue.ref([]);//refrence vers un objet 
    
    const nouveau = Vue.ref({ nom: "", urgent: false });
    return { listec, nouveau, button, listen,reset };
  },
  
  template: /* html */
  `
  <ul>
    
      <li v-for="c in listec" :key="c.id">
          <span><span :class="{urgent : c.urgent}">{{c.nom}}</span> <strong v-if="c.urgent" >(urgent)</strong><span class="italic">(L'identifiant unique est {{c.id}})</span></span>
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
  <button @click="reset">Reset</button>`,
};
