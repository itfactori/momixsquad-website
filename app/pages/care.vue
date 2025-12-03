<script setup lang="ts">
useHead({
  title: 'Mom Care & Wellness - Momix Squad',
  meta: [
    {
      name: 'description',
      content: 'Comprehensive wellness resources for moms. Self-care, mental health, spiritual wellness, and work-life balance guidance.'
    }
  ]
});

const selfCareItems = [
  'Postpartum healing & strength',
  'Hormonal balance',
  'Safe home workouts for busy moms',
  'Core & pelvic-floor recovery',
  'Healthy weight maintenance',
  'Sleep routines for moms',
  'Morning & night routines',
  'Digital detox tips',
  'Nutrition for energy & immunity',
  'Prenatal & postnatal fitness',
  'Managing fatigue & burnout'
];

const mentalHealthItems = [
  'Stress-relief practices',
  'Mommy guilt & how to overcome it',
  'Mood swings & emotional regulation',
  'Building patience & calmness',
  'Mindfulness for overwhelmed moms',
  'Journaling prompts for clarity',
  'When to seek professional help',
  'Social support & mom friendships'
];

const spiritualWellness = [
  {
    title: 'Daily Duas for Calmness',
    description: 'Mindful breathing with Duas to bring peace to your daily routine.',
    icon: 'i-heroicons-book-open'
  },
  {
    title: 'Quran-based Healing',
    description: 'Emotional healing through Quranic verses and reflection.',
    icon: 'i-heroicons-heart'
  },
  {
    title: 'Sunnah Routines',
    description: 'Following Sunnah practices for productivity and barakah.',
    icon: 'i-heroicons-moon'
  },
  {
    title: 'Peaceful Home',
    description: 'Creating tranquil home environments through Islamic practices.',
    icon: 'i-heroicons-home'
  }
];

const balanceCategories = [
  {
    title: 'For Working Moms',
    icon: 'i-heroicons-briefcase',
    items: [
      'Time management for busy working moms',
      'Creating a realistic daily schedule',
      'Meal planning for hectic weekdays',
      'Managing work stress while parenting',
      'Setting healthy boundaries at work',
      'Communicating with employer about flexibility',
      'Guilt-free parenting strategies',
      'Staying emotionally connected with kids',
      'Quick self-care routines for workdays',
      'Smart use of weekends for rest & bonding'
    ]
  },
  {
    title: 'For Work-from-Home Moms',
    icon: 'i-heroicons-computer-desktop',
    items: [
      'Setting up a productive home workspace',
      'Balancing calls/meetings with kids\' routines',
      'Managing distractions at home',
      'Toddler-friendly activities during work hours',
      'Creating WFH boundaries with family',
      'Scheduling breaks for mental wellness',
      'Productivity tools & apps for moms',
      'Managing burnout when work and home merge'
    ]
  },
  {
    title: 'For Moms in Joint Families',
    icon: 'i-heroicons-users',
    items: [
      'Balancing expectations of elders',
      'Navigating household responsibilities',
      'Setting respectful but firm boundaries',
      'Maintaining your parenting style',
      'Communicating needs openly',
      'Finding personal time in a full house',
      'Coordinating childcare with family',
      'Handling unsolicited advice gracefully',
      'Strengthening relationships with in-laws'
    ]
  },
  {
    title: 'For Single Moms',
    icon: 'i-heroicons-user',
    items: [
      'Time-saving systems for solo parenting',
      'Building a strong support network',
      'Managing finances independently',
      'Self-care without guilt',
      'Emotional resilience tips',
      'Efficient home routines',
      'Creating calm, secure environment for kids'
    ]
  },
  {
    title: 'For Stay-at-Home Moms',
    icon: 'i-heroicons-home',
    items: [
      'Maintaining identity beyond motherhood',
      'Creating a daily routine with purpose',
      'Staying mentally and socially connected',
      'Managing home workload efficiently',
      'Exploring hobbies or remote work options',
      'Balancing expectations from family'
    ]
  },
  {
    title: 'Work-Life Systems & Strategies',
    icon: 'i-heroicons-clipboard-document-list',
    items: [
      'Weekly planner templates',
      'Balancing school routines & extracurriculars',
      'Emergency backup plans for moms',
      'Stress management tools',
      'How to say "no" gracefully',
      'Delegating tasks at home & work',
      'Technology hacks to simplify life'
    ]
  }
];

const activeCategory = ref(0);
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="relative overflow-hidden bg-neutral-50 dark:bg-neutral-950 py-20 sm:py-28">
      <div class="absolute inset-0 mesh-bg" />
      <div class="absolute inset-0 bg-gradient-to-b from-amber-100/30 dark:from-amber-900/20 to-transparent" />
      
      <div class="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 dark:bg-amber-900/50 px-6 py-2 text-sm font-semibold text-amber-700 dark:text-amber-300 ring-1 ring-amber-200 dark:ring-amber-800">
            <UIcon name="i-heroicons-heart" class="h-5 w-5" />
            Wellness & Self-Care
          </div>
          <h1 class="font-display text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl lg:text-6xl">
            Mom Care & Wellness
          </h1>
          <p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-xl">
            You can't pour from an empty cup. Prioritize your well-being to be the best mom you can be.
          </p>
        </Motion>
      </div>
    </section>

    <!-- Physical & Mental Health Grid -->
    <section class="bg-white dark:bg-neutral-900 py-20 sm:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-8 lg:grid-cols-2">
          <!-- Self Care Card -->
          <Motion
            :initial="{ opacity: 0, x: -30 }"
            :visible-once="true"
            :visible="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.6 }"
          >
            <div class="h-full rounded-3xl bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-950/50 dark:to-amber-900/30 p-8 shadow-lg ring-1 ring-amber-200/50 dark:ring-amber-800/50 sm:p-10">
              <div class="mb-6 flex items-center gap-4">
                <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg">
                  <UIcon name="i-heroicons-heart" class="h-7 w-7 text-white" />
                </div>
                <h2 class="font-display text-2xl font-bold text-neutral-900 dark:text-neutral-50 sm:text-3xl">
                  Self Care & Physical Health
                </h2>
              </div>
              <ul class="space-y-3">
                <li v-for="item in selfCareItems" :key="item" class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle-solid" class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600 dark:text-amber-400" />
                  <span class="text-neutral-700 dark:text-neutral-300">{{ item }}</span>
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
            <div class="h-full rounded-3xl bg-gradient-to-br from-primary-50 to-primary-100/50 dark:from-primary-950/50 dark:to-primary-900/30 p-8 shadow-lg ring-1 ring-primary-200/50 dark:ring-primary-800/50 sm:p-10">
              <div class="mb-6 flex items-center gap-4">
                <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg">
                  <UIcon name="i-heroicons-face-smile" class="h-7 w-7 text-white" />
                </div>
                <h2 class="font-display text-2xl font-bold text-neutral-900 dark:text-neutral-50 sm:text-3xl">
                  Mental & Emotional Health
                </h2>
              </div>
              <ul class="space-y-3">
                <li v-for="item in mentalHealthItems" :key="item" class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle-solid" class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400" />
                  <span class="text-neutral-700 dark:text-neutral-300">{{ item }}</span>
                </li>
              </ul>
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Spiritual Wellness -->
    <section class="relative overflow-hidden bg-neutral-50 dark:bg-neutral-950 py-20 sm:py-28">
      <div class="absolute inset-0 mesh-bg opacity-50" />
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="true"
          :visible="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <div class="text-center">
            <div class="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-100 dark:bg-teal-900/50 px-4 py-2 text-sm font-semibold text-teal-700 dark:text-teal-300">
              <UIcon name="i-heroicons-moon" class="h-4 w-4" />
              Spiritual Wellness
            </div>
            <h2 class="font-display text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl">
              Find Peace & Balance
            </h2>
            <p class="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
              Nurture your soul through spiritual practices and find tranquility in your daily routine
            </p>
          </div>
        </Motion>

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Motion
            v-for="(item, index) in spiritualWellness"
            :key="item.title"
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="true"
            :visible="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: index * 0.1 }"
          >
            <div class="group rounded-2xl bg-white dark:bg-neutral-900 p-6 shadow-lg ring-1 ring-neutral-200 dark:ring-neutral-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-teal-300 dark:hover:ring-teal-700">
              <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 transition-colors group-hover:bg-teal-500 group-hover:text-white">
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

    <!-- Work & Mom Life Balance -->
    <section class="bg-white dark:bg-neutral-900 py-20 sm:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="true"
          :visible="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <div class="text-center">
            <div class="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-900/50 px-4 py-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
              <UIcon name="i-heroicons-scale" class="h-4 w-4" />
              Work-Life Balance
            </div>
            <h2 class="font-display text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl">
              Balance for Every Mom
            </h2>
            <p class="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
              Tailored guidance for your unique situation
            </p>
          </div>
        </Motion>

        <!-- Category Tabs -->
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="true"
          :visible="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.2 }"
        >
          <div class="mt-12 flex flex-wrap justify-center gap-2">
            <button
              v-for="(category, index) in balanceCategories"
              :key="category.title"
              class="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200"
              :class="activeCategory === index 
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30' 
                : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'"
              @click="activeCategory = index"
            >
              <UIcon :name="category.icon" class="h-4 w-4" />
              {{ category.title }}
            </button>
          </div>

          <!-- Active Category Content -->
          <div class="mt-8 mx-auto max-w-4xl">
            <Transition
              mode="out-in"
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <div :key="activeCategory" class="rounded-3xl bg-neutral-50 dark:bg-neutral-800 p-8 shadow-lg ring-1 ring-neutral-200 dark:ring-neutral-700 sm:p-10">
                <div class="mb-6 flex items-center gap-4">
                  <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400">
                    <UIcon :name="balanceCategories[activeCategory].icon" class="h-6 w-6" />
                  </div>
                  <h3 class="font-display text-xl font-bold text-neutral-900 dark:text-neutral-50">
                    {{ balanceCategories[activeCategory].title }}
                  </h3>
                </div>
                <ul class="grid gap-3 sm:grid-cols-2">
                  <li 
                    v-for="item in balanceCategories[activeCategory].items" 
                    :key="item"
                    class="flex items-start gap-3"
                  >
                    <UIcon name="i-heroicons-check-circle-solid" class="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span class="text-neutral-700 dark:text-neutral-300">{{ item }}</span>
                  </li>
                </ul>
              </div>
            </Transition>
          </div>
        </Motion>
      </div>
    </section>

    <!-- Emotional & Relationship Balance -->
    <section class="relative overflow-hidden bg-neutral-50 dark:bg-neutral-950 py-20 sm:py-28">
      <div class="absolute inset-0 mesh-bg opacity-50" />
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-8 lg:grid-cols-2">
          <!-- Emotional Balance -->
          <Motion
            :initial="{ opacity: 0, x: -30 }"
            :visible-once="true"
            :visible="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.6 }"
          >
            <div class="rounded-3xl bg-white dark:bg-neutral-900 p-8 shadow-lg ring-1 ring-neutral-200 dark:ring-neutral-800 sm:p-10">
              <div class="mb-6 flex items-center gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400">
                  <UIcon name="i-heroicons-scale" class="h-6 w-6" />
                </div>
                <h3 class="font-display text-xl font-bold text-neutral-900 dark:text-neutral-50">
                  Emotional Balance
                </h3>
              </div>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle-solid" class="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-600 dark:text-teal-400" />
                  <span class="text-neutral-700 dark:text-neutral-300">Letting go of perfection</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle-solid" class="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-600 dark:text-teal-400" />
                  <span class="text-neutral-700 dark:text-neutral-300">Overcoming mom guilt & self-doubt</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle-solid" class="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-600 dark:text-teal-400" />
                  <span class="text-neutral-700 dark:text-neutral-300">Mindfulness for daily calm</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle-solid" class="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-600 dark:text-teal-400" />
                  <span class="text-neutral-700 dark:text-neutral-300">Building a supportive circle of fellow moms</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle-solid" class="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-600 dark:text-teal-400" />
                  <span class="text-neutral-700 dark:text-neutral-300">When to seek counseling or support</span>
                </li>
              </ul>
            </div>
          </Motion>

          <!-- Relationship Balance -->
          <Motion
            :initial="{ opacity: 0, x: 30 }"
            :visible-once="true"
            :visible="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.6 }"
          >
            <div class="rounded-3xl bg-white dark:bg-neutral-900 p-8 shadow-lg ring-1 ring-neutral-200 dark:ring-neutral-800 sm:p-10">
              <div class="mb-6 flex items-center gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400">
                  <UIcon name="i-heroicons-heart" class="h-6 w-6" />
                </div>
                <h3 class="font-display text-xl font-bold text-neutral-900 dark:text-neutral-50">
                  Relationship Balance
                </h3>
              </div>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle-solid" class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600 dark:text-amber-400" />
                  <span class="text-neutral-700 dark:text-neutral-300">Staying aligned with your spouse/partner</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle-solid" class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600 dark:text-amber-400" />
                  <span class="text-neutral-700 dark:text-neutral-300">Co-parenting strategies</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle-solid" class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600 dark:text-amber-400" />
                  <span class="text-neutral-700 dark:text-neutral-300">Family meetings & communication rituals</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle-solid" class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600 dark:text-amber-400" />
                  <span class="text-neutral-700 dark:text-neutral-300">Creating healthy couple time despite busy schedules</span>
                </li>
              </ul>
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Questionnaire CTA -->
    <section class="bg-white dark:bg-neutral-900 py-20 sm:py-28">
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :visible-once="true"
          :visible="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 0.6 }"
        >
          <div class="overflow-hidden rounded-3xl bg-gradient-to-br from-amber-100 to-primary-100 dark:from-amber-950/50 dark:to-primary-950/50 shadow-2xl ring-1 ring-neutral-200/50 dark:ring-neutral-700/50">
            <div class="p-8 sm:p-12">
              <div class="text-center">
                <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-neutral-900/80 px-6 py-2 text-sm font-semibold text-amber-700 dark:text-amber-300 shadow-lg">
                  <UIcon name="i-heroicons-clipboard-document-check" class="h-5 w-5" />
                  Share Your Experience
                </div>
                <h3 class="font-display text-3xl font-bold text-neutral-900 dark:text-neutral-50 sm:text-4xl">
                  Help Us Support You Better
                </h3>
                <p class="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
                  Take our brief questionnaire to help us understand your unique challenges and provide personalized guidance tailored to your journey.
                </p>
                <div class="mt-8 flex flex-wrap justify-center gap-4">
                  <UButton color="primary" size="xl" variant="solid" disabled class="opacity-70">
                    Working Mom Questionnaire
                    <template #trailing>
                      <UIcon name="i-heroicons-arrow-right" class="h-5 w-5" />
                    </template>
                  </UButton>
                  <UButton color="neutral" size="xl" variant="outline" disabled class="opacity-70 border-neutral-300 dark:border-neutral-700">
                    Moms-to-be Questionnaire
                  </UButton>
                </div>
                <p class="mt-4 text-sm text-neutral-500 dark:text-neutral-500">
                  Coming soon - Be the first to know when we launch!
                </p>
              </div>
            </div>
          </div>
        </Motion>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-gradient-to-br from-amber-600 to-amber-700 dark:from-amber-800 dark:to-amber-900 py-16 sm:py-20">
      <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="true"
          :visible="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <h2 class="font-display text-2xl font-bold text-white sm:text-3xl">
            Your well-being matters
          </h2>
          <p class="mt-4 text-lg text-amber-100">
            Connect with our coaches for personalized wellness guidance.
          </p>
          <div class="mt-8">
            <UButton to="/contact" color="white" size="xl" variant="solid">
              Get Support
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
