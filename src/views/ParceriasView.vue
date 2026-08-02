<script setup>
import { ref } from 'vue'

const parcerias = ref([
  {
    id: 1,
    nome: 'Editora Saber Mais',
    tipo: 'Doação de acervo',
    descricao: 'Fornece livros didáticos e paradidáticos para renovação do acervo.',
  },
  {
    id: 2,
    nome: 'Prefeitura Municipal',
    tipo: 'Apoio institucional',
    descricao: 'Suporte estrutural e manutenção do espaço físico da biblioteca.',
  },
  {
    id: 3,
    nome: 'ONG Ler é Crescer',
    tipo: 'Projetos educacionais',
    descricao: 'Organiza oficinas de leitura e contação de histórias mensais.',
  },
])
</script>

<template>
  <div class="parcerias">
    <header class="parcerias__cabecalho">
      <h1>Parcerias</h1>
      <p>Instituições e empresas que apoiam a Biblioteca Escola Saber.</p>
    </header>

    <div class="parcerias__grade">
      <article v-for="p in parcerias" :key="p.id" class="parceria-card">
        <span class="parceria-card__tipo">{{ p.tipo }}</span>
        <h2>{{ p.nome }}</h2>
        <p>{{ p.descricao }}</p>
      </article>
    </div>

    <p v-if="parcerias.length === 0" class="parcerias__vazio">
      Nenhuma parceria cadastrada no momento.
    </p>
  </div>
</template>

<style scoped>
.parcerias {
  padding: 32px 20px;
  max-width: 960px;
  margin: 0 auto;
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
}

.parcerias__cabecalho h1 {
  color: #1e3a5f;
  margin-bottom: 4px;
}

.parcerias__cabecalho p {
  color: #64748b;
  margin-top: 0;
}

.parcerias__grade {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
  margin-top: 24px;
}

.parceria-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.parceria-card__tipo {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #2f5d8c;
  background: #eaf1fb;
  padding: 3px 10px;
  border-radius: 999px;
  margin-bottom: 10px;
}

.parceria-card h2 {
  font-size: 1.05rem;
  margin: 0 0 6px;
  color: #1e293b;
}

.parceria-card p {
  font-size: 0.85rem;
  color: #64748b;
  margin: 0;
}

.parcerias__vazio {
  text-align: center;
  color: #94a3b8;
  margin-top: 40px;
}
</style>
