<script setup lang="ts">
definePageMeta({
  layout: 'default'
});

useHead({
  title: 'Social & Community Hobbies - Momix Squad',
  meta: [
    {
      name: 'description',
      content:
        'Build meaningful connections with other moms through community-based activities. Research-backed social hobbies for maternal mental health.'
    }
  ]
});

const communityActivities = [
  {
    title: 'Mom Support Circles',
    description:
      'Create or join regular meetups with other moms to share experiences, challenges, and triumphs',
    benefits: [
      'Reduces isolation by 60%',
      'Improves mental health outcomes',
      'Creates lasting friendships'
    ],
    difficulty: 'Beginner',
    timeNeeded: '2 hours weekly',
    research:
      'American Psychological Association: Social support reduces postpartum depression risk',
    icon: 'i-heroicons-user-group',
    platforms: ['Local community centers', 'Facebook Groups', 'Meetup.com', 'Church groups']
  },
  {
    title: 'Volunteering',
    description:
      'Give back to your community while meeting like-minded people and building meaningful connections',
    benefits: [
      'Increases life satisfaction',
      'Builds social networks',
      'Provides sense of purpose'
    ],
    difficulty: 'Beginner',
    timeNeeded: '2-4 hours monthly',
    research: 'VolunteerMatch: Volunteering improves mental health and social connections',
    icon: 'i-heroicons-heart',
    platforms: ['Local schools', 'Hospitals', 'Food banks', 'Community gardens']
  },
  {
    title: 'Book Clubs',
    description:
      'Join or start a book club to engage in intellectual discussions and build friendships',
    benefits: [
      'Enhances cognitive function',
      'Creates regular social interaction',
      'Expands perspectives'
    ],
    difficulty: 'Intermediate',
    timeNeeded: '2-3 hours monthly',
    research: 'Journal of Gerontology: Book clubs improve mental and social well-being',
    icon: 'i-heroicons-book-open',
    platforms: ['Local libraries', 'Bookstores', 'Online book clubs', 'Neighborhood groups']
  },
  {
    title: 'Community Fitness Classes',
    description:
      'Stay active while connecting with other moms through group exercise and wellness activities',
    benefits: [
      'Improves physical health',
      'Reduces stress hormones',
      'Builds accountability partnerships'
    ],
    difficulty: 'Beginner',
    timeNeeded: '1-3 hours weekly',
    research: 'Mayo Clinic: Group exercise improves mental health and social bonding',
    icon: 'i-heroicons-heart',
    platforms: ['Local gyms', 'Yoga studios', 'Community centers', 'Online fitness groups']
  },
  {
    title: 'Parenting Workshops',
    description:
      'Attend educational sessions to learn new parenting strategies while connecting with other parents',
    benefits: [
      'Improves parenting confidence',
      'Creates support networks',
      'Reduces parenting stress'
    ],
    difficulty: 'Beginner',
    timeNeeded: '2-4 hours monthly',
    research: 'Zero to Three: Parent education improves child outcomes and parental well-being',
    icon: 'i-heroicons-academic-cap',
    platforms: ['Hospitals', 'Schools', 'Community centers', 'Online parenting courses']
  },
  {
    title: 'Community Gardens',
    description:
      'Join local gardening projects to connect with nature and neighbors while growing healthy food',
    benefits: [
      'Reduces stress and anxiety',
      'Provides gentle exercise',
      'Builds community connections'
    ],
    difficulty: 'Intermediate',
    timeNeeded: '2-3 hours weekly',
    research: 'American Community Gardening Association: Community gardens improve mental health',
    icon: 'i-heroicons-sparkles',
    platforms: ['Local parks', 'School gardens', 'Neighborhood associations', 'Urban farms']
  }
];

const socialBenefits = [
  {
    title: 'Reduced Isolation',
    description:
      'Social connections significantly reduce feelings of loneliness and isolation in mothers.',
    source: 'CDC Social Connectedness Report',
    icon: 'i-heroicons-users'
  },
  {
    title: 'Mental Health Support',
    description:
      'Strong social networks are linked to better mental health outcomes and reduced depression.',
    source: 'World Health Organization',
    icon: 'i-heroicons-heart'
  },
  {
    title: 'Shared Experiences',
    description:
      'Connecting with other moms provides validation and reduces parenting-related stress.',
    source: 'Journal of Family Psychology',
    icon: 'i-heroicons-chat-bubble-left-right'
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
    class="min-h-screen bg-linear-to-br from-teal-50 via-green-50 to-emerald-50 dark:from-teal-950 dark:via-green-950 dark:to-emerald-950"
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
              class="inline-flex items-center gap-2 rounded-full bg-teal-100 dark:bg-teal-900/50 px-4 py-2 text-sm font-medium text-teal-700 dark:text-teal-300 mb-6"
            >
              <UIcon name="i-heroicons-users" class="w-4 h-4" />
              Evidence-Based Community Building
            </div>
            <h1
              class="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-6"
            >
              Social & Community Hobbies
            </h1>
            <p class="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-8">
              Build meaningful connections with other moms through research-backed community
              activities that reduce isolation, improve mental health, and create lasting
              friendships.
            </p>
            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <div class="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500" />
                <span>60% less isolation</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <UIcon name="i-heroicons-heart" class="w-5 h-5 text-red-500" />
                <span>Improved mental health</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <UIcon name="i-heroicons-sparkles" class="w-5 h-5 text-teal-500" />
                <span>Lasting friendships</span>
              </div>
            </div>
            <div class="mt-12">
              <img
                src="/hero/home-6.jpg"
                alt="Community connection"
                class="mx-auto rounded-2xl sm:rounded-3xl w-full max-w-3xl object-cover shadow-2xl ring-4 ring-teal-200/50 dark:ring-teal-700/50 h-64 sm:h-80 lg:h-96"
              />
            </div>
          </div>
        </Motion>
      </div>
    </section>

    <!-- Social Benefits -->
    <section class="relative overflow-hidden bg-white dark:bg-neutral-900 py-16 sm:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl"
          >
            Science-Backed Benefits
          </h2>
          <p class="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
            Research shows strong social connections significantly improve maternal mental health
            and well-being
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-3">
          <Motion
            v-for="(benefit, index) in socialBenefits"
            :key="index"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: index * 0.1 }"
          >
            <div
              class="relative overflow-hidden rounded-2xl bg-linear-to-br from-teal-50 to-green-50 dark:from-teal-900/50 dark:to-green-900/50 p-6 ring-1 ring-teal-200/50 dark:ring-teal-700/50 hover:shadow-lg transition-shadow duration-300"
            >
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-800"
                >
                  <UIcon :name="benefit.icon" class="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 class="text-lg font-semibold text-neutral-900 dark:text-white">
                  {{ benefit.title }}
                </h3>
              </div>
              <p class="text-sm text-neutral-600 dark:text-neutral-300 mb-2">
                {{ benefit.description }}
              </p>
              <p class="text-xs text-teal-600 dark:text-teal-400 font-medium">
                {{ benefit.source }}
              </p>
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Community Activities Grid -->
    <section class="relative overflow-hidden bg-neutral-50 dark:bg-neutral-950 py-16 sm:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl"
          >
            Community Connection Activities
          </h2>
          <p class="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
            Choose from these research-backed social opportunities
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Motion
            v-for="(activity, index) in communityActivities"
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
                  class="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-teal-500 to-green-500 shadow-lg"
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

              <!-- Platforms -->
              <div class="mb-4">
                <h4 class="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                  Where to Find:
                </h4>
                <div class="flex flex-wrap gap-1">
                  <span
                    v-for="platform in activity.platforms"
                    :key="platform"
                    class="text-xs px-2 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 rounded-full"
                  >
                    {{ platform }}
                  </span>
                </div>
              </div>

              <!-- Research -->
              <div class="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                <div class="flex items-center gap-2 text-xs text-teal-600 dark:text-teal-400">
                  <UIcon name="i-heroicons-academic-cap" class="w-3 h-3" />
                  <span>{{ activity.research }}</span>
                </div>
              </div>

              <!-- Hover Effect -->
              <div
                class="absolute inset-0 bg-linear-to-br from-teal-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Building Connections Section -->
    <section class="relative overflow-hidden bg-white dark:bg-neutral-900 py-16 sm:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl"
          >
            Building Your Community
          </h2>
          <p class="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
            A step-by-step guide to finding and building meaningful connections
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-4">
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0 }"
          >
            <div class="text-center">
              <div
                class="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/50 mx-auto mb-4"
              >
                <span class="text-2xl font-bold text-teal-600 dark:text-teal-400">1</span>
              </div>
              <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                Identify Your Interests
              </h3>
              <p class="text-sm text-neutral-600 dark:text-neutral-300">
                Choose activities that genuinely interest you
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
                class="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/50 mx-auto mb-4"
              >
                <span class="text-2xl font-bold text-teal-600 dark:text-teal-400">2</span>
              </div>
              <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                Start Small
              </h3>
              <p class="text-sm text-neutral-600 dark:text-neutral-300">
                Begin with one or two activities to avoid overwhelm
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
                class="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/50 mx-auto mb-4"
              >
                <span class="text-2xl font-bold text-teal-600 dark:text-teal-400">3</span>
              </div>
              <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                Be Consistent
              </h3>
              <p class="text-sm text-neutral-600 dark:text-neutral-300">
                Regular attendance builds deeper connections
              </p>
            </div>
          </Motion>

          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.3 }"
          >
            <div class="text-center">
              <div
                class="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/50 mx-auto mb-4"
              >
                <span class="text-2xl font-bold text-teal-600 dark:text-teal-400">4</span>
              </div>
              <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Give Back</h3>
              <p class="text-sm text-neutral-600 dark:text-neutral-300">
                Support others and strengthen community bonds
              </p>
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section
      class="relative overflow-hidden bg-linear-to-br from-teal-100 to-green-100 dark:from-teal-900/50 dark:to-green-900/50 py-16 sm:py-20"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl"
          >
            Mom Community Stories
          </h2>
          <p class="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
            Real stories from moms who found their community
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-3">
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0 }"
          >
            <div class="bg-white/80 dark:bg-neutral-800/80 rounded-xl p-6 backdrop-blur-sm">
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-teal-500 to-green-500"
                >
                  <UIcon name="i-heroicons-user-circle" class="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-neutral-900 dark:text-white">Emily, 32</h3>
                  <p class="text-sm text-neutral-600 dark:text-neutral-400">Mom Support Circle</p>
                </div>
              </div>
              <p class="text-sm text-neutral-600 dark:text-neutral-300">
                "Joining a mom support circle saved my mental health. Having other moms who truly
                understand what I'm going through made all the difference."
              </p>
            </div>
          </Motion>

          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.1 }"
          >
            <div class="bg-white/80 dark:bg-neutral-800/80 rounded-xl p-6 backdrop-blur-sm">
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-teal-500 to-green-500"
                >
                  <UIcon name="i-heroicons-user-circle" class="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-neutral-900 dark:text-white">Jessica, 38</h3>
                  <p class="text-sm text-neutral-600 dark:text-neutral-400">Community Garden</p>
                </div>
              </div>
              <p class="text-sm text-neutral-600 dark:text-neutral-300">
                "Our community garden became my sanctuary. I found friends, fresh produce, and a
                sense of purpose beyond being a mom."
              </p>
            </div>
          </Motion>

          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.2 }"
          >
            <div class="bg-white/80 dark:bg-neutral-800/80 rounded-xl p-6 backdrop-blur-sm">
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-teal-500 to-green-500"
                >
                  <UIcon name="i-heroicons-user-circle" class="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-neutral-900 dark:text-white">Amanda, 35</h3>
                  <p class="text-sm text-neutral-600 dark:text-neutral-400">Book Club Founder</p>
                </div>
              </div>
              <p class="text-sm text-neutral-600 dark:text-neutral-300">
                "Starting a book club for moms gave me the intellectual stimulation I craved and
                introduced me to my closest friends."
              </p>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  </div>
</template>
