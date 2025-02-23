<script setup>
import { ref } from "vue";
import BaseSection from "./components/BaseSection.vue";
import BaseTimeline from "./components/BaseTimeline.vue";
import PersonalLink from "./components/PersonalLink.vue";
import ProjectCard from "./components/ProjectCard.vue";
import TimelineItem from "./components/TimelineItem.vue";

const projects = ref([
  {
    title: "Transportae",
    description:
      "Sistema para gerenciamento e acompanhamento das linhas de transporte escolar, para uso pela prefeitura e pelos estudantes",
    link: "https://github.com/mirerjr/transportae-ui",
    isExtended: true,
  },
  {
    title: "Support Tickets",
    description: "Gestão de tickets de suporte que",
    isExtended: false,
  },
  {
    title: "GuardMyPdf",
    description: "Aplicação que adiciona senha aos PDFs",
    isExtended: false,
  },
]);

function handleExtendedProject(title) {
  projects.value.forEach((project) => {
    if (project.title === title) {
      project.isExtended = true;
    } else {
      project.isExtended = false;
    }
  });
}
</script>

<template>
  <div class="grid h-screen grid-cols-12 grid-rows-[auto_1fr] gap-y-8 p-4">
    <header
      class="col-span-full flex flex-col gap-4 lg:col-start-2 lg:col-end-10 xl:col-start-3 xl:col-end-6 2xl:col-start-4 2xl:col-end-6"
    >
      <div>
        <h1 class="text-3xl font-bold">
          Mirer Balbino
          <span class="block leading-3 font-normal"> de Andrade Junior </span>
        </h1>
      </div>
      <p class="text-xl">
        <fontAwesomeIcon icon="fa-solid fa-square" /> Desenvolvedor Full stack
      </p>
    </header>
    <main
      class="col-span-full mx-auto flex max-w-3xl flex-col gap-8 md:col-start-2 md:col-end-12 lg:col-start-3 lg:col-end-11"
    >
      <section
        class="flex flex-col gap-8 sm:flex-row sm:justify-between sm:gap-4"
      >
        <BaseSection title="Sobre mim" class="max-w-md">
          <p>
            Experiência no desenvolvimento de aplicações REST usando Java
            (Grails, Spring) e JavaScript (Vue.js). Proativo e metódico, busco
            entregar soluções que otimizem processos e melhorem a experiência do
            usuário.
          </p>
        </BaseSection>
        <BaseSection title="Links" class="order-first sm:order-last">
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
      </section>
      <BaseSection title="Meus projetos">
        <div class="grid gap-4">
          <ProjectCard
            v-for="project in projects"
            :key="project.title"
            :title="project.title"
            :description="project.description"
            :link="project.link"
            :modelValue="project.isExtended"
            @extended="(title) => handleExtendedProject(title)"
          />
        </div>
      </BaseSection>
      <div class="flex grid-cols-2 flex-col gap-8 sm:grid sm:gap-2">
        <BaseSection title="Experiências">
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
        <BaseSection title="Escolaridade">
          <BaseTimeline header="Instituto Federal de Sergipe (IFS)">
            <TimelineItem
              date="2020-2023"
              content="Tecnólogo em Análise e Desenvolvimento de sistemas"
            />
            <TimelineItem date="2017-2019" content="Técnico em Informática" />
          </BaseTimeline>
        </BaseSection>
      </div>
    </main>
  </div>
</template>
