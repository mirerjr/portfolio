<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="flex flex-col gap-4">
    <h2 class="text-xl font-bold">{{ title }}</h2>
    <slot></slot>
  </section>
</template>
