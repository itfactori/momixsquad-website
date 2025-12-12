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

// Close dropdown when clicking outside
onClickOutside(dropdownRef, () => {
  isOpen.value = false;
});

// Close dropdown when navigating
const closeDropdown = () => {
  isOpen.value = false;
};
</script>

<template>
  <div ref="dropdownRef" class="relative group">
    <!-- Dropdown Toggle Button -->
    <button
      @click="isOpen = !isOpen"
      class="relative group rounded-lg px-4 py-2.5 text-sm font-medium text-neutral-600 dark:text-pink-200 transition-all hover:text-neutral-900 dark:hover:text-pink-50 flex items-center gap-1.5"
      :class="isOpen && 'text-pink-600 dark:text-pink-400 !font-semibold'"
    >
      <span>{{ title }}</span>
      <UIcon
        name="i-heroicons-chevron-down"
        class="h-4 w-4 transition-transform duration-300"
        :class="isOpen && 'rotate-180'"
      />
      <!-- Hover background -->
      <span
        class="absolute inset-0 rounded-lg bg-pink-50 dark:bg-pink-950/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100 -z-10"
      />
      <!-- Active/hover underline -->
      <span
        class="absolute inset-x-2 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 transition-transform duration-300"
        :class="isOpen && 'scale-x-100'"
      />
    </button>

    <!-- Dropdown Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform opacity-0 scale-95 -translate-y-2"
      enter-to-class="transform opacity-100 scale-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform opacity-100 scale-100 translate-y-0"
      leave-to-class="transform opacity-0 scale-95 -translate-y-2"
    >
      <div
        v-if="isOpen"
        class="absolute top-full left-0 mt-2 w-56 rounded-xl bg-white dark:bg-deep-purple-900 border border-neutral-200 dark:border-purple-700 shadow-2xl shadow-neutral-900/10 dark:shadow-purple-950/50 backdrop-blur-xl overflow-hidden z-50"
      >
        <!-- Items Container -->
        <div class="py-2">
          <NuxtLink
            v-for="(item, index) in items"
            :key="item.to"
            :to="item.to"
            class="group flex items-center justify-between px-4 py-3 text-sm font-medium text-neutral-700 dark:text-pink-200 transition-all duration-200 hover:bg-pink-50 dark:hover:bg-pink-950/50 hover:text-pink-700 dark:hover:text-pink-400"
            active-class="!bg-pink-100 dark:!bg-pink-900/50 !text-pink-700 dark:!text-pink-300"
            @click="closeDropdown"
            :style="{ animationDelay: `${index * 30}ms` }"
          >
            <span>{{ item.label }}</span>
            <UIcon
              name="i-heroicons-arrow-right"
              class="h-4 w-4 opacity-0 transition-all duration-300 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
            />
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </div>
</template>
