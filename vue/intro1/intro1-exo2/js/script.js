import Horloge from "./horloge.js";
const App = Vue.createApp({
  components: {
    Horloge,
  },
  template: "<Horloge :mode=0 /> <Horloge :mode=1 /><Horloge :mode=2 />",
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
