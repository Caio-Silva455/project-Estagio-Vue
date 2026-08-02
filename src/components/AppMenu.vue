<script setup>
import { ref } from 'vue'

const recolhido = ref(false)

const links = [
  { rota: '/', texto: 'Início' },
  { rota: '/sobre', texto: 'Sobre' },
  { rota: '/parcerias', texto: 'Parcerias' },
  { rota: '/carteirinha', texto: 'Carteirinha de Estudante' },
]
</script>

<template>
  <aside class="sidebar" :class="{ 'sidebar--recolhida': recolhido }">
    <div class="sidebar__topo">
      <RouterLink to="/" class="sidebar__marca">
        <span class="sidebar__logo"></span>
        <strong v-if="!recolhido">Biblioteca Escola Saber</strong>
      </RouterLink>
    </div>

    <nav class="sidebar__nav">
      <RouterLink
        v-for="link in links"
        :key="link.rota"
        :to="link.rota"
        class="sidebar__link"
        active-class="sidebar__link--ativo"
        :title="recolhido ? link.texto : null"
      >
        <span class="sidebar__link-icone">{{ link.icone }}</span>
        <span v-if="!recolhido" class="sidebar__link-texto">{{ link.texto }}</span>
      </RouterLink>
    </nav>

    <div class="sidebar__rodape" v-if="!recolhido">
      <span>Biblioteca Escola Saber</span>
      <small>v1.0</small>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  --sidebar-bg: #14273f;
  --sidebar-bg-alt: #1e3a5f;
  --sidebar-accent: #4f9dff;
  width: 240px;
  min-width: 240px;
  height: 100vh;
  position: sticky;
  top: 0;
  background: linear-gradient(180deg, var(--sidebar-bg-alt), var(--sidebar-bg));
  color: white;
  display: flex;
  flex-direction: column;
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
  transition:
    width 0.2s ease,
    min-width 0.2s ease;
  box-sizing: border-box;
}

.sidebar--recolhida {
  width: 68px;
  min-width: 68px;
}

.sidebar__topo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.sidebar__marca {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  text-decoration: none;
  min-width: 0;
}

.sidebar__marca strong {
  font-size: 0.85rem;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sidebar__logo {
  font-size: 1.3rem;
  flex-shrink: 0;
}

.sidebar__toggle {
  background: rgba(255, 255, 255, 0.06);
  border: none;
  color: white;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  cursor: pointer;
  flex-shrink: 0;
  font-size: 0.85rem;
  transition: background 0.15s ease;
}

.sidebar__toggle:hover {
  background: rgba(255, 255, 255, 0.14);
}

.sidebar__nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 14px 10px;
  flex: 1;
}

.sidebar__link {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #cbd5e1;
  text-decoration: none;
  padding: 10px 12px;
  border-radius: 10px;
  font-size: 0.88rem;
  font-weight: 500;
  transition:
    background 0.15s ease,
    color 0.15s ease;
  white-space: nowrap;
  overflow: hidden;
}

.sidebar__link:hover {
  background: rgba(255, 255, 255, 0.08);
  color: white;
}

.sidebar__link:focus-visible {
  outline: 2px solid var(--sidebar-accent);
  outline-offset: 2px;
}

.sidebar__link--ativo {
  background: var(--sidebar-accent);
  color: white;
  font-weight: 700;
}

.sidebar__link-icone {
  font-size: 1rem;
  flex-shrink: 0;
  width: 20px;
  text-align: center;
}

.sidebar__link-texto {
  overflow: hidden;
  text-overflow: ellipsis;
}

.sidebar__rodape {
  padding: 14px;
  font-size: 0.7rem;
  color: #94a3b8;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 2px;
}
</style>
