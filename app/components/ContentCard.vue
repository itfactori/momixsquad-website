<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  icon?: string;
  to?: string;
  color?: 'primary' | 'secondary' | 'success' | 'accent';
  variant?: 'default' | 'featured' | 'minimal';
}>();

const colorClasses = computed(() => {
  const colors = {
    primary: {
      iconBg: 'bg-primary-100 dark:bg-primary-900/50',
      iconText: 'text-primary-600 dark:text-primary-400',
      hoverBg: 'group-hover:bg-primary-50 dark:group-hover:bg-primary-950/30',
      hoverText: 'group-hover:text-primary-700 dark:group-hover:text-primary-300',
      ring: 'group-hover:ring-primary-200 dark:group-hover:ring-primary-800',
      shadow: 'group-hover:shadow-primary-500/10 dark:group-hover:shadow-primary-500/5',
      gradient: 'from-primary-500 to-primary-600'
    },
    secondary: {
      iconBg: 'bg-amber-100 dark:bg-amber-900/50',
      iconText: 'text-amber-600 dark:text-amber-400',
      hoverBg: 'group-hover:bg-amber-50 dark:group-hover:bg-amber-950/30',
      hoverText: 'group-hover:text-amber-700 dark:group-hover:text-amber-300',
      ring: 'group-hover:ring-amber-200 dark:group-hover:ring-amber-800',
      shadow: 'group-hover:shadow-amber-500/10 dark:group-hover:shadow-amber-500/5',
      gradient: 'from-amber-500 to-amber-600'
    },
    success: {
      iconBg: 'bg-emerald-100 dark:bg-emerald-900/50',
      iconText: 'text-emerald-600 dark:text-emerald-400',
      hoverBg: 'group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950/30',
      hoverText: 'group-hover:text-emerald-700 dark:group-hover:text-emerald-300',
      ring: 'group-hover:ring-emerald-200 dark:group-hover:ring-emerald-800',
      shadow: 'group-hover:shadow-emerald-500/10 dark:group-hover:shadow-emerald-500/5',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    accent: {
      iconBg: 'bg-teal-100 dark:bg-teal-900/50',
      iconText: 'text-teal-600 dark:text-teal-400',
      hoverBg: 'group-hover:bg-teal-50 dark:group-hover:bg-teal-950/30',
      hoverText: 'group-hover:text-teal-700 dark:group-hover:text-teal-300',
      ring: 'group-hover:ring-teal-200 dark:group-hover:ring-teal-800',
      shadow: 'group-hover:shadow-teal-500/10 dark:group-hover:shadow-teal-500/5',
      gradient: 'from-teal-500 to-teal-600'
    }
  };

  return colors[props.color || 'primary'];
});
</script>

<template>
  <Motion
    :initial="{ opacity: 0, y: 20 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.5, ease: 'easeOut', delay: 0 }"
    :once="true"
  >
    <component
      :is="to ? 'NuxtLink' : 'div'"
      :to="to"
      class="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 p-6 shadow-sm ring-1 ring-neutral-200 dark:ring-neutral-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      :class="[colorClasses.shadow, colorClasses.ring]"
    >
      <!-- Gradient background on hover -->
      <div
        class="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
        :class="colorClasses.hoverBg"
      />

      <!-- Content -->
      <div class="relative z-10">
        <!-- Icon -->
        <div
          v-if="icon"
          class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300"
          :class="[colorClasses.iconBg, colorClasses.iconText]"
        >
          <UIcon :name="icon" class="h-7 w-7" />
        </div>

        <!-- Title -->
        <h3
          class="font-display text-xl font-bold text-neutral-900 dark:text-neutral-50 transition-colors"
          :class="colorClasses.hoverText"
        >
          {{ title }}
        </h3>

        <!-- Description -->
        <p class="mt-3 flex-1 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          {{ description }}
        </p>

        <!-- Learn More Link -->
        <div
          v-if="to"
          class="mt-5 flex items-center gap-2 font-semibold transition-all"
          :class="[colorClasses.iconText]"
        >
          <span class="text-sm">Learn more</span>
          <UIcon
            name="i-heroicons-arrow-right"
            class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </component>
  </Motion>
</template>
