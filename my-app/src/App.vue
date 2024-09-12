<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import Timeline from './components/Timeline.vue'
</script>

<template>
 
  <HelloWorld msg="Vite + Vue" />
  <Timeline />
</template>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css";
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
