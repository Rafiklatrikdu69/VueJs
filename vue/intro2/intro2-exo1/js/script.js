import Courses from "./courses.js";
const App = Vue.createApp({
  components: {
    Courses,
  },
  template: '<Courses />',//les : ou v-bind evalue l'expression comme ca index-1 ne sera pas traduit comme une chaine ordinaire 
});
App.mount("#monHorloge");
