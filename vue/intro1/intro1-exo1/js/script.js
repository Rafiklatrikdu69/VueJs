// const App = Vue.createApp({
//     template: "<p>Nouveau point de vueJs</p> <p>Quoicoubeh !</p>"
//     });
//     App.mount("#myApp");



    // le composant est écrit dans counter.js
import Counter from "./counter.js";
const App = Vue.createApp({
    // composants utilisables dans le template
    components: {
        Counter
    },
    template: '<Counter :start="5"/> ',
});
App.mount("#myApp");
