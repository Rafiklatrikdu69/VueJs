import listeArticle from "../listeArticle.js";
const App = Vue.createApp({
  components: {
    listeArticle,
  },
  template: '<listeArticle />',//les : ou v-bind evalue l'expression comme ca index-1 ne sera pas traduit comme une chaine ordinaire 
});
App.mount("#monHorloge");
