<script setup lang="ts">
useHead({
  title: 'Self Care & Wellness - Momix Squad',
  meta: [
    {
      name: 'description',
      content:
        'Comprehensive wellness resources for moms. Self-care, mental health, spiritual wellness, and work-life balance guidance.'
    }
  ]
});

const balanceItems = [
  {
    label: 'For Working Moms',
    icon: 'i-heroicons-briefcase',
    content:
      'Time management, meal planning, managing work stress, setting boundaries, and overcoming guilt.'
  },
  {
    label: 'For Work-from-Home Moms',
    icon: 'i-heroicons-computer-desktop',
    content:
      'Setting up workspace, balancing calls with kids, managing distractions, and scheduling breaks.'
  },
  {
    label: 'For Moms in Joint Families',
    icon: 'i-heroicons-users',
    content:
      'Balancing expectations, setting boundaries, communicating needs, and coordinating childcare.'
  },
  {
    label: 'For Single Moms',
    icon: 'i-heroicons-user',
    content:
      'Time-saving systems, building support networks, financial management, and emotional resilience.'
  },
  {
    label: 'For Stay-at-Home Moms',
    icon: 'i-heroicons-home',
    content:
      'Maintaining identity, creating daily routines, staying connected, and managing home workload.'
  },
  {
    label: 'Work–Life Systems & Strategies',
    icon: 'i-heroicons-clipboard-document-list',
    content:
      'Weekly planners, emergency backup plans, stress management tools, and delegating tasks.'
  },
  {
    label: 'Emotional Balance',
    icon: 'i-heroicons-scale',
    content:
      'Letting go of perfection, overcoming self-doubt, mindfulness, and building a support circle.'
  },
  {
    label: 'Relationship Balance',
    icon: 'i-heroicons-heart',
    content:
      'Staying aligned with partner, co-parenting strategies, and family communication rituals.'
  },
  {
    label: 'Islamic-Integrated Balance',
    icon: 'i-heroicons-moon',
    content:
      'Making daily tasks acts of ibadah, duas for ease, Sunnah routines, and bringing tranquility home.'
  }
];

const spiritualWellness = [
  {
    title: 'Daily Duas',
    description: 'Duas for calmness & strength. Mindful breathing with Duas.',
    icon: 'i-heroicons-book-open'
  },
  {
    title: 'Quranic Healing',
    description: 'Quran-based emotional healing and finding barakah.',
    icon: 'i-heroicons-heart'
  },
  {
    title: 'Sunnah Routines',
    description: 'Following Sunnah and creating a peaceful home.',
    icon: 'i-heroicons-moon'
  }
];
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="relative overflow-hidden bg-gradient-to-br from-secondary-50 via-white to-primary-50 py-20 sm:py-28">
      <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary-100 px-6 py-2 text-sm font-semibold text-secondary-700">
            <UIcon name="i-heroicons-heart" class="h-5 w-5" />
            Wellness & Self-Care
          </div>
          <h1 class="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Mom Care & Wellness
          </h1>
          <p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            You can't pour from an empty cup. Prioritize your well-being to be the best mom you can be.
          </p>
        </Motion>
      </div>
    </section>

    <!-- Physical & Mental Health Grid -->
    <section class="bg-white py-20 sm:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-8 lg:grid-cols-2">
          <!-- Self Care Card -->
          <Motion
            :initial="{ opacity: 0, x: -30 }"
            :visible-once="true"
            :visible="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.6 }"
          >
            <div class="h-full rounded-3xl bg-gradient-to-br from-secondary-50 to-secondary-100/50 p-8 shadow-lg ring-1 ring-secondary-200/50 sm:p-10">
              <div class="mb-6 flex items-center gap-3">
                <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary-500 shadow-lg">
                  <UIcon name="i-heroicons-heart" class="h-7 w-7 text-white" />
                </div>
                <h2 class="font-display text-2xl font-bold text-secondary-900 sm:text-3xl">
                  Self Care & Physical Health
                </h2>
              </div>
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle-solid" class="mt-0.5 h-6 w-6 flex-shrink-0 text-secondary-600" />
                  <span class="text-base text-secondary-900">Postpartum healing & strength</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle-solid" class="mt-0.5 h-6 w-6 flex-shrink-0 text-secondary-600" />
                  <span class="text-base text-secondary-900">Hormonal balance & Healthy weight</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle-solid" class="mt-0.5 h-6 w-6 flex-shrink-0 text-secondary-600" />
                  <span class="text-base text-secondary-900">Safe home workouts & Core recovery</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle-solid" class="mt-0.5 h-6 w-6 flex-shrink-0 text-secondary-600" />
                  <span class="text-base text-secondary-900">Sleep routines & Digital detox</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle-solid" class="mt-0.5 h-6 w-6 flex-shrink-0 text-secondary-600" />
                  <span class="text-base text-secondary-900">Nutrition for energy & immunity</span>
                </li>
              </ul>
            </div>
          </Motion>

          <!-- Mental Health Card -->
          <Motion
            :initial="{ opacity: 0, x: 30 }"
            :visible-once="true"
            :visible="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.6 }"
          >
            <div class="h-full rounded-3xl bg-gradient-to-br from-primary-50 to-primary-100/50 p-8 shadow-lg ring-1 ring-primary-200/50 sm:p-10">
              <div class="mb-6 flex items-center gap-3">
                <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500 shadow-lg">
                  <UIcon name="i-heroicons-face-smile" class="h-7 w-7 text-white" />
                </div>
                <h2 class="font-display text-2xl font-bold text-primary-900 sm:text-3xl">
                  Mental & Emotional Health
                </h2>
              </div>
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle-solid" class="mt-0.5 h-6 w-6 flex-shrink-0 text-primary-600" />
                  <span class="text-base text-primary-900">Stress-relief & Overcoming guilt</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle-solid" class="mt-0.5 h-6 w-6 flex-shrink-0 text-primary-600" />
                  <span class="text-base text-primary-900">Mood swings & Emotional regulation</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle-solid" class="mt-0.5 h-6 w-6 flex-shrink-0 text-primary-600" />
                  <span class="text-base text-primary-900">Building patience & calmness</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle-solid" class="mt-0.5 h-6 w-6 flex-shrink-0 text-primary-600" />
                  <span class="text-base text-primary-900">Mindfulness & Journaling prompts</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle-solid" class="mt-0.5 h-6 w-6 flex-shrink-0 text-primary-600" />
                  <span class="text-base text-primary-900">Social support & Mom friendships</span>
                </li>
              </ul>
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Spiritual Wellness -->
    <section class="relative overflow-hidden bg-gradient-to-br from-success-50 to-primary-50 py-20 sm:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="true"
          :visible="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <div class="text-center">
            <h2 class="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Spiritual Wellness
            </h2>
            <p class="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Find peace and balance through spiritual practices
            </p>
          </div>
        </Motion>

        <div class="mt-12 grid gap-8 md:grid-cols-3">
          <ContentCard
            v-for="item in spiritualWellness"
            :key="item.title"
            :title="item.title"
            :description="item.description"
            :icon="item.icon"
            color="success"
          />
        </div>
      </div>
    </section>

    <!-- Work & Mom Life Balance -->
    <section class="bg-white py-20 sm:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="true"
          :visible="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <div class="text-center">
            <h2 class="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Work & Mom Life Balance
            </h2>
            <p class="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Tailored guidance for every mom's unique situation
            </p>
          </div>
        </Motion>

        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="true"
          :visible="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.2 }"
        >
          <div class="mx-auto mt-12 max-w-4xl rounded-3xl bg-gradient-to-br from-slate-50 to-primary-50/30 p-8 shadow-lg sm:p-12">
            <UAccordion :items="balanceItems" color="white" variant="soft" size="xl" multiple>
              <template #item="{ item }">
                <div class="px-4 pb-4 pt-2">
                  <p class="text-base leading-relaxed text-slate-700">
                    {{ item.content }}
                  </p>
                </div>
              </template>
            </UAccordion>
          </div>
        </Motion>
      </div>
    </section>

    <!-- Questionnaire CTA -->
    <section class="relative overflow-hidden bg-gradient-to-br from-accent-50 to-secondary-50 py-20 sm:py-28">
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :visible-once="true"
          :visible="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 0.6 }"
        >
          <div class="overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200/50">
            <div class="p-8 sm:p-12">
              <div class="text-center">
                <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-accent-100 px-6 py-2 text-sm font-semibold text-accent-700">
                  <UIcon name="i-heroicons-clipboard-document-check" class="h-5 w-5" />
                  Share Your Experience
                </div>
                <h3 class="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
                  Help Us Support You Better
                </h3>
                <p class="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                  Take our brief questionnaire to help us understand your unique challenges and provide personalized guidance.
                </p>
                <div class="mt-8">
                  <UButton color="primary" size="xl" variant="solid">
                    Take the Questionnaire
                    <template #trailing>
                      <UIcon name="i-heroicons-arrow-right" class="h-5 w-5" />
                    </template>
                  </UButton>
                </div>
              </div>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  </div>
</template>
