<script setup lang="ts">
useHead({
  title: 'Moms to Be - Pregnancy & Preparation | Momix Squad',
  meta: [
    {
      name: 'description',
      content:
        'Evidence-based guidance for expectant mothers. Learn about prenatal care, healthy pregnancy, and prepare for motherhood.'
    }
  ]
});

definePageMeta({
  layout: 'default'
});
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 dark:from-rose-950/20 dark:via-pink-950/20 dark:to-purple-950/20"
  >
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-7xl">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5 }"
        >
          <div class="text-center">
            <h1
              class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 dark:text-white mb-6"
            >
              Moms to Be
            </h1>
            <p class="text-xl text-neutral-600 dark:text-pink-200 max-w-2xl mx-auto">
              Prepare for your journey into motherhood with expert guidance and support. Learn about
              healthy pregnancy, prenatal care, and what to expect.
            </p>
            <div class="mt-8">
              <img
                src="/hero/home-1.jpg"
                alt="Pregnancy and motherhood preparation"
                class="mx-auto rounded-2xl lg:rounded-3xl w-full max-w-4xl object-cover shadow-lg h-48 sm:h-64 md:h-80 lg:h-96"
              />
            </div>
          </div>
        </Motion>
      </div>
    </section>

    <!-- Evidence-based Guidance -->
    <section class="px-4 sm:px-6 lg:px-8 py-12 bg-neutral-50 dark:bg-deep-purple-975">
      <div class="mx-auto max-w-4xl">
        <h2 class="text-2xl font-semibold text-neutral-900 dark:text-pink-400 mb-6">
          Evidence-based Prenatal Guidance
        </h2>
        <Motion
          :initial="{ opacity: 0, y: 8 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.4 }"
        >
          <div class="space-y-4">
            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">
                Regular Prenatal Care & Screening
              </summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  Regular prenatal visits are crucial for monitoring the health of both mother and
                  baby. According to WHO guidelines, expectant mothers should receive at least 4
                  antenatal visits (minimum contact model) to:
                </p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Monitor blood pressure and detect preeclampsia early</li>
                  <li>Screen for gestational diabetes and anemia</li>
                  <li>Assess fetal growth and development through ultrasound</li>
                  <li>Identify risk factors and complications</li>
                  <li>Receive counseling on nutrition, exercise, and lifestyle</li>
                </ul>
                <p class="text-sm text-neutral-600 dark:text-pink-200 mt-2">
                  Learn more:
                  <a
                    class="text-pink-600 font-semibold hover:underline"
                    href="https://www.who.int/publications/i/item/WHO-RHR-16.12"
                    target="_blank"
                    rel="noopener"
                    >WHO Antenatal Care Guidelines</a
                  >
                </p>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">Nutrition During Pregnancy</summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  Proper nutrition during pregnancy supports fetal development and maternal health.
                  Key nutrients include:
                </p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Folic Acid:</strong> Reduces neural tube defects; found in leafy greens,
                    legumes, and fortified cereals
                  </li>
                  <li>
                    <strong>Iron:</strong> Prevents anemia; includes lean meats, beans, and
                    fortified foods
                  </li>
                  <li>
                    <strong>Calcium & Vitamin D:</strong> Supports fetal bone development; dairy,
                    fortified plant-based alternatives
                  </li>
                  <li>
                    <strong>Protein:</strong> Essential for fetal growth; eggs, fish, poultry,
                    legumes
                  </li>
                  <li>
                    <strong>Omega-3 Fatty Acids:</strong> Supports brain development; fatty fish
                    (low-mercury), walnuts, flaxseeds
                  </li>
                </ul>
                <p class="text-sm text-neutral-600 dark:text-pink-200 mt-2">
                  Consult your healthcare provider about prenatal supplements tailored to your
                  needs.
                </p>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">Physical Activity & Exercise</summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  For healthy pregnancies without complications, WHO recommends 150 minutes of
                  moderate-intensity aerobic exercise per week:
                </p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Walking, swimming, cycling, and prenatal yoga are safe options</li>
                  <li>
                    Exercise reduces gestational diabetes risk and improves cardiovascular health
                  </li>
                  <li>Maintain pelvic floor exercises to prepare for labor and recovery</li>
                  <li>Avoid high-impact or contact sports and activities with fall risk</li>
                </ul>
                <p class="text-sm text-neutral-600 dark:text-pink-200 mt-2">
                  Always consult your healthcare provider before starting or modifying exercise
                  during pregnancy.
                </p>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">
                Mental Health & Emotional Preparation
              </summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  Pregnancy can bring a mix of excitement and anxiety. It's normal to have concerns
                  about:
                </p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Fear of labor and delivery</li>
                  <li>Relationship changes</li>
                  <li>Body image and self-esteem</li>
                  <li>Financial responsibilities</li>
                  <li>Work-life balance</li>
                </ul>
                <p class="mt-2">
                  <strong>Seek support through:</strong> Prenatal classes, counseling, support
                  groups, and trusted family/friends. Screen for prenatal depression and anxiety -
                  these are treatable conditions.
                </p>
                <p class="text-sm text-neutral-600 dark:text-pink-200 mt-2">
                  Resources:
                  <a
                    class="text-pink-600 font-semibold hover:underline"
                    href="https://www.unicef.org/parenting"
                    target="_blank"
                    rel="noopener"
                    >UNICEF Parenting Support</a
                  >
                </p>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">
                Birth Preparation & Labor Education
              </summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  Understanding what to expect during labor helps reduce anxiety and builds
                  confidence:
                </p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Take childbirth education classes to learn about labor stages</li>
                  <li>Develop a birth plan with your healthcare provider</li>
                  <li>
                    Learn pain management techniques: breathing, positioning, massage, epidural
                    options
                  </li>
                  <li>Identify your birth partner/support person</li>
                  <li>Understand when medical intervention may be necessary</li>
                </ul>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">
                Lifestyle & Safety Considerations
              </summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p><strong>Things to avoid:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Alcohol - no safe level during pregnancy</li>
                  <li>Smoking and secondhand smoke exposure</li>
                  <li>Illicit drugs and certain medications</li>
                  <li>Unpasteurized dairy, deli meats, and raw seafood (listeria risk)</li>
                  <li>High-mercury fish</li>
                  <li>Extreme heat and heavy lifting</li>
                </ul>
                <p class="mt-2">
                  <strong>Infections to prevent:</strong> Zika virus, chickenpox (varicella),
                  rubella, and influenza. Consult your healthcare provider about safe vaccinations.
                </p>
              </div>
            </details>

            <div
              class="mt-6 bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4 border border-pink-200 dark:border-pink-800"
            >
              <p class="text-sm font-semibold text-pink-900 dark:text-pink-200 mb-2">
                📚 Key Resources
              </p>
              <ul class="text-sm space-y-1">
                <li>
                  <a
                    class="text-pink-600 hover:underline"
                    href="https://www.who.int/publications/i/item/WHO-RHR-16.12"
                    target="_blank"
                    rel="noopener"
                    >WHO Antenatal Care Guidelines</a
                  >
                </li>
                <li>
                  <a
                    class="text-pink-600 hover:underline"
                    href="https://www.unicef.org/parenting"
                    target="_blank"
                    rel="noopener"
                    >UNICEF Parenting Resources</a
                  >
                </li>
                <li>
                  <a
                    class="text-pink-600 hover:underline"
                    href="https://www.who.int/health-topics/maternal-health"
                    target="_blank"
                    rel="noopener"
                    >WHO Maternal Health Topics</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </Motion>
      </div>
    </section>

    <!-- Key Milestones Section -->
    <section class="px-4 sm:px-6 lg:px-8 py-20">
      <div class="mx-auto max-w-7xl">
        <h2 class="text-3xl font-bold text-neutral-900 dark:text-white mb-12 text-center">
          Pregnancy Journey Milestones
        </h2>
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.2 }"
        >
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ContentCard
              title="First Trimester (Weeks 1-12)"
              description="Rapid fetal development, morning sickness common. First ultrasound around week 12. Focus on prenatal vitamins and early screening."
              icon="i-heroicons-sparkles"
              color="primary"
            />
            <ContentCard
              title="Second Trimester (Weeks 13-27)"
              description="Energy returns, baby movements felt. Anatomy scan performed. Sex of baby typically revealed. Continue healthy habits and prepare nursery."
              icon="i-heroicons-heart"
              color="secondary"
            />
            <ContentCard
              title="Third Trimester (Weeks 28-40)"
              description="Baby drops into birth position. More frequent prenatal visits. Prepare for labor, birth plan, hospital tours. Rest and prepare emotionally."
              icon="i-heroicons-star"
              color="accent"
            />
          </div>
        </Motion>
      </div>
    </section>

    <!-- Interactive Tips Section -->
    <section class="px-4 sm:px-6 lg:px-8 py-20 bg-neutral-50 dark:bg-deep-purple-975">
      <div class="mx-auto max-w-7xl">
        <h2 class="text-3xl font-bold text-neutral-900 dark:text-pink-400 mb-12 text-center">
          Practical Tips for Expectant Mothers
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Motion
            :initial="{ opacity: 0, x: -20 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.5 }"
          >
            <div class="bg-white dark:bg-deep-purple-900 rounded-xl p-6 shadow-md">
              <h3 class="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                ✨ Self-Care Essentials
              </h3>
              <ul class="space-y-2 text-neutral-700 dark:text-pink-100">
                <li>• Get 7-9 hours of sleep each night</li>
                <li>• Stay hydrated - drink 8-10 glasses of water daily</li>
                <li>• Take prenatal vitamins as prescribed</li>
                <li>• Manage stress through relaxation techniques</li>
                <li>• Join prenatal classes and support groups</li>
              </ul>
            </div>
          </Motion>

          <Motion
            :initial="{ opacity: 0, x: 20 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.5, delay: 0.1 }"
          >
            <div class="bg-white dark:bg-deep-purple-900 rounded-xl p-6 shadow-md">
              <h3 class="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                👨‍👩‍👧 Partner & Family Support
              </h3>
              <ul class="space-y-2 text-neutral-700 dark:text-pink-100">
                <li>• Communicate expectations and concerns</li>
                <li>• Include partner in prenatal care visits</li>
                <li>• Plan parental leave together</li>
                <li>• Build your support network</li>
                <li>• Discuss feeding, childcare, and household responsibilities</li>
              </ul>
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Islamic Faith-Based Guidance -->
    <section
      class="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/20 dark:via-teal-950/20 dark:to-cyan-950/20"
    >
      <div class="mx-auto max-w-6xl">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5 }"
        >
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
              Suggestions for Muslim Moms rooted in Faith
            </h2>
            <p class="text-lg text-neutral-600 dark:text-emerald-200 max-w-3xl mx-auto">
              Embrace your pregnancy journey with Islamic guidance and spiritual preparation for
              motherhood.
            </p>
          </div>

          <div class="grid gap-6 md:grid-cols-3">
            <!-- Spiritual Preparation -->
            <Motion
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5, delay: 0.1 }"
              class="bg-white dark:bg-emerald-950/60 rounded-2xl p-6 shadow-lg ring-1 ring-emerald-200 dark:ring-emerald-800"
            >
              <div class="flex items-center gap-3 mb-4">
                <div class="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-900/50">
                  <UIcon
                    name="i-heroicons-book-open"
                    class="h-6 w-6 text-emerald-600 dark:text-emerald-400"
                  />
                </div>
                <h3 class="text-xl font-semibold text-neutral-900 dark:text-white">
                  Spiritual Preparation
                </h3>
              </div>
              <ul class="space-y-3 text-neutral-700 dark:text-emerald-100">
                <li class="flex items-start gap-2">
                  <span class="text-emerald-500 mt-1">•</span>
                  <span
                    ><strong>Regular Du'a</strong> - Recite Quranic verses for pregnancy (Surah
                    Al-Baqarah 2:233, Surah Luqman 31:14)</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-500 mt-1">•</span>
                  <span
                    ><strong>Salat al-Hajah</strong> - Prayer for needs when seeking righteous
                    offspring</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-500 mt-1">•</span>
                  <span
                    ><strong>Daily Quran Recitation</strong> - Especially Surah Maryam and Surah
                    Yusuf for pregnancy</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-500 mt-1">•</span>
                  <span
                    ><strong>Sadaqah</strong> - Give charity regularly during pregnancy for
                    blessings</span
                  >
                </li>
              </ul>
              <div class="mt-4 p-3 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
                <a
                  href="https://yaqeeninstitute.org/read/paper/islamic-parenting-strategies-how-to-help-children-feel-safe-in-their-attachment-to-god-and-parents"
                  target="_blank"
                  rel="noopener"
                  class="text-emerald-700 dark:text-emerald-300 font-medium hover:underline flex items-center gap-2"
                >
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="h-4 w-4" />
                  Islamic Guidance on Pregnancy
                </a>
              </div>
            </Motion>

            <!-- Physical & Nutritional Care -->
            <Motion
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5, delay: 0.2 }"
              class="bg-white dark:bg-emerald-950/60 rounded-2xl p-6 shadow-lg ring-1 ring-teal-200 dark:ring-teal-800"
            >
              <div class="flex items-center gap-3 mb-4">
                <div class="p-2 rounded-xl bg-teal-100 dark:bg-teal-900/50">
                  <UIcon
                    name="i-heroicons-heart"
                    class="h-6 w-6 text-teal-600 dark:text-teal-400"
                  />
                </div>
                <h3 class="text-xl font-semibold text-neutral-900 dark:text-white">
                  Halal Nutrition
                </h3>
              </div>
              <ul class="space-y-3 text-neutral-700 dark:text-teal-100">
                <li class="flex items-start gap-2">
                  <span class="text-teal-500 mt-1">•</span>
                  <span
                    ><strong>Halal Prenatal Vitamins</strong> - Ensure supplements are certified
                    halal</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-teal-500 mt-1">•</span>
                  <span><strong>Dates & Figs</strong> - Sunnah foods rich in iron and fiber</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-teal-500 mt-1">•</span>
                  <span><strong>Honey & Black Seed</strong> - Prophetic remedies for immunity</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-teal-500 mt-1">•</span>
                  <span
                    ><strong>Whole Foods</strong> - Avoid processed foods with questionable
                    ingredients</span
                  >
                </li>
              </ul>
              <div class="mt-4 p-3 bg-teal-50 dark:bg-teal-900/30 rounded-lg">
                <a
                  href="https://www.islamicity.org/101613/guiding-little-hearts-islamic-parenting-strategies-for-spiritual-growth/"
                  target="_blank"
                  rel="noopener"
                  class="text-teal-700 dark:text-teal-300 font-medium hover:underline flex items-center gap-2"
                >
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="h-4 w-4" />
                  Halal Pregnancy Nutrition Guide
                </a>
              </div>
            </Motion>

            <!-- Community & Support -->
            <Motion
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5, delay: 0.3 }"
              class="bg-white dark:bg-emerald-950/60 rounded-2xl p-6 shadow-lg ring-1 ring-cyan-200 dark:ring-cyan-800"
            >
              <div class="flex items-center gap-3 mb-4">
                <div class="p-2 rounded-xl bg-cyan-100 dark:bg-cyan-900/50">
                  <UIcon
                    name="i-heroicons-users"
                    class="h-6 w-6 text-cyan-600 dark:text-cyan-400"
                  />
                </div>
                <h3 class="text-xl font-semibold text-neutral-900 dark:text-white">
                  Islamic Community
                </h3>
              </div>
              <ul class="space-y-3 text-neutral-700 dark:text-cyan-100">
                <li class="flex items-start gap-2">
                  <span class="text-cyan-500 mt-1">•</span>
                  <span
                    ><strong>Sisters' Study Circles</strong> - Join Halaqahs for pregnant
                    women</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-cyan-500 mt-1">•</span>
                  <span
                    ><strong>Maslaahah</strong> - Seek Islamic scholars for pregnancy
                    questions</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-cyan-500 mt-1">•</span>
                  <span
                    ><strong>Islamic Centers</strong> - Connect with Muslim mothers' groups</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-cyan-500 mt-1">•</span>
                  <span
                    ><strong>Online Communities</strong> - Join Muslim mom support networks</span
                  >
                </li>
              </ul>
              <div class="mt-4 p-3 bg-cyan-50 dark:bg-cyan-900/30 rounded-lg">
                <a
                  href="https://www.amaliah.com/post/67013/parenting-tips-muslim-families"
                  target="_blank"
                  rel="noopener"
                  class="text-cyan-700 dark:text-cyan-300 font-medium hover:underline flex items-center gap-2"
                >
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="h-4 w-4" />
                  Muslim Mom Support Groups
                </a>
              </div>
            </Motion>
          </div>

          <!-- Additional Resources -->
          <div
            class="mt-8 bg-white dark:bg-emerald-950/60 rounded-2xl p-6 shadow-lg ring-1 ring-emerald-200 dark:ring-emerald-800"
          >
            <h3
              class="text-xl font-semibold text-neutral-900 dark:text-white mb-4 flex items-center gap-2"
            >
              <UIcon
                name="i-heroicons-sparkles"
                class="h-5 w-5 text-emerald-600 dark:text-emerald-400"
              />
              Authentic Islamic Resources
            </h3>
            <div class="grid gap-4 md:grid-cols-2">
              <a href="https://salaam-mummy.com/free-islamic-parenting-resources/" target="_blank" rel="noopener" class="group flex items-center gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors">
                <UIcon
                  name="i-heroicons-globe-alt"
                  class="h-8 w-8 text-emerald-600 dark:text-emerald-400"
                />
                <div>
                  <h4
                    class="font-semibold text-neutral-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-300"
                  >
                    Salaam Mummy
                  </h4>
                  <p class="text-sm text-neutral-600 dark:text-emerald-200">
                    Free Islamic parenting resources
                  </p>
                </div>
              </a>
              <a href="https://www.effectiveislamicparenting.com/" target="_blank" rel="noopener" class="group flex items-center gap-3 p-4 rounded-xl bg-teal-50 dark:bg-teal-900/30 hover:bg-teal-100 dark:hover:bg-teal-900/50 transition-colors">
                <UIcon
                  name="i-heroicons-academic-cap"
                  class="h-8 w-8 text-teal-600 dark:text-teal-400"
                />
                <div>
                  <h4
                    class="font-semibold text-neutral-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-300"
                  >
                    Effective Islamic Parenting
                  </h4>
                  <p class="text-sm text-neutral-600 dark:text-teal-200">
                    Expert guidance from Muslim educationalists
                  </p>
                </div>
              </a>
            </div>
          </div>
        </Motion>
      </div>
    </section>

    <!-- Evidence-Based Sources -->
    <section class="px-4 sm:px-6 lg:px-8 py-16 bg-white dark:bg-neutral-950">
      <div class="mx-auto max-w-6xl">
        <div
          class="rounded-3xl border border-neutral-200 dark:border-purple-800 bg-neutral-50 dark:bg-deep-purple-900/60 p-8 shadow-xl"
        >
          <div class="grid gap-8 md:grid-cols-2 md:items-start">
            <div class="space-y-3">
              <p class="text-sm font-semibold uppercase tracking-wide text-pink-600">
                Evidence-based guidance
              </p>
              <h3 class="text-2xl font-bold text-neutral-900 dark:text-white">
                Rooted in trusted maternal-health research
              </h3>
              <p class="text-neutral-700 dark:text-pink-100">
                Recommendations on prenatal care, nutrition, and birth preparation align with global
                standards so you can make informed decisions during pregnancy.
              </p>
            </div>
            <div class="grid gap-4">
              <div
                class="rounded-2xl bg-white dark:bg-deep-purple-950/60 p-5 shadow-sm ring-1 ring-neutral-200 dark:ring-purple-800"
              >
                <h4 class="text-lg font-semibold text-neutral-900 dark:text-white">
                  WHO Antenatal Care Guidelines (2016)
                </h4>
                <p class="text-sm text-neutral-700 dark:text-pink-100">
                  Emphasizes eight high-quality contacts, nutrition support, anemia screening, and
                  respectful maternity care.
                </p>
                <a
                  class="text-pink-600 hover:underline text-sm font-semibold"
                  href="https://www.who.int/publications/i/item/9789241549912"
                  target="_blank"
                  rel="noopener"
                >
                  View guidance
                </a>
              </div>
              <div
                class="rounded-2xl bg-white dark:bg-deep-purple-950/60 p-5 shadow-sm ring-1 ring-neutral-200 dark:ring-purple-800"
              >
                <h4 class="text-lg font-semibold text-neutral-900 dark:text-white">
                  UNICEF Maternal & Newborn Health
                </h4>
                <p class="text-sm text-neutral-700 dark:text-pink-100">
                  Highlights the role of prenatal counseling, balanced diet, iron-folate, and
                  skilled birth attendance to reduce maternal/newborn risk.
                </p>
                <a
                  class="text-pink-600 hover:underline text-sm font-semibold"
                  href="https://www.unicef.org/health/maternal-and-newborn-health"
                  target="_blank"
                  rel="noopener"
                >
                  Explore UNICEF guidance
                </a>
              </div>
              <div
                class="rounded-2xl bg-white dark:bg-deep-purple-950/60 p-5 shadow-sm ring-1 ring-neutral-200 dark:ring-purple-800"
              >
                <h4 class="text-lg font-semibold text-neutral-900 dark:text-white">
                  CDC Pregnancy Recommendations
                </h4>
                <p class="text-sm text-neutral-700 dark:text-pink-100">
                  Covers prenatal vaccines, safe medications, weight gain ranges, and warning signs
                  that require urgent care.
                </p>
                <a
                  class="text-pink-600 hover:underline text-sm font-semibold"
                  href="https://www.cdc.gov/pregnancy/index.html"
                  target="_blank"
                  rel="noopener"
                >
                  CDC pregnancy hub
                </a>
              </div>
              <div
                class="rounded-2xl bg-white dark:bg-deep-purple-950/60 p-5 shadow-sm ring-1 ring-neutral-200 dark:ring-purple-800"
              >
                <h4 class="text-lg font-semibold text-neutral-900 dark:text-white">
                  ACOG Prenatal Care & Nutrition
                </h4>
                <p class="text-sm text-neutral-700 dark:text-pink-100">
                  Recommends folic acid, balanced macronutrients, physical activity, and
                  third-trimester birth planning to improve outcomes.
                </p>
                <a
                  class="text-pink-600 hover:underline text-sm font-semibold"
                  href="https://www.acog.org/womens-health"
                  target="_blank"
                  rel="noopener"
                >
                  ACOG resources
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
