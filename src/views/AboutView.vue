<template>
  <HelloWorld />
  <div class="about">
    <h1>这是一个关于页面</h1>
  </div>
</template>

<script setup>
import HelloWorld from '../components/HelloWorld.vue'
</script>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
