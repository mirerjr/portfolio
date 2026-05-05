<script setup>
import { computed, ref } from "vue";
import { trackEvent } from "../utils/analytics";
import CaseCard from "./CaseCard.vue";

const cases = [
  {
    id: "air",
    title: "Engine AIR",
    subtitle: "Risco parametrizável e simulação",
    summary:
      "Engine parametrizável de análise de risco para contexto financeiro.",
    problem:
      "A análise de risco precisava ser padronizada, simulável e rastreável em um contexto financeiro com critérios de conformidade.",
    solution:
      "Desenvolvi uma engine parametrizável para cálculo automático de risco, permitindo simulação, cálculo persistido e demonstrativo detalhado dos fatores aplicados.",
    highlights: [
      "Critérios de análise configuráveis.",
      "Cálculo avulso e persistido.",
      "Demonstrativo dos fatores aplicados ao resultado.",
      "Aplicação em base de clientes e contexto regulatório.",
    ],
    stack: "TypeScript · NestJS · SQL Server · Regras de negócio",
  },
  {
    id: "pldft",
    title: "PLDFT / Antifraude",
    subtitle: "Esteira operacional e evidências",
    summary:
      "Esteira operacional para análise de compliance, antifraude e evidências.",
    problem:
      "O processo de análise dependia de tratativas manuais entre compliance, operação e atendimento, dificultando rastreabilidade e padronização do fluxo.",
    solution:
      "Implementei um módulo para estruturar a esteira de análise, controle de status, coleta de evidências e solicitação de documentos, reduzindo a dependência de fluxos manuais entre áreas.",
    highlights: [
      "Fluxo operacional com estados explícitos.",
      "Coleta e organização de evidências.",
      "Solicitação estruturada de documentos.",
      "Maior rastreabilidade entre compliance, operação e atendimento.",
    ],
    stack: "TypeScript · NestJS · Vue.js · SQL Server · Compliance",
  },
  {
    id: "audit",
    title: "Auditoria de logs",
    subtitle: "Multi-tenant, RabbitMQ e DLQ",
    summary:
      "Plataforma SaaS multi-tenant para centralização e auditoria de eventos.",
    problem:
      "Diferentes sistemas precisavam centralizar eventos operacionais com rastreabilidade, isolamento por cliente e capacidade de ingestão assíncrona.",
    solution:
      "Desenvolvi uma plataforma multi-tenant para auditoria de logs, com ingestão assíncrona via RabbitMQ, estratégia de retry e tratamento de falhas com DLX/DLQ.",
    highlights: [
      "Arquitetura multi-tenant.",
      "Processamento assíncrono com RabbitMQ.",
      "Retry e isolamento de falhas com DLX/DLQ.",
      "Capacidade de ingestão validada em até 500 RPS.",
    ],
    stack: "TypeScript · NestJS · RabbitMQ · MongoDB · Multi-tenant",
  },
  {
    id: "mni",
    title: "Integração MNI",
    subtitle: "Tribunais, processos e automação",
    summary:
      "Integração com tribunais para incorporação e automação de processos judiciais.",
    problem:
      "O acompanhamento de processos judiciais dependia de integração com diferentes tribunais, assinatura digital e centralização das informações processuais no sistema interno.",
    solution:
      "Implementei integrações via Modelo Nacional de Interoperabilidade, configurando comunicação com tribunais, assinatura digital e automação de etapas do fluxo processual.",
    highlights: [
      "Integração com múltiplos tribunais.",
      "Uso do padrão MNI para interoperabilidade judicial.",
      "Configuração de assinatura digital com SHODO.",
      "Incorporação de mais de 100.000 processos judiciais à base.",
    ],
    stack: "Groovy · Grails · Java · SOAP · PostgreSQL · MNI",
  },
];

const selectedCaseId = ref("air");
const panelId = "case-panel";

const selectedCase = computed(() =>
  cases.find((caseItem) => caseItem.id === selectedCaseId.value),
);

function selectCase(caseItem) {
  if (caseItem.id === selectedCaseId.value) return;

  const previousCase = selectedCaseId.value;
  selectedCaseId.value = caseItem.id;
  trackEvent("case-select", {
    case: caseItem.id,
    previous_case: previousCase,
    title: caseItem.title,
  });
}
</script>

<template>
  <div
    class="grid gap-4 md:grid-cols-[minmax(260px,300px)_minmax(0,1fr)] md:items-start md:gap-5"
  >
    <div
      role="tablist"
      aria-label="Cases profissionais"
      class="order-2 grid content-start gap-3 md:order-1"
    >
      <CaseCard
        v-for="caseItem in cases"
        :key="caseItem.id"
        :active="caseItem.id === selectedCaseId"
        :controls-id="panelId"
        :title="caseItem.title"
        :description="caseItem.subtitle"
        @select="selectCase(caseItem)"
      />
    </div>

    <article
      :id="panelId"
      role="tabpanel"
      tabindex="-1"
      :aria-labelledby="`case-panel-title-${selectedCase.id}`"
      class="order-1 overflow-hidden rounded-md border border-main bg-white shadow-[0_10px_30px_rgb(38_54_87_/_0.08)] outline-none focus-visible:ring-2 focus-visible:ring-main focus-visible:ring-offset-2 md:order-2"
    >
      <header class="border-b border-zinc-200 px-6 py-5 sm:px-7">
        <h3
          :id="`case-panel-title-${selectedCase.id}`"
          class="text-2xl font-semibold"
        >
          {{ selectedCase.title }}
        </h3>
        <p class="mt-2 text-base leading-relaxed text-zinc-700">
          {{ selectedCase.summary }}
        </p>
      </header>

      <div class="grid gap-5 px-6 py-6 sm:px-7">
        <section>
          <h4 class="mb-1.5 font-semibold">Problema</h4>
          <p class="leading-relaxed text-zinc-700">
            {{ selectedCase.problem }}
          </p>
        </section>

        <section>
          <h4 class="mb-1.5 font-semibold">Solução</h4>
          <p class="leading-relaxed text-zinc-700">
            {{ selectedCase.solution }}
          </p>
        </section>

        <section>
          <h4 class="mb-1.5 font-semibold">Destaques</h4>
          <ul class="grid list-disc gap-1 pl-5 leading-relaxed text-zinc-700">
            <li v-for="highlight in selectedCase.highlights" :key="highlight">
              {{ highlight }}
            </li>
          </ul>
        </section>

        <section>
          <h4 class="mb-1.5 font-semibold">Stack</h4>
          <p class="leading-relaxed text-zinc-700">
            {{ selectedCase.stack }}
          </p>
        </section>
      </div>
    </article>
  </div>
</template>
