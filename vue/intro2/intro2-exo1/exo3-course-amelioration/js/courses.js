

export default {
  props:["nom","urgent","id"],
  emits:["modifier","supprimer"],
  setup(props, ctx) {
      const modifiable = Vue.ref(false);
      const nouveauNom = Vue.ref(props.nom);
      const nouveauUrgent = Vue.ref(props.urgent);
      const id = Vue.ref(props.id);
      function modifier(){
        modifiable.value = true
        
      }
    function save(){
      modifiable.value = false
      ctx.emit("modifier",nouveauNom.value,nouveauUrgent.value,id.value)
    }
    function supprimer(){
      ctx.emit("supprimer",id.value)
    }
      return {modifiable,modifier,save,nouveauNom,nouveauUrgent,id,supprimer}
  },
  
  template: /* html */
  `<span>
  <span v-if="modifiable"><button  @click="save">Save</button>
      <span ><input type="checkbox" v-model="nouveauUrgent"/> (urgent)</span>
        <input type="text" v-model="nouveauNom"/>
      </span>
     <span v-else> <span  :class="{urgent : urgent}">{{nom}}</span> 
      <strong v-if="urgent" >(urgent)</strong>
      <span class="italic">(L'identifiant unique est {{id}})</span>
      
      <span><button  @click="modifier">Modifier</button></span>
      
      </span>
      <span><button @click="supprimer">Supprimer</button></span>
   </span>
   `,
};
