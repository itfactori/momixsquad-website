<script setup lang="ts">
useHead({
  title: 'Food & Nutrition - Momix Squad',
  meta: [
    {
      name: 'description',
      content:
        'Healthy eating made simple for busy moms. Discover nutritious recipes, meal planning tips, and guidance for the whole family.'
    }
  ]
});

const nutritionTopics = [
  {
    title: 'Nutrition for Energy',
    description: 'Foods that boost your energy levels to keep up with your busy day.',
    icon: 'i-heroicons-bolt',
    color: 'secondary' as const
  },
  {
    title: 'Immunity Boosters',
    description: "Strengthen your family's immune system with the right nutrition.",
    icon: 'i-heroicons-shield-check',
    color: 'success' as const
  },
  {
    title: 'Prenatal Nutrition',
    description: 'Essential nutrients for expecting mothers and growing babies.',
    icon: 'i-heroicons-heart',
    color: 'primary' as const
  },
  {
    title: 'Postnatal Recovery',
    description: 'Nourishing foods to support your body after childbirth.',
    icon: 'i-heroicons-sparkles',
    color: 'accent' as const
  }
];

const mealPlanningTips = [
  'Batch cooking on weekends',
  'Quick 15-minute healthy meals',
  'Freezer-friendly family recipes',
  'Budget-friendly nutritious options',
  'Kid-approved healthy snacks',
  'Meal prep containers & organization'
];

const nutritionByAge = [
  {
    age: 'Infants (0-12 months)',
    icon: 'i-heroicons-face-smile',
    topics: ['Breastfeeding nutrition', 'Introduction to solids', 'First foods guide']
  },
  {
    age: 'Toddlers (1-3 years)',
    icon: 'i-heroicons-puzzle-piece',
    topics: ['Picky eater solutions', 'Balanced toddler meals', 'Healthy snack ideas']
  },
  {
    age: 'Kids (4-12 years)',
    icon: 'i-heroicons-academic-cap',
    topics: ['School lunch ideas', 'After-school snacks', 'Growing bodies nutrition']
  },
  {
    age: 'Teens (13+ years)',
    icon: 'i-heroicons-user-group',
    topics: ['Teen nutrition needs', 'Healthy eating habits', 'Sports & activity fuel']
  }
];
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="relative overflow-hidden bg-neutral-50 dark:bg-neutral-950 py-20 sm:py-28">
      <div class="absolute inset-0 mesh-bg" />
      <div
        class="absolute inset-0 bg-gradient-to-b from-emerald-100/30 dark:from-emerald-900/20 to-transparent"
      />

      <div class="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <div
            class="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-900/50 px-6 py-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-200 dark:ring-emerald-800"
          >
            <UIcon name="i-heroicons-cake" class="h-5 w-5" />
            Food & Nutrition
          </div>
          <h1
            class="font-display text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl lg:text-6xl"
          >
            Nourish Your Family
          </h1>
          <p
            class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-xl"
          >
            Healthy eating doesn't have to be complicated. Discover simple, nutritious recipes and
            guidance for you and your little ones.
          </p>
        </Motion>
      </div>
    </section>

    <!-- Nutrition Topics Grid -->
    <section class="bg-white dark:bg-neutral-900 py-20 sm:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <div class="text-center">
            <h2
              class="font-display text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl"
            >
              Nutrition for Every Need
            </h2>
            <p class="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
              Targeted guidance for different stages and needs
            </p>
          </div>
        </Motion>

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Motion
            v-for="(topic, index) in nutritionTopics"
            :key="topic.title"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: index * 0.1 }"
          >
            <div
              class="group rounded-2xl bg-neutral-50 dark:bg-neutral-800 p-6 shadow-lg ring-1 ring-neutral-200 dark:ring-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              :class="{
                'hover:ring-amber-300 dark:hover:ring-amber-700': topic.color === 'secondary',
                'hover:ring-emerald-300 dark:hover:ring-emerald-700': topic.color === 'success',
                'hover:ring-primary-300 dark:hover:ring-primary-700': topic.color === 'primary',
                'hover:ring-teal-300 dark:hover:ring-teal-700': topic.color === 'accent'
              }"
            >
              <div
                class="mb-4 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                :class="{
                  'bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400':
                    topic.color === 'secondary',
                  'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400':
                    topic.color === 'success',
                  'bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400':
                    topic.color === 'primary',
                  'bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400':
                    topic.color === 'accent'
                }"
              >
                <UIcon :name="topic.icon" class="h-7 w-7" />
              </div>
              <h3 class="font-display text-lg font-bold text-neutral-900 dark:text-neutral-50">
                {{ topic.title }}
              </h3>
              <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {{ topic.description }}
              </p>
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Meal Planning Section -->
    <section class="relative overflow-hidden bg-neutral-50 dark:bg-neutral-950 py-20 sm:py-28">
      <div class="absolute inset-0 mesh-bg opacity-50" />

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-2 lg:items-center">
          <!-- Content -->
          <Motion
            :initial="{ opacity: 0, x: -30 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.6 }"
          >
            <div>
              <div
                class="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 dark:bg-amber-900/50 px-4 py-2 text-sm font-semibold text-amber-700 dark:text-amber-300"
              >
                <UIcon name="i-heroicons-calendar-days" class="h-4 w-4" />
                Meal Planning
              </div>
              <h2
                class="font-display text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl"
              >
                Simplify Your Week
              </h2>
              <p class="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                Make healthy eating effortless with smart meal planning strategies designed for busy
                moms.
              </p>
              <ul class="mt-8 space-y-4">
                <li v-for="tip in mealPlanningTips" :key="tip" class="flex items-center gap-3">
                  <div
                    class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/50"
                  >
                    <UIcon
                      name="i-heroicons-check"
                      class="h-5 w-5 text-emerald-600 dark:text-emerald-400"
                    />
                  </div>
                  <span class="text-neutral-700 dark:text-neutral-300">{{ tip }}</span>
                </li>
              </ul>
            </div>
          </Motion>

          <!-- Visual -->
          <Motion
            :initial="{ opacity: 0, x: 30 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.6 }"
          >
            <div
              class="rounded-3xl bg-gradient-to-br from-emerald-100 to-amber-100 dark:from-emerald-950/50 dark:to-amber-950/50 p-8 shadow-xl ring-1 ring-neutral-200/50 dark:ring-neutral-700/50"
            >
              <div class="grid grid-cols-2 gap-4">
                <div class="rounded-2xl bg-white/80 dark:bg-neutral-900/80 p-6 shadow-lg">
                  <UIcon name="i-heroicons-sun" class="h-8 w-8 text-amber-500" />
                  <p class="mt-2 font-semibold text-neutral-900 dark:text-neutral-50">Breakfast</p>
                  <p class="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Quick & energizing
                  </p>
                </div>
                <div class="rounded-2xl bg-white/80 dark:bg-neutral-900/80 p-6 shadow-lg">
                  <UIcon name="i-heroicons-clock" class="h-8 w-8 text-emerald-500" />
                  <p class="mt-2 font-semibold text-neutral-900 dark:text-neutral-50">Lunch</p>
                  <p class="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Balanced & filling
                  </p>
                </div>
                <div class="rounded-2xl bg-white/80 dark:bg-neutral-900/80 p-6 shadow-lg">
                  <UIcon name="i-heroicons-moon" class="h-8 w-8 text-primary-500" />
                  <p class="mt-2 font-semibold text-neutral-900 dark:text-neutral-50">Dinner</p>
                  <p class="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Family favorites
                  </p>
                </div>
                <div class="rounded-2xl bg-white/80 dark:bg-neutral-900/80 p-6 shadow-lg">
                  <UIcon name="i-heroicons-heart" class="h-8 w-8 text-teal-500" />
                  <p class="mt-2 font-semibold text-neutral-900 dark:text-neutral-50">Snacks</p>
                  <p class="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Healthy bites</p>
                </div>
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Nutrition by Age -->
    <section class="bg-white dark:bg-neutral-900 py-20 sm:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <div class="text-center">
            <div
              class="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 dark:bg-primary-900/50 px-4 py-2 text-sm font-semibold text-primary-700 dark:text-primary-300"
            >
              <UIcon name="i-heroicons-users" class="h-4 w-4" />
              Age-Appropriate Nutrition
            </div>
            <h2
              class="font-display text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl"
            >
              Nutrition for Every Age
            </h2>
            <p class="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
              Tailored guidance for your child's developmental stage
            </p>
          </div>
        </Motion>

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Motion
            v-for="(item, index) in nutritionByAge"
            :key="item.age"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: index * 0.1 }"
          >
            <div
              class="group rounded-2xl bg-neutral-50 dark:bg-neutral-800 p-6 shadow-lg ring-1 ring-neutral-200 dark:ring-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-primary-300 dark:hover:ring-primary-700"
            >
              <div
                class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 transition-colors group-hover:bg-primary-500 group-hover:text-white"
              >
                <UIcon :name="item.icon" class="h-6 w-6" />
              </div>
              <h3 class="font-display text-lg font-bold text-neutral-900 dark:text-neutral-50">
                {{ item.age }}
              </h3>
              <ul class="mt-4 space-y-2">
                <li
                  v-for="topic in item.topics"
                  :key="topic"
                  class="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                >
                  <span class="h-1.5 w-1.5 rounded-full bg-primary-500" />
                  {{ topic }}
                </li>
              </ul>
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Recipes Coming Soon -->
    <section class="relative overflow-hidden bg-neutral-50 dark:bg-neutral-950 py-20 sm:py-28">
      <div class="absolute inset-0 mesh-bg opacity-50" />

      <div class="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 0.6 }"
        >
          <div
            class="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-950/50 dark:to-teal-950/50 p-8 text-center shadow-xl ring-1 ring-neutral-200/50 dark:ring-neutral-700/50 sm:p-12"
          >
            <div class="mx-auto max-w-2xl">
              <div
                class="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/80 dark:bg-neutral-900/80 shadow-lg"
              >
                <UIcon
                  name="i-heroicons-book-open"
                  class="h-10 w-10 text-emerald-600 dark:text-emerald-400"
                />
              </div>
              <h2
                class="font-display text-3xl font-bold text-neutral-900 dark:text-neutral-50 sm:text-4xl"
              >
                Recipe Collection Coming Soon
              </h2>
              <p class="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                We're curating a collection of healthy, mom-approved recipes that are quick to make
                and loved by the whole family.
              </p>
              <ul class="mt-6 flex flex-wrap justify-center gap-3">
                <li
                  class="rounded-full bg-white/80 dark:bg-neutral-900/80 px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 shadow-sm"
                >
                  🥗 Quick Lunches
                </li>
                <li
                  class="rounded-full bg-white/80 dark:bg-neutral-900/80 px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 shadow-sm"
                >
                  🍳 Easy Breakfasts
                </li>
                <li
                  class="rounded-full bg-white/80 dark:bg-neutral-900/80 px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 shadow-sm"
                >
                  🍝 Family Dinners
                </li>
                <li
                  class="rounded-full bg-white/80 dark:bg-neutral-900/80 px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 shadow-sm"
                >
                  🍪 Healthy Snacks
                </li>
              </ul>
              <div class="mt-8">
                <span
                  class="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-neutral-900/80 px-6 py-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300 shadow-lg"
                >
                  <span class="relative flex h-2 w-2">
                    <span
                      class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                    ></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </Motion>
      </div>
    </section>

    <!-- CTA -->
    <section
      class="bg-gradient-to-br from-emerald-600 to-emerald-700 dark:from-emerald-800 dark:to-emerald-900 py-16 sm:py-20"
    >
      <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <h2 class="font-display text-2xl font-bold text-white sm:text-3xl">
            Have nutrition questions?
          </h2>
          <p class="mt-4 text-lg text-emerald-50">
            Our team is here to help you with personalized nutrition guidance.
          </p>
          <div class="mt-8">
            <UButton to="/contact" color="white" size="xl" variant="solid">
              Get in Touch
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
