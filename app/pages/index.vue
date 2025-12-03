<script setup lang="ts">
definePageMeta({
  layout: 'coming-soon'
});

useHead({
  title: 'Momix Squad - Coming Soon',
  meta: [
    {
      name: 'description',
      content:
        'Momix Squad is coming soon. Join us for expert guidance, supportive community, and practical resources for every mom.'
    }
  ]
});
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-teal-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 relative overflow-hidden"
  >
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary-200/40 dark:bg-primary-900/30 blur-3xl animate-float"
      />
      <div
        class="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-amber-200/30 dark:bg-amber-900/20 blur-3xl animate-float"
        style="animation-delay: -2s"
      />
      <div
        class="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-teal-200/30 dark:bg-teal-900/20 blur-3xl animate-float"
        style="animation-delay: -4s"
      />
    </div>

    <!-- Main Content -->
    <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Motion
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, ease: 'easeOut' }"
      >
        <!-- Floating Logo -->
        <div class="mb-8 flex justify-center">
          <div class="animate-float">
            <img
              src="/logo.jpeg"
              alt="Momix Squad Logo"
              class="h-32 w-auto sm:h-40 md:h-48 lg:h-56 drop-shadow-2xl"
            />
          </div>
        </div>

        <!-- Title -->
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.2 }"
        >
          <h1
            class="font-display text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl md:text-6xl lg:text-7xl mb-6"
          >
            Coming Soon
          </h1>
        </Motion>

        <!-- Subtitle -->
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.4 }"
        >
          <p
            class="text-lg sm:text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            We're working on something amazing for moms everywhere. Stay tuned!
          </p>
        </Motion>

        <!-- Decorative Elements -->
        <Motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 0.6, delay: 0.6 }"
          class="flex justify-center gap-2 mt-8"
        >
          <div
            class="h-2 w-2 rounded-full bg-primary-500 animate-pulse"
            style="animation-delay: 0s"
          />
          <div
            class="h-2 w-2 rounded-full bg-amber-500 animate-pulse"
            style="animation-delay: 0.2s"
          />
          <div
            class="h-2 w-2 rounded-full bg-teal-500 animate-pulse"
            style="animation-delay: 0.4s"
          />
        </Motion>
      </Motion>
    </div>
  </div>
</template>
