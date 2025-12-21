<script setup lang="ts">
definePageMeta({
  layout: 'default'
});

const selfCareQuiz = [
  {
    question: 'How often do you take time for self-care activities?',
    options: [
      { text: 'Daily', value: 3 },
      { text: 'A few times a week', value: 2 },
      { text: 'Rarely', value: 1 },
      { text: 'Never', value: 0 }
    ]
  },
  {
    question: 'Do you get 7-9 hours of sleep most nights?',
    options: [
      { text: 'Yes, consistently', value: 3 },
      { text: 'Sometimes', value: 2 },
      { text: 'Rarely', value: 1 },
      { text: 'Almost never', value: 0 }
    ]
  },
  {
    question: 'How often do you engage in physical activity?',
    options: [
      { text: '5+ times a week', value: 3 },
      { text: '2-4 times a week', value: 2 },
      { text: 'Once a week or less', value: 1 },
      { text: 'Never', value: 0 }
    ]
  }
];

const currentQuestion = ref(0);
const answers = ref<number[]>([]);
const showResult = ref(false);

const selectAnswer = (value: number) => {
  answers.value[currentQuestion.value] = value;
  if (currentQuestion.value < selfCareQuiz.length - 1) {
    currentQuestion.value++;
  } else {
    showResult.value = true;
  }
};

const resetQuiz = () => {
  currentQuestion.value = 0;
  answers.value = [];
  showResult.value = false;
};

const totalScore = computed(() => {
  return answers.value.reduce((sum, answer) => sum + answer, 0);
});

const selfCareLevel = computed(() => {
  const maxScore = selfCareQuiz.length * 3;
  const percentage = (totalScore.value / maxScore) * 100;

  if (percentage >= 75) return 'Excellent';
  if (percentage >= 50) return 'Good';
  if (percentage >= 25) return 'Needs Improvement';
  return 'Needs Significant Attention';
});
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
            class="text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-pink-400 dark:to-purple-400 mb-6"
          >
            Self-Care & Wellbeing
          </h1>
          <p class="text-xl text-gray-600 dark:text-pink-100 max-w-3xl mx-auto">
            Evidence-based strategies to nurture yourself while nurturing others. Your wellbeing is
            the foundation of your family's health.
          </p>
        </Motion>
      </div>
    </section>

    <!-- Main Content -->
    <section class="relative py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Physical Self-Care Card -->
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
                  class="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-4"
                >
                  <UIcon
                    name="i-heroicons-heart"
                    class="w-6 h-6 text-purple-600 dark:text-purple-400"
                  />
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Physical Wellbeing
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  Regular physical activity can reduce the risk of depression by up to 30% (WHO).
                  Even 30 minutes of moderate exercise daily can significantly improve mood and
                  energy levels.
                </p>
                <div class="space-y-3">
                  <div class="flex items-start">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2"
                    />
                    <span class="text-sm text-gray-600 dark:text-gray-300"
                      >Aim for 150 minutes of moderate exercise weekly</span
                    >
                  </div>
                  <div class="flex items-start">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2"
                    />
                    <span class="text-sm text-gray-600 dark:text-gray-300"
                      >Prioritize 7-9 hours of quality sleep</span
                    >
                  </div>
                  <div class="flex items-start">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2"
                    />
                    <span class="text-sm text-gray-600 dark:text-gray-300"
                      >Stay hydrated (2-3L water daily)</span
                    >
                  </div>
                </div>
                <a
                  href="https://www.who.int/news-room/fact-sheets/detail/physical-activity"
                  target="_blank"
                  class="mt-4 inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
                >
                  WHO Physical Activity Guidelines
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </Motion>

          <!-- Emotional Wellbeing Card -->
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
                  class="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center mb-4"
                >
                  <UIcon
                    name="i-heroicons-sparkles"
                    class="w-6 h-6 text-pink-600 dark:text-pink-400"
                  />
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Emotional Balance
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  Studies show that mothers who practice mindfulness experience 40% lower stress
                  levels. Simple techniques can be integrated into daily routines for maximum
                  benefit.
                </p>
                <div class="space-y-3">
                  <div class="flex items-start">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2"
                    />
                    <span class="text-sm text-gray-600 dark:text-gray-300"
                      >Practice 5 minutes of mindfulness daily</span
                    >
                  </div>
                  <div class="flex items-start">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2"
                    />
                    <span class="text-sm text-gray-600 dark:text-gray-300"
                      >Keep a gratitude journal</span
                    >
                  </div>
                  <div class="flex items-start">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2"
                    />
                    <span class="text-sm text-gray-600 dark:text-gray-300"
                      >Connect with supportive friends weekly</span
                    >
                  </div>
                </div>
                <a
                  href="https://www.apa.org/topics/mindfulness"
                  target="_blank"
                  class="mt-4 inline-flex items-center text-sm font-medium text-pink-600 dark:text-pink-400 hover:text-pink-800 dark:hover:text-pink-300 transition-colors"
                >
                  APA on Mindfulness
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </Motion>

          <!-- Time Management Card -->
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 0.3 }"
            viewport="{{ once: true }}"
            class="md:col-span-2 lg:col-span-1"
          >
            <div
              class="h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div class="p-6">
                <div
                  class="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4"
                >
                  <UIcon
                    name="i-heroicons-clock"
                    class="w-6 h-6 text-blue-600 dark:text-blue-400"
                  />
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Time for You</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  Research shows that mothers who prioritize self-care are more patient, present,
                  and effective caregivers. Your needs matter too.
                </p>
                <div class="space-y-3">
                  <div class="flex items-start">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2"
                    />
                    <span class="text-sm text-gray-600 dark:text-gray-300"
                      >Schedule regular 'me time' in your calendar</span
                    >
                  </div>
                  <div class="flex items-start">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2"
                    />
                    <span class="text-sm text-gray-600 dark:text-gray-300"
                      >Learn to say no without guilt</span
                    >
                  </div>
                  <div class="flex items-start">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2"
                    />
                    <span class="text-sm text-gray-600 dark:text-gray-300"
                      >Delegate tasks when possible</span
                    >
                  </div>
                </div>
                <a
                  href="https://www.unicef.org/parenting/self-care-tips-for-parents"
                  target="_blank"
                  class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  UNICEF Self-Care Tips
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </Motion>
        </div>

        <!-- Interactive Self-Care Assessment -->
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
                Self-Care Check-In
              </h2>
              <p class="text-gray-600 dark:text-gray-300">
                Take this quick assessment to evaluate your current self-care practices
              </p>
            </div>

            <div v-if="!showResult" class="max-w-2xl mx-auto">
              <div class="mb-6">
                <div class="flex justify-between mb-2">
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >Question {{ currentQuestion + 1 }} of {{ selfCareQuiz.length }}</span
                  >
                  <span class="text-sm text-gray-500"
                    >{{ Math.round((currentQuestion / selfCareQuiz.length) * 100) }}% Complete</span
                  >
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    class="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full transition-all duration-500"
                    :style="{ width: (currentQuestion / selfCareQuiz.length) * 100 + '%' }"
                  ></div>
                </div>
              </div>

              <h3
                v-if="selfCareQuiz[currentQuestion]"
                class="text-lg font-medium text-gray-900 dark:text-white mb-6"
              >
                {{ selfCareQuiz[currentQuestion]?.question }}
              </h3>

              <div v-if="selfCareQuiz[currentQuestion]" class="space-y-3">
                <button
                  v-for="(option, index) in selfCareQuiz[currentQuestion]?.options || []"
                  :key="index"
                  class="w-full text-left p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  @click="selectAnswer(option.value)"
                >
                  {{ option.text }}
                </button>
              </div>
            </div>

            <div v-else class="text-center max-w-2xl mx-auto">
              <div
                class="w-24 h-24 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center mx-auto mb-6"
              >
                <UIcon
                  name="i-heroicons-sparkles"
                  class="w-12 h-12 text-purple-600 dark:text-pink-400"
                />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Your Self-Care Level: {{ selfCareLevel }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                {{
                  selfCareLevel === 'Excellent'
                    ? 'Great job prioritizing your wellbeing! Keep up these healthy habits.'
                    : selfCareLevel === 'Good'
                      ? "You're on the right track! Consider adding one more self-care practice to your routine."
                      : selfCareLevel === 'Needs Improvement'
                        ? "There's room to enhance your self-care routine. Start with small, manageable changes."
                        : 'Your self-care needs attention. Consider reaching out for support and making your wellbeing a priority.'
                }}
              </p>
              <button
                class="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                @click="resetQuiz"
              >
                Retake Assessment
              </button>
            </div>
          </div>
        </Motion>

        <!-- Evidence-Based Resources -->
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.3 }"
          viewport="{{ once: true }"
          class="mt-16"
        >
          <div class="text-center mb-10">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-3">Trusted Resources</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Evidence-based resources to support your self-care journey
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://www.who.int/health-topics/self-care"
              target="_blank"
              class="group block p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div
                class="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4"
              >
                <UIcon
                  name="i-heroicons-globe-alt"
                  class="w-6 h-6 text-purple-600 dark:text-purple-400"
                />
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                WHO Self-Care Guidelines
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                Global standards and recommendations for self-care interventions from the World
                Health Organization
              </p>
              <span
                class="mt-3 inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 group-hover:underline"
              >
                Visit Resource
                <UIcon name="i-heroicons-arrow-right" class="ml-1 h-4 w-4" />
              </span>
            </a>

            <a
              href="https://www.apa.org/topics/self-care"
              target="_blank"
              class="group block p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div
                class="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-4"
              >
                <UIcon
                  name="i-heroicons-academic-cap"
                  class="w-6 h-6 text-pink-600 dark:text-pink-400"
                />
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                APA Self-Care Resources
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                Psychological insights and practical self-care strategies from the American
                Psychological Association
              </p>
              <span
                class="mt-3 inline-flex items-center text-sm font-medium text-pink-600 dark:text-pink-400 group-hover:underline"
              >
                Visit Resource
                <UIcon name="i-heroicons-arrow-right" class="ml-1 h-4 w-4" />
              </span>
            </a>

            <a
              href="https://www.unicef.org/parenting/self-care-tips-for-parents"
              target="_blank"
              class="group block p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div
                class="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4"
              >
                <UIcon name="i-heroicons-heart" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                UNICEF Parenting Tips
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                Practical self-care advice specifically for parents from UNICEF's global experts
              </p>
              <span
                class="mt-3 inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:underline"
              >
                Visit Resource
                <UIcon name="i-heroicons-arrow-right" class="ml-1 h-4 w-4" />
              </span>
            </a>
          </div>
        </Motion>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-800 dark:to-pink-800"
    >
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-white mb-6">Your Wellbeing Matters</h2>
        <p class="text-xl text-white/90 mb-8">
          Remember, taking care of yourself isn't selfish—it's essential. When you prioritize your
          wellbeing, you're better equipped to care for those who depend on you.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/care/mental-health"
            class="px-8 py-3 bg-white text-purple-700 font-medium rounded-lg hover:bg-opacity-90 transition-opacity"
          >
            Explore Mental Health
          </NuxtLink>
          <NuxtLink
            to="/care/spiritual-wellness"
            class="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
          >
            Spiritual Wellness
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
