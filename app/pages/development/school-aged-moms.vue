<script setup lang="ts">
useHead({
  title: 'School-Aged Moms (6-12 Years) - Parenting Guidance | Momix Squad',
  meta: [
    {
      name: 'description',
      content:
        'Support your school-aged child with evidence-based guidance on academics, social development, sports, nutrition, and building healthy habits.'
    }
  ]
});

definePageMeta({
  layout: 'default'
});

const schoolAgedMomsSurvey = {
  title: 'How Balanced Is My Motherhood?',
  subtitle:
    'School-Aged Kids Edition — Reflect on your balance, patience, and connection with your school-aged child.',
  instructions:
    'Choose the answer that best reflects your current experience. Be honest — this is for self-awareness, not judgment.',
  scale: ['Always', 'Often', 'Sometimes', 'Rarely'],
  scaleScores: [4, 3, 2, 1],
  sections: [
    {
      title: 'Emotional & Relationship Balance',
      questions: [
        { text: 'I listen to my child without immediately correcting or lecturing.' },
        { text: 'I show affection daily, even during busy school weeks.' },
        { text: 'I handle conflicts calmly, without letting frustration take over.' },
        { text: 'I encourage my child\'s independence while providing guidance.' }
      ],
      reflectionPrompt: 'One moment today where I connected with my child'
    },
    {
      title: 'Academic & Routine',
      questions: [
        { text: 'I support my child with homework without taking over.' },
        { text: 'I communicate with teachers or school staff when needed.' },
        { text: 'I maintain a reasonable daily routine for school, meals, and sleep.' },
        { text: 'I encourage effort and learning, not only grades.' }
      ],
      reflectionPrompt: 'One thing that worked well in supporting my child\'s learning this week'
    },
    {
      title: 'Self-Care & Time Management',
      questions: [
        { text: 'I take intentional breaks for myself without guilt.' },
        { text: 'I balance household responsibilities with time for my child.' },
        { text: 'I ask for help when I feel stretched.' },
        { text: 'I speak to myself kindly and avoid harsh self-criticism.' }
      ],
      duaPrompt:
        'Ya Allah, grant me patience, wisdom, and balance in guiding my children.',
      reflectionPrompt: 'One thing I did for myself this week'
    },
    {
      title: 'Faith & Values Integration',
      questions: [
        { text: 'I remind my child about gratitude, honesty, and kindness.' },
        { text: 'I make du\'a for my child\'s guidance and protection regularly.' },
        { text: 'I model good akhlaq in daily interactions, even under stress.' },
        { text: 'I trust that Allah rewards my sincere effort in parenting.' }
      ],
      duaPrompt:
        'Ya Allah, help me raise my child with iman, good character, and love.',
      reflectionPrompt: 'One moment where I consciously modeled Islamic values this week'
    }
  ],
  maxScore: 64,
  scoreRanges: [
    {
      min: 52,
      max: 64,
      label: 'Well Balanced',
      description:
        'You\'re balancing love, guidance, and self-care well. Celebrate your effort.'
    },
    {
      min: 32,
      max: 51,
      label: 'Growing Balance',
      description:
        'You\'re aware of balance gaps — small adjustments in routines, du\'a, or self-care can help.'
    },
    {
      min: 0,
      max: 31,
      label: 'Needs Support',
      description:
        'You may feel overwhelmed — lean on support systems and remember Allah values your intention.'
    }
  ],
  lightMoments: [
    { prompt: 'Today, my child surprised me by...' },
    { prompt: 'This week, my child made me laugh because...' },
    { prompt: 'My proudest parenting moment this week was...' },
    { prompt: 'Something my child taught me this week...' }
  ],
  affirmations: [
    'My child needs my presence more than my perfection.',
    'I am planting seeds that will grow over time.',
    'Allah is guiding me as I guide my child.',
    'Every small act of kindness matters.'
  ],
  importantNote:
    'Your effort, patience, and du\'a are seen and rewarded. Balance is a journey, not a destination.'
};
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20"
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
              School-Aged Moms (6-12 Years)
            </h1>
            <p class="text-xl text-neutral-600 dark:text-pink-200 max-w-2xl mx-auto">
              Support your child's growth during their school years. Navigate academics,
              friendships, activities, and building healthy habits.
            </p>
            <div class="mt-8">
              <img
                src="/hero/home-4.jpg"
                alt="School-aged children learning"
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
          Evidence-Based Guidance for School-Aged Parenting
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
              <summary class="font-medium cursor-pointer">Supporting Academic Success</summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  School-aged children develop academic skills, critical thinking, and
                  self-regulation. UNESCO emphasizes quality education and parental involvement.
                </p>
                <p><strong>Support Strategies:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Establish routine homework time and space with minimal distractions</li>
                  <li>Communicate regularly with teachers about progress and concerns</li>
                  <li>Read together regularly - builds vocabulary and comprehension</li>
                  <li>Celebrate effort and improvement, not just grades</li>
                  <li>Help with homework by asking questions rather than providing answers</li>
                  <li>Ensure adequate sleep (9-11 hours nightly) - critical for learning</li>
                  <li>Limit screen time during school nights (max 1-2 hours)</li>
                </ul>
                <p className="mt-2">
                  <strong>Addressing Learning Difficulties:</strong> If your child struggles with
                  reading, math, or attention, discuss screening with teachers. Early intervention
                  for dyslexia, dyscalculia, or ADHD is effective.
                </p>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">Social Development & Friendships</summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  Friendships become increasingly important during middle childhood. Peer
                  relationships impact self-esteem and social skills development.
                </p>
                <p><strong>Supporting Social Growth:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Encourage participation in group activities (sports, clubs, scouts)</li>
                  <li>Model respectful communication and conflict resolution</li>
                  <li>Listen without judgment when they share about social struggles</li>
                  <li>Help them develop empathy and understand different perspectives</li>
                  <li>Monitor peer relationships for signs of bullying (giving/receiving)</li>
                  <li>Teach problem-solving skills for managing disagreements</li>
                </ul>
                <p className="mt-2">
                  <strong>Bullying Awareness:</strong> Research shows bullying impacts academic
                  performance and mental health. Create safe space for discussion, involve school if
                  bullying occurs.
                </p>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">Physical Activity & Sports</summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  WHO recommends 60 minutes of daily physical activity for children 5-17 years.
                  Physical activity supports growth, cardiovascular health, and mental wellbeing.
                </p>
                <p><strong>Activity Guidelines:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Aim for 60+ minutes of moderate-to-vigorous activity daily</li>
                  <li>Include aerobic activities (running, cycling, swimming, sports)</li>
                  <li>
                    Incorporate muscle and bone-strengthening activities (sports, gymnastics,
                    climbing)
                  </li>
                  <li>Make activity fun - vary activities to maintain interest</li>
                  <li>Limit sedentary time (screen time, sitting) to 2 hours daily</li>
                  <li>Model active lifestyle by exercising together</li>
                </ul>
                <p className="mt-2">
                  <strong>Sports Benefits:</strong> Team sports teach teamwork, discipline, and
                  confidence. Individual sports develop self-motivation and perseverance.
                </p>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">
                Nutrition & Healthy Eating Habits
              </summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  School-aged children need adequate nutrition for growth and cognitive development.
                  Poor nutrition affects academic performance and health.
                </p>
                <p><strong>Daily Nutritional Needs (ages 6-12):</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>1400-2000+ calories depending on age, size, and activity level</li>
                  <li>Protein for growth (meat, fish, eggs, beans, nuts)</li>
                  <li>
                    Calcium and vitamin D for bone development (dairy, fortified alternatives, fatty
                    fish)
                  </li>
                  <li>Iron for cognitive function (lean meat, fortified cereals, leafy greens)</li>
                  <li>Whole grains, fruits, and vegetables for fiber and micronutrients</li>
                  <li>Limit added sugars, salt, and ultra-processed foods</li>
                </ul>
                <p className="mt-2"><strong>Healthy Habits:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Eat regular family meals together - improves nutrition and connection</li>
                  <li>Pack healthy school lunches with variety</li>
                  <li>Limit sugary drinks and snacks - encourage water and whole foods</li>
                  <li>Involve children in meal planning and preparation</li>
                  <li>Monitor portion sizes - childhood obesity is rising</li>
                </ul>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">Screen Time & Digital Literacy</summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  Screen use has become ubiquitous. WHO and AAP recommend quality content limits and
                  open communication about digital life.
                </p>
                <p><strong>Screen Time Recommendations:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Limit to 1-2 hours of quality programming daily</li>
                  <li>Choose educational, age-appropriate content</li>
                  <li>Watch together when possible - discuss content</li>
                  <li>No screens during meals or before bedtime</li>
                  <li>Encourage screen-free activities (reading, outdoor play, sports, crafts)</li>
                </ul>
                <p className="mt-2"><strong>Online Safety:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Monitor online activities and social media use (if age-appropriate)</li>
                  <li>Teach about privacy and not sharing personal information</li>
                  <li>Discuss cyberbullying and how to respond</li>
                  <li>Use parental controls; keep devices in common areas</li>
                  <li>Model healthy screen habits yourself</li>
                </ul>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">
                Mental Health & Emotional Development
              </summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  School-aged children experience growing independence and social awareness. Mental
                  health support prevents later difficulties.
                </p>
                <p><strong>Supporting Emotional Health:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Validate feelings - teach that all emotions are okay</li>
                  <li>Help them name and express emotions appropriately</li>
                  <li>Create safe space for sharing concerns without judgment</li>
                  <li>Teach coping strategies (deep breathing, mindfulness, journaling)</li>
                  <li>Celebrate achievements and efforts to build confidence</li>
                  <li>Maintain consistent routines for security</li>
                </ul>
                <p className="mt-2">
                  <strong>When to Seek Help:</strong> Persistent sadness, anxiety, withdrawal,
                  behavioral changes, or poor school performance may indicate need for counseling or
                  professional assessment.
                </p>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">Sleep & Rest</summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  Sleep is essential for growth, learning, and emotional regulation. School-aged
                  children need 9-12 hours nightly.
                </p>
                <p><strong>Sleep Hygiene Tips:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Maintain consistent bedtime and wake time (even weekends)</li>
                  <li>Establish relaxing bedtime routine (story, quiet talk, calm music)</li>
                  <li>Keep bedroom cool, dark, and quiet</li>
                  <li>No screens 30-60 minutes before bed (blue light affects sleep)</li>
                  <li>Avoid caffeine, heavy meals, and vigorous exercise near bedtime</li>
                  <li>Limit afternoon naps (can interfere with nighttime sleep)</li>
                </ul>
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
                    href="https://www.unicef.org/child-development"
                    target="_blank"
                    rel="noopener"
                    >UNICEF Child Development</a
                  >
                </li>
                <li>
                  <a
                    class="text-pink-600 hover:underline"
                    href="https://www.who.int/teams/mental-health-and-substance-use/child-and-adolescent-mental-health"
                    target="_blank"
                    rel="noopener"
                    >WHO Child & Adolescent Mental Health</a
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
              </ul>
            </div>
          </div>
        </Motion>
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
              Guide your school-aged children with Islamic education, character building, and
              balanced development.
            </p>
          </div>

          <div class="grid gap-6 md:grid-cols-3">
            <!-- Islamic Education -->
            <Motion
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5, delay: 0.1 }"
              class="bg-white dark:bg-emerald-950/60 rounded-2xl p-6 shadow-lg ring-1 ring-emerald-200 dark:ring-emerald-800"
            >
              <div class="flex items-center gap-3 mb-4">
                <div class="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-900/50">
                  <UIcon
                    name="i-heroicons-academic-cap"
                    class="h-6 w-6 text-emerald-600 dark:text-emerald-400"
                  />
                </div>
                <h3 class="text-xl font-semibold text-neutral-900 dark:text-white">
                  Islamic Education
                </h3>
              </div>
              <ul class="space-y-3 text-neutral-700 dark:text-emerald-100">
                <li class="flex items-start gap-2">
                  <span class="text-emerald-500 mt-1">•</span>
                  <span
                    ><strong>Quran Memorization</strong> - Age-appropriate surah and verse
                    memorization</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-500 mt-1">•</span>
                  <span
                    ><strong>Islamic Studies</strong> - Learn Seerah, Hadith, and Islamic
                    history</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-500 mt-1">•</span>
                  <span
                    ><strong>Arabic Learning</strong> - Read and write Arabic for Quran
                    understanding</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-500 mt-1">•</span>
                  <span
                    ><strong>Islamic School</strong> - Balance secular and religious education</span
                  >
                </li>
              </ul>
              <div class="mt-4 p-3 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
                <a
                  href="https://www.muslimparenting.net/"
                  target="_blank"
                  rel="noopener"
                  class="text-emerald-700 dark:text-emerald-300 font-medium hover:underline flex items-center gap-2"
                >
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="h-4 w-4" />
                  Islamic Children's Education
                </a>
              </div>
            </Motion>

            <!-- Character Development -->
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
                  Character Building
                </h3>
              </div>
              <ul class="space-y-3 text-neutral-700 dark:text-teal-100">
                <li class="flex items-start gap-2">
                  <span class="text-teal-500 mt-1">•</span>
                  <span
                    ><strong>Honesty & Truth</strong> - Teach importance of Sidq
                    (truthfulness)</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-teal-500 mt-1">•</span>
                  <span
                    ><strong>Respect for Elders</strong> - Honor parents, teachers, and community
                    members</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-teal-500 mt-1">•</span>
                  <span
                    ><strong>Kindness & Mercy</strong> - Follow Prophet's example of
                    compassion</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-teal-500 mt-1">•</span>
                  <span
                    ><strong>Responsibility</strong> - Age-appropriate chores and Islamic
                    duties</span
                  >
                </li>
              </ul>
              <div class="mt-4 p-3 bg-teal-50 dark:bg-teal-900/30 rounded-lg">
                <a
                  href="https://www.muslimpulse.com/parenting-tips-from-quran-and-sunnah"
                  target="_blank"
                  rel="noopener"
                  class="text-teal-700 dark:text-teal-300 font-medium hover:underline flex items-center gap-2"
                >
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="h-4 w-4" />
                  Islamic Character Development
                </a>
              </div>
            </Motion>

            <!-- Social & Community Life -->
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
                  Social Skills
                </h3>
              </div>
              <ul class="space-y-3 text-neutral-700 dark:text-cyan-100">
                <li class="flex items-start gap-2">
                  <span class="text-cyan-500 mt-1">•</span>
                  <span
                    ><strong>Islamic Friendships</strong> - Choose righteous companions and avoid
                    bad company</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-cyan-500 mt-1">•</span>
                  <span
                    ><strong>Modesty in School</strong> - Islamic dress and behavior
                    guidelines</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-cyan-500 mt-1">•</span>
                  <span
                    ><strong>Prayer at School</strong> - Teach how to pray in public spaces</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-cyan-500 mt-1">•</span>
                  <span
                    ><strong>Community Service</strong> - Volunteer and help others as family</span
                  >
                </li>
              </ul>
              <div class="mt-4 p-3 bg-cyan-50 dark:bg-cyan-900/30 rounded-lg">
                <a
                  href="https://soltlane.com/upbringing-of-children/"
                  target="_blank"
                  rel="noopener"
                  class="text-cyan-700 dark:text-cyan-300 font-medium hover:underline flex items-center gap-2"
                >
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="h-4 w-4" />
                  Muslim School Children Guide
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
              <a
                href="https://www.jameelaho.com/"
                target="_blank"
                rel="noopener"
                class="group flex items-center gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
              >
                <UIcon
                  name="i-heroicons-globe-alt"
                  class="h-8 w-8 text-emerald-600 dark:text-emerald-400"
                />
                <div>
                  <h4
                    class="font-semibold text-neutral-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-300"
                  >
                    Jameela Ho
                  </h4>
                  <p class="text-sm text-neutral-600 dark:text-emerald-200">
                    School-age parenting articles
                  </p>
                </div>
              </a>
              <a
                href="https://www.bayyinahtv.com/"
                target="_blank"
                rel="noopener"
                class="group flex items-center gap-3 p-4 rounded-xl bg-teal-50 dark:bg-teal-900/30 hover:bg-teal-100 dark:hover:bg-teal-900/50 transition-colors"
              >
                <UIcon
                  name="i-heroicons-academic-cap"
                  class="h-8 w-8 text-teal-600 dark:text-teal-400"
                />
                <div>
                  <h4
                    class="font-semibold text-neutral-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-300"
                  >
                    Bayyinah TV
                  </h4>
                  <p class="text-sm text-neutral-600 dark:text-teal-200">
                    Islamic education for children
                  </p>
                </div>
              </a>
            </div>
          </div>
        </Motion>
      </div>
    </section>

    <!-- Developmental Milestones Section -->
    <section class="px-4 sm:px-6 lg:px-8 py-20">
      <div class="mx-auto max-w-7xl">
        <h2 class="text-3xl font-bold text-neutral-900 dark:text-white mb-12 text-center">
          School-Aged Development Milestones (6-12 Years)
        </h2>
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.2 }"
        >
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ContentCard
              title="Ages 6-8 Years"
              description="Can read and write, follows multi-step directions, shows increased independence in self-care, develops friendships, understands right vs. wrong."
              icon="i-heroicons-academic-cap"
              color="primary"
            />
            <ContentCard
              title="Ages 9-10 Years"
              description="More complex thinking and reasoning, growing interest in peer groups, develops hobbies and interests, improving organizational skills, can manage responsibilities."
              icon="i-heroicons-sparkles"
              color="secondary"
            />
            <ContentCard
              title="Ages 11-12 Years"
              description="Approaching adolescence, increased self-consciousness, stronger friendships and social awareness, questioning authority and developing opinions, puberty may begin."
              icon="i-heroicons-user-group"
              color="accent"
            />
          </div>
        </Motion>
      </div>
    </section>

    <!-- Practical Tips Section -->
    <section class="px-4 sm:px-6 lg:px-8 py-20 bg-neutral-50 dark:bg-deep-purple-975">
      <div class="mx-auto max-w-7xl">
        <h2 class="text-3xl font-bold text-neutral-900 dark:text-pink-400 mb-12 text-center">
          Practical Parenting Tips
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Motion
            :initial="{ opacity: 0, x: -20 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.5 }"
          >
            <div class="bg-white dark:bg-deep-purple-900 rounded-xl p-6 shadow-md">
              <h3 class="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                📚 Academic Support
              </h3>
              <ul class="space-y-2 text-neutral-700 dark:text-pink-100">
                <li>• Create a dedicated homework space</li>
                <li>• Break homework into manageable chunks</li>
                <li>• Read together regularly</li>
                <li>• Communicate with teachers about progress</li>
                <li>• Encourage curiosity and questions</li>
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
                💪 Building Confidence
              </h3>
              <ul class="space-y-2 text-neutral-700 dark:text-pink-100">
                <li>• Praise effort and persistence</li>
                <li>• Let them try new activities</li>
                <li>• Support their interests and hobbies</li>
                <li>• Give age-appropriate responsibilities</li>
                <li>• Show interest in their day and feelings</li>
              </ul>
            </div>
          </Motion>
        </div>
      </div>
    </section>
    <!-- Content Section -->
    <section class="px-4 sm:px-6 lg:px-8 py-20">
      <div class="mx-auto max-w-7xl">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.2 }"
        >
          <div class="grid grid-cols-1 gap-8">
            <ContentCard>
              <template #title>School Years Parenting</template>
              <template #description>
                Navigate school, academics, and your child's developing independence.
              </template>
            </ContentCard>
          </div>
        </Motion>
      </div>
    </section>

    <!-- Motherhood Balance Survey -->
    <SurveyForm
      :title="schoolAgedMomsSurvey.title"
      :subtitle="schoolAgedMomsSurvey.subtitle"
      :instructions="schoolAgedMomsSurvey.instructions"
      :scale="schoolAgedMomsSurvey.scale"
      :scale-scores="schoolAgedMomsSurvey.scaleScores"
      :sections="schoolAgedMomsSurvey.sections"
      :max-score="schoolAgedMomsSurvey.maxScore"
      :score-ranges="schoolAgedMomsSurvey.scoreRanges"
      :light-moments="schoolAgedMomsSurvey.lightMoments"
      :affirmations="schoolAgedMomsSurvey.affirmations"
      :important-note="schoolAgedMomsSurvey.importantNote"
    />

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
                Anchored in school-age research
              </h3>
              <p class="text-neutral-700 dark:text-pink-100">
                Academic, physical activity, and social tips align with leading recommendations for
                children 6-12 years old.
              </p>
            </div>
            <div class="grid gap-4">
              <div
                class="rounded-2xl bg-white dark:bg-deep-purple-950/60 p-5 shadow-sm ring-1 ring-neutral-200 dark:ring-purple-800"
              >
                <h4 class="text-lg font-semibold text-neutral-900 dark:text-white">
                  WHO Physical Activity (5-17 yrs)
                </h4>
                <p class="text-sm text-neutral-700 dark:text-pink-100">
                  Recommends 60+ minutes of moderate-to-vigorous activity daily with muscle- and
                  bone-strengthening at least 3 days/week.
                </p>
                <a
                  class="text-pink-600 hover:underline text-sm font-semibold"
                  href="https://www.who.int/publications/i/item/9789240015128"
                  target="_blank"
                  rel="noopener"
                >
                  View WHO guidance
                </a>
              </div>
              <div
                class="rounded-2xl bg-white dark:bg-deep-purple-950/60 p-5 shadow-sm ring-1 ring-neutral-200 dark:ring-purple-800"
              >
                <h4 class="text-lg font-semibold text-neutral-900 dark:text-white">
                  UNESCO Family Engagement in Learning
                </h4>
                <p class="text-sm text-neutral-700 dark:text-pink-100">
                  Shows parental involvement boosts literacy, attendance, and motivation through
                  home reading and school partnerships.
                </p>
                <a
                  class="text-pink-600 hover:underline text-sm font-semibold"
                  href="https://unesdoc.unesco.org/ark:/48223/pf0000265537"
                  target="_blank"
                  rel="noopener"
                >
                  Read UNESCO brief
                </a>
              </div>
              <div
                class="rounded-2xl bg-white dark:bg-deep-purple-950/60 p-5 shadow-sm ring-1 ring-neutral-200 dark:ring-purple-800"
              >
                <h4 class="text-lg font-semibold text-neutral-900 dark:text-white">
                  AAP Bullying Prevention
                </h4>
                <p class="text-sm text-neutral-700 dark:text-pink-100">
                  Encourages active listening, documentation, and school collaboration to protect
                  children from bullying impacts on mental health.
                </p>
                <a
                  class="text-pink-600 hover:underline text-sm font-semibold"
                  href="https://www.healthychildren.org/English/safety-prevention/at-play/Pages/Bullying-Its-Not-OK.aspx"
                  target="_blank"
                  rel="noopener"
                >
                  AAP guidance
                </a>
              </div>
              <div
                class="rounded-2xl bg-white dark:bg-deep-purple-950/60 p-5 shadow-sm ring-1 ring-neutral-200 dark:ring-purple-800"
              >
                <h4 class="text-lg font-semibold text-neutral-900 dark:text-white">
                  CDC School Health & Mental Wellbeing
                </h4>
                <p class="text-sm text-neutral-700 dark:text-pink-100">
                  Highlights supportive school climates, sleep, nutrition, and physical activity as
                  protective factors for learning and mental health.
                </p>
                <a
                  class="text-pink-600 hover:underline text-sm font-semibold"
                  href="https://www.cdc.gov/healthyyouth/index.htm"
                  target="_blank"
                  rel="noopener"
                >
                  CDC resources
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
