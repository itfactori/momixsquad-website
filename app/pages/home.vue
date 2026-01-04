<script setup lang="ts">
useHead({
  title: 'Momix Squad - Nurturing Mothers',
  meta: [
    {
      name: 'description',
      content:
        'Nurturing Mothers to give children the best start in life. Expert guidance, supportive community, and practical resources for every mom.'
    }
  ]
});

const categories = [
  {
    title: 'Mom Development',
    to: '/development',
    icon: 'i-heroicons-academic-cap',
    color: 'primary' as const,
    description: 'From pregnancy to teens, guidance for every stage of motherhood'
  },
  {
    title: 'Mom Care',
    to: '/care',
    icon: 'i-heroicons-heart',
    color: 'secondary' as const,
    description: 'Self-care, wellness, mental health & work-life balance'
  },
  {
    title: 'Hobbies & Tips',
    to: '/hobbies',
    icon: 'i-heroicons-sparkles',
    color: 'accent' as const,
    description: 'Creative hobbies and personal growth activities for moms'
  },
  {
    title: 'Food & Nutrition',
    to: '/nutrition',
    icon: 'i-heroicons-cake',
    color: 'success' as const,
    description: 'Healthy recipes and nutrition guidance for the family'
  }
];

const features = [
  {
    icon: 'i-heroicons-users',
    title: 'Expert Mom Coaches',
    description: 'Learn from experienced mom coaches who understand your journey and challenges'
  },
  {
    icon: 'i-heroicons-heart',
    title: 'Supportive Community',
    description: 'Connect with mothers who share your experiences, triumphs, and challenges'
  },
  {
    icon: 'i-heroicons-book-open',
    title: 'Practical Resources',
    description: 'Access guides, tips, planners, and tools tailored to your unique needs'
  },
  {
    icon: 'i-heroicons-sparkles',
    title: 'Personalized Guidance',
    description: 'Get advice that fits your unique parenting style and family situation'
  }
];

const momStages = [
  { name: 'Moms to be', path: 'moms-to-be', icon: 'i-heroicons-sparkles' },
  { name: 'New Moms (0-2 yrs)', path: 'new-moms', icon: 'i-heroicons-face-smile' },
  { name: 'Toddler Moms (3-5 yrs)', path: 'toddler-moms', icon: 'i-heroicons-puzzle-piece' },
  {
    name: 'School Aged (6-12 yrs)',
    path: 'school-aged-moms',
    icon: 'i-heroicons-academic-cap'
  },
  { name: 'Teen Moms (13-19 yrs)', path: 'teens-moms', icon: 'i-heroicons-user-group' },
  { name: 'Super Moms (20+ yrs)', path: 'super-moms', icon: 'i-heroicons-star' }
];
</script>

<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      title="Nurturing Mothers to give children the best start in life"
      subtitle="We want what's best for our children, but being a Mom isn't always easy. Momix Squad brings together Mom Coaches to support you with helpful tips, insights, and heartfelt guidance."
      cta-text="Join the Squad"
      cta-link="/contact"
      amber-cta-text="Explore Resources"
      amber-cta-link="/development"
      badge="For Every Mom"
    />

    <!-- Mission Statement -->
    <section class="relative overflow-hidden bg-white dark:bg-deep-purple-900 py-20 sm:py-28">
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-radial from-pink-100/50 dark:from-pink-900/20 to-transparent blur-3xl"
        />
      </div>

      <div class="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, y: 30 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.7 }"
        >
          <div class="text-center">
            <div
              class="mb-8 inline-flex items-center gap-2 rounded-full bg-pink-100 dark:bg-pink-900/50 px-6 py-2 text-sm font-semibold text-pink-700 dark:text-pink-300"
            >
              <UIcon name="i-heroicons-heart" class="h-5 w-5" />
              Our Mission
            </div>
            <blockquote class="space-y-6">
              <p
                class="font-display text-2xl font-bold italic leading-relaxed text-neutral-900 dark:text-pink-50 sm:text-3xl lg:text-4xl"
              >
                "We aim to support Mothers through authentic guidance, evidence-based parenting tools and a compassionate sisterhood. Our mission is to strengthen families by helping mothers navigate modern challenges with wisdom, resilience and faith while honoring the important role as a MOM."
              </p>
              <p
                class="mx-auto max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-pink-300 sm:text-xl"
              >
                We share experience-based, heartfelt guidance so that every mom feels supported,
                informed and confident in giving her child the very best.
              </p>
            </blockquote>
          </div>
        </Motion>
      </div>
    </section>

    <!-- "I am Interested in" Categories -->
    <section class="relative overflow-hidden bg-neutral-50 dark:bg-deep-purple-950 py-20 sm:py-28">
      <!-- Mesh background -->
      <div class="absolute inset-0 mesh-bg" />

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <div class="text-center">
            <h2
              class="font-display text-3xl font-bold tracking-tight text-neutral-900 dark:text-pink-50 sm:text-4xl lg:text-5xl"
            >
              Explore Our Resources
            </h2>
            <p
              class="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-pink-300 sm:text-xl"
            >
              Choose the area you'd like to learn more about
            </p>
          </div>
        </Motion>

        <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Motion
            v-for="(category, index) in categories"
            :key="category.to"
            :initial="{ opacity: 0, y: 30 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: index * 0.1 }"
          >
            <NuxtLink
              :to="category.to"
              class="group relative flex flex-col items-center rounded-3xl bg-white dark:bg-deep-purple-900 p-8 text-center shadow-lg ring-1 ring-neutral-200 dark:ring-purple-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-pink-300 dark:hover:ring-pink-700"
            >
              <!-- Icon -->
              <div
                class="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
                :class="{
                  'from-pink-500 to-pink-600 shadow-pink-500/30 group-hover:shadow-pink-500/50':
                    category.color === 'primary',
                  'from-purple-500 to-purple-600 shadow-purple-500/30 group-hover:shadow-purple-500/50':
                    category.color === 'secondary',
                  'from-pink-400 to-purple-500 shadow-pink-500/30 group-hover:shadow-pink-500/50':
                    category.color === 'accent',
                  'from-pink-400 to-pink-500 shadow-pink-400/30 group-hover:shadow-pink-400/50':
                    category.color === 'success'
                }"
              >
                <UIcon :name="category.icon" class="h-10 w-10 text-white" />
              </div>

              <!-- Title -->
              <h3
                class="font-display text-xl font-bold text-neutral-900 dark:text-pink-50 transition-colors group-hover:text-pink-600 dark:group-hover:text-pink-400"
              >
                {{ category.title }}
              </h3>

              <!-- Description -->
              <p class="mt-3 text-sm text-neutral-600 dark:text-pink-300">
                {{ category.description }}
              </p>

              <!-- Arrow -->
              <div
                class="mt-6 flex items-center gap-2 text-sm font-semibold text-pink-600 dark:text-pink-400"
              >
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
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.4 }"
          class="mt-12 text-center"
        >
          <NuxtLink
            to="/contact"
            class="group inline-flex items-center gap-3 rounded-2xl border-2 border-neutral-200 dark:border-purple-700 bg-white dark:bg-deep-purple-900 px-8 py-4 font-semibold text-neutral-900 dark:text-pink-50 shadow-sm transition-all hover:-translate-y-1 hover:border-pink-300 dark:hover:border-pink-700 hover:shadow-lg"
          >
            <UIcon name="i-heroicons-envelope" class="h-6 w-6 text-pink-600 dark:text-pink-400" />
            <span>Have Questions? Contact Us</span>
            <UIcon
              name="i-heroicons-arrow-right"
              class="h-5 w-5 transition-transform group-hover:translate-x-1"
            />
          </NuxtLink>
        </Motion>
      </div>
    </section>

    <!-- Mom Development Stages Preview -->
    <section class="bg-white dark:bg-deep-purple-900 py-20 sm:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <div class="text-center">
            <div
              class="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 dark:bg-purple-900/50 px-4 py-2 text-sm font-semibold text-purple-700 dark:text-purple-300"
            >
              <UIcon name="i-heroicons-academic-cap" class="h-4 w-4" />
              Mom Development
            </div>
            <h2
              class="font-display text-3xl font-bold tracking-tight text-neutral-900 dark:text-pink-50 sm:text-4xl"
            >
              Guidance for Every Stage
            </h2>
            <p class="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-pink-300">
              From pregnancy to grown children, we're here for every step of your journey
            </p>
          </div>
        </Motion>

        <div class="mt-12 flex flex-wrap justify-center gap-4">
          <Motion
            v-for="(stage, index) in momStages"
            :key="stage.name"
            :initial="{ opacity: 0, scale: 0.9 }"
            :animate="{ opacity: 1, scale: 1 }"
            :transition="{ duration: 0.4, delay: index * 0.1 }"
          >
            <NuxtLink
              :to="`/development/${stage.path}`"
              class="group flex items-center gap-3 rounded-xl bg-neutral-100 dark:bg-deep-purple-800 px-5 py-3 transition-all duration-300 hover:bg-pink-100 dark:hover:bg-pink-900/50 hover:shadow-md"
            >
              <div
                class="flex h-10 w-10 items-center justify-center rounded-lg bg-white dark:bg-deep-purple-700 shadow-sm transition-colors group-hover:bg-pink-500"
              >
                <UIcon
                  :name="stage.icon"
                  class="h-5 w-5 text-pink-600 dark:text-pink-400 group-hover:text-white"
                />
              </div>
              <span
                class="text-sm font-medium text-neutral-700 dark:text-pink-200 group-hover:text-pink-700 dark:group-hover:text-pink-300"
                >{{ stage.name }}</span
              >
            </NuxtLink>
          </Motion>
        </div>

        <Motion
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 0.5, delay: 0.6 }"
          class="mt-8 text-center"
        >
          <UButton to="/development" color="primary" variant="link" size="lg">
            Explore all stages
            <template #trailing>
              <UIcon name="i-heroicons-arrow-right" class="h-4 w-4" />
            </template>
          </UButton>
        </Motion>
      </div>
    </section>

    <!-- Features/Benefits Section -->
    <section class="relative overflow-hidden bg-neutral-50 dark:bg-neutral-950 py-20 sm:py-28">
      <div class="absolute inset-0 mesh-bg opacity-50" />

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <div class="text-center">
            <h2
              class="font-display text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl lg:text-5xl"
            >
              Why Join Momix Squad?
            </h2>
            <p
              class="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400 sm:text-xl"
            >
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
    <section class="relative overflow-hidden bg-white dark:bg-neutral-900 py-20 sm:py-28">
      <div class="absolute inset-0 overflow-hidden opacity-30 dark:opacity-20">
        <div
          class="absolute -left-48 top-0 h-96 w-96 rounded-full bg-emerald-200 dark:bg-emerald-900/50 blur-3xl"
        />
        <div
          class="absolute -right-48 bottom-0 h-96 w-96 rounded-full bg-primary-200 dark:bg-primary-900/50 blur-3xl"
        />
      </div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 0.7 }"
        >
          <div
            class="overflow-hidden rounded-3xl bg-gradient-to-br from-primary-50 to-teal-50 dark:from-primary-950/50 dark:to-teal-950/50 shadow-2xl ring-1 ring-neutral-200/50 dark:ring-neutral-700/50"
          >
            <div class="grid gap-12 p-8 md:p-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              <!-- Content -->
              <div class="space-y-6">
                <div
                  class="inline-flex items-center gap-2 rounded-full bg-amber-100 dark:bg-amber-900/50 px-4 py-2 text-sm font-semibold text-amber-700 dark:text-amber-300"
                >
                  <UIcon name="i-heroicons-sparkles" class="h-5 w-5" />
                  Coming Soon
                </div>
                <h2
                  class="font-display text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl"
                >
                  Which Mom Are You?
                </h2>
                <p class="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                  Take our fun personality quiz to discover your parenting style and get
                  personalized tips tailored to your unique journey as a mother. Interactive,
                  ice-breaking quizzes designed just for moms!
                </p>
                <div class="flex flex-wrap gap-4">
                  <UButton color="primary" size="lg" variant="solid" disabled class="opacity-70">
                    Take the Quiz
                    <template #trailing>
                      <UIcon name="i-heroicons-arrow-right" class="h-5 w-5" />
                    </template>
                  </UButton>
                  <UButton
                    to="/development"
                    color="neutral"
                    size="lg"
                    variant="outline"
                    class="border-neutral-300 dark:border-neutral-700"
                  >
                    Explore Stages
                  </UButton>
                </div>
              </div>

              <!-- Visual -->
              <div class="relative">
                <div
                  class="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary-200/50 to-teal-200/50 dark:from-primary-900/30 dark:to-teal-900/30 p-8 ring-1 ring-white/50 dark:ring-neutral-700/50"
                >
                  <div class="flex h-full flex-col items-center justify-center text-center">
                    <div class="relative">
                      <UIcon
                        name="i-heroicons-question-mark-circle"
                        class="h-32 w-32 text-primary-400 dark:text-primary-500"
                      />
                      <div class="absolute inset-0 animate-ping">
                        <UIcon
                          name="i-heroicons-question-mark-circle"
                          class="h-32 w-32 text-primary-400/30 dark:text-primary-500/30"
                        />
                      </div>
                    </div>
                    <p class="mt-6 text-lg font-semibold text-primary-700 dark:text-primary-300">
                      Interactive Quiz Coming Soon
                    </p>
                    <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                      Questionnaires for Working Moms & Moms-to-be
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Motion>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="bg-gradient-to-br from-primary-600 to-primary-700 dark:from-primary-800 dark:to-primary-900 py-20 sm:py-28"
    >
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <div class="text-center">
            <h2
              class="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Ready to Join the Squad?
            </h2>
            <p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-50">
              Connect with us and become part of a supportive community of mothers helping each
              other thrive.
            </p>
            <div class="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <UButton
                to="/contact"
                color="neutral"
                size="xl"
                variant="solid"
                class="bg-white text-neutral-900 hover:bg-neutral-50 shadow-xl"
              >
                Get in Touch
                <template #trailing>
                  <UIcon name="i-heroicons-arrow-right" class="h-5 w-5" />
                </template>
              </UButton>
              <UButton
                to="/development"
                size="xl"
                variant="outline"
                class="border-white/30 text-white hover:bg-white/10"
              >
                Explore Resources
              </UButton>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  </div>
</template>
