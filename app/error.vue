<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true
  }
});

useHead({
  htmlAttrs: {
    lang: 'en'
  }
});

useSeoMeta({
  title: 'Page not found',
  description: 'We are sorry but this page could not be found.'
});

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <div class="flex min-h-screen flex-col bg-neutral-50 dark:bg-neutral-950">
    <AppHeader />

    <main class="flex flex-1 items-center justify-center px-4 py-20">
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6 }"
      >
        <div class="mx-auto max-w-lg text-center">
          <!-- Error Icon -->
          <div class="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/50">
            <UIcon name="i-heroicons-exclamation-triangle" class="h-12 w-12 text-primary-600 dark:text-primary-400" />
          </div>

          <!-- Error Code -->
          <p class="font-display text-8xl font-bold text-primary-600 dark:text-primary-400">
            {{ error?.statusCode || 404 }}
          </p>

          <!-- Error Message -->
          <h1 class="mt-4 font-display text-3xl font-bold text-neutral-900 dark:text-neutral-50 sm:text-4xl">
            {{ error?.statusCode === 404 ? 'Page Not Found' : 'Something went wrong' }}
          </h1>

          <p class="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            {{ error?.message || 'We couldn\'t find the page you\'re looking for. It may have been moved or doesn\'t exist.' }}
          </p>

          <!-- Actions -->
          <div class="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <UButton
              color="primary"
              size="xl"
              variant="solid"
              class="shadow-lg shadow-primary-500/20"
              @click="handleError"
            >
              Go Home
              <template #trailing>
                <UIcon name="i-heroicons-home" class="h-5 w-5" />
              </template>
            </UButton>
            <UButton
              to="/contact"
              color="neutral"
              size="xl"
              variant="outline"
              class="border-neutral-300 dark:border-neutral-700"
            >
              Contact Support
            </UButton>
          </div>

          <!-- Quick Links -->
          <div class="mt-12 border-t border-neutral-200 dark:border-neutral-800 pt-8">
            <p class="text-sm font-medium text-neutral-600 dark:text-neutral-400">
              Or check out these helpful links:
            </p>
            <div class="mt-4 flex flex-wrap justify-center gap-4">
              <NuxtLink
                to="/development"
                class="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
              >
                Mom Development
              </NuxtLink>
              <NuxtLink
                to="/care"
                class="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
              >
                Mom Care
              </NuxtLink>
              <NuxtLink
                to="/hobbies"
                class="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
              >
                Hobbies & Tips
              </NuxtLink>
              <NuxtLink
                to="/nutrition"
                class="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
              >
                Nutrition
              </NuxtLink>
            </div>
          </div>
        </div>
      </Motion>
    </main>

    <AppFooter />
  </div>
</template>
