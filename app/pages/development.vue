<script setup lang="ts">
useHead({
  title: 'Mom Development - Momix Squad',
  meta: [
    {
      name: 'description',
      content:
        'Guidance for every stage of motherhood. From pregnancy to teens and beyond - find resources tailored to your journey.'
    }
  ]
});

const developmentStages = [
  {
    title: 'Moms to be',
    description:
      'Preparing for the arrival of your little one. Prenatal care, nesting tips, and what to expect during pregnancy.',
    icon: 'i-heroicons-sparkles',
    color: 'primary' as const,
    topics: ['Prenatal health', 'Birth preparation', 'Nursery setup', 'Mental preparation']
  },
  {
    title: 'New Moms (0-2 yrs)',
    description:
      'Navigating the newborn phase with confidence. Sleep schedules, feeding, and celebrating early milestones.',
    icon: 'i-heroicons-face-smile',
    color: 'secondary' as const,
    topics: ['Newborn care', 'Sleep training', 'Breastfeeding support', 'Developmental milestones']
  },
  {
    title: 'Toddler Moms (3-5 yrs)',
    description:
      'Managing the energetic toddler years. Tantrums, potty training, and fostering independence.',
    icon: 'i-heroicons-puzzle-piece',
    color: 'accent' as const,
    topics: ['Potty training', 'Managing tantrums', 'Early education', 'Building independence']
  },
  {
    title: 'School Aged Moms (6-12 yrs)',
    description:
      'Supporting education and social development. Homework help, friendships, and growing personalities.',
    icon: 'i-heroicons-academic-cap',
    color: 'success' as const,
    topics: ['School support', 'Social skills', 'Extracurriculars', 'Building confidence']
  },
  {
    title: 'Teen Moms (13-19 yrs)',
    description:
      'Guiding your teen through adolescence. Emotional changes, independence, and maintaining connection.',
    icon: 'i-heroicons-user-group',
    color: 'primary' as const,
    topics: ['Communication', 'Emotional support', 'Setting boundaries', 'Building trust']
  },
  {
    title: 'Super Moms (20+ yrs)',
    description:
      'Transitioning to new chapters. Empty nest, adult children relationships, and rediscovering yourself.',
    icon: 'i-heroicons-star',
    color: 'secondary' as const,
    topics: ['Empty nest transition', 'Adult relationships', 'Self-rediscovery', 'Grandparenting']
  }
];

const interactiveTools = [
  {
    title: 'Weekly Planner Templates',
    description:
      'Downloadable templates customized for different mom stages to help organize your week effectively.',
    icon: 'i-heroicons-calendar-days'
  },
  {
    title: 'Development Checklists',
    description:
      "Track your child's milestones with our comprehensive daily and weekly checklists.",
    icon: 'i-heroicons-clipboard-document-check'
  },
  {
    title: 'Mom Type Quiz',
    description: 'Discover your parenting style with our fun interactive quiz - Which Mom Are You?',
    icon: 'i-heroicons-question-mark-circle'
  }
];

const colorClasses = {
  primary: {
    bg: 'bg-primary-100 dark:bg-primary-900/50',
    text: 'text-primary-600 dark:text-primary-400',
    ring: 'ring-primary-200 dark:ring-primary-800',
    gradient: 'from-primary-500 to-primary-600'
  },
  secondary: {
    bg: 'bg-amber-100 dark:bg-amber-900/50',
    text: 'text-amber-600 dark:text-amber-400',
    ring: 'ring-amber-200 dark:ring-amber-800',
    gradient: 'from-amber-500 to-amber-600'
  },
  accent: {
    bg: 'bg-teal-100 dark:bg-teal-900/50',
    text: 'text-teal-600 dark:text-teal-400',
    ring: 'ring-teal-200 dark:ring-teal-800',
    gradient: 'from-teal-500 to-teal-600'
  },
  success: {
    bg: 'bg-emerald-100 dark:bg-emerald-900/50',
    text: 'text-emerald-600 dark:text-emerald-400',
    ring: 'ring-emerald-200 dark:ring-emerald-800',
    gradient: 'from-emerald-500 to-emerald-600'
  }
};
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="relative overflow-hidden bg-neutral-50 dark:bg-neutral-950 py-20 sm:py-28">
      <!-- Background mesh -->
      <div class="absolute inset-0 mesh-bg" />
      <div
        class="absolute inset-0 bg-gradient-to-b from-primary-100/30 dark:from-primary-900/20 to-transparent"
      />

      <div class="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <div
            class="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-100 dark:bg-primary-900/50 px-6 py-2 text-sm font-semibold text-primary-700 dark:text-primary-300 ring-1 ring-primary-200 dark:ring-primary-800"
          >
            <UIcon name="i-heroicons-academic-cap" class="h-5 w-5" />
            Mom Development
          </div>
          <h1
            class="font-display text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl lg:text-6xl"
          >
            Guidance for Every Stage
          </h1>
          <p
            class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-xl"
          >
            Every stage of motherhood brings new joys and challenges. Find resources tailored to
            your unique journey, wherever you are.
          </p>
        </Motion>
      </div>
    </section>

    <!-- Development Stages Grid -->
    <section class="bg-white dark:bg-neutral-900 py-20 sm:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Motion
            v-for="(stage, index) in developmentStages"
            :key="stage.title"
            :initial="{ opacity: 0, y: 30 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: index * 0.1 }"
          >
            <div
              class="group h-full overflow-hidden rounded-3xl bg-neutral-50 dark:bg-neutral-800 p-8 ring-1 ring-neutral-200 dark:ring-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-primary-300 dark:hover:ring-primary-700"
            >
              <!-- Icon -->
              <div
                class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg transition-all duration-300 group-hover:scale-110"
                :class="colorClasses[stage.color].gradient"
              >
                <UIcon :name="stage.icon" class="h-8 w-8 text-white" />
              </div>

              <!-- Title & Description -->
              <h3 class="font-display text-xl font-bold text-neutral-900 dark:text-neutral-50">
                {{ stage.title }}
              </h3>
              <p class="mt-3 text-neutral-600 dark:text-neutral-400">
                {{ stage.description }}
              </p>

              <!-- Topics -->
              <div class="mt-6 flex flex-wrap gap-2">
                <span
                  v-for="topic in stage.topics"
                  :key="topic"
                  class="rounded-full px-3 py-1 text-xs font-medium transition-colors"
                  :class="[colorClasses[stage.color].bg, colorClasses[stage.color].text]"
                >
                  {{ topic }}
                </span>
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Interactive Tools Section -->
    <section class="relative overflow-hidden bg-neutral-50 dark:bg-neutral-950 py-20 sm:py-28">
      <div class="absolute inset-0 mesh-bg opacity-50" />

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <div class="text-center">
            <div
              class="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 dark:bg-amber-900/50 px-4 py-2 text-sm font-semibold text-amber-700 dark:text-amber-300"
            >
              <UIcon name="i-heroicons-wrench-screwdriver" class="h-4 w-4" />
              Interactive Tools
            </div>
            <h2
              class="font-display text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl"
            >
              Resources to Help You Thrive
            </h2>
            <p class="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
              Practical tools designed to make your journey smoother
            </p>
          </div>
        </Motion>

        <div class="mt-12 grid gap-8 md:grid-cols-3">
          <Motion
            v-for="(tool, index) in interactiveTools"
            :key="tool.title"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: index * 0.1 }"
          >
            <div
              class="group rounded-2xl bg-white dark:bg-neutral-900 p-6 shadow-lg ring-1 ring-neutral-200 dark:ring-neutral-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 transition-colors group-hover:bg-amber-500 group-hover:text-white"
              >
                <UIcon :name="tool.icon" class="h-6 w-6" />
              </div>
              <h3 class="font-display text-lg font-bold text-neutral-900 dark:text-neutral-50">
                {{ tool.title }}
              </h3>
              <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {{ tool.description }}
              </p>
              <div class="mt-4">
                <span
                  class="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400"
                >
                  <span class="relative flex h-2 w-2">
                    <span
                      class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"
                    ></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                  Coming Soon
                </span>
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Quiz Teaser -->
    <section class="bg-white dark:bg-neutral-900 py-20 sm:py-28">
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 0.6 }"
        >
          <div
            class="overflow-hidden rounded-3xl bg-gradient-to-br from-teal-100 to-primary-100 dark:from-teal-950/50 dark:to-primary-950/50 p-8 text-center shadow-xl ring-1 ring-neutral-200/50 dark:ring-neutral-700/50 sm:p-12"
          >
            <div class="mx-auto max-w-2xl">
              <div
                class="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/80 dark:bg-neutral-900/80 shadow-lg"
              >
                <UIcon
                  name="i-heroicons-question-mark-circle"
                  class="h-10 w-10 text-teal-600 dark:text-teal-400"
                />
              </div>
              <h2
                class="font-display text-3xl font-bold text-neutral-900 dark:text-neutral-50 sm:text-4xl"
              >
                Which Mom Are You?
              </h2>
              <p class="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                Take our fun, interactive quiz designed just for moms! Discover your unique
                parenting style and get personalized tips that match your journey.
              </p>
              <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-500">
                Includes questionnaires for Working Moms and Moms-to-be
              </p>
              <div class="mt-8">
                <UButton color="primary" size="xl" variant="solid" disabled class="opacity-70">
                  Coming Soon
                  <template #trailing>
                    <UIcon name="i-heroicons-sparkles" class="h-5 w-5" />
                  </template>
                </UButton>
              </div>
            </div>
          </div>
        </Motion>
      </div>
    </section>

    <!-- CTA -->
    <section
      class="bg-gradient-to-br from-primary-600 to-primary-700 dark:from-primary-800 dark:to-primary-900 py-16 sm:py-20"
    >
      <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <h2 class="font-display text-2xl font-bold text-white sm:text-3xl">
            Need personalized guidance?
          </h2>
          <p class="mt-4 text-lg text-primary-100">
            Our mom coaches are here to support you through every stage.
          </p>
          <div class="mt-8">
            <UButton to="/contact" color="white" size="xl" variant="solid">
              Contact Us
              <template #trailing>
                <UIcon name="i-heroicons-arrow-right" class="h-5 w-5" />
              </template>
            </UButton>
          </div>
        </Motion>
      </div>
    </section>
  </div>
</template>
