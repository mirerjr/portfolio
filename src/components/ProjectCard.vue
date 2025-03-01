<script setup>
import { computed } from "vue";

const emit = defineEmits(["expand"]);

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  expanded: {
    type: Boolean,
    default: false,
  },
  link: {
    type: String,
    required: false,
  },
});

const descriptionText = computed(() =>
  props.expanded ? props.description : "Clique para ver mais",
);

function handleExpand() {
  if (!props.expanded) {
    emit("expand", props.title);
  } else if (props.link) {
    window.open(props.link, "_blank");
  }
}
</script>

<template>
  <article
    class="cursor-pointer rounded-lg border border-main will-change-transform backface-hidden hover:transition hover:duration-300 hover:ease-in-out"
    :class="{
      'hover:-translate-y-0.5': props.expanded,
      'border-dashed opacity-70 select-none hover:opacity-100': !props.expanded,
    }"
    @click="handleExpand()"
  >
    <header
      class="flex items-center justify-between px-2"
      :class="{ 'border-b py-2': props.expanded }"
    >
      <h3 class="truncate text-lg font-semibold">{{ title }}</h3>
      <fontAwesomeIcon v-if="props.expanded" icon="fa-solid fa-external-link" />
    </header>
    <p class="p-2" :class="{ truncate: !props.expanded }">
      <slot>
        {{ descriptionText }}
      </slot>
    </p>
  </article>
</template>
