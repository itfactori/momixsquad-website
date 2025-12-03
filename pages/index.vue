<script setup lang="ts">
useHead({
  title: 'Momix Squad - Nurturing Mothers',
  meta: [
    {
      name: 'description',
      content:
        'Empowering mothers with development tips, self-care strategies, and a supportive community.'
    }
  ]
});
</script>

<template>
  <div>
    <HeroSection
      title="Nurturing Mothers to give children the best start in life."
      subtitle="Join the Momix Squad community. Discover resources for child development, self-care, and rediscovering your passions."
      cta-text="Join the Squad"
      cta-link="/contact"
    />

    <!-- Features Grid -->
    <section class="py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to thrive
          </h2>
          <p class="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Comprehensive resources designed for the modern mother.
          </p>
        </div>

        <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ContentCard
            title="Child Development"
            description="Track milestones and understand your child's growth journey."
            icon="i-heroicons-face-smile"
            to="/development"
          />
          <ContentCard
            title="Self Care"
            description="Essential wellness strategies to keep you grounded and energized."
            icon="i-heroicons-heart"
            to="/care"
          />
          <ContentCard
            title="Nutrition"
            description="Healthy recipes and nutrition guides for the whole family."
            icon="i-heroicons-cake"
            to="/nutrition"
          />
        </div>
      </div>
    </section>

    <!-- Quiz Teaser -->
    <section class="bg-sage-50 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-12 lg:flex lg:items-center lg:justify-between"
        >
          <div>
            <h2 class="font-display text-3xl font-bold tracking-tight text-slate-900">
              Which Mom Are You?
            </h2>
            <p class="mt-4 text-lg text-slate-600">
              Take our fun personality quiz to discover your parenting style and get personalized
              tips.
            </p>
          </div>
          <div class="mt-8 lg:mt-0 lg:ml-8">
            <InteractivePlaceholder
              title="Quiz: Which Mom Are You?"
              description="Interactive quiz component coming soon."
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
