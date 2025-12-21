<script setup lang="ts">
definePageMeta({
  layout: 'default'
});

useHead({
  title: 'Creative Hobbies - Momix Squad',
  meta: [
    {
      name: 'description',
      content:
        'Explore creative hobbies for mothers. Research-backed artistic activities that reduce stress and boost mental well-being.'
    }
  ]
});

const creativeActivities = [
  {
    title: 'Journaling & Scrapbooking',
    description: 'Document your motherhood journey and preserve precious memories',
    benefits: [
      'Reduces anxiety by 75%',
      'Improves emotional processing',
      'Creates lasting memories'
    ],
    difficulty: 'Beginner',
    timeNeeded: '15-30 minutes daily',
    research: 'University of Rochester Medical Center: Journaling helps manage stress and anxiety',
    icon: 'i-heroicons-book-open'
  },
  {
    title: 'Painting & Drawing',
    description: 'Express yourself through colors and shapes, no experience required',
    benefits: ['Lowers cortisol levels', 'Enhances mindfulness', 'Boosts self-esteem'],
    difficulty: 'Beginner',
    timeNeeded: '1-2 hours weekly',
    research: 'American Art Therapy Association: Art therapy reduces stress hormones',
    icon: 'i-heroicons-paint-brush'
  },
  {
    title: 'Knitting & Crochet',
    description: 'Create beautiful items while practicing mindful repetition',
    benefits: ['Reduces blood pressure', 'Improves focus', 'Creates tangible results'],
    difficulty: 'Intermediate',
    timeNeeded: '30-60 minutes daily',
    research: 'Harvard Health: Repetitive crafts induce meditation-like state',
    icon: 'i-heroicons-sparkles'
  },
  {
    title: 'Photography',
    description: 'Capture the beauty in everyday moments with your smartphone or camera',
    benefits: ['Enhances observation skills', 'Creates positive focus', 'Builds creative eye'],
    difficulty: 'Beginner',
    timeNeeded: '10-20 minutes daily',
    research: 'Journal of Positive Psychology: Photography increases well-being',
    icon: 'i-heroicons-camera'
  },
  {
    title: 'Gardening',
    description: 'Connect with nature and nurture living things',
    benefits: [
      'Reduces depression symptoms',
      'Provides gentle exercise',
      'Creates sense of accomplishment'
    ],
    difficulty: 'Beginner',
    timeNeeded: '2-3 hours weekly',
    research: 'CDC: Gardening improves mental health and physical activity',
    icon: 'i-heroicons-leaf'
  },
  {
    title: 'Baking & Cooking',
    description: 'Express creativity through delicious and nourishing creations',
    benefits: [
      'Reduces stress hormones',
      'Provides sensory engagement',
      'Creates sharing opportunities'
    ],
    difficulty: 'Intermediate',
    timeNeeded: '1-2 hours weekly',
    research: 'Journal of Culinary Science: Cooking therapy reduces anxiety',
    icon: 'i-heroicons-fire'
  }
];

const researchEvidence = [
  {
    title: 'Stress Reduction',
    description:
      'Creative activities can reduce cortisol levels by up to 75%, significantly lowering stress hormones.',
    source: 'Utah State University Extension Study',
    icon: 'i-heroicons-heart'
  },
  {
    title: 'Mental Health Benefits',
    description:
      'Regular creative engagement is linked to reduced depression and anxiety symptoms in mothers.',
    source: 'American Journal of Public Health',
    icon: 'i-heroicons-face-smile'
  },
  {
    title: 'Cognitive Enhancement',
    description: 'Creative hobbies improve problem-solving skills and cognitive flexibility.',
    source: 'Psychology of Aesthetics Journal',
    icon: 'i-heroicons-light-bulb'
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner':
      return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/50';
    case 'Intermediate':
      return 'text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/50';
    case 'Advanced':
      return 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/50';
    default:
      return 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900/50';
  }
};
</script>

<template>
  <div
    class="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-amber-50 dark:from-purple-950 dark:via-pink-950 dark:to-amber-950"
  >
    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div class="absolute inset-0 mesh-bg opacity-30" />
      <div class="mx-auto max-w-7xl">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5 }"
        >
          <div class="text-center">
            <div
              class="inline-flex items-center gap-2 rounded-full bg-purple-100 dark:bg-purple-900/50 px-4 py-2 text-sm font-medium text-purple-700 dark:text-purple-300 mb-6"
            >
              <UIcon name="i-heroicons-paint-brush" class="w-4 h-4" />
              Evidence-Based Creative Expression
            </div>
            <h1
              class="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-6"
            >
              Creative Hobbies
            </h1>
            <p class="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-8">
              Unleash your creativity with research-backed artistic activities that reduce stress,
              boost mental well-being, and bring joy to your motherhood journey.
            </p>
            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <div class="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500" />
                <span>75% stress reduction</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <UIcon name="i-heroicons-heart" class="w-5 h-5 text-red-500" />
                <span>Improves mental health</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <UIcon name="i-heroicons-sparkles" class="w-5 h-5 text-purple-500" />
                <span>No experience needed</span>
              </div>
            </div>
            <div class="mt-12">
              <img
                src="/hero/Hobbies%20-Painting.jpeg"
                alt="Creative painting"
                class="mx-auto rounded-3xl max-w-3xl object-cover shadow-2xl ring-4 ring-purple-200/50 dark:ring-purple-700/50"
              />
            </div>
          </div>
        </Motion>
      </div>
    </section>

    <!-- Research Evidence -->
    <section class="relative overflow-hidden bg-white dark:bg-neutral-900 py-16 sm:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl"
          >
            Science-Backed Benefits
          </h2>
          <p class="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
            Research shows creative activities significantly improve maternal mental health
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-3">
          <Motion
            v-for="(evidence, index) in researchEvidence"
            :key="index"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: index * 0.1 }"
          >
            <div
              class="relative overflow-hidden rounded-2xl bg-linear-to-br from-purple-50 to-pink-50 dark:from-purple-900/50 dark:to-pink-900/50 p-6 ring-1 ring-purple-200/50 dark:ring-purple-700/50 hover:shadow-lg transition-shadow duration-300"
            >
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-800"
                >
                  <UIcon
                    :name="evidence.icon"
                    class="h-6 w-6 text-purple-600 dark:text-purple-400"
                  />
                </div>
                <h3 class="text-lg font-semibold text-neutral-900 dark:text-white">
                  {{ evidence.title }}
                </h3>
              </div>
              <p class="text-sm text-neutral-600 dark:text-neutral-300 mb-2">
                {{ evidence.description }}
              </p>
              <p class="text-xs text-purple-600 dark:text-purple-400 font-medium">
                {{ evidence.source }}
              </p>
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Creative Activities Grid -->
    <section class="relative overflow-hidden bg-neutral-50 dark:bg-neutral-950 py-16 sm:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl"
          >
            Creative Activities for Moms
          </h2>
          <p class="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
            Choose from these research-backed creative pursuits
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Motion
            v-for="(activity, index) in creativeActivities"
            :key="activity.title"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: index * 0.1 }"
          >
            <div
              class="group relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-800 p-6 shadow-lg ring-1 ring-neutral-200/50 dark:ring-neutral-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <!-- Header -->
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-purple-500 to-pink-500 shadow-lg"
                >
                  <UIcon :name="activity.icon" class="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-neutral-900 dark:text-white">
                    {{ activity.title }}
                  </h3>
                  <div class="flex items-center gap-2 mt-1">
                    <span
                      :class="`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor(activity.difficulty)}`"
                    >
                      {{ activity.difficulty }}
                    </span>
                    <span class="text-xs text-neutral-500 dark:text-neutral-400">
                      {{ activity.timeNeeded }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Description -->
              <p class="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                {{ activity.description }}
              </p>

              <!-- Benefits -->
              <div class="mb-4">
                <h4 class="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                  Benefits:
                </h4>
                <ul class="space-y-1">
                  <li
                    v-for="benefit in activity.benefits"
                    :key="benefit"
                    class="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400"
                  >
                    <UIcon name="i-heroicons-check-circle" class="w-3 h-3 text-green-500" />
                    {{ benefit }}
                  </li>
                </ul>
              </div>

              <!-- Research -->
              <div class="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                <div class="flex items-center gap-2 text-xs text-purple-600 dark:text-purple-400">
                  <UIcon name="i-heroicons-academic-cap" class="w-3 h-3" />
                  <span>{{ activity.research }}</span>
                </div>
              </div>

              <!-- Hover Effect -->
              <div
                class="absolute inset-0 bg-linear-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Getting Started Section -->
    <section class="relative overflow-hidden bg-white dark:bg-neutral-900 py-16 sm:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl"
          >
            Getting Started
          </h2>
          <p class="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
            Simple steps to begin your creative journey
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-3">
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0 }"
          >
            <div class="text-center">
              <div
                class="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/50 mx-auto mb-4"
              >
                <span class="text-2xl font-bold text-purple-600 dark:text-purple-400">1</span>
              </div>
              <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                Choose Your Activity
              </h3>
              <p class="text-sm text-neutral-600 dark:text-neutral-300">
                Select a creative hobby that interests you and fits your schedule
              </p>
            </div>
          </Motion>

          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.1 }"
          >
            <div class="text-center">
              <div
                class="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/50 mx-auto mb-4"
              >
                <span class="text-2xl font-bold text-purple-600 dark:text-purple-400">2</span>
              </div>
              <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                Gather Simple Supplies
              </h3>
              <p class="text-sm text-neutral-600 dark:text-neutral-300">
                Start with basic materials - you don't need expensive equipment
              </p>
            </div>
          </Motion>

          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.2 }"
          >
            <div class="text-center">
              <div
                class="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/50 mx-auto mb-4"
              >
                <span class="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
              </div>
              <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                Create Consistently
              </h3>
              <p class="text-sm text-neutral-600 dark:text-neutral-300">
                Practice regularly, even for short periods, to build the habit
              </p>
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Resources Section -->
    <section
      class="relative overflow-hidden bg-linear-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 py-16 sm:py-20"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl"
          >
            Helpful Resources
          </h2>
          <p class="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
            Free and low-cost resources to support your creative journey
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0 }"
          >
            <div
              class="text-center p-6 bg-white/80 dark:bg-neutral-800/80 rounded-xl backdrop-blur-sm"
            >
              <UIcon
                name="i-heroicons-play-circle"
                class="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-3"
              />
              <h3 class="font-semibold text-neutral-900 dark:text-white mb-2">YouTube Tutorials</h3>
              <p class="text-sm text-neutral-600 dark:text-neutral-300">
                Free video lessons for all skill levels
              </p>
            </div>
          </Motion>

          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.1 }"
          >
            <div
              class="text-center p-6 bg-white/80 dark:bg-neutral-800/80 rounded-xl backdrop-blur-sm"
            >
              <UIcon
                name="i-heroicons-book-open"
                class="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-3"
              />
              <h3 class="font-semibold text-neutral-900 dark:text-white mb-2">Library Resources</h3>
              <p class="text-sm text-neutral-600 dark:text-neutral-300">
                Free books and creative workshops
              </p>
            </div>
          </Motion>

          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.2 }"
          >
            <div
              class="text-center p-6 bg-white/80 dark:bg-neutral-800/80 rounded-xl backdrop-blur-sm"
            >
              <UIcon
                name="i-heroicons-device-phone-mobile"
                class="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-3"
              />
              <h3 class="font-semibold text-neutral-900 dark:text-white mb-2">Creative Apps</h3>
              <p class="text-sm text-neutral-600 dark:text-neutral-300">
                Mobile apps for on-the-go creativity
              </p>
            </div>
          </Motion>

          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.3 }"
          >
            <div
              class="text-center p-6 bg-white/80 dark:bg-neutral-800/80 rounded-xl backdrop-blur-sm"
            >
              <UIcon
                name="i-heroicons-users"
                class="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-3"
              />
              <h3 class="font-semibold text-neutral-900 dark:text-white mb-2">
                Online Communities
              </h3>
              <p class="text-sm text-neutral-600 dark:text-neutral-300">
                Connect with other creative moms
              </p>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  </div>
</template>
