<script setup lang="ts">
const props = defineProps<{
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}>();
</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-success-50 py-20 sm:py-28 lg:py-36">
    <!-- Decorative background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -left-48 -top-48 h-96 w-96 rounded-full bg-primary-100/40 blur-3xl" />
      <div class="absolute -right-48 top-1/4 h-96 w-96 rounded-full bg-success-100/40 blur-3xl" />
      <div class="absolute -bottom-48 left-1/3 h-96 w-96 rounded-full bg-accent-100/30 blur-3xl" />
    </div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
        <!-- Content -->
        <Motion
          :initial="{ opacity: 0, x: -30 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.7, ease: 'easeOut' }"
          class="sm:text-center lg:col-span-6 lg:text-left"
        >
          <div class="space-y-8">
            <!-- Title -->
            <h1
              class="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span class="block">{{ title }}</span>
            </h1>

            <!-- Subtitle -->
            <p class="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl lg:mx-0 lg:max-w-none">
              {{ subtitle }}
            </p>

            <!-- CTA Buttons -->
            <div
              v-if="ctaText"
              class="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <UButton
                :to="ctaLink || '#'"
                color="primary"
                size="xl"
                variant="solid"
                class="group shadow-xl shadow-primary-500/25 hover:shadow-2xl hover:shadow-primary-500/30"
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
                color="white"
                size="xl"
                variant="outline"
                class="group"
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

            <!-- Trust indicators -->
            <div class="flex flex-wrap items-center gap-6 pt-4 text-sm text-slate-600 sm:justify-center lg:justify-start">
              <div class="flex items-center gap-2">
                <div class="flex -space-x-2">
                  <div class="h-8 w-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 ring-2 ring-white" />
                  <div class="h-8 w-8 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 ring-2 ring-white" />
                  <div class="h-8 w-8 rounded-full bg-gradient-to-br from-success-400 to-success-600 ring-2 ring-white" />
                </div>
                <span class="font-medium">Join 1000+ moms</span>
              </div>
              <div class="flex items-center gap-1">
                <UIcon name="i-heroicons-star-solid" class="h-5 w-5 text-accent-500" />
                <UIcon name="i-heroicons-star-solid" class="h-5 w-5 text-accent-500" />
                <UIcon name="i-heroicons-star-solid" class="h-5 w-5 text-accent-500" />
                <UIcon name="i-heroicons-star-solid" class="h-5 w-5 text-accent-500" />
                <UIcon name="i-heroicons-star-solid" class="h-5 w-5 text-accent-500" />
                <span class="ml-1 font-medium">4.9/5 rating</span>
              </div>
            </div>
          </div>
        </Motion>

        <!-- Image/Visual -->
        <Motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 0.7, delay: 0.2, ease: 'easeOut' }"
          class="relative mt-16 lg:col-span-6 lg:mt-0"
        >
          <div class="relative mx-auto max-w-lg lg:max-w-none">
            <!-- Floating decoration elements -->
            <div
              class="absolute -left-4 -top-4 -z-10 h-72 w-72 rounded-3xl bg-gradient-to-br from-primary-200 to-primary-300 opacity-20 blur-2xl"
            />
            <div
              class="absolute -bottom-4 -right-4 -z-10 h-72 w-72 rounded-3xl bg-gradient-to-br from-success-200 to-success-300 opacity-20 blur-2xl"
            />

            <!-- Main image container -->
            <div
              class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-100 to-success-100 shadow-2xl ring-1 ring-slate-200/50 transition-all hover:shadow-3xl hover:ring-primary-300/50"
            >
              <div class="aspect-[4/3] w-full">
                <img
                  v-if="image"
                  :src="image"
                  alt="Hero Image"
                  class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  v-else
                  class="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary-100 via-white to-success-100"
                >
                  <div class="text-center">
                    <UIcon name="i-heroicons-heart" class="mx-auto h-24 w-24 text-primary-400" />
                    <p class="mt-4 text-sm font-medium text-primary-600">Supporting Every Mom</p>
                  </div>
                </div>
              </div>

              <!-- Floating stat cards -->
              <div
                class="absolute bottom-4 left-4 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-xl backdrop-blur-sm"
              >
                <div class="flex items-center gap-3">
                  <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-success-100">
                    <UIcon name="i-heroicons-users" class="h-6 w-6 text-success-600" />
                  </div>
                  <div>
                    <p class="text-2xl font-bold text-slate-900">1000+</p>
                    <p class="text-xs text-slate-600">Active Moms</p>
                  </div>
                </div>
              </div>

              <div
                class="absolute right-4 top-4 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-xl backdrop-blur-sm"
              >
                <div class="flex items-center gap-2">
                  <UIcon name="i-heroicons-star-solid" class="h-5 w-5 text-accent-500" />
                  <p class="text-lg font-bold text-slate-900">4.9</p>
                </div>
                <p class="text-xs text-slate-600">Rating</p>
              </div>
            </div>
          </div>
        </Motion>
      </div>
    </div>
  </section>
</template>
