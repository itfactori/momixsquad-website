<script setup lang="ts">
const isOpen = ref(false);

const links = [
  { label: 'Home', to: '/' },
  { label: 'Development', to: '/development' },
  { label: 'Care', to: '/care' },
  { label: 'Hobbies', to: '/hobbies' },
  { label: 'Nutrition', to: '/nutrition' },
  { label: 'Contact', to: '/contact' }
];
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2">
        <span class="font-display text-2xl font-bold text-momix-600"
          >Momix<span class="text-sage-500">Squad</span></span
        >
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex md:gap-8">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-sm font-medium text-slate-600 transition-colors hover:text-momix-600"
          active-class="text-momix-600 font-semibold"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Mobile Menu Button -->
      <button
        class="flex h-10 w-10 items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 md:hidden"
        @click="isOpen = !isOpen"
        aria-label="Toggle menu"
      >
        <UIcon :name="isOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" class="h-6 w-6" />
      </button>
    </div>

    <!-- Mobile Nav -->
    <div v-show="isOpen" class="border-b border-slate-200 bg-white px-4 py-4 md:hidden">
      <nav class="flex flex-col gap-4">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-base font-medium text-slate-600 hover:text-momix-600"
          active-class="text-momix-600 font-semibold"
          @click="isOpen = false"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
