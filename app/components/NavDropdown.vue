<script setup lang="ts">
interface NavItem {
  label: string;
  to: string;
}

interface Props {
  title: string;
  items: NavItem[];
}

withDefaults(defineProps<Props>(), {});

const isOpen = ref(false);
const dropdownRef = ref<HTMLElement>();
let hoverTimeout: ReturnType<typeof setTimeout> | null = null;

onClickOutside(dropdownRef, () => {
  isOpen.value = false;
});

const closeDropdown = () => {
  isOpen.value = false;
};

const openDropdown = () => {
  if (hoverTimeout) {
    clearTimeout(hoverTimeout);
    hoverTimeout = null;
  }
  isOpen.value = true;
};

const scheduleClose = () => {
  hoverTimeout = setTimeout(() => {
    isOpen.value = false;
  }, 150);
};
</script>

<template>
  <div
    ref="dropdownRef"
    class="relative group"
    @mouseenter="openDropdown"
    @mouseleave="scheduleClose"
  >
    <!-- Dropdown Toggle Button -->
    <button
      class="nav-link relative group rounded-xl px-4 py-2.5 text-sm font-medium text-neutral-600 dark:text-pink-200 transition-all duration-300 hover:text-pink-700 dark:hover:text-pink-100 hover:scale-[1.03] flex items-center gap-1.5"
      :class="isOpen && 'nav-link-active !text-pink-600 dark:!text-pink-300 !font-semibold'"
      @click="isOpen = !isOpen"
    >
      <span class="relative z-10">{{ title }}</span>
      <UIcon
        name="i-heroicons-chevron-down"
        class="relative z-10 h-4 w-4 transition-transform duration-300"
        :class="isOpen && 'rotate-180'"
      />
      <!-- Hover/active background -->
      <span
        class="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-100 to-pink-50 dark:from-pink-950/60 dark:to-purple-950/40 opacity-0 transition-all duration-300 group-hover:opacity-100 scale-95 group-hover:scale-100 -z-10"
        :class="isOpen && '!opacity-100 !scale-100'"
      />
      <!-- Active/hover underline -->
      <span
        class="absolute inset-x-3 -bottom-0.5 h-[3px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-pink-500 via-pink-400 to-purple-500 transition-transform duration-300 group-hover:scale-x-100"
        :class="isOpen && '!scale-x-100'"
      />
    </button>

    <!-- Dropdown Menu -->
    <Transition
      enter-active-class="transition duration-250 ease-out"
      enter-from-class="transform opacity-0 scale-95 -translate-y-2"
      enter-to-class="transform opacity-100 scale-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform opacity-100 scale-100 translate-y-0"
      leave-to-class="transform opacity-0 scale-95 -translate-y-2"
    >
      <div
        v-if="isOpen"
        class="absolute top-full left-0 mt-2 w-64 rounded-xl bg-white dark:bg-deep-purple-900 border border-neutral-200/80 dark:border-deep-purple-700 shadow-2xl shadow-neutral-900/10 dark:shadow-deep-purple-950/60 backdrop-blur-xl overflow-hidden z-50"
      >
        <div class="py-1.5">
          <NuxtLink
            v-for="(item, index) in items"
            :key="item.to"
            :to="item.to"
            class="group/item relative flex items-center justify-between px-4 py-3 text-sm font-medium text-neutral-700 dark:text-pink-200 transition-all duration-200 hover:bg-gradient-to-r hover:from-pink-50 hover:to-transparent dark:hover:from-deep-purple-800 dark:hover:to-transparent hover:text-pink-700 dark:hover:text-pink-300"
            active-class="!bg-gradient-to-r !from-pink-100 !to-pink-50/50 dark:!from-deep-purple-800 dark:!to-deep-purple-700/50 !text-pink-700 dark:!text-pink-300 !font-semibold"
            :style="{ animationDelay: `${index * 30}ms` }"
            @click="closeDropdown"
          >
            <div class="flex items-center gap-2.5">
              <span
                class="h-1.5 w-1.5 rounded-full bg-pink-400/0 group-hover/item:bg-pink-500 transition-all duration-200 group-hover/item:scale-125"
              ></span>
              <span>{{ item.label }}</span>
            </div>
            <UIcon
              name="i-heroicons-arrow-right"
              class="h-4 w-4 opacity-0 transition-all duration-300 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 text-pink-500"
            />
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* Active dropdown link dot */
.router-link-active span:first-child {
  background-color: rgb(236 72 153) !important;
  transform: scale(1.25);
}
</style>
