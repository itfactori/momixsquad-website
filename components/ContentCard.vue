<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  icon?: string;
  to?: string;
}>();
</script>

<template>
  <div
    class="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md hover:ring-momix-200"
  >
    <div
      v-if="icon"
      class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-momix-50 text-momix-600 group-hover:bg-momix-100 group-hover:text-momix-700"
    >
      <UIcon :name="icon" class="h-6 w-6" />
    </div>
    <h3 class="font-display text-lg font-semibold text-slate-900 group-hover:text-momix-700">
      <NuxtLink :to="to || '#'">
        <span class="absolute inset-0" />
        {{ title }}
      </NuxtLink>
    </h3>
    <p class="mt-2 flex-1 text-sm text-slate-600">
      {{ description }}
    </p>
    <div
      class="mt-4 flex items-center text-sm font-medium text-momix-600 group-hover:text-momix-700"
    >
      Learn more <UIcon name="i-heroicons-arrow-right" class="ml-1 h-4 w-4" />
    </div>
  </div>
</template>
