<script setup lang="ts">
interface SurveyQuestion {
  text: string;
}

interface SurveySection {
  title: string;
  questions: SurveyQuestion[];
  duaPrompt?: string;
  reflectionPrompt?: string;
}

interface ScoreRange {
  min: number;
  max: number;
  label: string;
  description: string;
}

interface LightMoment {
  prompt: string;
}

interface Props {
  title: string;
  subtitle?: string;
  instructions?: string;
  scale: string[];
  scaleScores: number[];
  sections: SurveySection[];
  maxScore: number;
  scoreRanges: ScoreRange[];
  lightMoments?: LightMoment[];
  closingReflections?: string[];
  affirmations?: string[];
  importantNote?: string;
}

const props = defineProps<Props>();

const answers = ref<Record<string, number>>({});
const reflections = ref<Record<string, string>>({});
const lightAnswers = ref<Record<string, string>>({});
const showResults = ref(false);

const totalScore = computed(() => {
  return Object.values(answers.value).reduce((sum, val) => sum + val, 0);
});

const totalQuestions = computed(() => {
  return props.sections.reduce((sum, section) => sum + section.questions.length, 0);
});

const answeredQuestions = computed(() => {
  return Object.keys(answers.value).length;
});

const currentRange = computed(() => {
  return props.scoreRanges.find(r => totalScore.value >= r.min && totalScore.value <= r.max);
});

const progressPercent = computed(() => {
  if (totalQuestions.value === 0) return 0;
  return Math.round((answeredQuestions.value / totalQuestions.value) * 100);
});

function getQuestionKey(sectionIndex: number, questionIndex: number): string {
  return `s${sectionIndex}-q${questionIndex}`;
}

function selectAnswer(sectionIndex: number, questionIndex: number, score: number) {
  answers.value[getQuestionKey(sectionIndex, questionIndex)] = score;
}

function getSelectedScore(sectionIndex: number, questionIndex: number): number | undefined {
  return answers.value[getQuestionKey(sectionIndex, questionIndex)];
}

function handleSubmit() {
  showResults.value = true;
}

function resetSurvey() {
  answers.value = {};
  reflections.value = {};
  lightAnswers.value = {};
  showResults.value = false;
}
</script>

<template>
  <section class="px-4 sm:px-6 lg:px-8 py-16">
    <div class="mx-auto max-w-4xl">
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5 }"
      >
        <div
          class="rounded-3xl bg-white dark:bg-neutral-900 shadow-xl ring-1 ring-neutral-200 dark:ring-neutral-800 overflow-hidden"
        >
          <div
            class="bg-gradient-to-r from-primary-500 to-purple-600 dark:from-primary-700 dark:to-purple-800 p-8 text-white"
          >
            <h2 class="text-2xl sm:text-3xl font-bold">{{ title }}</h2>
            <p v-if="subtitle" class="mt-2 text-primary-100 text-lg">{{ subtitle }}</p>
          </div>

          <div v-if="!showResults" class="p-6 sm:p-8">
            <div
              v-if="instructions"
              class="mb-8 p-4 rounded-xl bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800"
            >
              <p class="text-sm text-primary-800 dark:text-primary-200">
                <strong>How to Respond:</strong> {{ instructions }}
              </p>
              <div class="mt-3 flex flex-wrap gap-2">
                <span
                  v-for="(label, idx) in scale"
                  :key="label"
                  class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 ring-1 ring-neutral-200 dark:ring-neutral-700"
                >
                  {{ label }} = {{ scaleScores[idx] }}
                </span>
              </div>
            </div>

            <div class="mb-6 flex items-center gap-4">
              <div
                class="flex-1 h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden"
              >
                <div
                  class="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full transition-all duration-500"
                  :style="{ width: `${progressPercent}%` }"
                />
              </div>
              <span class="text-sm text-neutral-500 dark:text-neutral-400 whitespace-nowrap">
                {{ answeredQuestions }} / {{ totalQuestions }}
              </span>
            </div>

            <div class="space-y-10">
              <div v-for="(section, sIdx) in sections" :key="section.title">
                <h3
                  class="text-xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3"
                >
                  <span
                    class="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/50 text-sm font-bold text-primary-600 dark:text-primary-400"
                  >
                    {{ String.fromCharCode(65 + sIdx) }}
                  </span>
                  {{ section.title }}
                </h3>

                <div class="space-y-4">
                  <div
                    v-for="(question, qIdx) in section.questions"
                    :key="qIdx"
                    class="p-4 rounded-xl border transition-all duration-200"
                    :class="
                      getSelectedScore(sIdx, qIdx) !== undefined
                        ? 'border-primary-300 dark:border-primary-700 bg-primary-50/50 dark:bg-primary-900/20'
                        : 'border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800'
                    "
                  >
                    <p class="text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-3">
                      {{ question.text }}
                    </p>
                    <div class="flex flex-wrap gap-2">
                      <button
                        v-for="(label, scoreIdx) in scale"
                        :key="label"
                        type="button"
                        class="px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
                        :class="
                          getSelectedScore(sIdx, qIdx) === scaleScores[scoreIdx]
                            ? 'bg-primary-500 text-white shadow-md'
                            : 'bg-white dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 ring-1 ring-neutral-200 dark:ring-neutral-600 hover:ring-primary-300 dark:hover:ring-primary-600'
                        "
                        @click="selectAnswer(sIdx, qIdx, scaleScores[scoreIdx] ?? 0)"
                      >
                        {{ label }}
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  v-if="section.duaPrompt"
                  class="mt-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800"
                >
                  <p class="text-sm font-semibold text-emerald-800 dark:text-emerald-200 mb-1">
                    Du'a Prompt:
                  </p>
                  <p class="text-sm text-emerald-700 dark:text-emerald-300 italic">
                    "{{ section.duaPrompt }}"
                  </p>
                </div>

                <div v-if="section.reflectionPrompt" class="mt-4">
                  <label
                    class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    {{ section.reflectionPrompt }}
                  </label>
                  <textarea
                    v-model="reflections[`section-${sIdx}`]"
                    rows="2"
                    class="w-full rounded-xl border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                    placeholder="Write your reflection here..."
                  />
                </div>
              </div>
            </div>

            <div
              v-if="lightMoments && lightMoments.length > 0"
              class="mt-10 p-6 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800"
            >
              <h3 class="text-lg font-bold text-amber-900 dark:text-amber-100 mb-4">
                Fun Reflection
              </h3>
              <div class="space-y-3">
                <div v-for="(moment, idx) in lightMoments" :key="idx">
                  <label class="block text-sm font-medium text-amber-800 dark:text-amber-200 mb-1">
                    {{ moment.prompt }}
                  </label>
                  <input
                    v-model="lightAnswers[`light-${idx}`]"
                    type="text"
                    class="w-full rounded-lg border-amber-300 dark:border-amber-700 bg-white dark:bg-neutral-800 px-3 py-2 text-sm text-neutral-900 dark:text-neutral-100 placeholder-amber-400 dark:placeholder-amber-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                    placeholder="Type your answer..."
                  />
                </div>
              </div>
            </div>

            <div class="mt-8 flex flex-col sm:flex-row gap-4">
              <UButton
                color="primary"
                size="xl"
                class="flex-1 justify-center shadow-lg shadow-primary-500/20"
                :disabled="answeredQuestions < totalQuestions"
                @click="handleSubmit"
              >
                View My Results
                <template #trailing>
                  <UIcon name="i-heroicons-chart-bar" class="h-5 w-5" />
                </template>
              </UButton>
              <UButton color="neutral" variant="outline" size="xl" @click="resetSurvey">
                Reset
              </UButton>
            </div>

            <p
              v-if="answeredQuestions < totalQuestions"
              class="mt-3 text-center text-sm text-neutral-500 dark:text-neutral-400"
            >
              Answer all {{ totalQuestions }} questions to see your results
            </p>
          </div>

          <div v-else class="p-6 sm:p-8">
            <div class="text-center mb-8">
              <div
                class="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary-100 dark:bg-primary-900/50 mb-4"
              >
                <span class="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  {{ totalScore }}
                </span>
              </div>
              <p class="text-sm text-neutral-500 dark:text-neutral-400">out of {{ maxScore }}</p>
            </div>

            <div
              v-if="currentRange"
              class="p-6 rounded-2xl mb-8"
              :class="
                totalScore >= (scoreRanges[0]?.min ?? 0)
                  ? 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800'
                  : totalScore >= (scoreRanges[1]?.min ?? 0)
                    ? 'bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800'
                    : 'bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800'
              "
            >
              <h3 class="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                {{ currentRange.label }}
              </h3>
              <p class="text-neutral-700 dark:text-neutral-300">
                {{ currentRange.description }}
              </p>
            </div>

            <div
              v-if="importantNote"
              class="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-800 mb-8"
            >
              <p class="text-sm text-neutral-600 dark:text-neutral-400 italic">
                {{ importantNote }}
              </p>
            </div>

            <div v-if="closingReflections && closingReflections.length > 0" class="mb-8 space-y-3">
              <h3 class="text-lg font-bold text-neutral-900 dark:text-white">Closing Reflection</h3>
              <div v-for="(prompt, idx) in closingReflections" :key="idx">
                <label
                  class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                >
                  {{ prompt }}
                </label>
                <input
                  type="text"
                  class="w-full rounded-lg border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                  placeholder="Write your reflection..."
                />
              </div>
            </div>

            <div
              v-if="affirmations && affirmations.length > 0"
              class="mb-8 p-6 rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800"
            >
              <h3 class="text-lg font-bold text-primary-900 dark:text-primary-100 mb-3">
                Daily Affirmations
              </h3>
              <ul class="space-y-2">
                <li
                  v-for="(affirmation, idx) in affirmations"
                  :key="idx"
                  class="flex items-start gap-2 text-sm text-primary-800 dark:text-primary-200"
                >
                  <span class="text-primary-500 mt-0.5">&#10084;</span>
                  {{ affirmation }}
                </li>
              </ul>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <UButton color="primary" size="xl" class="flex-1 justify-center" @click="resetSurvey">
                Retake Survey
                <template #trailing>
                  <UIcon name="i-heroicons-arrow-path" class="h-5 w-5" />
                </template>
              </UButton>
            </div>
          </div>
        </div>
      </Motion>
    </div>
  </section>
</template>
