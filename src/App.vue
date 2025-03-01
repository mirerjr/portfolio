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
      class="col-span-full flex flex-col gap-4 lg:col-start-2 lg:col-end-10 xl:col-start-3 xl:col-end-6 2xl:col-start-4 2xl:col-end-6"
    >
      <h1 class="text-3xl font-bold">
        Mirer Balbino
        <span class="block leading-3 font-normal"> de Andrade Junior </span>
      </h1>
      <p class="text-xl">
        <fontAwesomeIcon icon="fa-solid fa-square" /> Desenvolvedor Full stack
      </p>
    </div>
  </header>
  <main
    class="mx-auto grid w-full max-w-3xl grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 p-4"
  >
    <BaseSection title="Sobre mim" class="order-2 col-span-2 sm:order-1">
      <p>
        Experiência no desenvolvimento de aplicações REST usando Java (Grails,
        Spring) e JavaScript (Vue.js). Proativo e metódico, busco entregar
        soluções que otimizem processos e melhorem a experiência do usuário.
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
      <BaseTimeline header="Procuradoria Geral do Município de Aracaju">
        <TimelineItem
          date="06/2023 - Hoje"
          content="Analista de Sistemas Pleno (SergipeTec)"
        />
        <TimelineItem
          date="12/2020 - 06/2023"
          content="Desenvolvedor (Procuradoria)"
        />
      </BaseTimeline>
      <BaseTimeline header="Instituto Federal de Sergipe (IFS)">
        <TimelineItem date="2019" content="Trainee - suporte" />
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
