<script setup>
import { ref, TransitionGroup, nextTick, useTemplateRef } from "vue";
import ProjectCard from "./ProjectCard.vue";

const projects = ref([
  {
    title: "Transportae",
    description:
      "Sistema para gerenciamento e acompanhamento das linhas de transporte escolar, para uso pela prefeitura e pelos estudantes",
    link: "https://github.com/mirerjr/transportae-ui",
    isExpanded: true,
    class: "col-span-6 row-span-2",
  },
  {
    title: "Support Tickets",
    description: "Gestão de tickets de suporte que",
    isExpanded: false,
    class: "col-span-4",
  },
  {
    title: "GuardMyPdf",
    description: "Aplicação que adiciona senha aos PDFs",
    isExpanded: false,
    class: "col-span-4",
  },
]);

const cardsRefs = useTemplateRef("cards");
const isExpandingProject = ref(false);

async function setNextExpandedProject(title) {
  if (isExpandingProject.value) return;
  isExpandingProject.value = true;
  const nextIndex = projects.value.findIndex((p) => p.title === title);

  highlightProjectBeforeExpand(nextIndex);
  await expandSubsequentProjects(nextIndex);
  await expandProject(title);
  focusExpandedCard();
  isExpandingProject.value = false;
}

function highlightProjectBeforeExpand(index) {
  const nextExpanded = projects.value[index];
  nextExpanded.class =
    "col-span-4 bg-main text-white opacity-60 hover:!opacity-60";
}

/**
 * Expands all projects below the current one, considering that index 0
 * is the expanded project and 1 is top non-expanded project on the column
 */
async function expandSubsequentProjects(nextIndex) {
  if (nextIndex != 1) return;
  for (let i = nextIndex + 1; i < projects.value.length; i++) {
    const projectToExpand = projects.value[i];
    await expandProject(projectToExpand.title);
  }
  await new Promise((resolve) => setTimeout(resolve, 500));
}

async function expandProject(title) {
  const previousExpanded = projects.value.find((p) => p.isExpanded);
  const nextExpanded = projects.value.find((p) => p.title === title);

  previousExpanded.isExpanded = false;
  previousExpanded.class = "col-span-6 row-span-1";
  nextExpanded.class = "col-span-6 col-start-1 row-span-2";
  await new Promise((resolve) => setTimeout(resolve, 300));

  nextExpanded.isExpanded = true;
  previousExpanded.class = "col-span-4";
  projects.value.sort((project, _) => (project.isExpanded ? -1 : 1));
  await nextTick();
}

/**
 * Utilises the focus() and props (by defineExpose) to focus  
 * the current expanded ProjectCard after the animation
 */
function focusExpandedCard() {
  const currentTitle = projects.value.find((p) => p.isExpanded).title;
  const currentRef = cardsRefs.value?.find((card) => {
    return card.props.title === currentTitle;
  });
  currentRef?.focus();
}
</script>

<template>
  <TransitionGroup
    tag="div"
    class="grid grid-cols-10 gap-2 sm:gap-4"
    name="projects"
    move-class="transition-transform duration-150 ease-out will-change-transform"
  >
    <ProjectCard
      v-for="project in projects"
      :key="project.title"
      :title="project.title"
      :description="project.description"
      :link="project.link"
      :expanded="project.isExpanded"
      :class="project.class"
      ref="cards"
      @expand="(title) => setNextExpandedProject(title)"
    />
  </TransitionGroup>
</template>
