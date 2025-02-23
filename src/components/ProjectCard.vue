<script setup>
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
    class="cursor-pointer rounded-lg border border-main"
    :class="{
      'col-start-1 col-end-2 row-span-2 row-start-1': isExtended,
      'col-start-2': !isExtended,
    }"
    @click="handleExtend()"
  >
    <header class="flex items-center justify-between px-2">
      <h3 class="text-lg font-semibold">{{ title }}</h3>
      <fontAwesomeIcon v-if="isExtended" icon="fa-solid fa-external-link" />
      <fontAwesomeIcon v-else icon="fa-solid fa-arrow-down-short-wide" />
    </header>
    <p
      class="max-w-sm p-2"
      :class="{ 'p-2': isExtended, 'truncate px-2 py-1': !isExtended }"
    >
      <slot>
        {{ description }}
      </slot>
    </p>
  </article>
</template>
