export default {
  setup() {
    const button = Vue.ref("");

    function listen(event) {
      if (event.target.tagName === "BUTTON")
        button.value = event.target.textContent;
      console.log(button.value);
      console.log(nouveau.value);
      listec.value.push({ id: 4, nom: nouveau.value.nom ,urgent: nouveau.value.urgent});
      console.log(listec.value);
    }
    function reset(){
        listec.value =[]
    }
    const listec = Vue.ref([{id: 1, nom: "navets",urgent:false}]);

    const nouveau = Vue.ref({ nom: "", urgent: false });
    return { listec, nouveau, button, listen,reset };
  },
  template: `<ul>
    <li v-for="c in listec" :key="c.id">
    {{c.nom}} {{c.urgent}}</li>
    </ul> 
    <label> Ajouter un article : </label>
    <input v-model.lazy.trim="nouveau.nom" />
    <button @click="listen">Ajouter </button>
    <label>
<input type="checkbox" v-model="nouveau.urgent" />
urgent</label>
<p>Vous souhaitez ajouter: {{ nouveau.nom }}
<strong v-if="nouveau.urgent">(urgent)</strong>
</p>
<button @click="reset">Reset</button>`,
};
