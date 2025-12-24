<script setup lang="ts">
useHead({
  title: 'Quiz & Activities - Interactive Parenting Learning | Momix Squad',
  meta: [
    {
      name: 'description',
      content:
        'Engage with interactive quizzes and activities inspired by UNICEF and WHO guidelines. Test your parenting knowledge and learn through play.'
    }
  ]
});

definePageMeta({
  layout: 'default'
});

// Quiz state
const currentQuiz = ref('');
const quizStarted = ref(false);
const currentQuestion = ref(0);
const score = ref(0);
const showResults = ref(false);
const selectedAnswer = ref('');
const quizCompleted = ref(false);

// Quiz data inspired by UNICEF and WHO child development guidelines
const quizzes = {
  'early-development': {
    title: 'Early Child Development',
    description: 'Test your knowledge about early childhood development based on UNICEF guidelines',
    icon: 'i-heroicons-academic-cap',
    color: 'emerald',
    questions: [
      {
        question: 'At what age do babies typically start to smile socially?',
        options: ['2-3 months', '4-6 months', '7-9 months', '10-12 months'],
        correct: 0,
        explanation:
          'Babies typically begin to smile socially around 2-3 months of age. This is an important social-emotional milestone.'
      },
      {
        question: 'How many hours of sleep do toddlers (1-2 years) typically need per day?',
        options: ['8-10 hours', '11-14 hours', '15-18 hours', '6-8 hours'],
        correct: 1,
        explanation:
          'Toddlers need about 11-14 hours of sleep per day, including naps. Adequate sleep is crucial for brain development.'
      },
      {
        question: 'What is the most important factor for early brain development?',
        options: [
          'Expensive toys',
          'Nutrition and stimulation',
          'Early academic training',
          'Screen time'
        ],
        correct: 1,
        explanation:
          'Proper nutrition and responsive stimulation are the most critical factors for early brain development.'
      },
      {
        question: 'At what age do children typically start walking independently?',
        options: ['6-9 months', '9-12 months', '12-15 months', '15-18 months'],
        correct: 2,
        explanation:
          'Most children begin walking independently between 12-15 months, though the normal range is wider (9-18 months).'
      },
      {
        question: 'How many words should a 2-year-old typically be able to say?',
        options: ['10-25 words', '50-100 words', '150-200 words', '300+ words'],
        correct: 2,
        explanation:
          'By age 2, most children can say 150-200 words and start combining words into simple sentences.'
      }
    ]
  },
  'parenting-knowledge': {
    title: 'Parenting Knowledge',
    description: 'Essential parenting skills every mom should know',
    icon: 'i-heroicons-heart',
    color: 'rose',
    questions: [
      {
        question: "What is the recommended way to respond to a toddler's tantrum?",
        options: [
          'Punish immediately',
          'Stay calm and acknowledge feelings',
          'Ignore completely',
          'Give in to demands'
        ],
        correct: 1,
        explanation:
          "Staying calm and acknowledging your child's feelings helps them learn emotional regulation and builds trust."
      },
      {
        question: 'How often should you breastfeed a newborn?',
        options: ['Every 4-6 hours', 'Every 2-3 hours', 'Every 1-2 hours', 'Only when baby cries'],
        correct: 2,
        explanation:
          'Newborns typically need to feed every 1-2 hours (8-12 times in 24 hours) for optimal growth and development.'
      },
      {
        question: 'What is the best way to promote language development?',
        options: [
          'Educational videos',
          'Daily reading and conversation',
          'Flash cards',
          'Smartphone apps'
        ],
        correct: 1,
        explanation:
          'Daily reading and conversation with your child is the most effective way to promote language development.'
      },
      {
        question: 'At what age can children start learning to share?',
        options: ['1 year', '2 years', '3 years', '4 years'],
        correct: 2,
        explanation:
          'Sharing is a complex skill that typically develops around age 3. Before this, sharing is difficult for young children.'
      },
      {
        question: 'How much screen time is recommended for children under 2 years?',
        options: ['1 hour per day', '2 hours per day', 'No screen time', '30 minutes per day'],
        correct: 2,
        explanation:
          'WHO and UNICEF recommend no screen time for children under 2 years, except for video calls with family.'
      }
    ]
  }
};

// Activities data
const activities = [
  {
    title: 'Bonding Through Play',
    description: 'Simple activities to strengthen your bond with your child',
    age: '0-2 years',
    difficulty: 'Easy',
    time: '15-30 minutes',
    materials: ['Soft toys', 'Music', 'Blanket'],
    steps: [
      'Lay on the floor with your baby',
      'Sing songs and make eye contact',
      'Use gentle touch and massage',
      "Follow baby's lead and respond to their cues"
    ],
    benefits: ['Emotional bonding', 'Sensory development', 'Language skills', 'Motor skills']
  },
  {
    title: 'Sensory Exploration',
    description: 'Help your toddler explore the world through their senses',
    age: '1-3 years',
    difficulty: 'Easy',
    time: '20-30 minutes',
    materials: ['Safe household items', 'Texture cards', 'Water play'],
    steps: [
      'Create a safe exploration area',
      'Offer items with different textures',
      'Describe what your child is feeling',
      'Supervise and engage together'
    ],
    benefits: [
      'Cognitive development',
      'Fine motor skills',
      'Language growth',
      'Sensory integration'
    ]
  },
  {
    title: 'Story Time Adventures',
    description: 'Make reading an interactive and magical experience',
    age: '2-5 years',
    difficulty: 'Medium',
    time: '15-25 minutes',
    materials: ['Picture books', 'Puppets', 'Cozy space'],
    steps: [
      'Choose age-appropriate books',
      'Use different voices for characters',
      'Ask questions about the story',
      'Let your child turn pages and point'
    ],
    benefits: ['Language development', 'Imagination', 'Listening skills', 'Emotional intelligence']
  }
];

function startQuiz(quizType: string) {
  currentQuiz.value = quizType;
  quizStarted.value = true;
  currentQuestion.value = 0;
  score.value = 0;
  showResults.value = false;
  selectedAnswer.value = '';
  quizCompleted.value = false;
}

function selectAnswer(answerIndex: number) {
  const quiz = quizzes[currentQuiz.value as keyof typeof quizzes];
  if (quiz && quiz.questions[currentQuestion.value]) {
    selectedAnswer.value = quiz.questions[currentQuestion.value]!.options[answerIndex] as string;
  }
}

function submitAnswer() {
  const quiz = quizzes[currentQuiz.value as keyof typeof quizzes];
  if (!quiz || !quiz.questions[currentQuestion.value]) return;

  const question = quiz.questions[currentQuestion.value]!;
  const correctIndex = question.correct;
  const selectedIndex = question.options.indexOf(selectedAnswer.value || '');

  if (selectedIndex === correctIndex) {
    score.value++;
  }

  if (currentQuestion.value < quiz.questions.length - 1) {
    currentQuestion.value++;
    selectedAnswer.value = '';
  } else {
    showResults.value = true;
    quizCompleted.value = true;
  }
}

function resetQuiz() {
  currentQuiz.value = '';
  quizStarted.value = false;
  currentQuestion.value = 0;
  score.value = 0;
  showResults.value = false;
  selectedAnswer.value = '';
  quizCompleted.value = false;
}

const currentQuizData = computed(() => {
  return quizzes[currentQuiz.value as keyof typeof quizzes] || null;
});

const progress = computed(() => {
  if (!currentQuizData.value) return 0;
  return ((currentQuestion.value + 1) / currentQuizData.value.questions.length) * 100;
});
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-rose-950/20"
  >
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8"
    >
      <div class="absolute inset-0 mesh-bg opacity-30" />

      <div class="relative mx-auto max-w-7xl">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5 }"
        >
          <div class="text-center">
            <div
              class="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-100 dark:bg-purple-900/50 px-6 py-2 text-sm font-semibold text-purple-700 dark:text-purple-300 ring-1 ring-purple-200 dark:ring-purple-800"
            >
              <UIcon name="i-heroicons-sparkles" class="h-5 w-5" />
              Interactive Learning
            </div>
            <h1
              class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 dark:text-white mb-6"
            >
              Quiz & Activities
            </h1>
            <p class="text-xl text-neutral-600 dark:text-pink-200 max-w-3xl mx-auto">
              Test your parenting knowledge and discover fun activities inspired by UNICEF and WHO
              guidelines. Learn, play, and grow with your child through evidence-based approaches.
            </p>
          </div>
        </Motion>
      </div>
    </section>

    <!-- Quiz Selection or Quiz Interface -->
    <section class="px-4 sm:px-6 lg:px-8 py-12">
      <div class="mx-auto max-w-7xl">
        <!-- Quiz Selection -->
        <div v-if="!quizStarted" class="space-y-8">
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.2 }"
          >
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                Choose Your Quiz
              </h2>
              <p class="text-lg text-neutral-600 dark:text-pink-200">
                Test your knowledge with our expert-designed quizzes
              </p>
            </div>
          </Motion>

          <div class="grid gap-6 md:grid-cols-2">
            <Motion
              v-for="(quiz, key) in quizzes"
              :key="key"
              :initial="{ opacity: 0, scale: 0.95 }"
              :animate="{ opacity: 1, scale: 1 }"
              :transition="{ duration: 0.5, delay: 0.3 }"
            >
              <div
                class="group overflow-hidden rounded-2xl bg-white dark:bg-neutral-800 shadow-lg ring-1 ring-neutral-200 dark:ring-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div class="p-8">
                  <div
                    class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl"
                    :class="{
                      'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400':
                        quiz.color === 'emerald',
                      'bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400':
                        quiz.color === 'rose'
                    }"
                  >
                    <UIcon :name="quiz.icon" class="h-8 w-8" />
                  </div>

                  <h3 class="text-2xl font-bold text-neutral-900 dark:text-white mb-3">
                    {{ quiz.title }}
                  </h3>
                  <p class="text-neutral-600 dark:text-pink-200 mb-6">
                    {{ quiz.description }}
                  </p>

                  <div class="flex items-center justify-between">
                    <div
                      class="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400"
                    >
                      <span class="flex items-center gap-1">
                        <UIcon name="i-heroicons-question-mark-circle" class="h-4 w-4" />
                        {{ quiz.questions.length }} questions
                      </span>
                      <span class="flex items-center gap-1">
                        <UIcon name="i-heroicons-clock" class="h-4 w-4" />
                        5-10 min
                      </span>
                    </div>

                    <UButton
                      :color="quiz.color === 'emerald' ? 'success' : 'error'"
                      size="lg"
                      variant="solid"
                      @click="startQuiz(key)"
                    >
                      Start Quiz
                      <template #trailing>
                        <UIcon name="i-heroicons-arrow-right" class="h-4 w-4" />
                      </template>
                    </UButton>
                  </div>
                </div>
              </div>
            </Motion>
          </div>
        </div>

        <!-- Quiz Interface -->
        <div v-else-if="currentQuizData && !showResults" class="max-w-3xl mx-auto">
          <Motion
            :initial="{ opacity: 0, x: 20 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.5 }"
          >
            <!-- Progress Bar -->
            <div class="mb-8">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm font-medium text-neutral-600 dark:text-pink-200">
                  Question {{ currentQuestion + 1 }} of {{ currentQuizData.questions.length }}
                </span>
                <span class="text-sm font-medium text-neutral-600 dark:text-pink-200">
                  {{ Math.round(progress) }}% Complete
                </span>
              </div>
              <div class="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                <div
                  class="h-2 rounded-full transition-all duration-500"
                  :class="{
                    'bg-emerald-500': currentQuizData.color === 'emerald',
                    'bg-rose-500': currentQuizData.color === 'rose'
                  }"
                  :style="{ width: `${progress}%` }"
                />
              </div>
            </div>

            <!-- Question Card -->
            <div
              class="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl ring-1 ring-neutral-200 dark:ring-neutral-700 p-8"
            >
              <h3 class="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                {{ currentQuizData.questions[currentQuestion]!.question }}
              </h3>

              <div class="space-y-3">
                <div
                  v-for="(option, index) in currentQuizData.questions[currentQuestion]!.options"
                  :key="index"
                  class="p-4 rounded-xl border-2 cursor-pointer transition-all duration-200"
                  :class="{
                    'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20':
                      selectedAnswer === option && currentQuizData.color === 'emerald',
                    'border-rose-500 bg-rose-50 dark:bg-rose-900/20':
                      selectedAnswer === option && currentQuizData.color === 'rose',
                    'border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600':
                      selectedAnswer !== option
                  }"
                  @click="selectAnswer(index)"
                >
                  <div class="flex items-center">
                    <div
                      class="w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center"
                      :class="{
                        'border-emerald-500': currentQuizData.color === 'emerald',
                        'border-rose-500': currentQuizData.color === 'rose'
                      }"
                    >
                      <div
                        v-if="selectedAnswer === option"
                        class="w-2 h-2 rounded-full"
                        :class="{
                          'bg-emerald-500': currentQuizData.color === 'emerald',
                          'bg-rose-500': currentQuizData.color === 'rose'
                        }"
                      />
                    </div>
                    <span class="text-neutral-900 dark:text-white">{{ option }}</span>
                  </div>
                </div>
              </div>

              <div class="mt-8 flex justify-between">
                <UButton color="neutral" variant="ghost" size="lg" @click="resetQuiz">
                  Exit Quiz
                </UButton>

                <UButton
                  :color="currentQuizData.color === 'emerald' ? 'success' : 'error'"
                  size="lg"
                  variant="solid"
                  :disabled="!selectedAnswer"
                  @click="submitAnswer"
                >
                  {{
                    currentQuestion < currentQuizData.questions.length - 1
                      ? 'Next Question'
                      : 'See Results'
                  }}
                  <template #trailing>
                    <UIcon name="i-heroicons-arrow-right" class="h-4 w-4" />
                  </template>
                </UButton>
              </div>
            </div>
          </Motion>
        </div>

        <!-- Quiz Results -->
        <div v-else-if="showResults && currentQuizData" class="max-w-3xl mx-auto">
          <Motion
            :initial="{ opacity: 0, scale: 0.95 }"
            :animate="{ opacity: 1, scale: 1 }"
            :transition="{ duration: 0.5 }"
          >
            <div
              class="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl ring-1 ring-neutral-200 dark:ring-neutral-700 p-8 text-center"
            >
              <div
                class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl"
                :class="{
                  'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400':
                    score >= currentQuizData.questions.length * 0.7,
                  'bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400':
                    score >= currentQuizData.questions.length * 0.4 &&
                    score < currentQuizData.questions.length * 0.7,
                  'bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400':
                    score < currentQuizData.questions.length * 0.4
                }"
              >
                <UIcon name="i-heroicons-trophy" class="h-10 w-10" />
              </div>

              <h3 class="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                Quiz Complete!
              </h3>

              <div class="mb-6">
                <div
                  class="text-5xl font-bold mb-2"
                  :class="{
                    'text-emerald-600 dark:text-emerald-400':
                      score >= currentQuizData.questions.length * 0.7,
                    'text-amber-600 dark:text-amber-400':
                      score >= currentQuizData.questions.length * 0.4 &&
                      score < currentQuizData.questions.length * 0.7,
                    'text-rose-600 dark:text-rose-400':
                      score < currentQuizData.questions.length * 0.4
                  }"
                >
                  {{ score }}/{{ currentQuizData.questions.length }}
                </div>
                <p class="text-lg text-neutral-600 dark:text-pink-200">
                  {{ Math.round((score / currentQuizData.questions.length) * 100) }}% Correct
                </p>
              </div>

              <div class="mb-8 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900">
                <p class="text-neutral-700 dark:text-pink-300">
                  {{
                    score >= currentQuizData.questions.length * 0.7
                      ? 'Excellent! You have great knowledge of child development.'
                      : score >= currentQuizData.questions.length * 0.4
                        ? 'Good job! Keep learning about child development.'
                        : 'Keep learning! Child development is a journey of discovery.'
                  }}
                </p>
              </div>

              <div class="flex gap-4 justify-center">
                <UButton color="neutral" variant="outline" size="lg" @click="resetQuiz">
                  Back to Quizzes
                </UButton>
                <UButton
                  :color="currentQuizData.color === 'emerald' ? 'success' : 'error'"
                  size="lg"
                  variant="solid"
                  @click="startQuiz(currentQuiz)"
                >
                  Retake Quiz
                </UButton>
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Activities Section -->
    <section class="px-4 sm:px-6 lg:px-8 py-12 bg-white/50 dark:bg-neutral-900/50">
      <div class="mx-auto max-w-7xl">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.4 }"
        >
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
              Fun Activities for Every Age
            </h2>
            <p class="text-lg text-neutral-600 dark:text-pink-200">
              Evidence-based activities to support your child\'s development
            </p>
          </div>
        </Motion>

        <div class="grid gap-8 lg:grid-cols-3">
          <Motion
            v-for="(activity, index) in activities"
            :key="activity.title"
            :initial="{ opacity: 0, y: 30 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.5 + index * 0.1 }"
          >
            <div
              class="group h-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 ring-1 ring-purple-200 dark:ring-purple-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <!-- Activity Header -->
              <div class="mb-6">
                <div class="flex items-center justify-between mb-4">
                  <span
                    class="inline-flex items-center gap-1 rounded-full bg-purple-100 dark:bg-purple-900/50 px-3 py-1 text-xs font-semibold text-purple-700 dark:text-purple-300"
                  >
                    <UIcon name="i-heroicons-clock" class="h-3 w-3" />
                    {{ activity.time }}
                  </span>
                  <span
                    class="inline-flex items-center gap-1 rounded-full bg-pink-100 dark:bg-pink-900/50 px-3 py-1 text-xs font-semibold text-pink-700 dark:text-pink-300"
                  >
                    <UIcon name="i-heroicons-sparkles" class="h-3 w-3" />
                    {{ activity.difficulty }}
                  </span>
                </div>

                <h3 class="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                  {{ activity.title }}
                </h3>
                <p class="text-neutral-600 dark:text-pink-200 mb-4">
                  {{ activity.description }}
                </p>

                <div class="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                  <UIcon name="i-heroicons-users" class="h-4 w-4" />
                  <span>{{ activity.age }}</span>
                </div>
              </div>

              <!-- Materials -->
              <div class="mb-6">
                <h4 class="text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                  Materials Needed:
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="material in activity.materials"
                    :key="material"
                    class="rounded-full bg-white/70 dark:bg-neutral-800/70 px-3 py-1 text-xs text-neutral-700 dark:text-pink-300"
                  >
                    {{ material }}
                  </span>
                </div>
              </div>

              <!-- Steps -->
              <div class="mb-6">
                <h4 class="text-sm font-semibold text-neutral-900 dark:text-white mb-2">Steps:</h4>
                <ol class="space-y-1">
                  <li
                    v-for="(step, stepIndex) in activity.steps"
                    :key="stepIndex"
                    class="flex items-start gap-2 text-sm text-neutral-600 dark:text-pink-200"
                  >
                    <span class="font-semibold text-purple-600 dark:text-purple-400"
                      >{{ stepIndex + 1 }}.</span
                    >
                    <span>{{ step }}</span>
                  </li>
                </ol>
              </div>

              <!-- Benefits -->
              <div class="pt-4 border-t border-purple-200 dark:border-purple-800">
                <h4 class="text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                  Benefits:
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="benefit in activity.benefits"
                    :key="benefit"
                    class="rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300"
                  >
                    {{ benefit }}
                  </span>
                </div>
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Resources Section -->
    <section class="px-4 sm:px-6 lg:px-8 py-12">
      <div class="mx-auto max-w-7xl">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.6 }"
        >
          <div
            class="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-800 dark:to-pink-800 rounded-3xl p-8 text-center text-white"
          >
            <h3 class="text-2xl font-bold mb-4">Want More Resources?</h3>
            <p class="text-lg mb-6 text-purple-100">
              Explore our comprehensive guides and expert advice for every stage of motherhood.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <UButton
                to="/development"
                color="neutral"
                size="lg"
                variant="solid"
                class="text-purple-600 hover:text-purple-700"
              >
                Browse Development Stages
                <template #trailing>
                  <UIcon name="i-heroicons-arrow-right" class="h-4 w-4" />
                </template>
              </UButton>
              <UButton
                to="/contact"
                color="neutral"
                size="lg"
                variant="outline"
                class="border-white text-white hover:bg-white hover:text-purple-600"
              >
                Get Expert Help
              </UButton>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  </div>
</template>
