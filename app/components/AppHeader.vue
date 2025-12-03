<script setup lang="ts">
const isOpen = ref(false);
const { y: scrollY } = useWindowScroll();
const colorMode = useColorMode();

const links = [
  { label: 'Home', to: '/home', icon: 'i-heroicons-home' },
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

// Toggle color mode
const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};

const isDark = computed(() => colorMode.value === 'dark');
</script>

<template>
  <header
    ref="headerRef"
    class="sticky top-0 z-50 w-full transition-all duration-500"
    :class="[
      isScrolled
        ? 'bg-white/90 dark:bg-neutral-950/90 shadow-lg shadow-neutral-900/5 dark:shadow-neutral-950/50 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-800/50'
        : 'bg-transparent'
    ]"
  >
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <!-- Logo with animation -->
      <Motion
        :initial="{ opacity: 0, x: -20 }"
        :animate="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.5, ease: 'easeOut' }"
      >
        <NuxtLink to="/home" class="group flex items-center transition-transform hover:scale-105">
          <img
            src="/logo.png"
            alt="Momix Squad"
            class="h-12 w-auto transition-all duration-300 group-hover:opacity-90"
          />
        </NuxtLink>
      </Motion>

      <!-- Desktop Nav -->
      <Motion
        :initial="{ opacity: 0, y: -10 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: 0.1, ease: 'easeOut' }"
      >
        <nav class="hidden lg:flex lg:items-center lg:gap-1">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="group relative rounded-lg px-4 py-2.5 text-sm font-medium text-neutral-600 dark:text-neutral-300 transition-all hover:text-neutral-900 dark:hover:text-white"
            active-class="!text-primary-600 dark:!text-primary-400 !font-semibold"
          >
            <span class="relative z-10">{{ link.label }}</span>
            <!-- Hover background -->
            <span
              class="absolute inset-0 rounded-lg bg-primary-50 dark:bg-primary-950/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            />
            <!-- Active/hover underline -->
            <span
              class="absolute inset-x-2 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-primary-500 to-amber-500 transition-transform duration-300 group-hover:scale-x-100"
            />
          </NuxtLink>
        </nav>
      </Motion>

      <!-- Right side: Color mode toggle + CTA -->
      <Motion
        :initial="{ opacity: 0, x: 20 }"
        :animate="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.5, delay: 0.2, ease: 'easeOut' }"
        class="flex items-center gap-3"
      >
        <!-- Color Mode Toggle -->
        <button
          class="relative flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 shadow-sm transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-700 hover:bg-primary-50 dark:hover:bg-primary-950/50 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-md"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleColorMode"
        >
          <!-- Sun icon -->
          <UIcon
            name="i-heroicons-sun"
            class="absolute h-5 w-5 transition-all duration-300"
            :class="isDark ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'"
          />
          <!-- Moon icon -->
          <UIcon
            name="i-heroicons-moon"
            class="absolute h-5 w-5 transition-all duration-300"
            :class="isDark ? '-rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'"
          />
        </button>

        <!-- CTA Button (Desktop) -->
        <UButton
          to="/contact"
          color="primary"
          size="lg"
          variant="solid"
          class="hidden md:flex shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300"
        >
          Join the Squad
          <template #trailing>
            <UIcon
              name="i-heroicons-arrow-right"
              class="h-4 w-4 transition-transform group-hover:translate-x-1"
            />
          </template>
        </UButton>

        <!-- Mobile Menu Button -->
        <button
          class="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 shadow-sm transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-700 hover:bg-primary-50 dark:hover:bg-primary-950/50 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-md active:scale-95 lg:hidden"
          aria-label="Toggle menu"
          @click="isOpen = !isOpen"
        >
          <UIcon
            :name="isOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
            class="h-6 w-6 transition-transform duration-300"
            :class="{ 'rotate-180': isOpen }"
          />
        </button>
      </Motion>
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
        class="absolute left-0 right-0 top-full border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl shadow-xl lg:hidden"
      >
        <nav class="mx-auto max-w-7xl space-y-1 px-4 py-6">
          <NuxtLink
            v-for="(link, index) in links"
            :key="link.to"
            :to="link.to"
            class="group flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium text-neutral-700 dark:text-neutral-200 transition-all duration-200 hover:bg-primary-50 dark:hover:bg-primary-950/50 hover:text-primary-700 dark:hover:text-primary-400"
            active-class="!bg-primary-50 dark:!bg-primary-950/50 !text-primary-700 dark:!text-primary-400 !font-semibold"
            :style="{ animationDelay: `${index * 50}ms` }"
            @click="isOpen = false"
          >
            <div
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 transition-colors group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50"
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
