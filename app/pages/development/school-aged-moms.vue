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
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-950 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950"
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
        <h2 class="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
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
        <h2 class="text-3xl font-bold text-neutral-900 dark:text-white mb-12 text-center">
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
