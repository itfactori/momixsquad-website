<script setup lang="ts">
useHead({
  title: 'Self Care & Wellness - Momix Squad'
});

const balanceItems = [
  {
    label: 'For Working Moms',
    icon: 'i-heroicons-briefcase',
    content:
      'Time management, meal planning, managing work stress, setting boundaries, and overcoming guilt.'
  },
  {
    label: 'For Work-from-Home Moms',
    icon: 'i-heroicons-computer-desktop',
    content:
      'Setting up workspace, balancing calls with kids, managing distractions, and scheduling breaks.'
  },
  {
    label: 'For Moms in Joint Families',
    icon: 'i-heroicons-users',
    content:
      'Balancing expectations, setting boundaries, communicating needs, and coordinating childcare.'
  },
  {
    label: 'For Single Moms',
    icon: 'i-heroicons-user',
    content:
      'Time-saving systems, building support networks, financial management, and emotional resilience.'
  },
  {
    label: 'For Stay-at-Home Moms',
    icon: 'i-heroicons-home',
    content:
      'Maintaining identity, creating daily routines, staying connected, and managing home workload.'
  },
  {
    label: 'Work–Life Systems & Strategies',
    icon: 'i-heroicons-clipboard-document-list',
    content:
      'Weekly planners, emergency backup plans, stress management tools, and delegating tasks.'
  },
  {
    label: 'Emotional Balance',
    icon: 'i-heroicons-scale',
    content:
      'Letting go of perfection, overcoming self-doubt, mindfulness, and building a support circle.'
  },
  {
    label: 'Relationship Balance',
    icon: 'i-heroicons-heart',
    content:
      'Staying aligned with partner, co-parenting strategies, and family communication rituals.'
  },
  {
    label: 'Islamic-Integrated Balance',
    icon: 'i-heroicons-moon',
    content:
      'Making daily tasks acts of ibadah, duas for ease, Sunnah routines, and bringing tranquility home.'
  }
];
</script>

<template>
  <div class="bg-white py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Mom Care & Wellness
        </h2>
        <p class="mt-4 text-lg text-slate-600">
          You can't pour from an empty cup. Prioritize your well-being to be the best mom you can
          be.
        </p>
      </div>

      <div class="mt-16 space-y-20">
        <!-- Physical & Mental Health Grid -->
        <section>
          <div class="grid gap-12 lg:grid-cols-2">
            <!-- Self Care List -->
            <div class="rounded-2xl bg-rose-50 p-8">
              <h3 class="mb-6 flex items-center text-2xl font-bold text-rose-900">
                <UIcon name="i-heroicons-heart" class="mr-2 h-6 w-6" />
                Self Care & Physical Health
              </h3>
              <ul class="space-y-3 text-rose-800">
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check-circle" class="mr-2 h-5 w-5 text-rose-500" />
                  Postpartum healing & strength
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check-circle" class="mr-2 h-5 w-5 text-rose-500" />
                  Hormonal balance & Healthy weight
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check-circle" class="mr-2 h-5 w-5 text-rose-500" /> Safe
                  home workouts & Core recovery
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check-circle" class="mr-2 h-5 w-5 text-rose-500" /> Sleep
                  routines & Digital detox
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check-circle" class="mr-2 h-5 w-5 text-rose-500" />
                  Nutrition for energy & immunity
                </li>
              </ul>
            </div>

            <!-- Mental Health List -->
            <div class="rounded-2xl bg-sky-50 p-8">
              <h3 class="mb-6 flex items-center text-2xl font-bold text-sky-900">
                <UIcon name="i-heroicons-face-smile" class="mr-2 h-6 w-6" />
                Mental & Emotional Health
              </h3>
              <ul class="space-y-3 text-sky-800">
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check-circle" class="mr-2 h-5 w-5 text-sky-500" />
                  Stress-relief & Overcoming guilt
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check-circle" class="mr-2 h-5 w-5 text-sky-500" /> Mood
                  swings & Emotional regulation
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check-circle" class="mr-2 h-5 w-5 text-sky-500" />
                  Building patience & calmness
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check-circle" class="mr-2 h-5 w-5 text-sky-500" />
                  Mindfulness & Journaling prompts
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check-circle" class="mr-2 h-5 w-5 text-sky-500" /> Social
                  support & Mom friendships
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Spiritual Wellness -->
        <section>
          <h3 class="mb-8 text-center text-2xl font-bold text-momix-700">Spiritual Wellness</h3>
          <div class="grid gap-8 md:grid-cols-3">
            <InteractivePlaceholder
              title="Daily Duas"
              description="Duas for calmness & strength. Mindful breathing with Duas."
            />
            <InteractivePlaceholder
              title="Quranic Healing"
              description="Quran-based emotional healing and finding barakah."
            />
            <InteractivePlaceholder
              title="Sunnah Routines"
              description="Following Sunnah and creating a peaceful home."
            />
          </div>
        </section>

        <!-- Work & Mom Life Balance Accordion -->
        <section class="rounded-3xl bg-slate-50 p-8 sm:p-12">
          <h3 class="mb-8 text-center text-2xl font-bold text-slate-900">
            Work & Mom Life Balance
          </h3>
          <div class="mx-auto max-w-3xl">
            <UAccordion :items="balanceItems" color="white" variant="soft" size="xl">
              <template #item="{ item }">
                <div class="px-4 pb-4 text-slate-600">
                  {{ item.content }}
                  <div class="mt-4">
                    <InteractivePlaceholder
                      :title="item.label + ' Guide'"
                      description="Detailed strategies and tips."
                    />
                  </div>
                </div>
              </template>
            </UAccordion>
          </div>
        </section>

        <!-- Questionnaire Section -->
        <section class="rounded-2xl bg-sage-50 p-8">
          <div class="md:flex md:items-center md:justify-between">
            <div class="mb-6 md:mb-0">
              <h3 class="text-xl font-bold text-sage-900">Questionnaire for Working Moms</h3>
              <p class="text-sage-700">Help us understand your challenges better.</p>
            </div>
            <InteractivePlaceholder
              title="Survey Form"
              description="Interactive questionnaire component."
            />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
