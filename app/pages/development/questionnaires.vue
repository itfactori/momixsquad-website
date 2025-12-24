<script setup lang="ts">
useHead({
  title: 'Questionnaires - Research-Backed Parenting Tools | Momix Squad',
  meta: [
    {
      name: 'description',
      content:
        'Access research-backed questionnaires and parenting assessments from WHO, UNICEF, CDC and other credible organizations. Track your parenting journey with evidence-based tools.'
    }
  ]
});

definePageMeta({
  layout: 'default'
});

// Research-backed questionnaire categories
const questionnaireCategories = [
  {
    title: 'Child Development',
    description: "Assess your child's developmental milestones and progress",
    icon: 'i-heroicons-chart-bar',
    color: 'emerald',
    questionnaires: [
      {
        title: 'CDC Developmental Milestones Checklist',
        source: 'Centers for Disease Control and Prevention',
        url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
        description:
          "Track your child's development from 2 months to 5 years with CDC's milestone checklists.",
        ageRange: '2 months - 5 years',
        type: 'Developmental Assessment',
        credibility: 'Gold Standard - Government Research'
      },
      {
        title: 'WHO Global Scales for Early Development (GSED)',
        source: 'World Health Organization',
        url: 'https://www.who.int/publications/i/item/9789241550505',
        description:
          'Internationally validated tools for measuring early childhood development across cultures.',
        ageRange: '0-3 years',
        type: 'Developmental Assessment',
        credibility: 'Global Standard - WHO Research'
      },
      {
        title: 'Ages and Stages Questionnaires® (ASQ®)',
        source: 'Brookes Publishing Co.',
        url: 'https://agesandstages.com/',
        description:
          'Parent-completed developmental screening system for children 1 month to 5½ years.',
        ageRange: '1 month - 5.5 years',
        type: 'Developmental Screening',
        credibility: 'Research-Validated Tool'
      }
    ]
  },
  {
    title: 'Parenting Practices',
    description: 'Evaluate your parenting approaches and strategies',
    icon: 'i-heroicons-heart',
    color: 'rose',
    questionnaires: [
      {
        title: 'Parenting Stress Index (PSI)',
        source: 'Pediatric Psychology Press',
        url: 'https://parinc.com/products/pdetail?key=200-4-PSI4',
        description: 'Measure stress levels in the parent-child system across multiple domains.',
        ageRange: 'Parents of children 0-12 years',
        type: 'Parenting Assessment',
        credibility: 'Clinically Validated'
      },
      {
        title: 'Parenting Styles and Dimensions Questionnaire (PSDQ)',
        source: 'Research Journal Articles',
        url: 'https://www.researchgate.net/publication/225248371_Parenting_Styles_and_Dimensions_Questionnaire_PSDQ',
        description:
          'Assess different parenting styles including authoritative, authoritarian, and permissive approaches.',
        ageRange: 'Parents of children 2-18 years',
        type: 'Parenting Style Assessment',
        credibility: 'Research-Based'
      },
      {
        title: 'UNICEF Positive Parenting Practices',
        source: 'UNICEF',
        url: 'https://www.unicef.org/parenting/positive-parenting',
        description: 'Evidence-based positive parenting techniques and self-assessment tools.',
        ageRange: 'Parents of children 0-18 years',
        type: 'Parenting Practices',
        credibility: 'International Standard'
      }
    ]
  },
  {
    title: 'Maternal Well-being',
    description: 'Monitor your mental health and well-being as a mother',
    icon: 'i-heroicons-sparkles',
    color: 'purple',
    questionnaires: [
      {
        title: 'Edinburgh Postnatal Depression Scale (EPDS)',
        source: 'Royal College of Psychiatrists',
        url: 'https://www.rcpsych.ac.uk/mental-health/problems-disorders/postnatal-depression',
        description: 'Screen for postnatal depression with this validated 10-item questionnaire.',
        ageRange: 'Postpartum mothers',
        type: 'Mental Health Screening',
        credibility: 'Clinically Validated'
      },
      {
        title: 'Maternal Self-Efficacy Scale',
        source: 'Research Publications',
        url: 'https://www.researchgate.net/publication/230726321_The_Maternal_Parenting_Self-Efficacy_Scale',
        description: 'Measure confidence in your parenting abilities and maternal role.',
        ageRange: 'Mothers of infants and toddlers',
        type: 'Self-Efficacy Assessment',
        credibility: 'Research-Validated'
      },
      {
        title: 'WHO-5 Well-Being Index',
        source: 'World Health Organization',
        url: 'https://www.who.int/data/data-collection-tools/who-5-well-being-index',
        description: 'Assess your current emotional well-being with this brief 5-item scale.',
        ageRange: 'Adults',
        type: 'Well-being Assessment',
        credibility: 'WHO Standard'
      }
    ]
  },
  {
    title: 'Family Dynamics',
    description: 'Understand your family relationships and support systems',
    icon: 'i-heroicons-users',
    color: 'amber',
    questionnaires: [
      {
        title: 'Family Assessment Device (FAD)',
        source: 'Epstein & Bishop Research',
        url: 'https://www.researchgate.net/publication/227617896_The_McMaster_Family_Assessment_Device',
        description: 'Evaluate family functioning across multiple dimensions.',
        ageRange: 'Families with children',
        type: 'Family Functioning',
        credibility: 'Research-Validated'
      },
      {
        title: 'Parent-Child Relationship Scale',
        source: 'Academic Research',
        url: 'https://www.researchgate.net/publication/232494578_The_Parent-Child_Relationship_Scale',
        description: 'Assess the quality and strength of your parent-child bond.',
        ageRange: 'Parents of children 3-12 years',
        type: 'Relationship Assessment',
        credibility: 'Research-Based'
      },
      {
        title: 'Social Support Questionnaire',
        source: 'Medical Research Literature',
        url: 'https://www.researchgate.net/publication/15644914_The_Social_Support_Questionnaire',
        description: 'Evaluate your support network and available resources.',
        ageRange: 'Adults',
        type: 'Support Assessment',
        credibility: 'Research-Validated'
      }
    ]
  }
];

// Research resources
const researchResources = [
  {
    title: 'Understanding Child Development Research',
    description: 'Learn how to interpret research findings and apply them to your parenting',
    url: 'https://www.unicef.org/parenting/child-development',
    type: 'Educational Guide',
    source: 'UNICEF'
  },
  {
    title: 'Evidence-Based Parenting Programs',
    description: 'Discover parenting programs supported by scientific research',
    url: 'https://www.cdc.gov/parents/essentials/index.html',
    type: 'Program Directory',
    source: 'CDC'
  },
  {
    title: 'Global Early Childhood Development Research',
    description: 'Access international research on early childhood development',
    url: 'https://www.who.int/teams/mental-health-and-substance-use/child-adolescent-health/early-childhood-development',
    type: 'Research Database',
    source: 'WHO'
  }
];

function getCredibilityBadge(credibility: string) {
  if (
    credibility.includes('Gold Standard') ||
    credibility.includes('WHO') ||
    credibility.includes('Government')
  ) {
    return { text: 'Gold Standard', color: 'emerald' };
  }
  if (credibility.includes('Clinical') || credibility.includes('Validated')) {
    return { text: 'Clinically Validated', color: 'blue' };
  }
  if (credibility.includes('Research')) {
    return { text: 'Research-Based', color: 'purple' };
  }
  return { text: 'Evidence-Based', color: 'amber' };
}
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20"
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
              class="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/50 px-6 py-2 text-sm font-semibold text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-blue-800"
            >
              <UIcon name="i-heroicons-clipboard-document-check" class="h-5 w-5" />
              Research-Backed Tools
            </div>
            <h1
              class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 dark:text-white mb-6"
            >
              Parenting Questionnaires
            </h1>
            <p class="text-xl text-neutral-600 dark:text-pink-200 max-w-3xl mx-auto">
              Access evidence-based questionnaires and assessments from leading research
              institutions. Track your parenting journey with tools validated by WHO, UNICEF, CDC,
              and academic research.
            </p>
          </div>
        </Motion>
      </div>
    </section>

    <!-- Research Credibility Info -->
    <section class="px-4 sm:px-6 lg:px-8 py-12">
      <div class="mx-auto max-w-7xl">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.2 }"
        >
          <div
            class="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 rounded-3xl p-8 text-white"
          >
            <div class="flex flex-col lg:flex-row items-center gap-8">
              <div class="flex-1">
                <h3 class="text-2xl font-bold mb-4">Research-Backed & Validated</h3>
                <p class="text-lg text-blue-100 mb-6">
                  All questionnaires listed are sourced from peer-reviewed research, validated by
                  leading institutions, and used in clinical or research settings worldwide.
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div class="flex items-center gap-2">
                    <UIcon name="i-heroicons-academic-cap" class="h-5 w-5" />
                    <span>Peer-Reviewed</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <UIcon name="i-heroicons-shield-check" class="h-5 w-5" />
                    <span>Clinically Validated</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <UIcon name="i-heroicons-globe" class="h-5 w-5" />
                    <span>Globally Recognized</span>
                  </div>
                </div>
              </div>
              <div class="flex-shrink-0">
                <div class="grid grid-cols-3 gap-2">
                  <div class="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                    <span class="text-2xl font-bold">WHO</span>
                  </div>
                  <div class="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                    <span class="text-2xl font-bold">CDC</span>
                  </div>
                  <div class="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                    <span class="text-2xl font-bold">UN</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Motion>
      </div>
    </section>

    <!-- Questionnaire Categories -->
    <section class="px-4 sm:px-6 lg:px-8 py-12">
      <div class="mx-auto max-w-7xl">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.3 }"
        >
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
              Browse by Category
            </h2>
            <p class="text-lg text-neutral-600 dark:text-pink-200">
              Find the right assessment for your needs
            </p>
          </div>
        </Motion>

        <div class="space-y-12">
          <Motion
            v-for="(category, index) in questionnaireCategories"
            :key="category.title"
            :initial="{ opacity: 0, y: 30 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.4 + index * 0.1 }"
          >
            <div
              class="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg ring-1 ring-neutral-200 dark:ring-neutral-700 overflow-hidden"
            >
              <!-- Category Header -->
              <div
                class="p-6 border-b border-neutral-200 dark:border-neutral-700"
                :class="{
                  'bg-emerald-50 dark:bg-emerald-900/20': category.color === 'emerald',
                  'bg-rose-50 dark:bg-rose-900/20': category.color === 'rose',
                  'bg-purple-50 dark:bg-purple-900/20': category.color === 'purple',
                  'bg-amber-50 dark:bg-amber-900/20': category.color === 'amber'
                }"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-xl"
                    :class="{
                      'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400':
                        category.color === 'emerald',
                      'bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400':
                        category.color === 'rose',
                      'bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400':
                        category.color === 'purple',
                      'bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400':
                        category.color === 'amber'
                    }"
                  >
                    <UIcon :name="category.icon" class="h-6 w-6" />
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-neutral-900 dark:text-white">
                      {{ category.title }}
                    </h3>
                    <p class="text-neutral-600 dark:text-pink-200">
                      {{ category.description }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Questionnaires List -->
              <div class="p-6">
                <div class="space-y-4">
                  <div
                    v-for="questionnaire in category.questionnaires"
                    :key="questionnaire.title"
                    class="group p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-600 hover:shadow-md"
                  >
                    <div class="flex flex-col lg:flex-row lg:items-start gap-4">
                      <!-- Main Content -->
                      <div class="flex-1">
                        <div class="flex items-start gap-3 mb-3">
                          <h4
                            class="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                          >
                            {{ questionnaire.title }}
                          </h4>
                          <div
                            class="px-2 py-1 text-xs font-medium rounded-full"
                            :class="{
                              'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300':
                                getCredibilityBadge(questionnaire.credibility).color === 'emerald',
                              'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300':
                                getCredibilityBadge(questionnaire.credibility).color === 'blue',
                              'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300':
                                getCredibilityBadge(questionnaire.credibility).color === 'purple',
                              'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300':
                                getCredibilityBadge(questionnaire.credibility).color === 'amber'
                            }"
                          >
                            {{ getCredibilityBadge(questionnaire.credibility).text }}
                          </div>
                        </div>

                        <p class="text-neutral-600 dark:text-pink-200 mb-3">
                          {{ questionnaire.description }}
                        </p>

                        <div class="flex flex-wrap items-center gap-3 text-sm">
                          <span
                            class="flex items-center gap-1 text-neutral-500 dark:text-neutral-400"
                          >
                            <UIcon name="i-heroicons-building-office" class="h-4 w-4" />
                            {{ questionnaire.source }}
                          </span>
                          <span
                            class="flex items-center gap-1 text-neutral-500 dark:text-neutral-400"
                          >
                            <UIcon name="i-heroicons-users" class="h-4 w-4" />
                            {{ questionnaire.ageRange }}
                          </span>
                          <span
                            class="flex items-center gap-1 text-neutral-500 dark:text-neutral-400"
                          >
                            <UIcon name="i-heroicons-clipboard-document-list" class="h-4 w-4" />
                            {{ questionnaire.type }}
                          </span>
                        </div>
                      </div>

                      <!-- Action Button -->
                      <div class="flex-shrink-0">
                        <UButton
                          :to="questionnaire.url"
                          target="_blank"
                          color="primary"
                          size="sm"
                          variant="outline"
                          class="group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20"
                        >
                          Access Tool
                          <template #trailing>
                            <UIcon name="i-heroicons-arrow-top-right-on-square" class="h-4 w-4" />
                          </template>
                        </UButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Research Resources -->
    <section class="px-4 sm:px-6 lg:px-8 py-12 bg-white/50 dark:bg-neutral-900/50">
      <div class="mx-auto max-w-7xl">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.8 }"
        >
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
              Research Resources
            </h2>
            <p class="text-lg text-neutral-600 dark:text-pink-200">
              Learn more about the research behind these tools
            </p>
          </div>
        </Motion>

        <div class="grid gap-6 md:grid-cols-3">
          <Motion
            v-for="(resource, index) in researchResources"
            :key="resource.title"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.9 + index * 0.1 }"
          >
            <div
              class="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg ring-1 ring-neutral-200 dark:ring-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                >
                  <UIcon name="i-heroicons-academic-cap" class="h-5 w-5" />
                </div>
                <div>
                  <span class="text-xs font-medium text-blue-600 dark:text-blue-400">{{
                    resource.type
                  }}</span>
                  <h3 class="font-semibold text-neutral-900 dark:text-white">
                    {{ resource.title }}
                  </h3>
                </div>
              </div>

              <p class="text-neutral-600 dark:text-pink-200 mb-4">
                {{ resource.description }}
              </p>

              <div class="flex items-center justify-between">
                <span class="text-sm text-neutral-500 dark:text-neutral-400">
                  {{ resource.source }}
                </span>
                <UButton
                  :to="resource.url"
                  target="_blank"
                  color="primary"
                  size="sm"
                  variant="ghost"
                >
                  Learn More
                  <template #trailing>
                    <UIcon name="i-heroicons-arrow-right" class="h-4 w-4" />
                  </template>
                </UButton>
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Important Notice -->
    <section class="px-4 sm:px-6 lg:px-8 py-12">
      <div class="mx-auto max-w-4xl">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 1.0 }"
        >
          <div
            class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6"
          >
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <UIcon
                  name="i-heroicons-exclamation-triangle"
                  class="h-6 w-6 text-amber-600 dark:text-amber-400"
                />
              </div>
              <div>
                <h3 class="text-lg font-semibold text-amber-900 dark:text-amber-100 mb-2">
                  Important Notice
                </h3>
                <p class="text-amber-800 dark:text-amber-200 mb-3">
                  These questionnaires are designed for informational and educational purposes only.
                  They are not substitutes for professional medical advice, diagnosis, or treatment.
                </p>
                <p class="text-amber-800 dark:text-amber-200">
                  Always consult with healthcare professionals, pediatricians, or mental health
                  experts for concerns about your child's development or your family's well-being.
                </p>
              </div>
            </div>
          </div>
        </Motion>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="px-4 sm:px-6 lg:px-8 py-12">
      <div class="mx-auto max-w-4xl">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 1.1 }"
        >
          <div
            class="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 rounded-3xl p-8 text-center text-white"
          >
            <h3 class="text-2xl font-bold mb-4">Need Professional Guidance?</h3>
            <p class="text-lg mb-6 text-blue-100">
              Our team of experts can help you interpret these assessments and provide personalized
              guidance.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <UButton
                to="/contact"
                color="neutral"
                size="lg"
                variant="solid"
                class="text-blue-600 hover:text-blue-700"
              >
                Get Expert Help
                <template #trailing>
                  <UIcon name="i-heroicons-arrow-right" class="h-4 w-4" />
                </template>
              </UButton>
              <UButton
                to="/development"
                color="neutral"
                size="lg"
                variant="outline"
                class="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Browse Development Stages
              </UButton>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  </div>
</template>
