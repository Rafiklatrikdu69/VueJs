import Horloge from "./horloge.js";
const App = Vue.createApp({
  components: {
    Horloge,
  },
  template: '<div v-for="index in 3" :key="index"><Horloge v-bind:mode=index-1 /> </div>',//les : ou v-bind evalue l'expression comme ca index-1 ne sera pas traduit comme une chaine ordinaire 
});
App.mount("#monHorloge");
