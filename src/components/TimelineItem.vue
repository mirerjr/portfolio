<script setup>
defineProps({
  date: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "fa-regular fa-circle",
  },
  content: {
    type: String,
    required: false,
  }
})
</script>

<template>
  <li class="flex items-baseline gap-2">
    <fontAwesomeIcon :icon="icon" />
    <div>
      <span class="text-sm">{{ date }}</span>
      <slot name="content">
        <p>{{ content }}</p>
      </slot>
    </div>
  </li>
</template>
