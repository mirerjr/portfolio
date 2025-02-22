<script setup>
import BaseSection from "./components/BaseSection.vue";
</script>

<template>
  <header class="flex flex-col gap-6">
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
  <main>
    <section class="flex">
      <BaseSection title="Sobre mim">
        <p>
          Experiência no desenvolvimento de aplicações REST usando Java (Grails,
          Spring) e JavaScript (Vue.js). Proativo e metódico, busco entregar
          soluções que otimizem processos e melhorem a experiência do usuário.
        </p>
      </BaseSection>
      <BaseSection title="Contatos">
        <ul class="flex flex-col gap-2">
          <li>
            <a href="https://github.com/mirerjr" class="flex gap-2">
              <fontAwesomeIcon icon="fa-brands fa-github" />
              @mirerjr
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mirer-balbino"
              class="flex gap-2"
            >
              <fontAwesomeIcon icon="fa-brands fa-linkedin" />
              mirer-balbino
            </a>
          </li>
          <li>
            <a href="mailto:mirer.balbino@gmail.com" class="flex gap-2">
              <fontAwesomeIcon icon="fa-solid fa-envelope" />
              mirer.balbino@gmail.com
            </a>
          </li>
        </ul>
      </BaseSection>
    </section>
    <BaseSection title="Meus projetos">
      <div class="flex">
        <article>
          <header>
            <h3>Transportae</h3>
            <fontAwesomeIcon icon="fa-solid fa-external-link" />
          </header>
          <p>
            Sistema para gerenciamento e acompanhamento das linhas de transporte
            escolar, para uso pela prefeitura e pelos estudantes
          </p>
        </article>
        <article>
          <header>
            <h3>Support Tickets</h3>
            <fontAwesomeIcon icon="fa-solid fa-arrow-down-short-wide" />
          </header>
          <p>Gestão de tickets de suporte que...</p>
        </article>
        <article>
          <header>
            <h3>GuardMyPdf</h3>
            <fontAwesomeIcon icon="fa-solid fa-arrow-down-short-wide" />
          </header>
          <p>Aplicação que adiciona senha aos PDFs...</p>
        </article>
      </div>
    </BaseSection>
    <div class="flex">
      <BaseSection title="Experiências">
        <article>
          <h4>Procuradoria Geral do Município de Aracaju (PGMA)</h4>
          <ul>
            <li>
              <fontAwesomeIcon icon="fa-regular fa-circle" />
              <div>
                <span>06/2023 - Hoje</span>
                <p>Analista de Sistemas Pleno (SergipeTec)</p>
              </div>
            </li>
            <li>
              <fontAwesomeIcon icon="fa-regular fa-circle" />
              <div>
                <span>12/2020 - 06/2023</span>
                <p>Desenvolvedor (PGMA)</p>
              </div>
            </li>
          </ul>
        </article>
        <article>
          <h4>Instituto Federal de Sergipe (IFS)</h4>
          <ul>
            <li>
              <fontAwesomeIcon icon="fa-regular fa-circle" />
              <div>
                <span>2019</span>
                <p>Trainee - suporte</p>
              </div>
            </li>
          </ul>
        </article>
      </BaseSection>
      <BaseSection title="Escolaridade">
        <article>
          <h4>Instituto Federal de Sergipe (IFS)</h4>
          <ul>
            <li>
              <fontAwesomeIcon icon="fa-regular fa-circle" />
              <div>
                <span>2020-2023</span>
                <p>Tecnólogo em Análise e Desenvolvimento de sistemas</p>
              </div>
            </li>
            <li>
              <fontAwesomeIcon icon="fa-regular fa-circle" />
              <div>
                <span>2017-2019</span>
                <p>Técnico em Informática</p>
              </div>
            </li>
          </ul>
        </article>
      </BaseSection>
    </div>
  </main>
</template>

<style>
@layer base {
  h3 {
    font-size: var(--text-xl);
    font-weight: 600;
  }
  h4 {
    font-size: var(--text-lg);
  }
}
</style>
