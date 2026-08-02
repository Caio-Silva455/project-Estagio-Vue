<script setup>
import AppMenu from './components/AppMenu.vue'
</script>

<template>
  <div class="layout">
    <AppMenu />
    <main class="layout__conteudo">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
  width: 100%;
  background: #f1f5f9;
}

.layout__conteudo {
  flex: 1;
  min-width: 0;
  overflow-x: hidden;
  background: #f1f5f9;
}
</style>
