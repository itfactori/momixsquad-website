<script setup lang="ts">
useHead({
  title: 'Self Care & Wellness - Momix Squad'
});
</script>

<template>
  <div class="bg-white py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Essential Self-Care & Wellness
        </h2>
        <p class="mt-4 text-lg text-slate-600">
          You can't pour from an empty cup. Prioritize your well-being to be the best mom you can
          be.
        </p>
      </div>

      <div class="mt-16 space-y-16">
        <!-- Spiritual Wellness Section -->
        <section>
          <h3 class="mb-8 text-2xl font-bold text-momix-700">Spiritual Wellness</h3>
          <div class="grid gap-8 md:grid-cols-3">
            <InteractivePlaceholder
              title="Daily Duas"
              description="Duas for calmness & strength."
            />
            <InteractivePlaceholder
              title="Quran-based Emotional Healing"
              description="Verses for comfort and guidance."
            />
            <InteractivePlaceholder
              title="Sunnah Routines"
              description="Prophetic routines for a balanced life."
            />
          </div>
        </section>

        <!-- Questionnaire Section -->
        <section class="rounded-2xl bg-sage-50 p-8">
          <div class="md:flex md:items-center md:justify-between">
            <div class="mb-6 md:mb-0">
              <h3 class="text-xl font-bold text-sage-900">Questionnaire for Working Moms</h3>
              <p class="text-sage-700">Help us understand your challenges better.</p>
            </div>
            <InteractivePlaceholder
              title="Survey Form"
              description="Interactive questionnaire component."
            />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
