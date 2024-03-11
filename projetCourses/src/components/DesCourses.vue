<script setup>
import { ref } from 'vue'
const props = defineProps(['nom', 'urgent', 'id'])
const emit = defineEmits(['modifier', 'supprimer'])
const modifiable = ref(false)
const nouveauNom = ref(props.nom)
const nouveauUrgent = ref(props.urgent)
const id = ref(props.id)
function modifier() {
  modifiable.value = true
}
function save() {
  modifiable.value = false
  emit('modifier', nouveauNom.value, nouveauUrgent.value, id.value)
}
function supprimer() {
  emit('supprimer', id.value)
}
</script>

<template>
  <span>
    <span v-if="modifiable"
      ><button @click="save">Save</button>
      <span><input type="checkbox" v-model="nouveauUrgent" /> (urgent)</span>
      <input type="text" v-model="nouveauNom" />
    </span>
    <span v-else>
      <span :class="{ urgent: urgent }">{{ nom }}</span>
      <strong v-if="urgent">(urgent)</strong>
      <span class="italic">(L'identifiant unique est {{ id }})</span>

      <span><button @click="modifier">Modifier</button></span>
    </span>
    <span><button @click="supprimer">Supprimer</button></span>
  </span>
</template>
