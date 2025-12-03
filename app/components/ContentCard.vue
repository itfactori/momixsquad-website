<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  icon?: string;
  to?: string;
  color?: 'primary' | 'secondary' | 'success' | 'accent';
}>();

const colorClasses = computed(() => {
  const colors = {
    primary: {
      bg: 'bg-primary-50',
      bgHover: 'group-hover:bg-primary-100',
      text: 'text-primary-600',
      textHover: 'group-hover:text-primary-700',
      ring: 'ring-primary-200/50',
      ringHover: 'group-hover:ring-primary-300',
      shadow: 'group-hover:shadow-primary-500/10'
    },
    secondary: {
      bg: 'bg-secondary-50',
      bgHover: 'group-hover:bg-secondary-100',
      text: 'text-secondary-600',
      textHover: 'group-hover:text-secondary-700',
      ring: 'ring-secondary-200/50',
      ringHover: 'group-hover:ring-secondary-300',
      shadow: 'group-hover:shadow-secondary-500/10'
    },
    success: {
      bg: 'bg-success-50',
      bgHover: 'group-hover:bg-success-100',
      text: 'text-success-600',
      textHover: 'group-hover:text-success-700',
      ring: 'ring-success-200/50',
      ringHover: 'group-hover:ring-success-300',
      shadow: 'group-hover:shadow-success-500/10'
    },
    accent: {
      bg: 'bg-accent-50',
      bgHover: 'group-hover:bg-accent-100',
      text: 'text-accent-600',
      textHover: 'group-hover:text-accent-700',
      ring: 'ring-accent-200/50',
      ringHover: 'group-hover:ring-accent-300',
      shadow: 'group-hover:shadow-accent-500/10'
    }
  };

  return colors[props.color || 'primary'];
});
</script>

<template>
  <Motion
    :initial="{ opacity: 0, y: 20 }"
    :visible-once="true"
    :visible="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.5, ease: 'easeOut' }"
  >
    <div
      class="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      :class="[colorClasses.shadow]"
    >
      <!-- Icon -->
      <div
        v-if="icon"
        class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300"
        :class="[colorClasses.bg, colorClasses.bgHover, colorClasses.text, colorClasses.textHover]"
      >
        <UIcon :name="icon" class="h-7 w-7" />
      </div>

      <!-- Title -->
      <h3 class="font-display text-xl font-bold text-slate-900 transition-colors group-hover:text-primary-700">
        <NuxtLink :to="to || '#'">
          <span class="absolute inset-0" aria-hidden="true" />
          {{ title }}
        </NuxtLink>
      </h3>

      <!-- Description -->
      <p class="mt-3 flex-1 text-base leading-relaxed text-slate-600">
        {{ description }}
      </p>

      <!-- Learn More Link -->
      <div
        class="mt-5 flex items-center gap-2 font-semibold transition-all"
        :class="[colorClasses.text, colorClasses.textHover]"
      >
        <span class="text-sm">Learn more</span>
        <UIcon
          name="i-heroicons-arrow-right"
          class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>

      <!-- Hover gradient overlay -->
      <div
        class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        :class="[colorClasses.ring]"
        style="border-radius: inherit;"
      />
    </div>
  </Motion>
</template>
