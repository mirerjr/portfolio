<script setup>
import BaseSection from "./components/BaseSection.vue";
import BaseTimeline from "./components/BaseTimeline.vue";
import PersonalLink from "./components/PersonalLink.vue";
import TimelineItem from "./components/TimelineItem.vue";
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
        <div class="flex gap-4">
          <article class="rounded-lg border border-main">
            <header class="flex items-center justify-between border-b p-2">
              <h3 class="text-lg font-semibold">Transportae</h3>
              <fontAwesomeIcon icon="fa-solid fa-external-link" />
            </header>
            <p class="max-w-sm p-2">
              Sistema para gerenciamento e acompanhamento das linhas de
              transporte escolar, para uso pela prefeitura e pelos estudantes
            </p>
          </article>
          <div class="flex flex-col gap-4">
            <article class="cursor-pointer rounded-lg border border-main">
              <header class="flex items-center justify-between px-2">
                <h3 class="text-lg font-semibold">Support Tickets</h3>
                <fontAwesomeIcon icon="fa-solid fa-arrow-down-short-wide" />
              </header>
              <p class="max-w-sm px-2 py-1">
                Gestão de tickets de suporte que...
              </p>
            </article>
            <article class="cursor-pointer rounded-lg border border-main">
              <header class="flex items-center justify-between px-2">
                <h3 class="text-lg font-semibold">GuardMyPdf</h3>
                <fontAwesomeIcon icon="fa-solid fa-arrow-down-short-wide" />
              </header>
              <p class="max-w-sm px-2 py-1">
                Aplicação que adiciona senha aos PDFs...
              </p>
            </article>
          </div>
        </div>
      </BaseSection>
      <div class="flex flex-col gap-8 sm:grid grid-cols-2 sm:gap-2">
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
            <TimelineItem
              date="2019"
              content="Trainee - suporte"
            />
          </BaseTimeline>
        </BaseSection>
        <BaseSection title="Escolaridade">
          <BaseTimeline header="Instituto Federal de Sergipe (IFS)">
            <TimelineItem
              date="2020-2023"
              content="Tecnólogo em Análise e Desenvolvimento de sistemas"
            />
            <TimelineItem
              date="2017-2019"
              content="Técnico em Informática"
            />
          </BaseTimeline>
        </BaseSection>
      </div>
    </main>
  </div>
</template>
