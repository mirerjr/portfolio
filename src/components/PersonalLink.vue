<script setup>
import { trackEvent } from "../utils/analytics";
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
      class="link-border-underline relative box-border flex w-fit items-center gap-x-2 rounded-sm pr-0.5"
      @click="trackEvent('personal-link-click', label)"
      @keydown.enter.prevent="trackEvent('personal-link-click', label)"
    >
      <fontAwesomeIcon :icon="icon" class="w-5" />
      {{ label }}
    </a>
  </li>
</template>

<style scoped>
@reference "../style.css";

.link-border-underline {
  @apply border-1 border-transparent transition-colors duration-150 hover:border-main focus:border-1 focus:border-main focus:outline-0;
  @apply after:absolute after:bottom-0 after:left-0 after:w-0 after:border-b-1 after:border-main after:duration-300 after:ease-out hover:after:w-full focus:after:w-full;
}
</style>
