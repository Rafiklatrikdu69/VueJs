<script setup>
import { RouterView } from 'vue-router'
import TheNav from './components/TheNav.vue'
</script>

<template>
  <header>
    <TheNav />//le composant nav
  </header>

  <main>
    <RouterView />//pour les redirections
  </main>
</template>
<style>
a,
a:visited {
  color: #2c3e50;
}
main {
  margin: 0 auto;
  max-width: 960px;
}
</style>
