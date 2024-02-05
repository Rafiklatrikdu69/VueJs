import Horloge from "./horloge.js";
const App = Vue.createApp({
  components: {
    Horloge,
  },
  template: '<div v-for="index in 3" :key="index"><Horloge :mode=index-1 /> </div>',
});
App.mount("#monHorloge");

// le composant est écrit dans counter.js
// import Counter from "./counter.js";
// const App = Vue.createApp({
//     // composants utilisables dans le template
//     components: {
//         Counter
//     },
//     template: '<Counter :start="5"/> ',
// });
// App.mount("#myApp");
