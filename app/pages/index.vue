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
      subtitle="We want what's best for our children, but being a Mom isn't always easy. Momix Squad brings together Mom Coaches to support you with helpful tips, insights, and facts."
      cta-text="Join the Squad"
      cta-link="/contact"
    />

    <!-- Mission Statement -->
    <section class="bg-white py-12 text-center">
      <div class="mx-auto max-w-4xl px-4">
        <p class="text-xl font-medium italic text-slate-700">
          "Our journey, lessons & sessions are here to make yours a little easier, a little lighter
          and a lot more joyful."
        </p>
        <p class="mt-4 text-slate-600">
          We share experience-based, heartfelt guidance so that every mom feels supported, informed
          and confident in giving her child the very best.
        </p>
      </div>
    </section>

    <!-- "I am Interested in" Quick Links -->
    <section class="bg-momix-50 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="text-center font-display text-3xl font-bold text-slate-900">
          I am Interested in...
        </h2>

        <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          <NuxtLink
            to="/development"
            class="group flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div
              class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
            >
              <UIcon name="i-heroicons-academic-cap" class="h-6 w-6" />
            </div>
            <span class="font-semibold text-slate-900">Mom Development</span>
          </NuxtLink>

          <NuxtLink
            to="/care"
            class="group flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div
              class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-600 group-hover:bg-rose-600 group-hover:text-white"
            >
              <UIcon name="i-heroicons-heart" class="h-6 w-6" />
            </div>
            <span class="font-semibold text-slate-900">Mom Care</span>
          </NuxtLink>

          <NuxtLink
            to="/hobbies"
            class="group flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div
              class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600 group-hover:bg-amber-600 group-hover:text-white"
            >
              <UIcon name="i-heroicons-sparkles" class="h-6 w-6" />
            </div>
            <span class="font-semibold text-slate-900">Hobbies & Tips</span>
          </NuxtLink>

          <NuxtLink
            to="/nutrition"
            class="group flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div
              class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white"
            >
              <UIcon name="i-heroicons-cake" class="h-6 w-6" />
            </div>
            <span class="font-semibold text-slate-900">Food & Nutrition</span>
          </NuxtLink>

          <NuxtLink
            to="/contact"
            class="group flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div
              class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600 group-hover:bg-slate-600 group-hover:text-white"
            >
              <UIcon name="i-heroicons-envelope" class="h-6 w-6" />
            </div>
            <span class="font-semibold text-slate-900">Contact Us</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Quiz Teaser -->
    <section class="py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="overflow-hidden rounded-3xl bg-sage-50 p-8 shadow-sm ring-1 ring-slate-200 md:p-12 lg:flex lg:items-center lg:justify-between"
        >
          <div class="lg:w-1/2">
            <h2 class="font-display text-3xl font-bold tracking-tight text-sage-900">
              Which Mom Are You?
            </h2>
            <p class="mt-4 text-lg text-sage-700">
              Take our fun personality quiz to discover your parenting style and get personalized
              tips.
            </p>
          </div>
          <div class="mt-8 lg:mt-0 lg:ml-8 lg:w-1/2">
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
