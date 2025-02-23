<script setup>
defineProps({
  header: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <article class="flex flex-col gap-4">
    <slot name="header">
      <h3 class="font-semibold">{{ header }}</h3>
    </slot>
    <ul class="flex flex-col gap-4">
      <slot></slot>
    </ul>
  </article>
</template>
