<script setup lang="ts">
defineProps<{
  title: string;
  description?: string;
  icon?: string;
}>();
</script>

<template>
  <div
    class="my-6 overflow-hidden rounded-2xl border-2 border-dashed border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/30 p-8 text-center transition-all duration-300 hover:border-amber-400 dark:hover:border-amber-600 hover:shadow-lg"
  >
    <div
      class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400"
    >
      <UIcon :name="icon || 'i-heroicons-wrench-screwdriver'" class="h-7 w-7" />
    </div>
    <h3 class="font-display text-lg font-bold text-amber-900 dark:text-amber-100">{{ title }}</h3>
    <p v-if="description" class="mt-2 text-sm text-amber-700 dark:text-amber-300">
      {{ description }}
    </p>
    <div class="mt-6">
      <span
        class="inline-flex items-center gap-2 rounded-full bg-amber-200/50 dark:bg-amber-800/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400"
      >
        <span class="relative flex h-2 w-2">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"
          ></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
        </span>
        Coming Soon
      </span>
    </div>
  </div>
</template>
