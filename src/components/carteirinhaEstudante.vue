<script setup>
import { computed } from 'vue'

const props = defineProps({
  nome: { type: String, required: true },
  instituicao: { type: String, default: 'Biblioteca Escola Saber' },
  curso: { type: String, default: '' },
  matricula: { type: String, required: true },
  foto: { type: String, default: '' }, // URL da foto; se vazio, mostra iniciais
  validade: { type: String, required: true }, // formato livre, ex: "12/2026"
  situacao: { type: String, default: 'ATIVO' }, // ATIVO | INATIVO | PENDENTE
})

const iniciais = computed(() =>
  props.nome
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join(''),
)

const corSituacao = computed(
  () =>
    ({
      ATIVO: '#1f9d55',
      INATIVO: '#c0392b',
      PENDENTE: '#e0a800',
    })[props.situacao] || '#6b7280',
)
</script>

<template>
  <div class="carteirinha">
    <header class="carteirinha__topo">
      <div class="carteirinha__instituicao">
        <span class="carteirinha__logo">📚</span>
        <strong>{{ instituicao }}</strong>
      </div>
      <span class="carteirinha__situacao" :style="{ backgroundColor: corSituacao }">
        {{ situacao }}
      </span>
    </header>

    <div class="carteirinha__corpo">
      <div class="carteirinha__foto">
        <img v-if="foto" :src="foto" :alt="`Foto de ${nome}`" />
        <span v-else class="carteirinha__iniciais">{{ iniciais }}</span>
      </div>

      <div class="carteirinha__dados">
        <h2 class="carteirinha__nome">{{ nome }}</h2>
        <p v-if="curso" class="carteirinha__curso">{{ curso }}</p>

        <dl class="carteirinha__lista">
          <div>
            <dt>Matrícula</dt>
            <dd>{{ matricula }}</dd>
          </div>
          <div>
            <dt>Validade</dt>
            <dd>{{ validade }}</dd>
          </div>
        </dl>
      </div>

      <div class="carteirinha__qr" aria-hidden="true">
        <!-- decorativo, sem codificação real -->
        <div class="carteirinha__qr-grid">
          <span v-for="n in 25" :key="n" class="carteirinha__qr-cel"></span>
        </div>
      </div>
    </div>

    <footer class="carteirinha__rodape">
      <slot name="rodape"> Documento de uso interno — não constitui identificação civil </slot>
    </footer>
  </div>
</template>

<style scoped>
.carteirinha {
  --primaria: #1e3a5f;
  --secundaria: #f4f7fb;
  width: 340px;
  border-radius: 16px;
  overflow: hidden;
  background: white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
  border: 1px solid #e2e8f0;
}

.carteirinha__topo {
  background: var(--primaria);
  color: white;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.carteirinha__instituicao {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
}

.carteirinha__logo {
  font-size: 1.1rem;
}

.carteirinha__situacao {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 3px 10px;
  border-radius: 999px;
  color: white;
}

.carteirinha__corpo {
  padding: 16px;
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 12px;
  background: var(--secundaria);
}

.carteirinha__foto {
  width: 72px;
  height: 88px;
  border-radius: 8px;
  overflow: hidden;
  background: var(--primaria);
  display: flex;
  align-items: center;
  justify-content: center;
}

.carteirinha__foto img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carteirinha__iniciais {
  color: white;
  font-size: 1.4rem;
  font-weight: 700;
}

.carteirinha__dados {
  min-width: 0;
}

.carteirinha__nome {
  font-size: 1rem;
  margin: 0 0 2px;
  color: var(--primaria);
  line-height: 1.2;
}

.carteirinha__curso {
  font-size: 0.8rem;
  color: #64748b;
  margin: 0 0 8px;
}

.carteirinha__lista {
  display: flex;
  gap: 16px;
  margin: 0;
}

.carteirinha__lista dt {
  font-size: 0.65rem;
  text-transform: uppercase;
  color: #94a3b8;
  letter-spacing: 0.03em;
}

.carteirinha__lista dd {
  margin: 0;
  font-size: 0.85rem;
  font-weight: 600;
  color: #1e293b;
}

.carteirinha__qr {
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
}

.carteirinha__qr-grid {
  width: 56px;
  height: 56px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 2px;
  background: white;
  padding: 4px;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}

.carteirinha__qr-cel {
  background: var(--primaria);
  border-radius: 1px;
}
.carteirinha__qr-cel:nth-child(odd) {
  opacity: 0.15;
}
.carteirinha__qr-cel:nth-child(3n) {
  opacity: 0.6;
}
.carteirinha__qr-cel:nth-child(7n) {
  opacity: 0;
}

.carteirinha__rodape {
  padding: 8px 16px;
  font-size: 0.65rem;
  color: #94a3b8;
  text-align: center;
  border-top: 1px dashed #e2e8f0;
}
</style>
