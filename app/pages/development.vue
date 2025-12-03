<script setup lang="ts">
useHead({
  title: 'Child Development - Momix Squad'
});
</script>

<template>
  <div class="bg-white py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Mom Development
        </h2>
        <p class="mt-6 text-lg leading-8 text-slate-600">
          Every stage of motherhood brings new joys and challenges. Find resources tailored to your
          journey.
        </p>
      </div>

      <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <ContentCard
          title="Moms to be"
          description="Preparing for the arrival of your little one. Prenatal care, nesting, and what to expect."
          icon="i-heroicons-sparkles"
        />
        <ContentCard
          title="New Moms (0-2 yrs)"
          description="Navigating the newborn phase, sleep schedules, and early milestones."
          icon="i-heroicons-face-smile"
        />
        <ContentCard
          title="Toddler Moms (3-5 yrs)"
          description="Managing tantrums, potty training, and fostering independence."
          icon="i-heroicons-puzzle-piece"
        />
        <ContentCard
          title="School Aged Moms (6-12 yrs)"
          description="Supporting education, social skills, and growing personalities."
          icon="i-heroicons-academic-cap"
        />
        <ContentCard
          title="Teens Moms (13-19 yrs)"
          description="Guiding your teen through adolescence, emotional changes, and independence."
          icon="i-heroicons-user-group"
        />
        <ContentCard
          title="Super Moms (20+ yrs)"
          description="Transitioning to an empty nest and redefining your relationship with adult children."
          icon="i-heroicons-star"
        />
      </div>

      <div class="mt-16 rounded-2xl bg-momix-50 p-8 sm:p-12">
        <h3 class="text-2xl font-bold text-slate-900">Interactive Tools</h3>
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
