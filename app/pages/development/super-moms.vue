<script setup lang="ts">
useHead({
  title: 'Super Moms (20+ Years) - Adult Parenting & Life Goals | Momix Squad',
  meta: [
    {
      name: 'description',
      content:
        'Navigate parenting adult children while pursuing your own life goals. Find balance, support your independence, and celebrate your journey as a mother.'
    }
  ]
});

definePageMeta({
  layout: 'default'
});

const superMomsSurvey = {
  title: 'How Balanced Is My Motherhood?',
  subtitle:
    'Moms of Adult Children / Empty Nest \u2014 Reflect on emotional balance, connection, faith, and self-care during the empty nest stage.',
  instructions:
    'Be honest \u2014 this survey is for self-reflection, not evaluation. Take 5-10 minutes.',
  scale: ['Always', 'Often', 'Sometimes', 'Rarely'],
  scaleScores: [4, 3, 2, 1],
  sections: [
    {
      title: 'Emotional Connection & Reflection',
      questions: [
        {
          text: 'I feel emotionally connected to my adult children even if they live independently.'
        },
        { text: 'I allow myself to feel pride and nostalgia without guilt.' },
        {
          text: 'I handle loneliness or "empty nest" emotions with patience and reflection.'
        },
        { text: 'I forgive myself for mistakes made during their upbringing.' }
      ],
      reflectionPrompt: 'One moment this week where I felt connected or proud of my adult child'
    },
    {
      title: 'Faith & Spiritual Integration',
      questions: [
        {
          text: "I trust Allah's plan for my children and their independence."
        },
        {
          text: "I make du'a for my children's guidance, health, and iman."
        },
        {
          text: 'I model good akhlaq and Islamic values in interactions with my adult children.'
        },
        {
          text: 'I remind myself that my efforts and intentions as a mother are rewarded by Allah.'
        }
      ],
      duaPrompt:
        'Ya Allah, guide my children in wisdom, iman, and good character. Ya Allah, grant me patience and contentment as my children grow and thrive independently.',
      reflectionPrompt: 'One way I consciously practiced faith or gratitude this week'
    },
    {
      title: 'Self-Care & Personal Growth',
      questions: [
        { text: 'I take intentional time for myself without guilt.' },
        {
          text: 'I nurture hobbies, interests, or friendships outside motherhood.'
        },
        {
          text: 'I prioritize health \u2014 mental, emotional, and physical.'
        },
        {
          text: 'I embrace this new phase of life as an opportunity for growth.'
        }
      ],
      reflectionPrompt: 'One way I cared for myself or tried something new this week'
    },
    {
      title: 'Challenges',
      questions: [
        {
          text: 'I feel content even when my children are not around daily.'
        },
        {
          text: 'I have adjusted well to new routines and household dynamics.'
        },
        {
          text: "I manage my worries about my adult children's choices with trust in Allah."
        },
        {
          text: 'I balance my own needs with supporting my children without feeling stretched.'
        },
        {
          text: 'I have a clear sense of identity and purpose beyond motherhood.'
        }
      ],
      reflectionPrompt: 'One challenge I faced this week and how I responded'
    },
    {
      title: 'Gratitude & Positive Reflection',
      questions: [
        {
          text: "I acknowledge the positive impact I had on my children's lives."
        },
        {
          text: 'I celebrate milestones or successes of my adult children without comparison.'
        },
        {
          text: 'I find moments of joy in my own life independent of parenting.'
        },
        {
          text: 'I express gratitude to Allah for my children and this new phase.'
        }
      ],
      reflectionPrompt: 'One thing I am grateful for this week'
    }
  ],
  maxScore: 84,
  scoreRanges: [
    {
      min: 67,
      max: 84,
      label: 'Embracing Balance',
      description:
        'You are embracing balance, faith, and connection in this stage. Celebrate your growth.'
    },
    {
      min: 42,
      max: 66,
      label: 'Adjusting & Growing',
      description:
        "You are aware of adjustment areas \u2014 self-care, reflection, or du'a can help strengthen balance."
    },
    {
      min: 0,
      max: 41,
      label: 'Needs Support',
      description:
        'You may feel stretched or nostalgic \u2014 lean on support, seek spiritual reassurance, and remember Allah values your intention.'
    }
  ],
  lightMoments: [
    { prompt: 'Something funny or memorable my adult child did recently...' },
    { prompt: 'One lesson I learned from my child this week...' },
    {
      prompt: 'One way I embraced my independence or new routines this week...'
    }
  ],
  importantNote:
    "Motherhood is lifelong. Your du'a, patience, and reflection continue to impact your children and yourself positively.",
  affirmations: [
    'My role as a mother continues to matter.',
    'Allah guided me as a mother, and my effort continues to be rewarded.',
    'This new phase is an opportunity, not an ending.',
    "My du'a for my children never expires."
  ]
};
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-rose-50 dark:from-yellow-950/20 dark:via-amber-950/20 dark:to-rose-950/20"
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
              Super Moms (20+ Years)
            </h1>
            <p class="text-xl text-neutral-600 dark:text-pink-200 max-w-2xl mx-auto">
              Celebrate your journey and continue supporting your adult children. Redefine
              motherhood and pursue your own dreams and goals.
            </p>
            <div class="mt-8">
              <img
                src="/hero/home-6.jpg"
                alt="Mothers celebrating together"
                class="mx-auto rounded-2xl lg:rounded-3xl w-full max-w-4xl object-cover shadow-lg aspect-video max-h-[28rem]"
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
          Navigating This Life Stage
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
                Redefining Motherhood & Relationships with Adult Children
              </summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  As children become adults, the parenting relationship fundamentally shifts. This
                  transition is both an ending and a beginning.
                </p>
                <p><strong>Key Transitions:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>
                    <strong>From Caregiver to Advisor:</strong> Your role becomes supportive rather
                    than directive. Adult children make their own choices
                  </li>
                  <li>
                    <strong>Respecting Autonomy:</strong> Step back from decision-making. Offer
                    perspective when asked, but respect their choices even if you disagree
                  </li>
                  <li>
                    <strong>New Type of Intimacy:</strong> Relationships often deepen as adult
                    children see you as a person with your own challenges and dreams
                  </li>
                  <li>
                    <strong>Establishing Boundaries:</strong> Healthy boundaries protect
                    relationships. Be clear about what you can/cannot do financially, emotionally,
                    or practically
                  </li>
                  <li>
                    <strong>Finding Balance:</strong> Be available without being intrusive. Maintain
                    frequent contact while respecting their independence
                  </li>
                </ul>
                <p className="mt-2"><strong>Communication Tips:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Ask before offering advice - they may just need to vent</li>
                  <li>Share your experience without implying it should guide their choices</li>
                  <li>Respect their partner/spouse and extended family relationships</li>
                  <li>
                    Avoid criticizing their life choices, partners, or children (if you're a
                    grandparent)
                  </li>
                  <li>Celebrate their successes genuinely</li>
                </ul>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">
                Supporting Adult Children (Without Over-Functioning)
              </summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  There's a delicate balance between supporting adult children and enabling
                  dependence. Research on adult development shows that facing challenges builds
                  resilience.
                </p>
                <p><strong>Healthy Support Includes:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Emotional support - being a listening ear and validating their feelings</li>
                  <li>Advice when asked - sharing wisdom without insisting it be followed</li>
                  <li>Financial help for true emergencies, with clear boundaries</li>
                  <li>Practical help occasionally (childcare, moving help, etc.)</li>
                  <li>Believing in their capability to solve most problems</li>
                </ul>
                <p className="mt-2"><strong>Unhealthy Over-Functioning Includes:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Frequent financial bailouts that prevent learning</li>
                  <li>Unsolicited advice or criticism of their choices</li>
                  <li>Solving problems they could solve themselves</li>
                  <li>Sacrificing your own life for their comfort</li>
                  <li>Using guilt to maintain connection or influence</li>
                </ul>
                <p className="mt-2">
                  Letting adult children experience consequences (job loss, failed relationship,
                  financial difficulty) is often the greatest gift you can give them.
                </p>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">Grandparenting (If Applicable)</summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  Grandparenting offers unique joys and challenges. Your role is to support your
                  adult children's parenting while being present for grandchildren.
                </p>
                <p><strong>Healthy Grandparenting Looks Like:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Following your adult child's parenting rules and guidelines in your home</li>
                  <li>Supporting (not undermining) their discipline and decisions</li>
                  <li>Offering help when needed and appreciated, not when demanded</li>
                  <li>Being a fun, loving presence in grandchildren's lives</li>
                  <li>Sharing family history and values in age-appropriate ways</li>
                  <li>Respecting boundaries around childcare and decision-making</li>
                </ul>
                <p className="mt-2">
                  Avoid being a default childcare provider unless it's a genuine arrangement - this
                  can strain adult child relationships.
                </p>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">
                Your Own Life & Personal Fulfillment
              </summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  Many mothers dedicate decades to raising children. This life stage offers the
                  opportunity to reclaim time, energy, and dreams.
                </p>
                <p><strong>Rediscovering Yourself:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>
                    Reconnect with interests and hobbies you put aside during intensive parenting
                  </li>
                  <li>Explore career opportunities or changes you've considered</li>
                  <li>
                    Return to or continue education (many universities now have programs for adult
                    learners)
                  </li>
                  <li>Travel and adventure that wasn't possible with young children</li>
                  <li>Strengthen your partnership/marriage with renewed focus</li>
                  <li>Deepen friendships and community connections</li>
                </ul>
                <p className="mt-2"><strong>Health & Wellness in Midlife:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>
                    Regular exercise - supports cardiovascular health, bone density, mental health
                  </li>
                  <li>Preventive health screenings appropriate for your age</li>
                  <li>Mental health support if needed - this is a major life transition</li>
                  <li>Strong social connections - protective against depression and isolation</li>
                  <li>Continued learning - keeps mind sharp and engaged</li>
                </ul>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">
                Managing Changing Parent-Adult Child Dynamics
              </summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  As adult children navigate careers, relationships, and parenthood, and as you
                  navigate aging, dynamics will shift and sometimes strain.
                </p>
                <p><strong>Common Challenges & How to Handle Them:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Different Values/Parenting:</strong> Accept that your adult children
                    will parent differently. Unless children are in danger, defer to their judgment
                  </li>
                  <li>
                    <strong>Lack of Gratitude:</strong> Adult children may not acknowledge your
                    sacrifices. Do things because you want to, not for recognition
                  </li>
                  <li>
                    <strong>Feeling Left Out:</strong> As kids build their own families, you have
                    less central role. Cultivate your own life and identity
                  </li>
                  <li>
                    <strong>Health Issues & Aging:</strong> Discuss plans early. Avoid being a
                    burden by maintaining your own health and independence as long as possible
                  </li>
                  <li>
                    <strong>Financial Entanglement:</strong> Be clear about money boundaries.
                    Written agreements prevent misunderstandings
                  </li>
                </ul>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">Mental Health & Wellbeing</summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  "Empty nest" and midlife transitions can trigger depression, anxiety, or identity
                  confusion. This is normal and treatable.
                </p>
                <p><strong>Common Psychological Challenges:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Empty Nest Syndrome:</strong> Loss of identity and purpose when kids
                    leave. Often temporary but can be significant
                  </li>
                  <li>
                    <strong>Midlife Transition:</strong> Reassessing life direction, achievements,
                    and remaining time
                  </li>
                  <li>
                    <strong>Relationship Strain:</strong> Couples sometimes realize they've drifted
                    during child-rearing years
                  </li>
                  <li>
                    <strong>Role Confusion:</strong> "Who am I beyond being a mom?" requires
                    rebuilding identity
                  </li>
                </ul>
                <p className="mt-2"><strong>Resources & Support:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Therapy or counseling - helps navigate transitions and build identity</li>
                  <li>Support groups for empty nesters or women in midlife</li>
                  <li>Couples counseling if relationship needs attention</li>
                  <li>Mentorship or coaching for career or life direction exploration</li>
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
                    href="https://www.who.int/health-topics/mental-health"
                    target="_blank"
                    rel="noopener"
                    >WHO Mental Health</a
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
                    href="https://www.who.int/publications/i/item/9789240015265"
                    target="_blank"
                    rel="noopener"
                    >WHO Healthy Aging Guidelines</a
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
              Embrace your super-mom journey with Islamic wisdom, spiritual growth, and family
              harmony.
            </p>
          </div>

          <div class="grid gap-6 md:grid-cols-3">
            <!-- Spiritual Leadership -->
            <Motion
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5, delay: 0.1 }"
              class="bg-white dark:bg-emerald-950/60 rounded-2xl p-6 shadow-lg ring-1 ring-emerald-200 dark:ring-emerald-800"
            >
              <div class="flex items-center gap-3 mb-4">
                <div class="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-900/50">
                  <UIcon
                    name="i-heroicons-crown"
                    class="h-6 w-6 text-emerald-600 dark:text-emerald-400"
                  />
                </div>
                <h3 class="text-xl font-semibold text-neutral-900 dark:text-white">
                  Spiritual Leadership
                </h3>
              </div>
              <ul class="space-y-3 text-neutral-700 dark:text-emerald-100">
                <li class="flex items-start gap-2">
                  <span class="text-emerald-500 mt-1">•</span>
                  <span
                    ><strong>Family Imam</strong> - Lead family in Islamic practices and
                    prayers</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-500 mt-1">•</span>
                  <span
                    ><strong>Quran Reflection</strong> - Share wisdom and life experiences with
                    family</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-500 mt-1">•</span>
                  <span
                    ><strong>Charity Leadership</strong> - Organize Sadaqah and community
                    service</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-500 mt-1">•</span>
                  <span
                    ><strong>Dua for Family</strong> - Regular prayers for children's guidance</span
                  >
                </li>
              </ul>
              <div class="mt-4 p-3 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
                <a
                  href="https://www.islamicity.org/101613/guiding-little-hearts-islamic-parenting-strategies-for-spiritual-growth/"
                  target="_blank"
                  rel="noopener"
                  class="text-emerald-700 dark:text-emerald-300 font-medium hover:underline flex items-center gap-2"
                >
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="h-4 w-4" />
                  Islamic Family Leadership
                </a>
              </div>
            </Motion>

            <!-- Intergenerational Wisdom -->
            <Motion
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5, delay: 0.2 }"
              class="bg-white dark:bg-emerald-950/60 rounded-2xl p-6 shadow-lg ring-1 ring-teal-200 dark:ring-teal-800"
            >
              <div class="flex items-center gap-3 mb-4">
                <div class="p-2 rounded-xl bg-teal-100 dark:bg-teal-900/50">
                  <UIcon
                    name="i-heroicons-users"
                    class="h-6 w-6 text-teal-600 dark:text-teal-400"
                  />
                </div>
                <h3 class="text-xl font-semibold text-neutral-900 dark:text-white">
                  Family Wisdom
                </h3>
              </div>
              <ul class="space-y-3 text-neutral-700 dark:text-teal-100">
                <li class="flex items-start gap-2">
                  <span class="text-teal-500 mt-1">•</span>
                  <span
                    ><strong>Grandparent Guidance</strong> - Share Islamic wisdom with
                    grandchildren</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-teal-500 mt-1">•</span>
                  <span
                    ><strong>Family Stories</strong> - Pass down Islamic heritage and
                    traditions</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-teal-500 mt-1">•</span>
                  <span
                    ><strong>Conflict Resolution</strong> - Islamic approach to family
                    disputes</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-teal-500 mt-1">•</span>
                  <span
                    ><strong>Elder Respect</strong> - Honor parents while maintaining Islamic
                    values</span
                  >
                </li>
              </ul>
              <div class="mt-4 p-3 bg-teal-50 dark:bg-teal-900/30 rounded-lg">
                <a
                  href="https://www.amaliah.com/post/67013/parenting-tips-muslim-families"
                  target="_blank"
                  rel="noopener"
                  class="text-teal-700 dark:text-teal-300 font-medium hover:underline flex items-center gap-2"
                >
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="h-4 w-4" />
                  Islamic Family Harmony
                </a>
              </div>
            </Motion>

            <!-- Community Contribution -->
            <Motion
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5, delay: 0.3 }"
              class="bg-white dark:bg-emerald-950/60 rounded-2xl p-6 shadow-lg ring-1 ring-cyan-200 dark:ring-cyan-800"
            >
              <div class="flex items-center gap-3 mb-4">
                <div class="p-2 rounded-xl bg-cyan-100 dark:bg-cyan-900/50">
                  <UIcon
                    name="i-heroicons-heart"
                    class="h-6 w-6 text-cyan-600 dark:text-cyan-400"
                  />
                </div>
                <h3 class="text-xl font-semibold text-neutral-900 dark:text-white">
                  Community Service
                </h3>
              </div>
              <ul class="space-y-3 text-neutral-700 dark:text-cyan-100">
                <li class="flex items-start gap-2">
                  <span class="text-cyan-500 mt-1">•</span>
                  <span><strong>Mentorship</strong> - Guide younger Muslim moms in community</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-cyan-500 mt-1">•</span>
                  <span
                    ><strong>Mosque Activities</strong> - Organize Islamic education and
                    events</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-cyan-500 mt-1">•</span>
                  <span
                    ><strong>Islamic Volunteering</strong> - Support Muslim charities and
                    causes</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-cyan-500 mt-1">•</span>
                  <span
                    ><strong>Wisdom Sharing</strong> - Teach Islamic parenting to next
                    generation</span
                  >
                </li>
              </ul>
              <div class="mt-4 p-3 bg-cyan-50 dark:bg-cyan-900/30 rounded-lg">
                <a
                  href="https://salaam-mummy.com/free-islamic-parenting-resources/"
                  target="_blank"
                  rel="noopener"
                  class="text-cyan-700 dark:text-cyan-300 font-medium hover:underline flex items-center gap-2"
                >
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="h-4 w-4" />
                  Muslim Senior Service
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
                href="https://www.effectiveislamicparenting.com/"
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
                    Effective Islamic Parenting
                  </h4>
                  <p class="text-sm text-neutral-600 dark:text-emerald-200">
                    Expert guidance for senior moms
                  </p>
                </div>
              </a>
              <a
                href="https://thegoodchild.org/companion"
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
                    The Good Child
                  </h4>
                  <p class="text-sm text-neutral-600 dark:text-teal-200">
                    Leadership and wisdom for senior moms
                  </p>
                </div>
              </a>
            </div>
          </div>
        </Motion>
      </div>
    </section>

    <!-- Life Milestones Section -->
    <section class="px-4 sm:px-6 lg:px-8 py-20">
      <div class="mx-auto max-w-7xl">
        <h2 class="text-3xl font-bold text-neutral-900 dark:text-white mb-12 text-center">
          Your New Chapter
        </h2>
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.2 }"
        >
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ContentCard
              title="Early Empty Nest"
              description="Adjustment period as kids leave home. Rediscover your partnership and rebuild identity beyond parenting. Explore new interests."
              icon="i-heroicons-sparkles"
              color="primary"
            />
            <ContentCard
              title="Active Empty Nest"
              description="Children are established in their own lives. You have freedom and energy to pursue personal goals, travel, and new experiences."
              icon="i-heroicons-star"
              color="secondary"
            />
            <ContentCard
              title="Grandparent Years"
              description="Enjoy the unique joys of grandparenting without daily parenting responsibility. Share wisdom, create memories, and be a stabilizing presence."
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
          Embracing This Chapter
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Motion
            :initial="{ opacity: 0, x: -20 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.5 }"
          >
            <div class="bg-white dark:bg-deep-purple-900 rounded-xl p-6 shadow-md">
              <h3 class="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                💫 Prioritize Yourself
              </h3>
              <ul class="space-y-2 text-neutral-700 dark:text-pink-100">
                <li>• Invest in your health and fitness</li>
                <li>• Pursue hobbies and passions</li>
                <li>• Travel or explore new experiences</li>
                <li>• Continue learning and growing</li>
                <li>• Maintain strong friendships</li>
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
                🌟 Celebrate Your Journey
              </h3>
              <ul class="space-y-2 text-neutral-700 dark:text-pink-100">
                <li>• Reflect on what you've accomplished</li>
                <li>• Acknowledge your growth and resilience</li>
                <li>• Release guilt and "should haves"</li>
                <li>• Embrace new roles and relationships</li>
                <li>• Look forward with excitement to what's next</li>
              </ul>
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Motherhood Balance Survey -->
    <SurveyForm
      :title="superMomsSurvey.title"
      :subtitle="superMomsSurvey.subtitle"
      :instructions="superMomsSurvey.instructions"
      :scale="superMomsSurvey.scale"
      :scale-scores="superMomsSurvey.scaleScores"
      :sections="superMomsSurvey.sections"
      :max-score="superMomsSurvey.maxScore"
      :score-ranges="superMomsSurvey.scoreRanges"
      :light-moments="superMomsSurvey.lightMoments"
      :important-note="superMomsSurvey.importantNote"
      :affirmations="superMomsSurvey.affirmations"
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
                Informed by healthy-aging research
              </h3>
              <p class="text-neutral-700 dark:text-pink-100">
                Suggestions on purpose, health maintenance, and grandparenting draw from leading
                guidance on wellbeing in later adulthood.
              </p>
            </div>
            <div class="grid gap-4">
              <div
                class="rounded-2xl bg-white dark:bg-deep-purple-950/60 p-5 shadow-sm ring-1 ring-neutral-200 dark:ring-purple-800"
              >
                <h4 class="text-lg font-semibold text-neutral-900 dark:text-white">
                  WHO Mental Health & Wellbeing
                </h4>
                <p class="text-sm text-neutral-700 dark:text-pink-100">
                  Emphasizes social connection, physical activity, and purpose to protect cognition
                  and mood in midlife and beyond.
                </p>
                <a
                  class="text-pink-600 hover:underline text-sm font-semibold"
                  href="https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response"
                  target="_blank"
                  rel="noopener"
                >
                  WHO guidance
                </a>
              </div>
              <div
                class="rounded-2xl bg-white dark:bg-deep-purple-950/60 p-5 shadow-sm ring-1 ring-neutral-200 dark:ring-purple-800"
              >
                <h4 class="text-lg font-semibold text-neutral-900 dark:text-white">
                  NIH Healthy Aging
                </h4>
                <p class="text-sm text-neutral-700 dark:text-pink-100">
                  Advises balanced nutrition, strength training, sleep, and preventive screenings to
                  preserve independence.
                </p>
                <a
                  class="text-pink-600 hover:underline text-sm font-semibold"
                  href="https://www.nia.nih.gov/health"
                  target="_blank"
                  rel="noopener"
                >
                  NIH resources
                </a>
              </div>
              <div
                class="rounded-2xl bg-white dark:bg-deep-purple-950/60 p-5 shadow-sm ring-1 ring-neutral-200 dark:ring-purple-800"
              >
                <h4 class="text-lg font-semibold text-neutral-900 dark:text-white">
                  APA on Life Transitions
                </h4>
                <p class="text-sm text-neutral-700 dark:text-pink-100">
                  Suggests reframing empty-nest transitions, nurturing identity beyond parenting,
                  and maintaining supportive relationships.
                </p>
                <a
                  class="text-pink-600 hover:underline text-sm font-semibold"
                  href="https://www.apa.org/topics/families-relationships/empty-nest"
                  target="_blank"
                  rel="noopener"
                >
                  Read APA brief
                </a>
              </div>
              <div
                class="rounded-2xl bg-white dark:bg-deep-purple-950/60 p-5 shadow-sm ring-1 ring-neutral-200 dark:ring-purple-800"
              >
                <h4 class="text-lg font-semibold text-neutral-900 dark:text-white">
                  CDC Grandparent & Caregiver Support
                </h4>
                <p class="text-sm text-neutral-700 dark:text-pink-100">
                  Provides wellbeing tips, community resources, and parenting refreshers for
                  grandparents involved in caregiving.
                </p>
                <a
                  class="text-pink-600 hover:underline text-sm font-semibold"
                  href="https://www.cdc.gov/healthyweight/children/index.html"
                  target="_blank"
                  rel="noopener"
                >
                  CDC caregiver info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
