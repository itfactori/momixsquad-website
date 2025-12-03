<script setup lang="ts">
useHead({
  title: 'Child Development - Momix Squad'
});
</script>

<template>
  <div class="bg-white py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Child Development
        </h2>
        <p class="mt-6 text-lg leading-8 text-slate-600">
          Understanding your child's growth is key to nurturing their potential. Explore our guides
          on milestones and developmental stages.
        </p>
      </div>

      <div
        class="mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <!-- Static Content Cards (Simulated) -->
        <article class="flex flex-col items-start justify-between">
          <div class="group relative">
            <h3
              class="mt-3 text-lg font-semibold leading-6 text-slate-900 group-hover:text-momix-600"
            >
              <a href="#">
                <span class="absolute inset-0"></span>
                Early Years (0-3)
              </a>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-slate-600">
              Critical milestones in the first three years. Language acquisition, motor skills, and
              emotional bonding.
            </p>
          </div>
        </article>

        <article class="flex flex-col items-start justify-between">
          <div class="group relative">
            <h3
              class="mt-3 text-lg font-semibold leading-6 text-slate-900 group-hover:text-momix-600"
            >
              <a href="#">
                <span class="absolute inset-0"></span>
                Preschool Age (3-5)
              </a>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-slate-600">
              Socialization, play-based learning, and preparing for school.
            </p>
          </div>
        </article>
      </div>

      <div class="mt-16">
        <h3 class="text-2xl font-bold text-slate-900">Tools for Moms</h3>
        <div class="mt-6 grid gap-8 sm:grid-cols-2">
          <InteractivePlaceholder
            title="Weekly Planners Templates"
            description="Downloadable templates for organizing your week."
          />
          <InteractivePlaceholder
            title="Checklist"
            description="Daily and weekly checklists for tracking development."
          />
        </div>
      </div>
    </div>
  </div>
</template>
