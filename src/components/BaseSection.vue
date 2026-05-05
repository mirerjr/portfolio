<script setup>
defineProps({
  id: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <section :id="id" class="flex flex-col gap-4 text-lg">
    <h2 v-if="title" class="text-2xl font-semibold">{{ title }}</h2>
    <slot></slot>
  </section>
</template>
