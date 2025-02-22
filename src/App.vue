<script setup>
import BaseSection from "./components/BaseSection.vue";
</script>

<template>
  <header class="flex flex-col gap-6">
    <div>
      <h1 class="font-bold">
        Mirer Balbino
        <span class="block font-normal leading-1">
          de Andrade Junior
        </span>
      </h1>
    </div>
    <p class="text-xl">[] Desenvolvedor Full stack</p>
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
        <ul>
          <li>
            []
            <a href="https://github.com/mirerjr">@mirerjr</a>
          </li>
          <li>
            []
            <a href="https://www.linkedin.com/in/mirer-balbino">
              mirer-balbino
            </a>
          </li>
          <li>
            []
            <a href="mailto:mirer.balbino@gmail.com">
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
            <span>[]</span>
          </header>
          <p>
            Sistema para gerenciamento e acompanhamento das linhas de transporte
            escolar, para uso pela prefeitura e pelos estudantes
          </p>
        </article>
        <article>
          <header>
            <h3>Support Tickets</h3>
            <span>[]</span>
          </header>
          <p>Gestão de tickets de suporte que...</p>
        </article>
        <article>
          <header>
            <h3>GuardMyPdf</h3>
            <span>[]</span>
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
              []
              <div>
                <span>06/2023 - Hoje</span>
                <p>Analista de Sistemas Pleno (SergipeTec)</p>
              </div>
            </li>
            <li>
              []
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
              []
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
              []
              <div>
                <span>2020-2023</span>
                <p>Tecnólogo em Análise e Desenvolvimento de sistemas</p>
              </div>
            </li>
            <li>
              []
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
  h1 {
    font-size: var(--text-3xl);
  }
  h2 {
    font-size: var(--text-xl);
    font-weight: bold;
  }
  h3 {
    font-size: var(--text-xl);
    font-weight: 600;
  }
  h4 {
    font-size: var(--text-lg);  
  }
}
</style>
