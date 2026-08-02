<script setup>
import { ref } from 'vue'

const valores = ref([
  {
    id: 1,
    titulo: 'Acesso livre',
    descricao: 'Qualquer aluno matriculado pode retirar livros, sem burocracia excessiva.',
  },
  {
    id: 2,
    titulo: 'Incentivo à leitura',
    descricao: 'Programação cultural constante para aproximar os alunos dos livros.',
  },
  {
    id: 3,
    titulo: 'Comunidade',
    descricao: 'Espaço pensado para estudo em grupo e trocas entre alunos.',
  },
])

const linhaDoTempo = ref([
  { ano: '2008', texto: 'Fundação da biblioteca, com acervo inicial de 400 livros.' },
  { ano: '2015', texto: 'Reforma do espaço físico e ampliação da área de estudo.' },
  { ano: '2020', texto: 'Início do catálogo digital e empréstimos informatizados.' },
  { ano: '2026', texto: 'Lançamento do portal online da biblioteca.' },
])

const contato = ref({
  endereco: 'Rua das Escolas, 123 — Centro',
  horario: 'Segunda a sexta, 7h às 17h',
  email: 'biblioteca@escolasaber.edu.br',
})
</script>

<template>
  <div class="sobre">
    <section class="intro">
      <h1>A Biblioteca Escola Saber</h1>
      <p>
        Desde 2008, oferecemos um espaço acolhedor para leitura, estudo e troca de conhecimento
        entre os alunos da nossa escola.
      </p>
    </section>

    <section class="secao">
      <h2>Nossos valores</h2>
      <div class="valores">
        <article v-for="v in valores" :key="v.id" class="valor-card">
          <span class="valor-card__icone">{{ v.icone }}</span>
          <h3>{{ v.titulo }}</h3>
          <p>{{ v.descricao }}</p>
        </article>
      </div>
    </section>

    <section class="secao">
      <h2>Nossa história</h2>
      <ol class="linha-tempo">
        <li v-for="item in linhaDoTempo" :key="item.ano">
          <span class="linha-tempo__ano">{{ item.ano }}</span>
          <span class="linha-tempo__texto">{{ item.texto }}</span>
        </li>
      </ol>
    </section>

    <section class="secao secao--contato">
      <h2>Visite a biblioteca</h2>
      <div class="contato">
        <div class="contato__item">
          <span class="contato__rotulo">Endereço</span>
          <span>{{ contato.endereco }}</span>
        </div>
        <div class="contato__item">
          <span class="contato__rotulo">Horário</span>
          <span>{{ contato.horario }}</span>
        </div>
        <div class="contato__item">
          <span class="contato__rotulo">E-mail</span>
          <span>{{ contato.email }}</span>
        </div>
      </div>
      <RouterLink to="/parcerias" class="botao">Ver nossas parcerias</RouterLink>
    </section>
  </div>
</template>

<style scoped>
.sobre {
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
  color: #1e293b;
}

.intro {
  background: linear-gradient(180deg, #1e3a5f, #14273f);
  color: white;
  padding: 48px 24px;
  text-align: center;
}

.intro__selo {
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  padding: 4px 14px;
  border-radius: 999px;
  font-size: 0.8rem;
  margin-bottom: 14px;
}

.intro h1 {
  font-size: 1.8rem;
  margin: 0 0 10px;
}

.intro p {
  max-width: 560px;
  margin: 0 auto;
  color: #cbd5e1;
  font-size: 0.95rem;
}

.secao {
  max-width: 900px;
  margin: 0 auto;
  padding: 36px 24px;
}

.secao h2 {
  font-size: 1.2rem;
  color: #1e3a5f;
  margin-bottom: 18px;
}

.valores {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.valor-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.valor-card__icone {
  font-size: 1.4rem;
}

.valor-card h3 {
  font-size: 0.95rem;
  margin: 8px 0 4px;
}

.valor-card p {
  font-size: 0.82rem;
  color: #64748b;
  margin: 0;
}

.linha-tempo {
  list-style: none;
  margin: 0;
  padding: 0;
  border-left: 2px solid #e2e8f0;
}

.linha-tempo li {
  position: relative;
  padding: 0 0 20px 24px;
  font-size: 0.88rem;
}

.linha-tempo li::before {
  content: '';
  position: absolute;
  left: -7px;
  top: 4px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #4f9dff;
  border: 2px solid white;
  box-shadow: 0 0 0 2px #4f9dff;
}

.linha-tempo__ano {
  display: block;
  font-weight: 700;
  color: #1e3a5f;
  font-size: 0.8rem;
}

.linha-tempo__texto {
  color: #475569;
}

.secao--contato {
  background: #f8fafc;
  border-radius: 16px;
  text-align: center;
}

.contato {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  margin-bottom: 24px;
}

.contato__item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 0.88rem;
}

.contato__rotulo {
  font-size: 0.7rem;
  text-transform: uppercase;
  color: #94a3b8;
  letter-spacing: 0.03em;
}

.botao {
  display: inline-block;
  background: #4f9dff;
  color: white;
  text-decoration: none;
  padding: 10px 22px;
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 600;
  transition: transform 0.15s ease;
}

.botao:hover {
  transform: translateY(-1px);
}

@media (max-width: 640px) {
  .intro h1 {
    font-size: 1.4rem;
  }
}
</style>
