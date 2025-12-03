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

const categories = [
  {
    title: 'Mom Development',
    to: '/development',
    icon: 'i-heroicons-academic-cap',
    color: 'primary',
    description: 'From pregnancy to teens, guidance for every stage'
  },
  {
    title: 'Mom Care',
    to: '/care',
    icon: 'i-heroicons-heart',
    color: 'secondary',
    description: 'Self-care, wellness, and mental health support'
  },
  {
    title: 'Hobbies & Tips',
    to: '/hobbies',
    icon: 'i-heroicons-sparkles',
    color: 'accent',
    description: 'Creative hobbies and personal growth activities'
  },
  {
    title: 'Food & Nutrition',
    to: '/nutrition',
    icon: 'i-heroicons-cake',
    color: 'success',
    description: 'Healthy recipes and nutrition guidance'
  }
];

const features = [
  {
    icon: 'i-heroicons-users',
    title: 'Expert Coaches',
    description: 'Learn from experienced mom coaches who understand your journey'
  },
  {
    icon: 'i-heroicons-heart',
    title: 'Supportive Community',
    description: 'Connect with mothers who share your experiences and challenges'
  },
  {
    icon: 'i-heroicons-book-open',
    title: 'Practical Resources',
    description: 'Access guides, tips, and tools tailored to your needs'
  },
  {
    icon: 'i-heroicons-sparkles',
    title: 'Personalized Guidance',
    description: 'Get advice that fits your unique parenting style and situation'
  }
];
</script>

<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      title="Nurturing Mothers to give children the best start in life"
      subtitle="We want what's best for our children, but being a Mom isn't always easy. Momix Squad brings together Mom Coaches to support you with helpful tips, insights, and facts."
      cta-text="Join the Squad"
      cta-link="/contact"
      secondary-cta-text="Learn More"
      secondary-cta-link="/about"
    />

    <!-- Mission Statement -->
    <section class="relative overflow-hidden bg-white py-20 sm:py-28">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="true"
          :visible="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.7 }"
        >
          <div class="text-center">
            <div class="mb-8 inline-flex items-center gap-2 rounded-full bg-primary-50 px-6 py-2 text-sm font-semibold text-primary-700">
              <UIcon name="i-heroicons-heart" class="h-5 w-5" />
              Our Mission
            </div>
            <blockquote class="space-y-6">
              <p class="font-display text-2xl font-bold italic leading-relaxed text-slate-900 sm:text-3xl lg:text-4xl">
                "Our journey, lessons & sessions are here to make yours a little easier, a little lighter
                and a lot more joyful."
              </p>
              <p class="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                We share experience-based, heartfelt guidance so that every mom feels supported, informed
                and confident in giving her child the very best.
              </p>
            </blockquote>
          </div>
        </Motion>
      </div>
    </section>

    <!-- "I am Interested in" Categories -->
    <section class="relative overflow-hidden bg-gradient-to-br from-primary-50/50 via-white to-success-50/50 py-20 sm:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="true"
          :visible="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <div class="text-center">
            <h2 class="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Explore Our Resources
            </h2>
            <p class="mx-auto mt-4 max-w-2xl text-lg text-slate-600 sm:text-xl">
              Choose the area you'd like to learn more about
            </p>
          </div>
        </Motion>

        <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Motion
            v-for="(category, index) in categories"
            :key="category.to"
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="true"
            :visible="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: index * 0.1 }"
          >
            <NuxtLink
              :to="category.to"
              class="group relative flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:ring-primary-300/50"
            >
              <!-- Icon -->
              <div
                class="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
                :class="{
                  'from-primary-500 to-primary-600 shadow-primary-500/30 group-hover:shadow-primary-500/50': category.color === 'primary',
                  'from-secondary-500 to-secondary-600 shadow-secondary-500/30 group-hover:shadow-secondary-500/50': category.color === 'secondary',
                  'from-accent-500 to-accent-600 shadow-accent-500/30 group-hover:shadow-accent-500/50': category.color === 'accent',
                  'from-success-500 to-success-600 shadow-success-500/30 group-hover:shadow-success-500/50': category.color === 'success'
                }"
              >
                <UIcon :name="category.icon" class="h-10 w-10 text-white" />
              </div>

              <!-- Title -->
              <h3 class="font-display text-xl font-bold text-slate-900 transition-colors group-hover:text-primary-700">
                {{ category.title }}
              </h3>

              <!-- Description -->
              <p class="mt-3 text-sm text-slate-600">
                {{ category.description }}
              </p>

              <!-- Arrow -->
              <div class="mt-6 flex items-center gap-2 text-sm font-semibold text-primary-600">
                <span>Explore</span>
                <UIcon
                  name="i-heroicons-arrow-right"
                  class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2"
                />
              </div>
            </NuxtLink>
          </Motion>
        </div>

        <!-- Contact CTA -->
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="true"
          :visible="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.4 }"
          class="mt-12 text-center"
        >
          <NuxtLink
            to="/contact"
            class="group inline-flex items-center gap-3 rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 font-semibold text-slate-900 shadow-sm transition-all hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg"
          >
            <UIcon name="i-heroicons-envelope" class="h-6 w-6 text-primary-600" />
            <span>Have Questions? Contact Us</span>
            <UIcon
              name="i-heroicons-arrow-right"
              class="h-5 w-5 transition-transform group-hover:translate-x-1"
            />
          </NuxtLink>
        </Motion>
      </div>
    </section>

    <!-- Features/Benefits Section -->
    <section class="bg-white py-20 sm:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="true"
          :visible="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <div class="text-center">
            <h2 class="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Why Join Momix Squad?
            </h2>
            <p class="mx-auto mt-4 max-w-2xl text-lg text-slate-600 sm:text-xl">
              Everything you need to thrive as a mother
            </p>
          </div>
        </Motion>

        <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <ContentCard
            v-for="feature in features"
            :key="feature.title"
            :title="feature.title"
            :description="feature.description"
            :icon="feature.icon"
            color="primary"
          />
        </div>
      </div>
    </section>

    <!-- Quiz/Interactive Teaser -->
    <section class="relative overflow-hidden bg-gradient-to-br from-success-50 to-primary-50 py-20 sm:py-28">
      <div class="absolute inset-0 overflow-hidden opacity-40">
        <div class="absolute -left-48 top-0 h-96 w-96 rounded-full bg-success-200 blur-3xl" />
        <div class="absolute -right-48 bottom-0 h-96 w-96 rounded-full bg-primary-200 blur-3xl" />
      </div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :visible-once="true"
          :visible="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 0.7 }"
        >
          <div class="overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200/50">
            <div class="grid gap-12 p-8 md:p-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              <!-- Content -->
              <div class="space-y-6">
                <div class="inline-flex items-center gap-2 rounded-full bg-accent-100 px-4 py-2 text-sm font-semibold text-accent-700">
                  <UIcon name="i-heroicons-sparkles" class="h-5 w-5" />
                  Coming Soon
                </div>
                <h2 class="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Which Mom Are You?
                </h2>
                <p class="text-lg leading-relaxed text-slate-600">
                  Take our fun personality quiz to discover your parenting style and get personalized
                  tips tailored to your unique journey as a mother.
                </p>
                <div class="flex flex-wrap gap-4">
                  <UButton color="primary" size="lg" variant="solid" disabled>
                    Take the Quiz
                    <template #trailing>
                      <UIcon name="i-heroicons-arrow-right" class="h-5 w-5" />
                    </template>
                  </UButton>
                  <UButton to="/development" color="white" size="lg" variant="outline">
                    Explore Stages
                  </UButton>
                </div>
              </div>

              <!-- Visual -->
              <div class="relative">
                <div class="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary-100 to-success-100 p-8">
                  <div class="flex h-full flex-col items-center justify-center text-center">
                    <UIcon name="i-heroicons-question-mark-circle" class="h-32 w-32 text-primary-400" />
                    <p class="mt-6 text-lg font-semibold text-primary-700">
                      Interactive Quiz Coming Soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  </div>
</template>
