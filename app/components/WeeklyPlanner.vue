<script setup lang="ts">
const STORAGE_KEY = 'momix-weekly-planner';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const dayAbbrevs = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const dimensions = [
  { key: 'physical', label: 'Physical Energy', icon: 'i-heroicons-bolt', color: 'text-rose-500' },
  { key: 'emotional', label: 'Emotional Mood', icon: 'i-heroicons-heart', color: 'text-amber-500' },
  {
    key: 'spiritual',
    label: 'Spiritual Well-Being',
    icon: 'i-heroicons-sparkles',
    color: 'text-emerald-500'
  },
  {
    key: 'baby',
    label: 'Baby Connection',
    icon: 'i-heroicons-face-smile',
    color: 'text-purple-500'
  },
  { key: 'selfcare', label: 'Self-Care', icon: 'i-heroicons-sun', color: 'text-pink-500' }
] as const;

const levelOptions = [
  { value: 3, label: 'Great', emoji: '😊' },
  { value: 2, label: 'Okay', emoji: '😐' },
  { value: 1, label: 'Low', emoji: '😔' }
];

interface PlannerState {
  tracker: Record<string, Record<string, number | null>>;
  goals: { physical: string; emotional: string; spiritual: string; babyPrep: string };
  reflection: string;
  gratitude: string;
  funReflection: { cravings: string; funny: string; discovery: string };
}

function createEmptyState(): PlannerState {
  const tracker: Record<string, Record<string, number | null>> = {};
  for (const day of days) {
    tracker[day] = {};
    for (const dim of dimensions) {
      tracker[day][dim.key] = null;
    }
  }
  return {
    tracker,
    goals: { physical: '', emotional: '', spiritual: '', babyPrep: '' },
    reflection: '',
    gratitude: '',
    funReflection: { cravings: '', funny: '', discovery: '' }
  };
}

function loadState(): PlannerState {
  if (import.meta.server) return createEmptyState();
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    // Ignore corrupted localStorage data
  }
  return createEmptyState();
}

const state = reactive<PlannerState>(loadState());

function saveState() {
  if (import.meta.server) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

watch(() => state, saveState, { deep: true });

function resetPlanner() {
  const empty = createEmptyState();
  Object.assign(state, empty);
  if (!import.meta.server) {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function selectLevel(day: string, dimensionKey: string, value: number) {
  const dayData = state.tracker[day];
  if (!dayData) return;
  if (dayData[dimensionKey] === value) {
    dayData[dimensionKey] = null;
  } else {
    dayData[dimensionKey] = value;
  }
}

function getLevel(day: string, dimensionKey: string): number | null {
  return state.tracker[day]?.[dimensionKey] ?? null;
}

const filledCount = computed(() => {
  let count = 0;
  for (const day of days) {
    const dayData = state.tracker[day];
    if (!dayData) continue;
    for (const dim of dimensions) {
      if (dayData[dim.key] !== null) count++;
    }
  }
  return count;
});

const totalCells = days.length * dimensions.length;

const progressPercent = computed(() => {
  if (totalCells === 0) return 0;
  return Math.round((filledCount.value / totalCells) * 100);
});
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
            class="bg-gradient-to-r from-rose-500 to-purple-600 dark:from-rose-700 dark:to-purple-800 p-8 text-white"
          >
            <h2 class="text-2xl sm:text-3xl font-bold">Weekly Wellness Planner</h2>
            <p class="mt-2 text-rose-100 text-lg">
              Track your well-being day by day. Small steps, big blessings.
            </p>
          </div>

          <div class="p-6 sm:p-8">
            <div class="mb-6 flex items-center gap-4">
              <div
                class="flex-1 h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden"
              >
                <div
                  class="h-full bg-gradient-to-r from-rose-500 to-purple-500 rounded-full transition-all duration-500"
                  :style="{ width: `${progressPercent}%` }"
                />
              </div>
              <span class="text-sm text-neutral-500 dark:text-neutral-400 whitespace-nowrap">
                {{ filledCount }} / {{ totalCells }}
              </span>
            </div>

            <!-- Daily Tracker Grid -->
            <div class="overflow-x-auto -mx-2 px-2">
              <table class="w-full text-sm">
                <thead>
                  <tr>
                    <th
                      class="text-left py-2 px-1 text-neutral-600 dark:text-neutral-400 font-medium min-w-[120px]"
                    >
                      Dimension
                    </th>
                    <th
                      v-for="(day, idx) in days"
                      :key="day"
                      class="text-center py-2 px-1 text-neutral-600 dark:text-neutral-400 font-medium"
                    >
                      <span class="hidden sm:inline">{{ day }}</span>
                      <span class="sm:hidden">{{ dayAbbrevs[idx] }}</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="dim in dimensions"
                    :key="dim.key"
                    class="border-t border-neutral-100 dark:border-neutral-800"
                  >
                    <td class="py-3 px-1">
                      <div class="flex items-center gap-2">
                        <UIcon :name="dim.icon" :class="`h-4 w-4 ${dim.color}`" />
                        <span
                          class="text-neutral-800 dark:text-neutral-200 font-medium text-xs sm:text-sm"
                        >
                          {{ dim.label }}
                        </span>
                      </div>
                    </td>
                    <td v-for="day in days" :key="day" class="py-3 px-1 text-center">
                      <div class="flex justify-center gap-0.5">
                        <button
                          v-for="option in levelOptions"
                          :key="option.value"
                          type="button"
                          class="w-7 h-7 rounded-md text-xs transition-all duration-200 flex items-center justify-center"
                          :class="
                            getLevel(day, dim.key) === option.value
                              ? 'bg-primary-500 text-white shadow-md scale-110'
                              : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                          "
                          :title="`${option.label} - ${day}`"
                          @click="selectLevel(day, dim.key, option.value)"
                        >
                          {{ option.emoji }}
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div
              class="mt-4 flex items-center justify-center gap-4 text-xs text-neutral-500 dark:text-neutral-400"
            >
              <span
                v-for="option in levelOptions"
                :key="option.value"
                class="flex items-center gap-1"
              >
                {{ option.emoji }} {{ option.label }}
              </span>
            </div>

            <!-- Weekly Goals -->
            <div class="mt-10">
              <h3
                class="text-xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3"
              >
                <span
                  class="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/50 text-sm font-bold text-primary-600 dark:text-primary-400"
                >
                  <UIcon name="i-heroicons-flag" class="h-4 w-4" />
                </span>
                Weekly Goals
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                  >
                    Physical Goal
                  </label>
                  <input
                    v-model="state.goals.physical"
                    type="text"
                    class="w-full rounded-xl border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                    placeholder="e.g., Walk 20 minutes daily"
                  />
                </div>
                <div>
                  <label
                    class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                  >
                    Emotional Goal
                  </label>
                  <input
                    v-model="state.goals.emotional"
                    type="text"
                    class="w-full rounded-xl border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                    placeholder="e.g., Journal before bed"
                  />
                </div>
                <div>
                  <label
                    class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                  >
                    Spiritual Goal
                  </label>
                  <input
                    v-model="state.goals.spiritual"
                    type="text"
                    class="w-full rounded-xl border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                    placeholder="e.g., Read 1 page of Quran daily"
                  />
                </div>
                <div>
                  <label
                    class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                  >
                    Baby Prep Goal
                  </label>
                  <input
                    v-model="state.goals.babyPrep"
                    type="text"
                    class="w-full rounded-xl border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                    placeholder="e.g., Research car seats"
                  />
                </div>
              </div>
            </div>

            <!-- Weekly Reflection & Gratitude -->
            <div class="mt-10">
              <h3
                class="text-xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3"
              >
                <span
                  class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-sm font-bold text-emerald-600 dark:text-emerald-400"
                >
                  <UIcon name="i-heroicons-pencil-square" class="h-4 w-4" />
                </span>
                Weekly Reflection & Gratitude
              </h3>
              <div class="space-y-4">
                <div>
                  <label
                    class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                  >
                    How am I feeling about this week overall?
                  </label>
                  <textarea
                    v-model="state.reflection"
                    rows="3"
                    class="w-full rounded-xl border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                    placeholder="Reflect on your week..."
                  />
                </div>
                <div>
                  <label
                    class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                  >
                    Three things I am grateful for this week
                  </label>
                  <textarea
                    v-model="state.gratitude"
                    rows="3"
                    class="w-full rounded-xl border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                    placeholder="1. ... 2. ... 3. ..."
                  />
                </div>
              </div>
            </div>

            <!-- Fun Personal Reflection -->
            <div
              class="mt-10 p-6 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800"
            >
              <h3 class="text-lg font-bold text-amber-900 dark:text-amber-100 mb-4">
                Fun Personal Reflection
              </h3>
              <div class="space-y-3">
                <div>
                  <label class="block text-sm font-medium text-amber-800 dark:text-amber-200 mb-1">
                    Cravings this week?
                  </label>
                  <input
                    v-model="state.funReflection.cravings"
                    type="text"
                    class="w-full rounded-lg border-amber-300 dark:border-amber-700 bg-white dark:bg-neutral-800 px-3 py-2 text-sm text-neutral-900 dark:text-neutral-100 placeholder-amber-400 dark:placeholder-amber-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                    placeholder="Pickles and ice cream? Mangoes at 2am?"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-amber-800 dark:text-amber-200 mb-1">
                    Funniest moment this week?
                  </label>
                  <input
                    v-model="state.funReflection.funny"
                    type="text"
                    class="w-full rounded-lg border-amber-300 dark:border-amber-700 bg-white dark:bg-neutral-800 px-3 py-2 text-sm text-neutral-900 dark:text-neutral-100 placeholder-amber-400 dark:placeholder-amber-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                    placeholder="Something that made you smile..."
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-amber-800 dark:text-amber-200 mb-1">
                    Something new I discovered about myself
                  </label>
                  <input
                    v-model="state.funReflection.discovery"
                    type="text"
                    class="w-full rounded-lg border-amber-300 dark:border-amber-700 bg-white dark:bg-neutral-800 px-3 py-2 text-sm text-neutral-900 dark:text-neutral-100 placeholder-amber-400 dark:placeholder-amber-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                    placeholder="A new strength, preference, or realization..."
                  />
                </div>
              </div>
            </div>

            <!-- Du'a Closing -->
            <div
              class="mt-10 p-6 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-center"
            >
              <p class="text-sm font-semibold text-emerald-800 dark:text-emerald-200 mb-2">
                Du'a for the Week
              </p>
              <p class="text-emerald-700 dark:text-emerald-300 italic">
                "Allah chose me for this child. My effort, intention, and du'a are enough. I am
                allowed to grow into motherhood. Allah's help will come at the right time."
              </p>
            </div>

            <!-- Actions -->
            <div class="mt-8 flex flex-col sm:flex-row gap-4">
              <UButton
                color="neutral"
                variant="outline"
                size="xl"
                class="flex-1 justify-center"
                @click="resetPlanner"
              >
                Start New Week
                <template #trailing>
                  <UIcon name="i-heroicons-arrow-path" class="h-5 w-5" />
                </template>
              </UButton>
            </div>

            <p class="mt-3 text-center text-sm text-neutral-500 dark:text-neutral-400">
              Your entries are saved locally in your browser and persist between visits.
            </p>
          </div>
        </div>
      </Motion>
    </div>
  </section>
</template>
