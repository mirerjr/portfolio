<script setup>
defineProps({
  link: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <li>
    <a
      :href="link"
      target="_blank"
      rel="noopener"
      class="relative box-border flex w-fit items-center gap-2 after:absolute after:bottom-0 after:left-0.5 after:w-0 after:border-b-2 after:border-main after:duration-300 after:ease-out hover:after:w-full"
    >
      <fontAwesomeIcon :icon="icon" class="w-5" />
      {{ label }}
    </a>
  </li>
</template>
