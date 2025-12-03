<script setup lang="ts">
const isOpen = ref(false);
const { y: scrollY } = useWindowScroll();

const links = [
  { label: 'Home', to: '/', icon: 'i-heroicons-home' },
  { label: 'Development', to: '/development', icon: 'i-heroicons-academic-cap' },
  { label: 'Care', to: '/care', icon: 'i-heroicons-heart' },
  { label: 'Hobbies', to: '/hobbies', icon: 'i-heroicons-sparkles' },
  { label: 'Nutrition', to: '/nutrition', icon: 'i-heroicons-cake' },
  { label: 'Contact', to: '/contact', icon: 'i-heroicons-envelope' }
];

// Close mobile menu when clicking outside
const headerRef = ref<HTMLElement>();
onClickOutside(headerRef, () => {
  isOpen.value = false;
});

// Elevate header on scroll
const isScrolled = computed(() => scrollY.value > 10);
</script>

<template>
  <header
    ref="headerRef"
    class="sticky top-0 z-50 w-full transition-all duration-300"
    :class="[
      isScrolled
        ? 'bg-white/95 shadow-md backdrop-blur-xl border-b border-slate-200/80'
        : 'bg-white/80 backdrop-blur-md border-b border-transparent'
    ]"
  >
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <!-- Logo with animation -->
      <Motion
        :initial="{ opacity: 0, x: -20 }"
        :animate="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.5, ease: 'easeOut' }"
      >
        <NuxtLink
          to="/"
          class="group flex items-center gap-2.5 transition-transform hover:scale-105"
        >
          <div
            class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg shadow-primary-500/30 transition-all group-hover:shadow-xl group-hover:shadow-primary-500/40"
          >
            <UIcon name="i-heroicons-heart" class="h-6 w-6 text-white" />
          </div>
          <span class="font-display text-2xl font-bold">
            <span class="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent"
              >Momix</span
            >
            <span class="text-success-600">Squad</span>
          </span>
        </NuxtLink>
      </Motion>

      <!-- Desktop Nav -->
      <Motion
        :initial="{ opacity: 0, y: -10 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: 0.1, ease: 'easeOut' }"
      >
        <nav class="hidden md:flex md:items-center md:gap-2">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="group relative rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 transition-all hover:bg-primary-50 hover:text-primary-700"
            active-class="!text-primary-700 !font-semibold bg-primary-50"
          >
            <span class="relative z-10">{{ link.label }}</span>
            <span
              class="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-primary-500 transition-transform duration-300 group-hover:scale-x-100"
            />
          </NuxtLink>
        </nav>
      </Motion>

      <!-- CTA Button (Desktop) -->
      <Motion
        :initial="{ opacity: 0, x: 20 }"
        :animate="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.5, delay: 0.2, ease: 'easeOut' }"
        class="hidden md:block"
      >
        <UButton
          to="/contact"
          color="primary"
          size="lg"
          variant="solid"
          class="shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30"
        >
          Join the Squad
          <template #trailing>
            <UIcon name="i-heroicons-arrow-right" class="h-4 w-4" />
          </template>
        </UButton>
      </Motion>

      <!-- Mobile Menu Button -->
      <button
        class="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 hover:shadow-md active:scale-95 md:hidden"
        aria-label="Toggle menu"
        @click="isOpen = !isOpen"
      >
        <UIcon
          :name="isOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
          class="h-6 w-6 transition-transform duration-300"
          :class="{ 'rotate-90': isOpen }"
        />
      </button>
    </div>

    <!-- Mobile Nav with slide animation -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div
        v-if="isOpen"
        class="absolute left-0 right-0 top-full border-b border-slate-200 bg-white shadow-xl md:hidden"
      >
        <nav class="mx-auto max-w-7xl space-y-1 px-4 py-6">
          <NuxtLink
            v-for="(link, index) in links"
            :key="link.to"
            :to="link.to"
            class="group flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium text-slate-700 transition-all hover:bg-primary-50 hover:text-primary-700"
            active-class="!bg-primary-50 !text-primary-700 !font-semibold"
            :style="{ animationDelay: `${index * 50}ms` }"
            @click="isOpen = false"
          >
            <div
              class="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 transition-colors group-hover:bg-primary-100"
            >
              <UIcon :name="link.icon" class="h-5 w-5" />
            </div>
            {{ link.label }}
            <UIcon
              name="i-heroicons-chevron-right"
              class="ml-auto h-5 w-5 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
            />
          </NuxtLink>

          <!-- Mobile CTA -->
          <div class="pt-4">
            <UButton
              to="/contact"
              color="primary"
              size="xl"
              variant="solid"
              block
              class="shadow-lg shadow-primary-500/20"
              @click="isOpen = false"
            >
              Join the Squad
              <template #trailing>
                <UIcon name="i-heroicons-arrow-right" class="h-5 w-5" />
              </template>
            </UButton>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>
