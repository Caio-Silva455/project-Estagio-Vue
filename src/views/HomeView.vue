<script setup>
import { ref } from 'vue'

const estatisticas = ref([
  { valor: '3.200+', rotulo: 'Livros no acervo' },
  { valor: '540', rotulo: 'Alunos cadastrados' },
  { valor: '18', rotulo: 'Anos de história' },
])

const destaques = ref([
  {
    id: 1,
    titulo: 'Empréstimo de livros',
    descricao: 'Retire até 3 títulos por vez com prazo de 14 dias, renovável uma vez.',
  },
  {
    id: 2,
    titulo: 'Espaço de estudo',
    descricao: 'Salas silenciosas e área coletiva para trabalhos em grupo.',
  },
  {
    id: 3,
    titulo: 'Oficinas de leitura',
    descricao: 'Encontros mensais de contação de histórias e clube do livro.',
  },
])

const avisos = ref([
  {
    id: 1,
    data: '28/07',
    texto: 'Novo acervo de literatura brasileira já disponível para empréstimo.',
  },
  { id: 2, data: '15/07', texto: 'Biblioteca fecha às sextas às 16h durante o mês de agosto.' },
])
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="hero__conteudo">
        <span class="hero__selo"> Biblioteca Escola Saber</span>
        <h1>Um lugar para ler, estudar e descobrir.</h1>
        <p>
          Acervo aberto a todos os alunos, espaço de estudo e programação cultural durante o ano
          letivo.
        </p>
        <div class="hero__acoes">
          <RouterLink to="/sobre" class="botao botao--primario">Conhecer a biblioteca</RouterLink>
          <RouterLink to="/parcerias" class="botao botao--secundario">Nossas parcerias</RouterLink>
        </div>
      </div>
    </section>

    <section class="estatisticas">
      <div v-for="e in estatisticas" :key="e.rotulo" class="estatisticas__item">
        <strong>{{ e.valor }}</strong>
        <span>{{ e.rotulo }}</span>
      </div>
    </section>

    <section class="secao">
      <h2>O que oferecemos</h2>
      <div class="destaques">
        <article v-for="d in destaques" :key="d.id" class="destaque-card">
          <span class="destaque-card__icone">{{ d.icone }}</span>
          <h3>{{ d.titulo }}</h3>
          <p>{{ d.descricao }}</p>
        </article>
      </div>
    </section>

    <section class="secao secao--avisos">
      <h2>Avisos recentes</h2>
      <ul class="avisos">
        <li v-for="a in avisos" :key="a.id">
          <span class="avisos__data">{{ a.data }}</span>
          <span>{{ a.texto }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.home {
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
  color: #1e293b;
}

.hero {
  background: linear-gradient(180deg, #1e3a5f, #14273f);
  color: white;
  padding: 56px 24px;
  text-align: center;
}

.hero__conteudo {
  max-width: 640px;
  margin: 0 auto;
}

.hero__selo {
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  padding: 4px 14px;
  border-radius: 999px;
  font-size: 0.8rem;
  margin-bottom: 16px;
}

.hero h1 {
  font-size: 2rem;
  margin: 0 0 12px;
  line-height: 1.25;
}

.hero p {
  color: #cbd5e1;
  margin: 0 0 24px;
  font-size: 1rem;
}

.hero__acoes {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.botao {
  text-decoration: none;
  padding: 10px 22px;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 600;
  transition:
    transform 0.15s ease,
    opacity 0.15s ease;
}

.botao:hover {
  transform: translateY(-1px);
}

.botao--primario {
  background: #4f9dff;
  color: white;
}

.botao--secundario {
  background: rgba(255, 255, 255, 0.08);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.estatisticas {
  display: flex;
  justify-content: center;
  gap: 48px;
  padding: 32px 24px;
  flex-wrap: wrap;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

.estatisticas__item {
  text-align: center;
}

.estatisticas__item strong {
  display: block;
  font-size: 1.6rem;
  color: #1e3a5f;
}

.estatisticas__item span {
  font-size: 0.8rem;
  color: #64748b;
}

.secao {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 24px;
}

.secao h2 {
  font-size: 1.3rem;
  color: #1e3a5f;
  margin-bottom: 20px;
}

.destaques {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.destaque-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.destaque-card__icone {
  font-size: 1.5rem;
}

.destaque-card h3 {
  font-size: 1rem;
  margin: 10px 0 6px;
  color: #1e293b;
}

.destaque-card p {
  font-size: 0.85rem;
  color: #64748b;
  margin: 0;
}

.avisos {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.avisos li {
  display: flex;
  gap: 14px;
  align-items: baseline;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 12px 16px;
  font-size: 0.88rem;
}

.avisos__data {
  flex-shrink: 0;
  font-weight: 700;
  color: #4f9dff;
  font-size: 0.8rem;
}

@media (max-width: 640px) {
  .hero h1 {
    font-size: 1.5rem;
  }
}
</style>
