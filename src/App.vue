<script setup>
import BaseSection from "./components/BaseSection.vue";
</script>

<template>
  <div class="flex flex-col gap-12">
    <header class="m-4 flex flex-col gap-4">
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
    <main class="mx-auto flex max-w-3xl flex-col gap-8 px-4">
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
            <li>
              <a
                href="https://github.com/mirerjr"
                class="flex items-center gap-2"
              >
                <fontAwesomeIcon icon="fa-brands fa-github" class="w-5" />
                @mirerjr
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mirer-balbino"
                class="flex items-center gap-2"
              >
                <fontAwesomeIcon icon="fa-brands fa-linkedin" class="w-5" />
                mirer-balbino
              </a>
            </li>
            <li>
              <a
                href="mailto:mirer.balbino@gmail.com"
                class="flex items-center gap-2"
              >
                <fontAwesomeIcon icon="fa-solid fa-envelope" class="w-5" />
                mirer.balbino@gmail.com
              </a>
            </li>
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
      <div class="flex flex-col justify-between gap-8 sm:flex-row sm:gap-2">
        <BaseSection title="Experiências">
          <article class="flex flex-col gap-4 pl-2">
            <h3 class="font-semibold">
              Procuradoria Geral do Município de Aracaju
            </h3>
            <ul class="flex flex-col gap-4">
              <li class="flex items-baseline gap-2">
                <fontAwesomeIcon icon="fa-regular fa-circle" />
                <div>
                  <span class="text-sm">06/2023 - Hoje</span>
                  <p>Analista de Sistemas Pleno (SergipeTec)</p>
                </div>
              </li>
              <li class="flex items-baseline gap-2">
                <fontAwesomeIcon icon="fa-regular fa-circle" />
                <div>
                  <span class="text-sm">12/2020 - 06/2023</span>
                  <p>Desenvolvedor (Procuradoria)</p>
                </div>
              </li>
            </ul>
          </article>
          <article class="flex flex-col gap-4 pl-2">
            <h3 class="font-semibold">Instituto Federal de Sergipe (IFS)</h3>
            <ul class="flex flex-col gap-4">
              <li class="flex items-baseline gap-2">
                <fontAwesomeIcon icon="fa-regular fa-circle" />
                <div>
                  <span class="text-sm">2019</span>
                  <p>Trainee - suporte</p>
                </div>
              </li>
            </ul>
          </article>
        </BaseSection>
        <BaseSection title="Escolaridade">
          <article class="flex flex-col gap-4 pl-2">
            <h3 class="font-semibold">Instituto Federal de Sergipe (IFS)</h3>
            <ul class="flex flex-col gap-4">
              <li class="flex items-baseline gap-2">
                <fontAwesomeIcon icon="fa-regular fa-circle" />
                <div>
                  <span class="text-sm">2020-2023</span>
                  <p class="block">Tecnólogo em Análise e</p>
                  <p>Desenvolvimento de sistemas</p>
                </div>
              </li>
              <li class="flex items-baseline gap-2">
                <fontAwesomeIcon icon="fa-regular fa-circle" />
                <div>
                  <span class="text-sm">2017-2019</span>
                  <p>Técnico em Informática</p>
                </div>
              </li>
            </ul>
          </article>
        </BaseSection>
      </div>
    </main>
  </div>
</template>
