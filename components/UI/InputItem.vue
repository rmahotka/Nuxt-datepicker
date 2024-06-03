<script setup>
// const model = defineModel();
const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <input
    type="text"
    :value="props.modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  />
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
