<script setup>
import BaseSection from "./components/BaseSection.vue";
import BaseTimeline from "./components/BaseTimeline.vue";
import PersonalLink from "./components/PersonalLink.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import TimelineItem from "./components/TimelineItem.vue";
</script>

<template>
  <header class="grid w-full grid-cols-12 p-4">
    <div
      class="col-span-full flex flex-col gap-4 lg:col-start-2 lg:col-end-10 xl:col-start-3 xl:col-end-7 2xl:col-start-4 2xl:col-end-7"
    >
      <h1 class="text-3xl font-bold">
        Mirer Balbino
        <span class="block leading-3 font-normal">de Andrade Junior</span>
      </h1>

      <div class="flex flex-col gap-1">
        <p class="text-xl font-semibold">
          <fontAwesomeIcon icon="fa-solid fa-square" />
          Desenvolvedor Backend Pleno
        </p>

        <p class="text-sm text-zinc-600">
          Java · Spring Boot · TypeScript · NestJS · Sistemas de negócio
        </p>
      </div>
    </div>
  </header>
  <main
    class="mx-auto grid w-full max-w-3xl grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 p-4"
  >
    <BaseSection title="Sobre mim" class="order-2 col-span-2 sm:order-1">
      <p>
        Desenvolvedor Backend Pleno com mais de 5 anos de experiência em
        sistemas financeiros e jurídicos. Tenho foco em APIs, integrações,
        automações operacionais e regras de negócio complexas usando Java,
        Spring Boot, TypeScript, NestJS e bancos relacionais.
      </p>
    </BaseSection>
    <BaseSection
      title="Links"
      class="order-1 col-span-2 sm:order-2 sm:col-span-1 sm:ml-auto"
    >
      <ul class="flex flex-row flex-wrap gap-1 gap-x-4 sm:flex-col">
        <PersonalLink
          link="https://github.com/mirerjr"
          icon="fa-brands fa-github"
          label="@mirerjr"
        />
        <PersonalLink
          link="https://www.linkedin.com/in/mirer-balbino"
          icon="fa-brands fa-linkedin"
          label="mirer-balbino"
        />
        <PersonalLink
          link="mailto:mirer.balbino@gmail.com"
          icon="fa-solid fa-envelope"
          label="mirer.balbino@gmail.com"
        />
      </ul>
    </BaseSection>
    <BaseSection title="Meus projetos" class="order-3 col-span-2 sm:col-span-3">
      <ProjectsSection />
    </BaseSection>
    <BaseSection title="Experiência" class="order-4 col-span-2">
      <BaseTimeline header="Del.tech">
        <TimelineItem
          date="07/2025 - Hoje"
          content="Desenvolvimento de sistemas financeiros, módulos de compliance/antifraude, engine de risco, auditoria de logs e automações operacionais."
        />
      </BaseTimeline>

      <BaseTimeline header="Procuradoria Geral do Município de Aracaju">
        <TimelineItem
          date="2020 - 2025"
          content="Desenvolvimento e evolução de sistemas jurídicos, integrações com tribunais, automação de processos, refatorações críticas e apoio técnico à equipe."
        />
      </BaseTimeline>
    </BaseSection>
    <BaseSection title="Escolaridade" class="order-5">
      <BaseTimeline header="Instituto Federal de Sergipe (IFS)">
        <TimelineItem
          date="2020-2023"
          content="Tecnólogo em Análise e Desenvolvimento de sistemas"
        />
        <TimelineItem date="2017-2019" content="Técnico em Informática" />
      </BaseTimeline>
    </BaseSection>
  </main>
</template>
