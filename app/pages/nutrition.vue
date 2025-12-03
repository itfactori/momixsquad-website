<script setup lang="ts">
useHead({
  title: 'Nutrition - Momix Squad'
});
</script>

<template>
  <div class="bg-white py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Nourish Your Family
        </h2>
        <p class="mt-4 text-lg text-slate-600">
          Healthy eating doesn't have to be complicated. Discover simple, nutritious recipes for you
          and your little ones.
        </p>
      </div>

      <div class="mt-16">
        <InteractivePlaceholder
          title="Food & Nutrition Content"
          description="Detailed articles, recipes, and nutritional guidance."
        />
      </div>
    </div>
  </div>
</template>
