<script setup>
//page not found
</script>

<template>
  
<h2>Oops, we couldn't find that page. Try going</h2>
<router-link  :to="{name:'home'}">
    <h2>home</h2>
 
</router-link>

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
