<template>
  <button>
    <slot />
  </button>
</template>

<script setup></script>

<style scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: inherit;
  padding: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #e9cfcf;
  border-radius: 50%;
  transition: 0.15s;
}
</style>
