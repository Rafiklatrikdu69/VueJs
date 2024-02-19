import Horloges from "../horloges.js";

const App = Vue.createApp({
  components: {
    Horloges
  },
  template: '<Horloges/>',//les : ou v-bind evalue l'expression comme ca index-1 ne sera pas traduit comme une chaine ordinaire 
});
App.mount("#monHorloge");
