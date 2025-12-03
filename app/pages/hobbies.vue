<script setup lang="ts">
useHead({
  title: 'Hobbies & Tips for Growth - Momix Squad',
  meta: [
    {
      name: 'description',
      content:
        'Rediscover your passions and grow as a person. Creative hobbies, skill-based activities, and personal development resources for moms.'
    }
  ]
});

const hobbyCategories = [
  {
    title: 'Creative Hobbies',
    icon: 'i-heroicons-paint-brush',
    color: 'secondary' as const,
    items: [
      'Journaling & scrapbooking',
      'DIY crafts & home décor projects',
      'Painting & sketching',
      'Crochet, knitting, sewing',
      'Photography for moms',
      'Baking & cake decoration',
      'Gardening',
      'Aromatherapy & essential oils'
    ]
  },
  {
    title: 'Skill-Based Hobbies',
    icon: 'i-heroicons-academic-cap',
    color: 'primary' as const,
    items: [
      'Learning a new language',
      'Coding for beginners',
      'Writing & blogging',
      'Digital design (Canva, Procreate)',
      'Calligraphy & hand lettering'
    ]
  },
  {
    title: 'Wellness & Nature',
    icon: 'i-heroicons-sun',
    color: 'success' as const,
    items: [
      'Yoga or stretching routines',
      'Nature walks / hiking',
      'Reading & book clubs',
      'Mindful meditation',
      'Indoor plant care'
    ]
  },
  {
    title: 'Social & Community',
    icon: 'i-heroicons-users',
    color: 'accent' as const,
    items: [
      'Starting a mom support circle',
      'Volunteering',
      'Hosting get-togethers',
      'Community learning groups',
      'Online mom communities'
    ]
  }
];

const personalDevelopment = [
  {
    title: 'Goal Setting for Moms',
    description:
      'Learn practical techniques to set and achieve meaningful goals while managing your busy life.',
    icon: 'i-heroicons-flag'
  },
  {
    title: 'Rediscover Yourself',
    description:
      'Explore ways to reconnect with your identity beyond motherhood and find what makes you unique.',
    icon: 'i-heroicons-sparkles'
  },
  {
    title: 'Time-blocking for Hobbies',
    description:
      'Master the art of carving out time for yourself with effective scheduling strategies.',
    icon: 'i-heroicons-clock'
  },
  {
    title: 'Courses & Certifications',
    description:
      'Explore recommended courses and certifications that moms can pursue for personal and professional growth.',
    icon: 'i-heroicons-academic-cap'
  }
];

const colorClasses = {
  primary: {
    bg: 'bg-primary-100 dark:bg-primary-900/50',
    bgGradient: 'from-primary-50 to-primary-100/50 dark:from-primary-950/50 dark:to-primary-900/30',
    text: 'text-primary-600 dark:text-primary-400',
    iconBg: 'from-primary-500 to-primary-600',
    ring: 'ring-primary-200 dark:ring-primary-800'
  },
  secondary: {
    bg: 'bg-amber-100 dark:bg-amber-900/50',
    bgGradient: 'from-amber-50 to-amber-100/50 dark:from-amber-950/50 dark:to-amber-900/30',
    text: 'text-amber-600 dark:text-amber-400',
    iconBg: 'from-amber-500 to-amber-600',
    ring: 'ring-amber-200 dark:ring-amber-800'
  },
  accent: {
    bg: 'bg-teal-100 dark:bg-teal-900/50',
    bgGradient: 'from-teal-50 to-teal-100/50 dark:from-teal-950/50 dark:to-teal-900/30',
    text: 'text-teal-600 dark:text-teal-400',
    iconBg: 'from-teal-500 to-teal-600',
    ring: 'ring-teal-200 dark:ring-teal-800'
  },
  success: {
    bg: 'bg-emerald-100 dark:bg-emerald-900/50',
    bgGradient: 'from-emerald-50 to-emerald-100/50 dark:from-emerald-950/50 dark:to-emerald-900/30',
    text: 'text-emerald-600 dark:text-emerald-400',
    iconBg: 'from-emerald-500 to-emerald-600',
    ring: 'ring-emerald-200 dark:ring-emerald-800'
  }
};
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="relative overflow-hidden bg-neutral-50 dark:bg-neutral-950 py-20 sm:py-28">
      <div class="absolute inset-0 mesh-bg" />
      <div
        class="absolute inset-0 bg-gradient-to-b from-teal-100/30 dark:from-teal-900/20 to-transparent"
      />

      <div class="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <div
            class="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-100 dark:bg-teal-900/50 px-6 py-2 text-sm font-semibold text-teal-700 dark:text-teal-300 ring-1 ring-teal-200 dark:ring-teal-800"
          >
            <UIcon name="i-heroicons-sparkles" class="h-5 w-5" />
            Hobbies & Personal Growth
          </div>
          <h1
            class="font-display text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl lg:text-6xl"
          >
            Rediscover Your Passions
          </h1>
          <p
            class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-xl"
          >
            Motherhood is a big part of who you are, but it's not the only part. Reconnect with the
            things that bring you joy and help you grow.
          </p>
        </Motion>
      </div>
    </section>

    <!-- Hobby Categories -->
    <section class="bg-white dark:bg-neutral-900 py-20 sm:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-8 md:grid-cols-2">
          <Motion
            v-for="(category, index) in hobbyCategories"
            :key="category.title"
            :initial="{ opacity: 0, y: 30 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: index * 0.1 }"
          >
            <div
              class="group h-full rounded-3xl p-8 shadow-lg ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-gradient-to-br"
              :class="[colorClasses[category.color].bgGradient, colorClasses[category.color].ring]"
            >
              <!-- Header -->
              <div class="mb-6 flex items-center gap-4">
                <div
                  class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg transition-all duration-300 group-hover:scale-110"
                  :class="colorClasses[category.color].iconBg"
                >
                  <UIcon :name="category.icon" class="h-7 w-7 text-white" />
                </div>
                <h2 class="font-display text-2xl font-bold text-neutral-900 dark:text-neutral-50">
                  {{ category.title }}
                </h2>
              </div>

              <!-- Items -->
              <ul class="space-y-3">
                <li v-for="item in category.items" :key="item" class="flex items-center gap-3">
                  <UIcon
                    name="i-heroicons-check-circle-solid"
                    class="h-5 w-5 flex-shrink-0"
                    :class="colorClasses[category.color].text"
                  />
                  <span class="text-neutral-700 dark:text-neutral-300">{{ item }}</span>
                </li>
              </ul>
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Personal Development Section -->
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
              class="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 dark:bg-primary-900/50 px-4 py-2 text-sm font-semibold text-primary-700 dark:text-primary-300"
            >
              <UIcon name="i-heroicons-rocket-launch" class="h-4 w-4" />
              Personal Development
            </div>
            <h2
              class="font-display text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl"
            >
              Grow & Evolve
            </h2>
            <p class="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
              Tools and resources to help you thrive as a person, not just as a mom
            </p>
          </div>
        </Motion>

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Motion
            v-for="(item, index) in personalDevelopment"
            :key="item.title"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: index * 0.1 }"
          >
            <div
              class="group rounded-2xl bg-white dark:bg-neutral-900 p-6 shadow-lg ring-1 ring-neutral-200 dark:ring-neutral-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-primary-300 dark:hover:ring-primary-700"
            >
              <div
                class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 transition-colors group-hover:bg-primary-500 group-hover:text-white"
              >
                <UIcon :name="item.icon" class="h-6 w-6" />
              </div>
              <h3 class="font-display text-lg font-bold text-neutral-900 dark:text-neutral-50">
                {{ item.title }}
              </h3>
              <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {{ item.description }}
              </p>
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Let's Read Section -->
    <section class="bg-white dark:bg-neutral-900 py-20 sm:py-28">
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 0.6 }"
        >
          <div
            class="overflow-hidden rounded-3xl bg-gradient-to-br from-primary-100 to-amber-100 dark:from-primary-950/50 dark:to-amber-950/50 p-8 shadow-xl ring-1 ring-neutral-200/50 dark:ring-neutral-700/50 sm:p-12"
          >
            <div class="grid gap-8 lg:grid-cols-2 lg:items-center">
              <!-- Content -->
              <div>
                <div
                  class="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-neutral-900/80 px-4 py-2 text-sm font-semibold text-primary-700 dark:text-primary-300 shadow-lg"
                >
                  <UIcon name="i-heroicons-book-open" class="h-4 w-4" />
                  Let's Read
                </div>
                <h2
                  class="font-display text-3xl font-bold text-neutral-900 dark:text-neutral-50 sm:text-4xl"
                >
                  Courses & Certifications
                </h2>
                <p class="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                  Upskill and learn something new today. Explore recommended courses and
                  certifications that moms can pursue from home.
                </p>
                <ul class="mt-6 space-y-3">
                  <li class="flex items-center gap-3">
                    <UIcon
                      name="i-heroicons-check-circle-solid"
                      class="h-5 w-5 text-emerald-600 dark:text-emerald-400"
                    />
                    <span class="text-neutral-700 dark:text-neutral-300"
                      >Online courses for flexible learning</span
                    >
                  </li>
                  <li class="flex items-center gap-3">
                    <UIcon
                      name="i-heroicons-check-circle-solid"
                      class="h-5 w-5 text-emerald-600 dark:text-emerald-400"
                    />
                    <span class="text-neutral-700 dark:text-neutral-300"
                      >Professional certifications</span
                    >
                  </li>
                  <li class="flex items-center gap-3">
                    <UIcon
                      name="i-heroicons-check-circle-solid"
                      class="h-5 w-5 text-emerald-600 dark:text-emerald-400"
                    />
                    <span class="text-neutral-700 dark:text-neutral-300"
                      >Creative & skill-building workshops</span
                    >
                  </li>
                </ul>
                <div class="mt-8">
                  <UButton color="primary" size="lg" variant="solid" disabled class="opacity-70">
                    Browse Courses
                    <template #trailing>
                      <UIcon name="i-heroicons-arrow-right" class="h-5 w-5" />
                    </template>
                  </UButton>
                  <p class="mt-2 text-xs text-neutral-500 dark:text-neutral-500">Coming soon</p>
                </div>
              </div>

              <!-- Visual -->
              <div class="relative">
                <div
                  class="aspect-square rounded-2xl bg-white/80 dark:bg-neutral-900/80 p-8 shadow-lg ring-1 ring-white/50 dark:ring-neutral-700/50"
                >
                  <div class="flex h-full flex-col items-center justify-center text-center">
                    <div class="flex items-center gap-4">
                      <div
                        class="flex h-16 w-16 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/50"
                      >
                        <UIcon
                          name="i-heroicons-book-open"
                          class="h-8 w-8 text-primary-600 dark:text-primary-400"
                        />
                      </div>
                      <div
                        class="flex h-16 w-16 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-900/50"
                      >
                        <UIcon
                          name="i-heroicons-academic-cap"
                          class="h-8 w-8 text-amber-600 dark:text-amber-400"
                        />
                      </div>
                      <div
                        class="flex h-16 w-16 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/50"
                      >
                        <UIcon
                          name="i-heroicons-document-text"
                          class="h-8 w-8 text-teal-600 dark:text-teal-400"
                        />
                      </div>
                    </div>
                    <p class="mt-6 text-lg font-semibold text-neutral-700 dark:text-neutral-300">
                      Learn. Grow. Thrive.
                    </p>
                    <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-500">
                      Curated resources for busy moms
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Motion>
      </div>
    </section>

    <!-- CTA -->
    <section
      class="bg-gradient-to-br from-teal-600 to-teal-700 dark:from-teal-800 dark:to-teal-900 py-16 sm:py-20"
    >
      <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <h2 class="font-display text-2xl font-bold text-white sm:text-3xl">
            Ready to explore new interests?
          </h2>
          <p class="mt-4 text-lg text-teal-50">
            Connect with our community and discover hobbies that spark joy.
          </p>
          <div class="mt-8">
            <UButton to="/contact" color="white" size="xl" variant="solid">
              Join the Community
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
