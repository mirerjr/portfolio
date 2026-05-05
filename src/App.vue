<script setup>
import BaseSection from "./components/BaseSection.vue";
import CasesSection from "./components/CasesSection.vue";
import PersonalLink from "./components/PersonalLink.vue";

const experience = [
  {
    company: "Del.tech",
    period: "07/2025 - Hoje",
    role: "Desenvolvedor Backend Pleno",
    description:
      "Sistemas financeiros, compliance, antifraude, auditoria de logs e automações operacionais.",
  },
  {
    company: "Procuradoria Geral do Município de Aracaju",
    period: "2020 - 2025",
    role: "Desenvolvedor / Analista de Sistemas",
    description:
      "Sistemas jurídicos, integrações com tribunais, automação processual e refatorações críticas.",
  },
];
</script>

<template>
  <header
    class="mx-auto grid w-full max-w-4xl gap-8 px-5 py-12 sm:grid-cols-[1fr_auto] sm:items-start sm:py-14"
  >
    <div class="flex min-w-0 flex-col gap-4">
      <h1 class="text-4xl leading-none font-bold">
        Mirer Balbino
        <span class="mt-1 block font-normal">de Andrade Junior</span>
      </h1>

      <div class="flex flex-col gap-1">
        <p class="flex items-center gap-2 text-2xl">
          <fontAwesomeIcon icon="fa-solid fa-square" class="size-3" />
          Desenvolvedor Backend Pleno
        </p>

        <p class="text-base text-zinc-800">
          Java · Spring Boot · TypeScript · NestJS · Sistemas de negócio
        </p>
      </div>
    </div>

    <BaseSection title="Contato" class="sm:min-w-56">
      <ul class="flex flex-row flex-wrap gap-2 gap-x-4 sm:flex-col">
        <PersonalLink
          link="https://github.com/mirerjr"
          icon="fa-brands fa-github"
          label="@mirerjr"
          channel="github"
          placement="header"
        />
        <PersonalLink
          link="https://www.linkedin.com/in/mirer-balbino"
          icon="fa-brands fa-linkedin"
          label="mirer-balbino"
          channel="linkedin"
          placement="header"
        />
        <PersonalLink
          link="mailto:mirer.balbino@gmail.com"
          icon="fa-solid fa-envelope"
          label="mirer.balbino@gmail.com"
          channel="email"
          placement="header"
        />
      </ul>
    </BaseSection>
  </header>

  <main>
    <section class="bg-zinc-200">
      <div class="mx-auto w-full max-w-4xl px-5 py-11">
        <BaseSection title="Sobre mim">
          <p class="max-w-3xl text-lg leading-relaxed">
            Desenvolvedor Backend Pleno com mais de 5 anos de experiência em
            sistemas financeiros e jurídicos. Atuo na construção de APIs,
            integrações, automações operacionais e regras de negócio complexas.
          </p>
        </BaseSection>
      </div>
    </section>

    <section class="mx-auto w-full max-w-5xl px-5 py-12">
      <BaseSection title="Cases profissionais">
        <CasesSection />
      </BaseSection>
    </section>

    <section class="bg-zinc-200">
      <div class="mx-auto w-full max-w-4xl px-5 py-11">
        <BaseSection title="Experiência">
          <div class="grid gap-7 sm:grid-cols-2">
            <article
              v-for="item in experience"
              :key="item.company"
              class="flex max-w-sm flex-col gap-2"
            >
              <h3 class="text-xl font-semibold">{{ item.company }}</h3>
              <p class="text-sm text-zinc-700">{{ item.period }}</p>
              <p class="font-semibold">{{ item.role }}</p>
              <p class="leading-relaxed">{{ item.description }}</p>
            </article>
          </div>
        </BaseSection>
      </div>
    </section>

    <footer class="mx-auto flex w-full max-w-4xl justify-center px-5 py-9">
      <div class="flex flex-col items-center gap-3">
        <h2 class="text-xl font-semibold">Vamos conversar?</h2>
        <ul class="flex flex-row flex-wrap justify-center gap-2 gap-x-5">
          <PersonalLink
            link="https://www.linkedin.com/in/mirer-balbino"
            icon="fa-brands fa-linkedin"
            label="LinkedIn"
            channel="linkedin"
            placement="footer"
          />
          <PersonalLink
            link="mailto:mirer.balbino@gmail.com"
            icon="fa-solid fa-envelope"
            label="E-mail"
            channel="email"
            placement="footer"
          />
        </ul>
      </div>
    </footer>
  </main>
</template>
