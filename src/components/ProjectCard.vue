<script setup>
import { computed } from "vue";

const emit = defineEmits(["extended"]);

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Boolean,
    required: true,
  },
  link: {
    type: String,
    required: false,
  },
});

const isExtended = defineModel({ type: Boolean, default: false });

const descriptionText = computed(() =>
  isExtended.value ? props.description : "Clique para ver mais",
);

function handleExtend() {
  if (!isExtended.value) {
    isExtended.value = true;
    emit("extended", props.title);
  } else if (props.link) {
    window.open(props.link, "_blank");
  }
}
</script>

<template>
  <article
    class="cursor-pointer rounded-lg border border-main transition duration-300 ease-in-out"
    :class="{
      'hover:-translate-y-0.5 sm:min-w-[60%]': isExtended,
      'w-full border-dashed opacity-70 select-none hover:opacity-100':
        !isExtended,
    }"
    @click="handleExtend()"
  >
    <header
      class="flex items-center justify-between px-2"
      :class="{ 'border-b py-2': isExtended }"
    >
      <h3 class="text-lg font-semibold">{{ title }}</h3>
      <fontAwesomeIcon v-if="isExtended" icon="fa-solid fa-external-link" />
      <fontAwesomeIcon v-else icon="fa-solid fa-expand" />
    </header>
    <p class="p-2" :class="{ truncate: !isExtended }">
      <slot>
        {{ descriptionText }}
      </slot>
    </p>
  </article>
</template>
