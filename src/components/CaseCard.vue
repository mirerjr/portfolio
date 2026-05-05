<script setup>
defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  controlsId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["select"]);
</script>

<template>
  <button
    type="button"
    role="tab"
    :aria-controls="controlsId"
    :aria-selected="active"
    :aria-current="active ? 'true' : undefined"
    :aria-label="active ? `Case ativo: ${title}` : `Mostrar case ${title}`"
    class="group flex w-full flex-col items-start gap-1.5 rounded-md border px-4 py-4 text-left shadow-[0_1px_0_rgb(38_54_87_/_0.04)] transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-main focus-visible:ring-offset-2 focus-visible:outline-none"
    :class="
      active
        ? 'border-main bg-white opacity-100 ring-1 ring-main/10'
        : 'border-dashed border-main/70 bg-white/35 opacity-80 hover:border-main hover:bg-white hover:opacity-100'
    "
    @click="emit('select')"
  >
    <span class="text-lg leading-tight font-semibold">{{ title }}</span>
    <span class="text-sm leading-snug text-zinc-700">{{ description }}</span>
  </button>
</template>
