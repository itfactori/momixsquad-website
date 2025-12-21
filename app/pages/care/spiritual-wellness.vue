<script setup lang="ts">
definePageMeta({
  layout: 'default'
});

const dailyPractices = [
  {
    title: 'Morning Intention',
    description: 'Start your day with purpose by setting a positive intention.',
    duration: '5 min',
    icon: 'i-heroicons-sun',
    steps: [
      'Find a quiet space',
      'Take 3 deep breaths',
      'Set a positive intention for the day',
      'Visualize your day going well'
    ]
  },
  {
    title: 'Mindful Breathing',
    description: 'Center yourself with this simple breathing exercise.',
    duration: '3 min',
    icon: 'i-heroicons-heart',
    steps: ['Breathe in for 4 counts', 'Hold for 4 counts', 'Exhale for 6 counts', 'Repeat 5 times']
  },
  {
    title: 'Gratitude Reflection',
    description: 'Cultivate gratitude before sleep.',
    duration: '5 min',
    icon: 'i-heroicons-sparkles',
    steps: [
      "List 3 things you're grateful for",
      'Reflect on a positive moment',
      'Acknowledge your efforts',
      'Set a peaceful intention for sleep'
    ]
  }
];

const activePractice = ref<number | null>(null);

const togglePractice = (index: number) => {
  activePractice.value = activePractice.value === index ? null : index;
};
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-deep-purple-900 dark:to-gray-900"
  >
    <!-- Animated Background -->
    <div class="absolute inset-0 overflow-hidden opacity-20 dark:opacity-10">
      <div class="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/50" />
    </div>

    <!-- Hero Section -->
    <section class="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto text-center">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8 }"
          viewport="{{ once: true }}"
        >
          <h1
            class="text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 mb-6"
          >
            Spiritual Wellness
          </h1>
          <p class="text-xl text-gray-600 dark:text-indigo-100 max-w-3xl mx-auto">
            Nourish your soul and find deeper meaning in your motherhood journey through
            evidence-based spiritual practices.
          </p>
        </Motion>
      </div>
    </section>

    <!-- Main Content -->
    <section class="relative py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Mindfulness & Meditation -->
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 0.1 }"
            viewport="{{ once: true }}"
          >
            <div
              class="h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div class="p-6">
                <div
                  class="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mb-4"
                >
                  <UIcon
                    name="i-heroicons-sparkles"
                    class="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                  />
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Mindfulness & Meditation
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  Research shows that just 10 minutes of daily meditation can reduce stress by 14%
                  and improve focus by 16% (Journal of the American Medical Association).
                </p>
                <div class="space-y-3 mb-6">
                  <div class="flex items-start">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2"
                    />
                    <span class="text-sm text-gray-600 dark:text-gray-300"
                      >Reduces stress and anxiety levels</span
                    >
                  </div>
                  <div class="flex items-start">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2"
                    />
                    <span class="text-sm text-gray-600 dark:text-gray-300"
                      >Enhances emotional regulation</span
                    >
                  </div>
                  <div class="flex items-start">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2"
                    />
                    <span class="text-sm text-gray-600 dark:text-gray-300"
                      >Improves sleep quality</span
                    >
                  </div>
                </div>
                <a
                  href="https://www.nccih.nih.gov/health/meditation-and-mindfulness-what-you-need-to-know"
                  target="_blank"
                  class="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                >
                  NCCIH Research on Meditation
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </Motion>

          <!-- Nature Connection -->
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 0.2 }"
            viewport="{{ once: true }}"
          >
            <div
              class="h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div class="p-6">
                <div
                  class="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mb-4"
                >
                  <UIcon
                    name="i-heroicons-leaf"
                    class="w-6 h-6 text-emerald-600 dark:text-emerald-400"
                  />
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Nature Connection
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  Studies show that spending just 20 minutes in nature can lower stress hormone
                  levels by up to 21% (Frontiers in Psychology).
                </p>
                <div class="space-y-3 mb-6">
                  <div class="flex items-start">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2"
                    />
                    <span class="text-sm text-gray-600 dark:text-gray-300"
                      >Boosts mood and reduces anxiety</span
                    >
                  </div>
                  <div class="flex items-start">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2"
                    />
                    <span class="text-sm text-gray-600 dark:text-gray-300"
                      >Enhances creativity and focus</span
                    >
                  </div>
                  <div class="flex items-start">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2"
                    />
                    <span class="text-sm text-gray-600 dark:text-gray-300"
                      >Strengthens immune function</span
                    >
                  </div>
                </div>
                <a
                  href="https://www.nature.com/articles/s41598-019-44097-3"
                  target="_blank"
                  class="mt-4 inline-flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors"
                >
                  Nature Journal Study
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </Motion>

          <!-- Gratitude Practice -->
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 0.3 }"
            viewport="{{ once: true }}"
          >
            <div
              class="h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div class="p-6">
                <div
                  class="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center mb-4"
                >
                  <UIcon
                    name="i-heroicons-heart"
                    class="w-6 h-6 text-amber-600 dark:text-amber-400"
                  />
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Gratitude Practice
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  Practicing gratitude can increase happiness by 25% and improve sleep quality by
                  10% (Journal of Personality and Social Psychology).
                </p>
                <div class="space-y-3 mb-6">
                  <div class="flex items-start">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2"
                    />
                    <span class="text-sm text-gray-600 dark:text-gray-300"
                      >Increases overall happiness</span
                    >
                  </div>
                  <div class="flex items-start">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2"
                    />
                    <span class="text-sm text-gray-600 dark:text-gray-300"
                      >Reduces symptoms of depression</span
                    >
                  </div>
                  <div class="flex items-start">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2"
                    />
                    <span class="text-sm text-gray-600 dark:text-gray-300"
                      >Strengthens relationships</span
                    >
                  </div>
                </div>
                <a
                  href="https://greatergood.berkeley.edu/article/item/why_gratitude_is_good"
                  target="_blank"
                  class="mt-4 inline-flex items-center text-sm font-medium text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 transition-colors"
                >
                  Science of Gratitude
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </Motion>
        </div>

        <!-- Daily Practices Section -->
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.2 }"
          viewport="{{ once: true }}"
          class="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
        >
          <div class="p-8">
            <div class="text-center mb-8">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Daily Spiritual Practices
              </h2>
              <p class="text-gray-600 dark:text-gray-300">
                Incorporate these simple practices into your daily routine for spiritual nourishment
              </p>
            </div>

            <div class="space-y-4 max-w-3xl mx-auto">
              <div
                v-for="(practice, index) in dailyPractices"
                :key="index"
                class="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-all duration-300"
                :class="{ 'shadow-md': activePractice === index }"
              >
                <button
                  class="w-full flex items-center justify-between p-5 text-left"
                  @click="togglePractice(index)"
                >
                  <div class="flex items-center">
                    <div
                      class="w-10 h-10 rounded-lg mr-4 flex-shrink-0"
                      :class="{
                        'bg-indigo-100 dark:bg-indigo-900/50': index === 0,
                        'bg-emerald-100 dark:bg-emerald-900/50': index === 1,
                        'bg-amber-100 dark:bg-amber-900/50': index === 2
                      }"
                    >
                      <UIcon
                        :name="practice.icon"
                        class="w-5 h-5 m-2.5"
                        :class="{
                          'text-indigo-600 dark:text-indigo-400': index === 0,
                          'text-emerald-600 dark:text-emerald-400': index === 1,
                          'text-amber-600 dark:text-amber-400': index === 2
                        }"
                      />
                    </div>
                    <div>
                      <h3 class="font-medium text-gray-900 dark:text-white">
                        {{ practice.title }}
                      </h3>
                      <p class="text-sm text-gray-500 dark:text-gray-400">
                        {{ practice.duration }} • {{ practice.description }}
                      </p>
                    </div>
                  </div>
                  <UIcon
                    name="i-heroicons-chevron-down"
                    class="w-5 h-5 text-gray-400 transition-transform duration-300"
                    :class="{ 'transform rotate-180': activePractice === index }"
                  />
                </button>

                <div
                  class="px-5 pb-5 pt-0 overflow-hidden transition-all duration-300"
                  :class="{
                    'max-h-0': activePractice !== index,
                    'max-h-96': activePractice === index
                  }"
                >
                  <div class="pl-14 space-y-3">
                    <div
                      v-for="(step, stepIndex) in practice.steps"
                      :key="stepIndex"
                      class="flex items-start"
                    >
                      <div
                        class="flex-shrink-0 h-5 w-5 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3 mt-0.5"
                      >
                        <span class="text-xs font-medium text-gray-500 dark:text-gray-400">{{
                          stepIndex + 1
                        }}</span>
                      </div>
                      <span class="text-sm text-gray-700 dark:text-gray-300">{{ step }}</span>
                    </div>
                    <button
                      class="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                      @click="activePractice = null"
                    >
                      Got it, thanks!
                      <UIcon name="i-heroicons-check" class="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Motion>

        <!-- Evidence-Based Resources -->
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.3 }"
          viewport="{{ once: true }}"
          class="mt-16"
        >
          <div class="text-center mb-10">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-3">Trusted Resources</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Evidence-based resources to support your spiritual wellness journey
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://ggsc.berkeley.edu/what_we_measure"
              target="_blank"
              class="group block p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div
                class="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4"
              >
                <UIcon
                  name="i-heroicons-academic-cap"
                  class="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                />
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Greater Good Science Center
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                Research-based insights into gratitude, mindfulness, and happiness from UC Berkeley
              </p>
              <span
                class="mt-3 inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 group-hover:underline"
              >
                Explore Research
                <UIcon name="i-heroicons-arrow-right" class="ml-1 h-4 w-4" />
              </span>
            </a>

            <a
              href="https://www.mindful.org/the-science-of-mindfulness/"
              target="_blank"
              class="group block p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div
                class="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4"
              >
                <UIcon
                  name="i-heroicons-light-bulb"
                  class="w-6 h-6 text-emerald-600 dark:text-emerald-400"
                />
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                The Science of Mindfulness
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                Evidence-based articles on how mindfulness changes the brain and improves wellbeing
              </p>
              <span
                class="mt-3 inline-flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400 group-hover:underline"
              >
                Learn More
                <UIcon name="i-heroicons-arrow-right" class="ml-1 h-4 w-4" />
              </span>
            </a>

            <a
              href="https://www.apa.org/monitor/2020/04/nurtured-nature"
              target="_blank"
              class="group block p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div
                class="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4"
              >
                <UIcon name="i-heroicons-leaf" class="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Nature & Mental Health
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                American Psychological Association's research on how nature benefits mental health
              </p>
              <span
                class="mt-3 inline-flex items-center text-sm font-medium text-amber-600 dark:text-amber-400 group-hover:underline"
              >
                Read Article
                <UIcon name="i-heroicons-arrow-right" class="ml-1 h-4 w-4" />
              </span>
            </a>
          </div>
        </Motion>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800"
    >
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-white mb-6">Begin Your Spiritual Journey</h2>
        <p class="text-xl text-white/90 mb-8">
          Spiritual wellness is a personal journey that evolves with you. Start small, be
          consistent, and find what resonates with your soul.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/care/mental-health"
            class="px-8 py-3 bg-white text-indigo-700 font-medium rounded-lg hover:bg-opacity-90 transition-opacity"
          >
            Explore Mental Health
          </NuxtLink>
          <NuxtLink
            to="/care/self-care"
            class="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
          >
            Self-Care Resources
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.bg-grid-slate-100 {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
}
.dark .bg-grid-slate-100 {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(30 41 59 / 0.3)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
}
</style>
