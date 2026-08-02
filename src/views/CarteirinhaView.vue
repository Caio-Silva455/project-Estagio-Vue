<script setup>
import CarteirinhaEstudante from '../components/carteirinhaEstudante.vue'
</script>

<template>
  <div class="pagina">
    <div class="galeria">
      <CarteirinhaEstudante
        nome="Maria Eduarda Souza"
        curso="Ensino Fundamental II"
        matricula="2026-00123"
        validade="12/2026"
        situacao="ATIVO"
      />

      <CarteirinhaEstudante
        nome="João Pedro Lima"
        curso="Ensino Médio"
        matricula="2025-00987"
        validade="03/2025"
        situacao="INATIVO"
      >
        <template #rodape> Cartão vencido — procure a secretaria para renovação </template>
      </CarteirinhaEstudante>
    </div>
  </div>
</template>

<style scoped>
.pagina {
  padding: 32px;
  font-family: system-ui, sans-serif;
}

.pagina h1 {
  color: #1e3a5f;
  margin-bottom: 24px;
}

.galeria {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
</style>
