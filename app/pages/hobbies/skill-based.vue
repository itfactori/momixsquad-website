<script setup lang="ts">
definePageMeta({
  layout: 'default'
});

useHead({
  title: 'Skill-Based Hobbies - Momix Squad',
  meta: [
    {
      name: 'description',
      content:
        'Develop new abilities and challenge your mind with skill-based hobbies. Research-backed learning activities for mothers.'
    }
  ]
});

const skillActivities = [
  {
    title: 'Learning a New Language',
    description:
      'Open doors to new cultures and boost cognitive function while connecting with your children or planning future travels',
    benefits: ['Improves memory by 20%', 'Delays cognitive decline', 'Enhances cultural awareness'],
    difficulty: 'Intermediate',
    timeNeeded: '15-30 minutes daily',
    research: 'MIT Study: Bilingualism delays dementia onset by 4.5 years',
    icon: 'i-heroicons-language',
    platforms: ['Duolingo', 'Babbel', 'Rosetta Stone', 'Local community classes']
  },
  {
    title: 'Coding & Web Development',
    description:
      'Build valuable tech skills and create digital projects for your family or future career opportunities',
    benefits: [
      'Develops logical thinking',
      'Creates career opportunities',
      'Builds problem-solving skills'
    ],
    difficulty: 'Intermediate',
    timeNeeded: '1-2 hours daily',
    research: 'University of Cambridge: Programming improves cognitive flexibility',
    icon: 'i-heroicons-code-bracket',
    platforms: ['freeCodeCamp', 'Codecademy', 'Coursera', 'Local coding bootcamps']
  },
  {
    title: 'Writing & Blogging',
    description:
      'Share your motherhood journey and connect with other moms while developing your voice and storytelling skills',
    benefits: ['Reduces stress by 40%', 'Improves communication', 'Builds community connections'],
    difficulty: 'Beginner',
    timeNeeded: '20-30 minutes daily',
    research: 'American Psychological Association: Expressive writing improves immune function',
    icon: 'i-heroicons-pencil-square',
    platforms: ['Medium', 'WordPress', 'Substack', 'Local writing groups']
  },
  {
    title: 'Digital Design',
    description:
      'Create beautiful graphics and designs using user-friendly tools for social media, family projects, or small business',
    benefits: [
      'Enhances creativity',
      'Develops technical skills',
      'Creates portfolio opportunities'
    ],
    difficulty: 'Beginner',
    timeNeeded: '1-2 hours weekly',
    research: 'Journal of Creative Behavior: Digital arts improve spatial reasoning',
    icon: 'i-heroicons-photo',
    platforms: ['Canva', 'Figma', 'Adobe Creative Express', 'Procreate']
  },
  {
    title: 'Financial Literacy',
    description:
      "Master money management skills to secure your family's financial future and reduce financial stress",
    benefits: [
      'Reduces financial anxiety',
      'Improves decision-making',
      'Builds long-term security'
    ],
    difficulty: 'Intermediate',
    timeNeeded: '30-60 minutes weekly',
    research: 'FINRA Study: Financial education reduces stress by 25%',
    icon: 'i-heroicons-banknotes',
    platforms: ['Khan Academy', 'Coursera', 'Local bank workshops', 'Financial podcasts']
  },
  {
    title: 'Public Speaking',
    description:
      'Build confidence and communication skills through Toastmasters or community speaking opportunities',
    benefits: ['Boosts self-confidence', 'Enhances career prospects', 'Improves social skills'],
    difficulty: 'Advanced',
    timeNeeded: '2-3 hours weekly',
    research: 'Harvard Business Review: Public speaking skills increase earning potential',
    icon: 'i-heroicons-microphone',
    platforms: ['Toastmasters International', 'TEDx speaking circles', 'Local debate clubs']
  }
];

const learningBenefits = [
  {
    title: 'Cognitive Enhancement',
    description: 'Learning new skills creates new neural pathways and improves brain plasticity.',
    source: 'Nature Reviews Neuroscience',
    icon: 'i-heroicons-light-bulb'
  },
  {
    title: 'Career Advancement',
    description: 'Continuous learning increases employability and earning potential.',
    source: 'World Economic Forum',
    icon: 'i-heroicons-briefcase'
  },
  {
    title: 'Personal Growth',
    description: 'Skill development boosts self-esteem and creates sense of accomplishment.',
    source: 'Psychological Science Journal',
    icon: 'i-heroicons-trophy'
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
    class="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950"
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
              class="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/50 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 mb-6"
            >
              <UIcon name="i-heroicons-academic-cap" class="w-4 h-4" />
              Evidence-Based Skill Development
            </div>
            <h1
              class="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-6"
            >
              Skill-Based Hobbies
            </h1>
            <p class="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-8">
              Develop new abilities and challenge your mind with research-backed learning activities
              that boost cognitive function and create opportunities for personal and professional
              growth.
            </p>
            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <div class="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500" />
                <span>Cognitive enhancement</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <UIcon name="i-heroicons-trophy" class="w-5 h-5 text-yellow-500" />
                <span>Career advancement</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <UIcon name="i-heroicons-sparkles" class="w-5 h-5 text-blue-500" />
                <span>Personal growth</span>
              </div>
            </div>
            <div class="mt-12">
              <img
                src="/hero/Hobbies-Writing.jpeg"
                alt="Skill-based hobbies"
                class="mx-auto rounded-2xl sm:rounded-3xl w-full max-w-3xl object-cover shadow-2xl ring-4 ring-blue-200/50 dark:ring-blue-700/50 h-64 sm:h-80 lg:h-96"
              />
            </div>
          </div>
        </Motion>
      </div>
    </section>

    <!-- Learning Benefits -->
    <section class="relative overflow-hidden bg-white dark:bg-neutral-900 py-16 sm:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl"
          >
            Science-Backed Benefits
          </h2>
          <p class="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
            Research shows continuous learning significantly improves mental health and cognitive
            function
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-3">
          <Motion
            v-for="(benefit, index) in learningBenefits"
            :key="index"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: index * 0.1 }"
          >
            <div
              class="relative overflow-hidden rounded-2xl bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-900/50 dark:to-indigo-900/50 p-6 ring-1 ring-blue-200/50 dark:ring-blue-700/50 hover:shadow-lg transition-shadow duration-300"
            >
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800"
                >
                  <UIcon :name="benefit.icon" class="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 class="text-lg font-semibold text-neutral-900 dark:text-white">
                  {{ benefit.title }}
                </h3>
              </div>
              <p class="text-sm text-neutral-600 dark:text-neutral-300 mb-2">
                {{ benefit.description }}
              </p>
              <p class="text-xs text-blue-600 dark:text-blue-400 font-medium">
                {{ benefit.source }}
              </p>
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Skill Activities Grid -->
    <section class="relative overflow-hidden bg-neutral-50 dark:bg-neutral-950 py-16 sm:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl"
          >
            Skill Development Activities
          </h2>
          <p class="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
            Choose from these research-backed learning opportunities
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Motion
            v-for="(activity, index) in skillActivities"
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
                  class="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-indigo-500 shadow-lg"
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
                  Learning Platforms:
                </h4>
                <div class="flex flex-wrap gap-1">
                  <span
                    v-for="platform in activity.platforms"
                    :key="platform"
                    class="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full"
                  >
                    {{ platform }}
                  </span>
                </div>
              </div>

              <!-- Research -->
              <div class="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                <div class="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400">
                  <UIcon name="i-heroicons-academic-cap" class="w-3 h-3" />
                  <span>{{ activity.research }}</span>
                </div>
              </div>

              <!-- Hover Effect -->
              <div
                class="absolute inset-0 bg-linear-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Learning Path Section -->
    <section class="relative overflow-hidden bg-white dark:bg-neutral-900 py-16 sm:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl"
          >
            Your Learning Journey
          </h2>
          <p class="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
            A structured approach to developing new skills
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
                class="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 mx-auto mb-4"
              >
                <span class="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                Choose Your Skill
              </h3>
              <p class="text-sm text-neutral-600 dark:text-neutral-300">
                Select a skill that aligns with your interests and goals
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
                class="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 mx-auto mb-4"
              >
                <span class="text-2xl font-bold text-blue-600 dark:text-blue-400">2</span>
              </div>
              <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                Find Resources
              </h3>
              <p class="text-sm text-neutral-600 dark:text-neutral-300">
                Explore free and paid learning platforms
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
                class="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 mx-auto mb-4"
              >
                <span class="text-2xl font-bold text-blue-600 dark:text-blue-400">3</span>
              </div>
              <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                Practice Consistently
              </h3>
              <p class="text-sm text-neutral-600 dark:text-neutral-300">
                Dedicate regular time to practice and improve
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
                class="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 mx-auto mb-4"
              >
                <span class="text-2xl font-bold text-blue-600 dark:text-blue-400">4</span>
              </div>
              <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                Apply & Share
              </h3>
              <p class="text-sm text-neutral-600 dark:text-neutral-300">
                Use your skills and help others learn
              </p>
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section
      class="relative overflow-hidden bg-linear-to-br from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 py-16 sm:py-20"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl"
          >
            Mom Success Stories
          </h2>
          <p class="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
            Real stories from moms who transformed their lives through skill development
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
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-indigo-500"
                >
                  <UIcon name="i-heroicons-user-circle" class="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-neutral-900 dark:text-white">Sarah, 34</h3>
                  <p class="text-sm text-neutral-600 dark:text-neutral-400">
                    Learned Web Development
                  </p>
                </div>
              </div>
              <p class="text-sm text-neutral-600 dark:text-neutral-300">
                "Started coding during nap time and now work remotely as a freelance developer. The
                flexibility changed our family's life!"
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
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-indigo-500"
                >
                  <UIcon name="i-heroicons-user-circle" class="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-neutral-900 dark:text-white">Maria, 41</h3>
                  <p class="text-sm text-neutral-600 dark:text-neutral-400">Mastered Spanish</p>
                </div>
              </div>
              <p class="text-sm text-neutral-600 dark:text-neutral-300">
                "Learning Spanish helped me connect with my children's heritage and opened up new
                travel opportunities for our family."
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
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-indigo-500"
                >
                  <UIcon name="i-heroicons-user-circle" class="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-neutral-900 dark:text-white">Jennifer, 29</h3>
                  <p class="text-sm text-neutral-600 dark:text-neutral-400">Started Blogging</p>
                </div>
              </div>
              <p class="text-sm text-neutral-600 dark:text-neutral-300">
                "My parenting blog now supports our family financially and helps thousands of other
                moms feel less alone."
              </p>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  </div>
</template>
