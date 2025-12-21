<script setup lang="ts">
definePageMeta({
  layout: 'default'
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
    <section class="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto text-center">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <span
            class="inline-block px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 text-sm font-medium mb-4"
          >
            Your Mental Health Matters
          </span>
          <h1
            class="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-6"
          >
            Mental Well-being for Moms
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Evidence-based strategies to nurture your mental health through every stage of
            motherhood
          </p>
        </Motion>
      </div>
    </section>

    <!-- Interactive Cards Section -->
    <section class="relative py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Understanding Mental Health Card -->
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.1 }"
            viewport="{ once: true }"
            class="group"
          >
            <div
              class="h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div class="p-6">
                <div
                  class="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mb-4"
                >
                  <svg
                    class="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Understanding Mental Health
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  Maternal mental health is crucial for both mother and child. According to WHO,
                  about 10% of pregnant women and 13% of women who have given birth experience a
                  mental health condition.
                </p>
                <div class="bg-indigo-50 dark:bg-gray-700 p-4 rounded-lg mb-4">
                  <div class="flex items-start">
                    <span class="text-indigo-600 dark:text-indigo-400 mr-2">💡</span>
                    <p class="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Did you know?</strong> Early intervention can prevent 75% of severe
                      postpartum depression cases.
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.who.int/health-topics/maternal-mental-health"
                  target="_blank"
                  class="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium"
                >
                  Learn more
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </Motion>

          <!-- Coping Strategies Card -->
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.2 }"
            viewport="{ once: true }"
            class="group"
          >
            <div
              class="h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div class="p-6">
                <div
                  class="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-4"
                >
                  <svg
                    class="w-6 h-6 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Evidence-Based Coping Strategies
                </h3>
                <ul class="space-y-3 mb-4">
                  <li class="flex items-start">
                    <span class="text-purple-500 dark:text-purple-400 mr-2">✓</span>
                    <span class="text-gray-600 dark:text-gray-300"
                      >Practice mindfulness meditation (proven to reduce anxiety by 30%)</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-500 dark:text-purple-400 mr-2">✓</span>
                    <span class="text-gray-600 dark:text-gray-300"
                      >Engage in regular physical activity (30 minutes daily can reduce depression
                      symptoms by 30-50%)</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-500 dark:text-purple-400 mr-2">✓</span>
                    <span class="text-gray-600 dark:text-gray-300"
                      >Maintain social connections (reduces risk of postpartum depression by
                      40%)</span
                    >
                  </li>
                </ul>
                <div class="bg-purple-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p class="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Tip:</strong> Try the 4-7-8 breathing technique to reduce stress: Inhale
                    for 4 seconds, hold for 7, exhale for 8.
                  </p>
                </div>
              </div>
            </div>
          </Motion>

          <!-- When to Seek Help Card -->
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.3 }"
            viewport="{ once: true }"
            class="group"
          >
            <div
              class="h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div class="p-6">
                <div
                  class="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center mb-4"
                >
                  <svg
                    class="w-6 h-6 text-pink-600 dark:text-pink-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  When to Seek Help
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  It's important to recognize when you might need professional support. According to
                  the American Psychological Association, you should consider reaching out if you
                  experience:
                </p>
                <ul class="space-y-2 mb-4">
                  <li class="flex items-start">
                    <span class="text-pink-500 dark:text-pink-400 mr-2">•</span>
                    <span class="text-gray-700 dark:text-gray-300"
                      >Persistent sadness or anxiety for more than two weeks</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-pink-500 dark:text-pink-400 mr-2">•</span>
                    <span class="text-gray-700 dark:text-gray-300"
                      >Difficulty bonding with your baby</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-pink-500 dark:text-pink-400 mr-2">•</span>
                    <span class="text-gray-700 dark:text-gray-300"
                      >Thoughts of harming yourself or your baby</span
                    >
                  </li>
                </ul>
                <div class="bg-pink-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p class="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Immediate Help:</strong> National Suicide Prevention Lifeline: 988
                  </p>
                </div>
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Physical Health Section -->
    <section class="relative py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
            Physical Health & Well-being
          </h2>
          <p class="mt-3 text-xl text-gray-600 dark:text-gray-300">
            Nurturing your body to support your mental health
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <!-- Exercise & Movement -->
          <Motion
            :initial="{ opacity: 0, x: -20 }"
            :while-in-view="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.6 }"
            viewport="{ once: true }"
            class="group"
          >
            <div
              class="h-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 shadow-lg"
            >
              <div
                class="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-6"
              >
                <svg
                  class="w-8 h-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Exercise & Movement
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Regular physical activity can reduce symptoms of depression and anxiety by 30-50%
                (Mayo Clinic, 2023). Aim for:
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <span class="text-blue-500 dark:text-blue-400 mr-2">•</span>
                  <span class="text-gray-700 dark:text-gray-300"
                    ><strong>150 minutes</strong> of moderate exercise weekly (WHO)</span
                  >
                </li>
                <li class="flex items-start">
                  <span class="text-blue-500 dark:text-blue-400 mr-2">•</span>
                  <span class="text-gray-700 dark:text-gray-300"
                    >Strength training <strong>2+ days/week</strong> (CDC)</span
                  >
                </li>
                <li class="flex items-start">
                  <span class="text-blue-500 dark:text-blue-400 mr-2">•</span>
                  <span class="text-gray-700 dark:text-gray-300"
                    >Daily walking (10,000 steps can reduce mortality by 46%)</span
                  >
                </li>
              </ul>
              <div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <p class="text-sm text-blue-700 dark:text-blue-300">
                  <strong>Mom Tip:</strong> Break it into 10-minute sessions throughout the day. A
                  10-minute walk can boost mood for up to 2 hours!
                </p>
              </div>
            </div>
          </Motion>

          <!-- Nutrition & Hydration -->
          <Motion
            :initial="{ opacity: 0, x: 20 }"
            :while-in-view="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.6, delay: 0.1 }"
            viewport="{ once: true }"
            class="group"
          >
            <div
              class="h-full bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-2xl p-8 shadow-lg"
            >
              <div
                class="w-14 h-14 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center mb-6"
              >
                <svg
                  class="w-8 h-8 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Nutrition & Hydration
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                A balanced diet can improve mood and energy levels. Key nutrients for mental health:
              </p>
              <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
                  <div class="text-green-600 dark:text-green-400 text-sm font-medium mb-1">
                    Omega-3s
                  </div>
                  <div class="text-xs text-gray-600 dark:text-gray-400">
                    Fatty fish, walnuts, flaxseeds
                  </div>
                </div>
                <div class="bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
                  <div class="text-green-600 dark:text-green-400 text-sm font-medium mb-1">
                    B Vitamins
                  </div>
                  <div class="text-xs text-gray-600 dark:text-gray-400">
                    Leafy greens, eggs, legumes
                  </div>
                </div>
                <div class="bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
                  <div class="text-green-600 dark:text-green-400 text-sm font-medium mb-1">
                    Antioxidants
                  </div>
                  <div class="text-xs text-gray-600 dark:text-gray-400">
                    Berries, dark chocolate, nuts
                  </div>
                </div>
                <div class="bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
                  <div class="text-green-600 dark:text-green-400 text-sm font-medium mb-1">
                    Water
                  </div>
                  <div class="text-xs text-gray-600 dark:text-gray-400">Aim for 2-3L daily</div>
                </div>
              </div>
              <div class="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <p class="text-sm text-green-700 dark:text-green-300">
                  <strong>Did you know?</strong> Dehydration of just 1-2% can impair mood,
                  concentration, and memory.
                </p>
              </div>
            </div>
          </Motion>
        </div>

        <!-- Sleep & Recovery -->
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
          viewport="{ once: true }"
          class="max-w-4xl mx-auto"
        >
          <div
            class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 shadow-lg"
          >
            <div class="flex flex-col md:flex-row items-center">
              <div class="md:w-1/3 mb-6 md:mb-0 md:pr-6">
                <div
                  class="w-20 h-20 rounded-2xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mx-auto"
                >
                  <svg
                    class="w-10 h-10 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-center text-gray-900 dark:text-white mt-4">
                  Sleep & Recovery
                </h3>
              </div>
              <div class="md:w-2/3">
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  Quality sleep is essential for mental health. Chronic sleep deprivation increases
                  depression risk by 10x (Harvard Medical School).
                </p>
                <div class="grid grid-cols-2 gap-4 mb-4">
                  <div class="bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
                    <div class="text-purple-600 dark:text-purple-400 text-sm font-medium mb-1">
                      7-9 hours
                    </div>
                    <div class="text-xs text-gray-600 dark:text-gray-400">
                      Recommended for adults (National Sleep Foundation)
                    </div>
                  </div>
                  <div class="bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
                    <div class="text-pink-600 dark:text-pink-400 text-sm font-medium mb-1">
                      20-30 min
                    </div>
                    <div class="text-xs text-gray-600 dark:text-gray-400">
                      Power nap duration for optimal refreshment
                    </div>
                  </div>
                </div>
                <div class="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                  <p class="text-sm text-purple-700 dark:text-purple-300">
                    <strong>Sleep Hygiene Tip:</strong> Keep a consistent sleep schedule, even on
                    weekends, and avoid screens 1 hour before bed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Motion>
      </div>
    </section>

    <!-- Resources Section -->
    <section class="relative py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
            Trusted Mental Health Resources
          </h2>
          <p class="mt-3 text-xl text-gray-600 dark:text-gray-300">
            Evidence-based information and support for mothers
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="https://www.postpartum.net/" target="_blank" class="group">
            <div
              class="h-full bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <div
                    class="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mr-4"
                  >
                    <svg
                      class="w-5 h-5 text-indigo-600 dark:text-indigo-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  <h3
                    class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                  >
                    Postpartum Support International
                  </h3>
                </div>
                <p class="text-gray-600 dark:text-gray-300 text-sm">
                  Comprehensive resources and support for postpartum mental health
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://www.nimh.nih.gov/health/topics/women-and-mental-health"
            target="_blank"
            class="group"
          >
            <div
              class="h-full bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <div
                    class="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-4"
                  >
                    <svg
                      class="w-5 h-5 text-purple-600 dark:text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3
                    class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
                  >
                    NIMH: Women and Mental Health
                  </h3>
                </div>
                <p class="text-gray-600 dark:text-gray-300 text-sm">
                  Research and information from the National Institute of Mental Health
                </p>
              </div>
            </div>
          </a>

          <a href="https://www.apa.org/topics/women-girls" target="_blank" class="group">
            <div
              class="h-full bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <div
                    class="w-10 h-10 rounded-lg bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center mr-4"
                  >
                    <svg
                      class="w-5 h-5 text-pink-600 dark:text-pink-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3
                    class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors"
                  >
                    APA: Women & Girls
                  </h3>
                </div>
                <p class="text-gray-600 dark:text-gray-300 text-sm">
                  Resources from the American Psychological Association
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section
      class="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30"
    >
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">You're Not Alone</h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Remember, seeking help is a sign of strength, not weakness. Your mental health is just as
          important as your physical health.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://www.postpartum.net/get-help/help-for-moms/"
            class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
          >
            Find Support Now
          </a>
          <a
            href="https://www.who.int/health-topics/maternal-mental-health"
            class="px-6 py-3 bg-white hover:bg-gray-50 text-indigo-600 font-medium rounded-lg border border-indigo-200 transition-colors dark:bg-gray-800 dark:border-gray-700 dark:text-indigo-400 dark:hover:bg-gray-700"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.bg-grid-slate-100 {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
}

.dark .bg-grid-slate-800\/50 {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(30 41 59 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
}
</style>
