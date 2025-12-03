<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
}>();
</script>

<template>
  <section class="relative overflow-hidden bg-momix-50 py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
          <h1
            class="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
          >
            {{ title }}
          </h1>
          <p class="mt-6 text-lg text-slate-600">
            {{ subtitle }}
          </p>
          <div
            v-if="ctaText"
            class="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left"
          >
            <NuxtLink
              :to="ctaLink || '#'"
              class="inline-flex items-center rounded-full bg-momix-600 px-8 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-momix-700 focus:outline-none focus:ring-2 focus:ring-momix-500 focus:ring-offset-2"
            >
              {{ ctaText }}
            </NuxtLink>
          </div>
        </div>
        <div
          class="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center"
        >
          <div class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
            <!-- Placeholder Image if none provided -->
            <div class="aspect-[4/3] w-full overflow-hidden rounded-lg bg-momix-200">
              <img v-if="image" :src="image" alt="Hero Image" class="h-full w-full object-cover" />
              <div v-else class="flex h-full w-full items-center justify-center text-momix-400">
                <UIcon name="i-heroicons-photo" class="h-24 w-24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
