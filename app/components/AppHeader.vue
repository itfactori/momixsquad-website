<script setup lang="ts">
const isOpen = ref(false);
const momDevelopmentOpen = ref(false);
const momCareOpen = ref(false);
const hobbiesOpen = ref(false);
const { y: scrollY } = useWindowScroll();
const colorMode = useColorMode();

const momDevelopmentItems = [
  { label: 'Moms to be', to: '/development/moms-to-be' },
  { label: 'New Moms (0-2yr old Moms)', to: '/development/new-moms' },
  { label: 'Toddler Moms (3-5yrs Moms)', to: '/development/toddler-moms' },
  { label: 'School Aged Moms (6-12yrs Moms)', to: '/development/school-aged-moms' },
  { label: 'Teens Moms (13-19 yrs Moms)', to: '/development/teens-moms' },
  { label: 'Super Moms (20 yrs and above Moms)', to: '/development/super-moms' },
  { label: 'Quiz & Activities', to: '/development/quiz-activities' },
  { label: 'Questionnaires', to: '/development/questionnaires' }
];

const momCareItems = [
  { label: 'Self Care & Well being', to: '/care/self-care' },
  { label: 'Mental & Physical Health', to: '/care/mental-health' },
  { label: 'Spiritual Wellness', to: '/care/spiritual-wellness' }
];

const hobbiesItems = [
  { label: 'Creative', to: '/hobbies/creative' },
  { label: 'Skill-Based', to: '/hobbies/skill-based' },
  { label: 'Social & Community', to: '/hobbies/social-community' }
];

const headerRef = ref<HTMLElement>();
onClickOutside(headerRef, () => {
  isOpen.value = false;
  momDevelopmentOpen.value = false;
  momCareOpen.value = false;
  hobbiesOpen.value = false;
});

const isScrolled = computed(() => scrollY.value > 10);

const isToggling = ref(false);
const toggleColorMode = () => {
  isToggling.value = true;
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  setTimeout(() => {
    isToggling.value = false;
  }, 600);
};

const isDark = computed(() => colorMode.value === 'dark');

const closeAllMenus = () => {
  isOpen.value = false;
  momDevelopmentOpen.value = false;
  momCareOpen.value = false;
  hobbiesOpen.value = false;
};
</script>

<template>
  <header
    ref="headerRef"
    class="sticky top-0 z-50 w-full transition-all duration-500"
    :class="[
      isScrolled
        ? 'bg-white/90 dark:bg-deep-purple-950/90 shadow-lg shadow-neutral-900/5 dark:shadow-deep-purple-950/50 backdrop-blur-xl border-b border-pink-200/30 dark:border-deep-purple-700/50'
        : 'bg-transparent'
    ]"
  >
    <div
      class="mx-auto flex h-14 sm:h-16 lg:h-20 max-w-7xl items-center justify-between px-3 sm:px-4 lg:px-8"
    >
      <!-- Logo with glow hover -->
      <Motion
        :initial="{ opacity: 0, x: -20 }"
        :animate="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.5, ease: 'easeOut' }"
      >
        <NuxtLink
          to="/home"
          class="group relative flex items-center transition-all duration-300 hover:scale-105"
        >
          <div
            class="absolute -inset-2 rounded-2xl bg-gradient-to-r from-pink-500/0 to-purple-500/0 group-hover:from-pink-500/20 group-hover:to-purple-500/20 blur-xl transition-all duration-500"
          />
          <img
            src="/logo.png"
            alt="Momix Squad"
            class="relative h-12 sm:h-14 lg:h-16 w-auto transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(236,72,153,0.4)]"
          />
        </NuxtLink>
      </Motion>

      <!-- Desktop Nav -->
      <Motion
        :initial="{ opacity: 0, y: -10 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: 0.1, ease: 'easeOut' }"
      >
        <nav class="hidden lg:flex lg:items-center lg:gap-0.5">
          <NuxtLink
            to="/home"
            class="nav-link group relative rounded-xl px-4 py-2.5 text-sm font-medium text-neutral-600 dark:text-pink-200 transition-all duration-300 hover:text-pink-700 dark:hover:text-pink-100 hover:scale-[1.03]"
            active-class="nav-link-active !text-pink-600 dark:!text-pink-300 !font-semibold"
          >
            <span class="relative z-10">Home</span>
            <span
              class="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-100 to-pink-50 dark:from-pink-950/60 dark:to-purple-950/40 opacity-0 transition-all duration-300 group-hover:opacity-100 scale-95 group-hover:scale-100"
            />
            <span
              class="absolute inset-x-3 -bottom-0.5 h-[3px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-pink-500 via-pink-400 to-purple-500 transition-transform duration-300 group-hover:scale-x-100"
            />
          </NuxtLink>

          <NavDropdown title="Mom Development" :items="momDevelopmentItems" />
          <NavDropdown title="Mom Care" :items="momCareItems" />
          <NavDropdown title="Hobbies & Tips" :items="hobbiesItems" />

          <NuxtLink
            to="/nutrition"
            class="nav-link group relative rounded-xl px-4 py-2.5 text-sm font-medium text-neutral-600 dark:text-pink-200 transition-all duration-300 hover:text-pink-700 dark:hover:text-pink-100 hover:scale-[1.03]"
            active-class="nav-link-active !text-pink-600 dark:!text-pink-300 !font-semibold"
          >
            <span class="relative z-10">Food & Nutrition</span>
            <span
              class="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-100 to-pink-50 dark:from-pink-950/60 dark:to-purple-950/40 opacity-0 transition-all duration-300 group-hover:opacity-100 scale-95 group-hover:scale-100"
            />
            <span
              class="absolute inset-x-3 -bottom-0.5 h-[3px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-pink-500 via-pink-400 to-purple-500 transition-transform duration-300 group-hover:scale-x-100"
            />
          </NuxtLink>

          <NuxtLink
            to="/contact"
            class="nav-link group relative rounded-xl px-4 py-2.5 text-sm font-medium text-neutral-600 dark:text-pink-200 transition-all duration-300 hover:text-pink-700 dark:hover:text-pink-100 hover:scale-[1.03]"
            active-class="nav-link-active !text-pink-600 dark:!text-pink-300 !font-semibold"
          >
            <span class="relative z-10">Contact Us</span>
            <span
              class="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-100 to-pink-50 dark:from-pink-950/60 dark:to-purple-950/40 opacity-0 transition-all duration-300 group-hover:opacity-100 scale-95 group-hover:scale-100"
            />
            <span
              class="absolute inset-x-3 -bottom-0.5 h-[3px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-pink-500 via-pink-400 to-purple-500 transition-transform duration-300 group-hover:scale-x-100"
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
          class="theme-toggle relative flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 dark:border-deep-purple-600 bg-white dark:bg-deep-purple-800 text-neutral-600 dark:text-pink-200 shadow-sm transition-all duration-500 hover:border-pink-300 dark:hover:border-pink-600 hover:bg-pink-50 dark:hover:bg-deep-purple-700 hover:text-pink-600 dark:hover:text-pink-300 hover:shadow-lg hover:shadow-pink-500/10 dark:hover:shadow-pink-500/20 hover:scale-110 active:scale-95"
          :class="
            isToggling &&
            'animate-[spinBounce_0.6s_ease-in-out] shadow-lg shadow-pink-500/30 ring-2 ring-pink-400/50'
          "
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleColorMode"
        >
          <!-- Sun icon -->
          <UIcon
            name="i-heroicons-sun"
            class="absolute h-5 w-5 transition-all duration-500"
            :class="isDark ? 'rotate-0 scale-100 opacity-100' : 'rotate-180 scale-0 opacity-0'"
          />
          <!-- Moon icon -->
          <UIcon
            name="i-heroicons-moon"
            class="absolute h-5 w-5 transition-all duration-500"
            :class="isDark ? '-rotate-180 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'"
          />
        </button>

        <!-- CTA Button (Desktop) -->
        <UButton
          to="/contact"
          color="primary"
          size="lg"
          variant="solid"
          class="hidden md:flex shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 hover:scale-105 active:scale-95 transition-all duration-300"
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
          class="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 dark:border-deep-purple-600 bg-white dark:bg-deep-purple-800 text-neutral-700 dark:text-pink-200 shadow-sm transition-all duration-300 hover:border-pink-300 dark:hover:border-pink-600 hover:bg-pink-50 dark:hover:bg-deep-purple-700 hover:text-pink-600 dark:hover:text-pink-300 hover:shadow-md active:scale-90 lg:hidden"
          aria-label="Toggle menu"
          @click="isOpen = !isOpen"
        >
          <UIcon
            :name="isOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
            class="h-6 w-6 transition-all duration-300"
            :class="isOpen ? 'rotate-90 scale-110' : 'rotate-0 scale-100'"
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
        class="absolute left-0 right-0 top-full border-b border-neutral-200 dark:border-deep-purple-700 bg-white/95 dark:bg-deep-purple-950/95 backdrop-blur-xl shadow-xl lg:hidden"
      >
        <nav class="mx-auto max-w-7xl space-y-1 px-4 py-6 max-h-[70vh] overflow-y-auto">
          <!-- Home Link -->
          <NuxtLink
            to="/home"
            class="group flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium text-neutral-700 dark:text-pink-200 transition-all duration-200 hover:bg-pink-50 dark:hover:bg-deep-purple-800 hover:text-pink-700 dark:hover:text-pink-300"
            active-class="!bg-gradient-to-r !from-pink-50 !to-pink-100/50 dark:!from-deep-purple-800 dark:!to-deep-purple-700/50 !text-pink-700 dark:!text-pink-300 !font-semibold !ring-1 !ring-pink-200/50 dark:!ring-pink-800/50"
            @click="closeAllMenus"
          >
            <div
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-deep-purple-800 transition-all duration-300 group-hover:bg-pink-100 dark:group-hover:bg-deep-purple-700 group-hover:scale-110"
            >
              <UIcon name="i-heroicons-home" class="h-5 w-5" />
            </div>
            Home
            <UIcon
              name="i-heroicons-chevron-right"
              class="ml-auto h-5 w-5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            />
          </NuxtLink>

          <!-- Mom Development Menu -->
          <div
            class="rounded-xl transition-colors duration-200 hover:bg-pink-50 dark:hover:bg-deep-purple-800"
          >
            <button
              class="w-full group flex items-center gap-3 px-4 py-3.5 text-base font-medium text-neutral-700 dark:text-pink-200 transition-all duration-200"
              @click="momDevelopmentOpen = !momDevelopmentOpen"
            >
              <div
                class="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-deep-purple-800 transition-all duration-300 group-hover:bg-pink-100 dark:group-hover:bg-deep-purple-700 group-hover:scale-110"
              >
                <UIcon name="i-heroicons-academic-cap" class="h-5 w-5" />
              </div>
              Mom Development
              <UIcon
                name="i-heroicons-chevron-right"
                class="ml-auto h-5 w-5 transition-transform duration-300"
                :class="{ 'transform rotate-90': momDevelopmentOpen }"
              />
            </button>
            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="transform -translate-y-2 opacity-0"
              enter-to-class="transform translate-y-0 opacity-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="transform translate-y-0 opacity-100"
              leave-to-class="transform -translate-y-2 opacity-0"
            >
              <div v-show="momDevelopmentOpen" class="pl-4 space-y-1 pb-2">
                <NuxtLink
                  v-for="item in momDevelopmentItems"
                  :key="item.to"
                  :to="item.to"
                  class="group flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-neutral-600 dark:text-pink-200/80 transition-all duration-200 hover:bg-pink-100 dark:hover:bg-deep-purple-700 hover:text-pink-700 dark:hover:text-pink-300 hover:translate-x-1"
                  active-class="!bg-pink-100 dark:!bg-deep-purple-700 !text-pink-700 dark:!text-pink-300 !font-semibold"
                  @click="closeAllMenus"
                >
                  <span
                    class="h-1.5 w-1.5 rounded-full bg-pink-400/50 transition-all duration-200 group-hover:bg-pink-500 group-hover:scale-150"
                  ></span>
                  {{ item.label }}
                </NuxtLink>
              </div>
            </Transition>
          </div>

          <!-- Mom Care Menu -->
          <div
            class="rounded-xl transition-colors duration-200 hover:bg-pink-50 dark:hover:bg-deep-purple-800"
          >
            <button
              class="w-full group flex items-center gap-3 px-4 py-3.5 text-base font-medium text-neutral-700 dark:text-pink-200 transition-all duration-200"
              @click="momCareOpen = !momCareOpen"
            >
              <div
                class="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-deep-purple-800 transition-all duration-300 group-hover:bg-pink-100 dark:group-hover:bg-deep-purple-700 group-hover:scale-110"
              >
                <UIcon name="i-heroicons-heart" class="h-5 w-5" />
              </div>
              Mom Care
              <UIcon
                name="i-heroicons-chevron-right"
                class="ml-auto h-5 w-5 transition-transform duration-300"
                :class="{ 'transform rotate-90': momCareOpen }"
              />
            </button>
            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="transform -translate-y-2 opacity-0"
              enter-to-class="transform translate-y-0 opacity-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="transform translate-y-0 opacity-100"
              leave-to-class="transform -translate-y-2 opacity-0"
            >
              <div v-show="momCareOpen" class="pl-4 space-y-1 pb-2">
                <NuxtLink
                  v-for="item in momCareItems"
                  :key="item.to"
                  :to="item.to"
                  class="group flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-neutral-600 dark:text-pink-200/80 transition-all duration-200 hover:bg-pink-100 dark:hover:bg-deep-purple-700 hover:text-pink-700 dark:hover:text-pink-300 hover:translate-x-1"
                  active-class="!bg-pink-100 dark:!bg-deep-purple-700 !text-pink-700 dark:!text-pink-300 !font-semibold"
                  @click="closeAllMenus"
                >
                  <span
                    class="h-1.5 w-1.5 rounded-full bg-pink-400/50 transition-all duration-200 group-hover:bg-pink-500 group-hover:scale-150"
                  ></span>
                  {{ item.label }}
                </NuxtLink>
              </div>
            </Transition>
          </div>

          <!-- Hobbies & Tips Menu -->
          <div
            class="rounded-xl transition-colors duration-200 hover:bg-pink-50 dark:hover:bg-deep-purple-800"
          >
            <button
              class="w-full group flex items-center gap-3 px-4 py-3.5 text-base font-medium text-neutral-700 dark:text-pink-200 transition-all duration-200"
              @click="hobbiesOpen = !hobbiesOpen"
            >
              <div
                class="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-deep-purple-800 transition-all duration-300 group-hover:bg-pink-100 dark:group-hover:bg-deep-purple-700 group-hover:scale-110"
              >
                <UIcon name="i-heroicons-sparkles" class="h-5 w-5" />
              </div>
              Hobbies & Tips
              <UIcon
                name="i-heroicons-chevron-right"
                class="ml-auto h-5 w-5 transition-transform duration-300"
                :class="{ 'transform rotate-90': hobbiesOpen }"
              />
            </button>
            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="transform -translate-y-2 opacity-0"
              enter-to-class="transform translate-y-0 opacity-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="transform translate-y-0 opacity-100"
              leave-to-class="transform -translate-y-2 opacity-0"
            >
              <div v-show="hobbiesOpen" class="pl-4 space-y-1 pb-2">
                <NuxtLink
                  v-for="item in hobbiesItems"
                  :key="item.to"
                  :to="item.to"
                  class="group flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-neutral-600 dark:text-pink-200/80 transition-all duration-200 hover:bg-pink-100 dark:hover:bg-deep-purple-700 hover:text-pink-700 dark:hover:text-pink-300 hover:translate-x-1"
                  active-class="!bg-pink-100 dark:!bg-deep-purple-700 !text-pink-700 dark:!text-pink-300 !font-semibold"
                  @click="closeAllMenus"
                >
                  <span
                    class="h-1.5 w-1.5 rounded-full bg-pink-400/50 transition-all duration-200 group-hover:bg-pink-500 group-hover:scale-150"
                  ></span>
                  {{ item.label }}
                </NuxtLink>
              </div>
            </Transition>
          </div>

          <!-- Food & Nutrition Link -->
          <NuxtLink
            to="/nutrition"
            class="group flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium text-neutral-700 dark:text-pink-200 transition-all duration-200 hover:bg-pink-50 dark:hover:bg-deep-purple-800 hover:text-pink-700 dark:hover:text-pink-300"
            active-class="!bg-gradient-to-r !from-pink-50 !to-pink-100/50 dark:!from-deep-purple-800 dark:!to-deep-purple-700/50 !text-pink-700 dark:!text-pink-300 !font-semibold !ring-1 !ring-pink-200/50 dark:!ring-pink-800/50"
            @click="closeAllMenus"
          >
            <div
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-deep-purple-800 transition-all duration-300 group-hover:bg-pink-100 dark:group-hover:bg-deep-purple-700 group-hover:scale-110"
            >
              <UIcon name="i-heroicons-cake" class="h-5 w-5" />
            </div>
            Food & Nutrition
            <UIcon
              name="i-heroicons-chevron-right"
              class="ml-auto h-5 w-5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            />
          </NuxtLink>

          <!-- Contact Link -->
          <NuxtLink
            to="/contact"
            class="group flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium text-neutral-700 dark:text-pink-200 transition-all duration-200 hover:bg-pink-50 dark:hover:bg-deep-purple-800 hover:text-pink-700 dark:hover:text-pink-300"
            active-class="!bg-gradient-to-r !from-pink-50 !to-pink-100/50 dark:!from-deep-purple-800 dark:!to-deep-purple-700/50 !text-pink-700 dark:!text-pink-300 !font-semibold !ring-1 !ring-pink-200/50 dark:!ring-pink-800/50"
            @click="closeAllMenus"
          >
            <div
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-deep-purple-800 transition-all duration-300 group-hover:bg-pink-100 dark:group-hover:bg-deep-purple-700 group-hover:scale-110"
            >
              <UIcon name="i-heroicons-envelope" class="h-5 w-5" />
            </div>
            Contact Us
            <UIcon
              name="i-heroicons-chevron-right"
              class="ml-auto h-5 w-5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
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
              @click="closeAllMenus"
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

<style scoped>
/* Active nav link gets persistent pill bg + underline */
.nav-link-active > span:nth-child(2) {
  opacity: 1 !important;
  transform: scale(1) !important;
}
.nav-link-active > span:nth-child(3) {
  transform: scaleX(1) !important;
}
</style>
