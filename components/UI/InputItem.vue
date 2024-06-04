<script setup lang="ts">
const model = defineModel();
</script>

<template>
  <input type="text" v-model="model" />
</template>

<style scoped>
input {
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #acacac;
  outline: none;
}

input:focus-visible {
  border: 2px solid #803e80;
}
</style>
