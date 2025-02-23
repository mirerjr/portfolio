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
    <a :href="link" class="flex items-center gap-2">
      <fontAwesomeIcon :icon="icon" class="w-5" />
      {{ label }}
    </a>
  </li>
</template>
