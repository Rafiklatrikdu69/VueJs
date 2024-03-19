<script setup>
const props = defineProps(['dest','id'])
console.log('les props : ' + props.dest.name+" image"+props.dest.image)
</script>
<template>
  <router-link :to="{name:'destination',params:{id:props.dest.id}}">
  <div class="destination">
  <h2>{{ props.dest.name }}</h2>

  <div>
     <img :src="`src/assets/images/${props.dest.image}`" alt="">
  </div>
  </div>
</router-link>
</template>
<style scoped>
.destination {
  padding: 0.3rem;
  margin: 0.3rem;
  text-align: center;
  border: 1px solid #39495c;
}
.destination img {
  max-width: 230px;
}
</style>
