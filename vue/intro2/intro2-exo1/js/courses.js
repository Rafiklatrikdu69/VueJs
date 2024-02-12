export default {
  setup() {
    // const isActive = ref(true)
    // const hasError = ref(false)
    const button = Vue.ref("");
    
    function listen(event) {
      if (event.target.tagName === "BUTTON")
      button.value = event.target.textContent;
      console.log(button.value);
      console.log(nouveau.value);
      listec.value.push({ id: 4, nom: nouveau.value.nom ,urgent: nouveau.value.urgent});
      console.log(listec.value);
      nouveau.urgent="";
      nouveau.nom="";
    }
    function reset(){
      listec.value =[]
    }
    const listec = Vue.ref([{id: 1, nom: "navets",urgent:true}]);//refrence vers un objet 
    
    const nouveau = Vue.ref({ nom: "", urgent: false });
    return { listec, nouveau, button, listen,reset };
  },
  
  template: /* html */
  `
  <ul>
    
      <li v-for="c in listec" :key="c.id">
          <span class="urgent" v-if="c.urgent"><span  >{{c.nom}}</span> <strong>(urgent)</strong><span class="italic">(L'identifiant unique est {{c.id}})</span></span>
          <span v-else>{{c.nom}} <span class="italic">(L'identifiant unique est {{c.id}})</span></span>
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
