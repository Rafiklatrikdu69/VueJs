<script setup>
//les imports
import { ref,  watchEffect } from 'vue'
import { defineProps } from 'vue';
import {useDestination} from "@/services/DestinationService.js"
let destination = ref(null)
const props = defineProps(['id'])

const destinationService = useDestination()
destinationService.getDestinationById(props.id).then(dest=>{
  destination.value = dest
})
watchEffect (()=>{
  destinationService.getDestinationById(props.id).then(dest=>{
  destination.value = dest
})
  .catch((error)=>{console.error(error)})
})
</script>

<template>
 <!-- affiche le nom  -->
  <h1>{{destination.name}}</h1>
  <div class="destination-details" v-if="destination">
    {{ destination.description }}
    <div id="destination">
      <!-- affiche l'image -->
        <img :src="`/src/assets/images/${destination.image}`" alt="">
    </div>
  </div>
</template>
<style scoped>
/* Destination Details */
.destination-details {
  display: flex;
  gap: 30px;
  align-items: start;
  flex-direction: row-reverse;
}
.destination-details img {
  border-radius: 4px;
  border: 3px solid white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
</style>