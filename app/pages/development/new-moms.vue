<script setup lang="ts">
definePageMeta({
  layout: 'default'
});
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-deep-purple-950">
    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5 }"
        >
          <div class="text-center">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
              New Moms (0-2yr old Moms)
            </h1>
            <p class="text-xl text-neutral-600 dark:text-pink-200 max-w-2xl mx-auto">
              Support and guidance for the early years of motherhood.
            </p>
          </div>
        </Motion>
      </div>
    </section>

    <!-- Content Section -->
    <section class="px-4 sm:px-6 lg:px-8 py-20">
      <div class="mx-auto max-w-7xl">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.2 }"
        >
          <div class="grid grid-cols-1 gap-8">
            <ContentCard>
              <template #title>First Years of Motherhood</template>
              <template #description>
                Navigate the challenges and joys of your baby's first two years.
              </template>
            </ContentCard>
          </div>
        </Motion>
      </div>
    </section>
  </div>
</template>
