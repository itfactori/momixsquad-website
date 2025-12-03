<script setup lang="ts">
defineProps<{
  title: string;
  description?: string;
}>();
</script>

<template>
  <div
    class="my-8 overflow-hidden rounded-xl border-2 border-dashed border-amber-300 bg-amber-50 p-8 text-center"
  >
    <div
      class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600"
    >
      <UIcon name="i-heroicons-wrench-screwdriver" class="h-6 w-6" />
    </div>
    <h3 class="font-display text-lg font-bold text-amber-900">{{ title }}</h3>
    <p v-if="description" class="mt-2 text-sm text-amber-700">{{ description }}</p>
    <div class="mt-6">
      <p class="font-mono text-xs font-medium uppercase tracking-wider text-amber-500">
        Content Pending
      </p>
      <p class="mt-2 text-sm italic text-amber-600/70">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua."
      </p>
    </div>
  </div>
</template>
