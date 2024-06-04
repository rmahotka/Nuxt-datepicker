<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
  </nav>
  <main>
    <slot />
  </main>
</template>

<script setup></script>

<style scoped>
nav {
  width: 100%;
  background-color: #3f0958;
  display: flex;
  gap: 20px;
  font-weight: bold;
  padding: 15px 10px;
  box-sizing: border-box;
}
a {
  color: #fff;
  text-decoration: none;
  font-size: 24px;
  border: 3px solid;
  padding: 6px 15px;
  border-radius: 12px;
}
a:hover {
  background-color: #fff;
  color: #000;
}
main {
  padding: 0 20px;
}
</style>
