<script setup lang="ts">
const props = defineProps<{
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  badge?: string;
}>();

// Random image for hero
const heroImages = [
  '/hero/random-1.avif',
  '/hero/random-2.avif',
  '/hero/random-3.avif',
  '/hero/random-4.avif',
  '/hero/random-5.avif',
  '/hero/random-6.avif',
  '/hero/random-7.avif',
  '/hero/random-8.avif',
  '/hero/random-9.avif'
];

const randomImage = computed(
  () => props.image || heroImages[Math.floor(Math.random() * heroImages.length)]
);
</script>

<template>
  <section class="relative min-h-[90vh] overflow-hidden bg-neutral-50 dark:bg-neutral-950">
    <!-- Animated Background Mesh -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Gradient orbs -->
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

      <!-- Mesh pattern overlay -->
      <div class="absolute inset-0 bg-mesh-light dark:bg-mesh-dark opacity-50" />

      <!-- Gradient overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-50/50 dark:via-neutral-950/50 to-neutral-50 dark:to-neutral-950"
      />
    </div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex min-h-[90vh] items-center py-20 lg:py-28">
        <div class="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center w-full">
          <!-- Content -->
          <Motion
            :initial="{ opacity: 0, x: -40 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.8, ease: 'easeOut' }"
            class="sm:text-center lg:col-span-6 lg:text-left"
          >
            <div class="space-y-8">
              <!-- Badge -->
              <Motion
                :initial="{ opacity: 0, scale: 0.9 }"
                :animate="{ opacity: 1, scale: 1 }"
                :transition="{ duration: 0.5, delay: 0.2 }"
              >
                <div
                  class="inline-flex items-center gap-2 rounded-full bg-primary-100 dark:bg-primary-900/50 px-4 py-2 text-sm font-semibold text-primary-700 dark:text-primary-300 ring-1 ring-primary-200 dark:ring-primary-800"
                >
                  <span class="relative flex h-2 w-2">
                    <span
                      class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"
                    ></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                  </span>
                  {{ badge || 'For Every Mom' }}
                </div>
              </Motion>

              <!-- Title -->
              <Motion
                :initial="{ opacity: 0, y: 20 }"
                :animate="{ opacity: 1, y: 0 }"
                :transition="{ duration: 0.6, delay: 0.3 }"
              >
                <h1
                  class="font-display text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl"
                >
                  <span class="block">{{ title }}</span>
                </h1>
              </Motion>

              <!-- Subtitle -->
              <Motion
                :initial="{ opacity: 0, y: 20 }"
                :animate="{ opacity: 1, y: 0 }"
                :transition="{ duration: 0.6, delay: 0.4 }"
              >
                <p
                  class="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-xl lg:mx-0 lg:max-w-none"
                >
                  {{ subtitle }}
                </p>
              </Motion>

              <!-- CTA Buttons -->
              <Motion
                v-if="ctaText"
                :initial="{ opacity: 0, y: 20 }"
                :animate="{ opacity: 1, y: 0 }"
                :transition="{ duration: 0.6, delay: 0.5 }"
              >
                <div class="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  <UButton
                    :to="ctaLink || '#'"
                    color="primary"
                    size="xl"
                    variant="solid"
                    class="group shadow-xl shadow-primary-500/25 hover:shadow-2xl hover:shadow-primary-500/30 transition-all duration-300"
                  >
                    {{ ctaText }}
                    <template #trailing>
                      <UIcon
                        name="i-heroicons-arrow-right"
                        class="h-5 w-5 transition-transform group-hover:translate-x-1"
                      />
                    </template>
                  </UButton>

                  <UButton
                    v-if="secondaryCtaText"
                    :to="secondaryCtaLink || '#'"
                    color="neutral"
                    size="xl"
                    variant="outline"
                    class="group border-neutral-300 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-700"
                  >
                    {{ secondaryCtaText }}
                    <template #trailing>
                      <UIcon
                        name="i-heroicons-play-circle"
                        class="h-5 w-5 transition-transform group-hover:scale-110"
                      />
                    </template>
                  </UButton>
                </div>
              </Motion>

              <!-- Trust indicators -->
              <Motion
                :initial="{ opacity: 0, y: 20 }"
                :animate="{ opacity: 1, y: 0 }"
                :transition="{ duration: 0.6, delay: 0.6 }"
              >
                <div
                  class="flex flex-wrap items-center gap-6 pt-4 text-sm text-neutral-600 dark:text-neutral-400 sm:justify-center lg:justify-start"
                >
                  <div class="flex items-center gap-2">
                    <div class="flex -space-x-2">
                      <div
                        class="h-8 w-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 ring-2 ring-white dark:ring-neutral-900"
                      />
                      <div
                        class="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 ring-2 ring-white dark:ring-neutral-900"
                      />
                      <div
                        class="h-8 w-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 ring-2 ring-white dark:ring-neutral-900"
                      />
                    </div>
                    <span class="font-medium">Join 1000+ moms</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <UIcon name="i-heroicons-star-solid" class="h-5 w-5 text-amber-500" />
                    <UIcon name="i-heroicons-star-solid" class="h-5 w-5 text-amber-500" />
                    <UIcon name="i-heroicons-star-solid" class="h-5 w-5 text-amber-500" />
                    <UIcon name="i-heroicons-star-solid" class="h-5 w-5 text-amber-500" />
                    <UIcon name="i-heroicons-star-solid" class="h-5 w-5 text-amber-500" />
                    <span class="ml-1 font-medium">4.9/5 rating</span>
                  </div>
                </div>
              </Motion>
            </div>
          </Motion>

          <!-- Image/Visual -->
          <Motion
            :initial="{ opacity: 0, scale: 0.9, x: 40 }"
            :animate="{ opacity: 1, scale: 1, x: 0 }"
            :transition="{ duration: 0.8, delay: 0.3, ease: 'easeOut' }"
            class="relative mt-16 lg:col-span-6 lg:mt-0"
          >
            <div class="relative mx-auto max-w-lg lg:max-w-none">
              <!-- Decorative elements -->
              <div
                class="absolute -left-4 -top-4 -z-10 h-72 w-72 rounded-3xl bg-gradient-to-br from-primary-300/40 to-primary-400/30 dark:from-primary-700/30 dark:to-primary-600/20 blur-2xl"
              />
              <div
                class="absolute -bottom-4 -right-4 -z-10 h-72 w-72 rounded-3xl bg-gradient-to-br from-teal-300/40 to-teal-400/30 dark:from-teal-700/30 dark:to-teal-600/20 blur-2xl"
              />

              <!-- Main image container -->
              <div
                class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-100 to-teal-100 dark:from-primary-900/50 dark:to-teal-900/50 shadow-2xl ring-1 ring-neutral-200/50 dark:ring-neutral-700/50 transition-all duration-500 hover:shadow-warm-xl"
              >
                <div class="aspect-[4/3] w-full overflow-hidden">
                  <img
                    :src="randomImage"
                    alt="Happy mother and child"
                    class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <!-- Overlay gradient -->
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent"
                  />
                </div>

                <!-- Floating stat cards -->
                <Motion
                  :initial="{ opacity: 0, y: 20 }"
                  :animate="{ opacity: 1, y: 0 }"
                  :transition="{ duration: 0.5, delay: 0.8 }"
                  class="absolute bottom-4 left-4 rounded-2xl border border-white/30 dark:border-neutral-700/50 bg-white/90 dark:bg-neutral-900/90 p-4 shadow-xl backdrop-blur-sm"
                >
                  <div class="flex items-center gap-3">
                    <div
                      class="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/50"
                    >
                      <UIcon
                        name="i-heroicons-users"
                        class="h-6 w-6 text-teal-600 dark:text-teal-400"
                      />
                    </div>
                    <div>
                      <p class="text-2xl font-bold text-neutral-900 dark:text-neutral-50">1000+</p>
                      <p class="text-xs text-neutral-600 dark:text-neutral-400">Active Moms</p>
                    </div>
                  </div>
                </Motion>

                <Motion
                  :initial="{ opacity: 0, y: -20 }"
                  :animate="{ opacity: 1, y: 0 }"
                  :transition="{ duration: 0.5, delay: 0.9 }"
                  class="absolute right-4 top-4 rounded-2xl border border-white/30 dark:border-neutral-700/50 bg-white/90 dark:bg-neutral-900/90 p-4 shadow-xl backdrop-blur-sm"
                >
                  <div class="flex items-center gap-2">
                    <UIcon name="i-heroicons-star-solid" class="h-5 w-5 text-amber-500" />
                    <p class="text-lg font-bold text-neutral-900 dark:text-neutral-50">4.9</p>
                  </div>
                  <p class="text-xs text-neutral-600 dark:text-neutral-400">Rating</p>
                </Motion>
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <Motion
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :transition="{ duration: 1, delay: 1.2 }"
      class="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div class="flex flex-col items-center gap-2 text-neutral-400 dark:text-neutral-500">
        <span class="text-xs uppercase tracking-wider">Scroll</span>
        <div class="h-10 w-6 rounded-full border-2 border-neutral-300 dark:border-neutral-700 p-1">
          <div class="h-2 w-full rounded-full bg-primary-500 animate-bounce" />
        </div>
      </div>
    </Motion>
  </section>
</template>
