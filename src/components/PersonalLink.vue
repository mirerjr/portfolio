<script setup>
import { trackEvent } from "../utils/analytics";

const props = defineProps({
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
  channel: {
    type: String,
    required: true,
  },
  placement: {
    type: String,
    required: true,
  },
});

function handleClick() {
  trackEvent("contact-click", {
    channel: props.channel,
    placement: props.placement,
  });
}
</script>

<template>
  <li>
    <a
      :href="link"
      target="_blank"
      rel="noopener"
      class="relative box-border flex w-fit items-center gap-x-2 rounded-sm border border-transparent px-1 py-0.5 transition-colors duration-150 after:absolute after:bottom-0 after:left-0 after:w-0 after:border-b after:border-current after:duration-300 after:ease-out hover:border-current hover:after:w-full focus-visible:border-current focus-visible:ring-2 focus-visible:ring-main/30 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:after:w-full"
      @click="handleClick"
    >
      <fontAwesomeIcon :icon="icon" class="w-5" />
      {{ label }}
    </a>
  </li>
</template>
