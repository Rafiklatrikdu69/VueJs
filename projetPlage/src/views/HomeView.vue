<script setup>
import {useDestination} from "@/services/DestinationService.js"
import {ref} from "vue"
import DestinationCard from '../components/DestinationCard.vue'

let dest = ref(null);


const destinationService = useDestination() 


destinationService.getDestinations().then(
  (data)=>{
      dest.value = data;
  }
)

 


</script>

<template>
  <div id="destinations" v-if="dest">
    
    <DestinationCard
      v-for="destination in dest"
      :key="destination.id"
      :dest="destination"
    />

  </div>

</template>



<style scoped>
img {
  max-width: 230px;
}
#destinations {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
</style>
