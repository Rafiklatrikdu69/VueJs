<script setup>
import {ref} from "vue";
let dest = ref(null)
import {useDestination} from "@/services/DestinationService.js"
const destinationService = useDestination()
destinationService.getDestinations().then(destinations=>{
    dest.value = destinations.filter(destination => destination.id !== 3);
})



</script>

<template>
  <nav>

    <!-- les routers link -->
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/destination/3">Hawaii , my favourite destination</RouterLink>
    <RouterLink v-for="destination in dest" :key="destination.id" :to="`/destination/${destination.id}`">
      {{ destination.name }}
    </RouterLink>
  </nav>
</template>
<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 0;
  padding: 30px;
  background: #2c3e50;
  color: white;
  display: flex;
  align-items: center;
  border-bottom: 5px solid #4e6c71;
  z-index: 2;
}
nav a {
  display: inline-block;
  margin-right: 20px;
  color: white;
  opacity: 0.7;
  text-decoration: none;
  font-weight: bold;
}
nav a.active,
nav a:hover {
  opacity: 1;
}
</style>
