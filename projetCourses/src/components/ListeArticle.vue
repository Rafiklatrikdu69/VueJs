<script setup>
import DesCourses from '@/components/DesCourses.vue'
import { ref } from 'vue'

const listec = ref([])
const nouveau = ref({ nom: '', urgent: false })

const button = ref('')

let nouvelId = ref(-1)
function listen(event) {
  if (event.target.tagName === 'BUTTON') button.value = event.target.textContent
  // console.log(button.value);
  // console.log(nouveau.value);
  nouvelId.value += 1
  listec.value.push({ id: nouvelId.value, ...nouveau.value })
  console.log(listec.value)
  nouveau.value.urgent = false
  nouveau.value.nom = ''
}
function reset() {
  listec.value = []
  nouvelId.value = 0
}
function modifier(nouveauNom, nouveauUrgent, nouveauID) {
  for (let i = 0; i < listec.value.length; i++) {
    if (listec.value[i].id == nouveauID) {
      listec.value[i] = { id: nouveauID, nom: nouveauNom, urgent: nouveauUrgent }
    }
  }
}

function supprimer(idRecherche) {
  for (let i = 0; i < listec.value.length; i++) {
    if (listec.value[i].id == idRecherche) {
      listec.value.splice(i, 1)
    }
  }
}
</script>

<template>
  <ul>
    <li v-for="c in listec" :key="c.id">
      <DesCourses
        :nom="c.nom"
        :urgent="c.urgent"
        :id="c.id"
        @modifier="modifier"
        @supprimer="supprimer"
      />
    </li>
  </ul>
  <span class="form-flex">
  <label for="article"> Ajouter un article :</label>
  <input id="article" v-model.lazy.trim="nouveau.nom" />
  <button @click="listen">Ajouter</button>
  <label>
    <input type="checkbox" v-model="nouveau.urgent" />
    urgent</label
  >
</span>
  <p>
    Vous souhaitez ajouter: {{ nouveau.nom }}
    <strong v-if="nouveau.urgent">(urgent)</strong>
  </p>
  <button @click="reset">Reset</button>`
</template>

<style scoped>
.form-flex{
    display: flex;
    flex-direction: column;
    width: 200px;
    gap :10px;
}
</style>
