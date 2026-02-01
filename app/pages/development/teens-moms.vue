<script setup lang="ts">
useHead({
  title: 'Teen Moms (13-19 Years) - Adolescent Parenting | Momix Squad',
  meta: [
    {
      name: 'description',
      content:
        'Evidence-based guidance for parenting teenagers. Navigate adolescent development, communication, mental health, peer pressure, and supporting independence.'
    }
  ]
});

definePageMeta({
  layout: 'default'
});

const surveyData = {
  title: 'How Balanced Is My Motherhood? — Moms of Teenagers Edition',
  subtitle:
    "A self-check to reflect on how you're navigating the teenage years with faith, patience, and love.",
  instructions: 'Rate each statement based on how true it feels for you right now.',
  scale: ['Always', 'Often', 'Sometimes', 'Rarely'],
  scaleScores: [4, 3, 2, 1],
  maxScore: 144,
  sections: [
    {
      title: 'Emotional Connection & Communication',
      questions: [
        { text: 'I make time for one-on-one conversations with my teenager.' },
        { text: 'I listen to my teen without immediately jumping to advice or judgment.' },
        { text: 'My teen feels comfortable sharing their feelings or problems with me.' },
        { text: "I acknowledge and validate my teen's emotions, even when I disagree." }
      ]
    },
    {
      title: 'Guidance & Independence Balance',
      questions: [
        { text: 'I give my teen age-appropriate freedom to make decisions.' },
        { text: 'I set clear boundaries while respecting their growing autonomy.' },
        { text: 'I guide my teen without being controlling or overbearing.' },
        { text: 'I allow my teen to experience natural consequences as learning opportunities.' }
      ]
    },
    {
      title: 'Faith & Character Building',
      questions: [
        { text: 'I model the Islamic values I want my teen to adopt.' },
        { text: "I encourage my teen's connection to prayer, Quran, and Islamic learning." },
        { text: 'I discuss Islamic perspectives on modern challenges with my teen.' },
        { text: 'I help my teen build a strong Muslim identity with confidence.' }
      ],
      duaPrompt:
        'Rabbi hab li min ladunka dhurriyyatan tayyibah — My Lord, grant me righteous offspring.'
    },
    {
      title: 'Self-Care & Balance',
      questions: [
        { text: 'I take time for my own emotional and spiritual well-being.' },
        { text: 'I seek support from friends, family, or professionals when I feel overwhelmed.' },
        { text: 'I maintain my own interests and hobbies alongside parenting.' },
        { text: 'I practice patience with myself when parenting feels difficult.' }
      ],
      duaPrompt: 'Ya Allah, grant me sabr and wisdom to guide my teenager with mercy.'
    },
    {
      title: 'Communication & Understanding',
      questions: [
        { text: "I try to understand my teen's perspective before responding." },
        { text: 'I use "I" statements rather than blame when discussing issues.' },
        { text: "I check in on my teen's emotional state regularly." },
        { text: 'I apologize to my teen when I make a mistake.' }
      ]
    },
    {
      title: 'Managing Independence & Boundaries',
      questions: [
        { text: 'I involve my teen in setting household rules and expectations.' },
        { text: 'I trust my teen while maintaining safety awareness.' },
        { text: 'I gradually increase responsibilities as my teen matures.' },
        { text: "I respect my teen's privacy while keeping communication open." }
      ]
    },
    {
      title: 'Academic & Extracurricular Stress',
      questions: [
        { text: "I focus on my teen's effort rather than only their grades." },
        { text: 'I help my teen manage academic pressure without adding to it.' },
        { text: "I support my teen's interests even if they differ from my expectations." },
        { text: 'I help my teen develop time management and study skills.' }
      ]
    },
    {
      title: 'Emotional & Behavioral Changes',
      questions: [
        { text: 'I remain calm during arguments or emotional outbursts.' },
        { text: 'I recognize that mood swings are a normal part of adolescent development.' },
        { text: 'I watch for warning signs of anxiety, depression, or risky behavior.' },
        { text: 'I create a safe space at home where my teen can express themselves.' }
      ]
    },
    {
      title: 'Social & Peer Influence',
      questions: [
        { text: "I know who my teen's close friends are and what they do together." },
        { text: 'I discuss healthy relationships, peer pressure, and online safety.' },
        { text: 'I encourage my teen to connect with positive Muslim youth communities.' },
        {
          text: 'I guide my teen on social media use with understanding rather than just restriction.'
        }
      ]
    }
  ],
  scoreRanges: [
    {
      min: 116,
      max: 144,
      label: 'Thriving — MashaAllah!',
      description:
        'You are navigating the teen years with strong faith, open communication, and balanced guidance. Keep nurturing this beautiful relationship with your teenager.'
    },
    {
      min: 72,
      max: 115,
      label: "Growing — You're on the Right Path",
      description:
        'You are making sincere effort and there is room to strengthen certain areas. Focus on communication, self-care, or faith-building — small changes bring big rewards.'
    },
    {
      min: 0,
      max: 71,
      label: "Needs Extra Support — And That's Okay",
      description:
        'Parenting teenagers is one of the hardest stages. Seeking support — whether from a trusted friend, counselor, or Islamic scholar — is a sign of strength, not weakness.'
    }
  ],
  lightMoments: [
    { prompt: 'The most surprising thing my teenager said this week was...' },
    { prompt: "My teen's current obsession that I don't understand is..." },
    { prompt: "If my teen had to describe me in 3 words, they'd probably say..." }
  ],
  affirmations: [
    'I am the parent Allah chose for this teenager, and that is enough.',
    "My love and du'a for my child will never be wasted.",
    "I don't have to be perfect — I have to be present.",
    'Every difficult conversation is an investment in our relationship.'
  ],
  importantNote:
    'This survey is a personal reflection tool, not a diagnostic assessment. Parenting teens is deeply challenging — your effort and intention matter immensely. If you are struggling, reaching out for professional or community support is always encouraged.'
};
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-violet-950/20 dark:via-purple-950/20 dark:to-fuchsia-950/20"
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
              Teen Moms (13-19 Years)
            </h1>
            <p class="text-xl text-neutral-600 dark:text-pink-200 max-w-2xl mx-auto">
              Guide your teenager through adolescence with understanding, support, and open
              communication. Navigate changes, challenges, and growth.
            </p>
            <div class="mt-8">
              <img
                src="/hero/home-5.jpg"
                alt="Teenagers with supportive adults"
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
          Evidence-Based Adolescent Parenting Guidance
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
                Understanding Adolescent Development
              </summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  Adolescence is a period of rapid physical, cognitive, and emotional development.
                  Understanding these changes helps parents respond effectively.
                </p>
                <p><strong>Key Developmental Changes:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Physical Changes:</strong> Puberty triggers growth spurt, voice changes,
                    reproductive development. Onset and pace vary widely
                  </li>
                  <li>
                    <strong>Brain Development:</strong> Prefrontal cortex (judgment, impulse
                    control) develops until early 20s. Risk-taking increases as reward-seeking brain
                    areas mature first
                  </li>
                  <li>
                    <strong>Emotional Development:</strong> Increased moodiness, identity
                    exploration, peer influence intensifies
                  </li>
                  <li>
                    <strong>Cognitive Development:</strong> Abstract thinking emerges, questioning
                    authority, developing own opinions
                  </li>
                  <li>
                    <strong>Social Development:</strong> Peers become primary influence, romantic
                    interests develop, independence seeking increases
                  </li>
                </ul>
                <p class="text-sm text-neutral-600 dark:text-pink-200 mt-2">
                  Learn more:
                  <a
                    class="text-pink-600 font-semibold hover:underline"
                    href="https://www.unicef.org/adolescent-health"
                    target="_blank"
                    rel="noopener"
                    >UNICEF Adolescent Health</a
                  >
                </p>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">
                Communication & Relationship Building
              </summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  Open, respectful communication is the foundation for navigating adolescence. Teens
                  need to feel heard and understood.
                </p>
                <p><strong>Effective Communication Strategies:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>
                    Listen more than you talk - ask questions and show genuine interest in their
                    perspective
                  </li>
                  <li>Avoid judgment and criticism when they share concerns</li>
                  <li>Respect their privacy while maintaining safety boundaries</li>
                  <li>
                    Acknowledge their feelings ("That sounds frustrating") even if you don't agree
                    with actions
                  </li>
                  <li>Share your own experiences and values without preaching</li>
                  <li>
                    Use "I" statements instead of accusations ("I'm concerned about..." vs. "You
                    always...")
                  </li>
                  <li>
                    Find activities to do together - conversation often flows naturally during
                    activity
                  </li>
                </ul>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">
                Mental Health & Emotional Wellbeing
              </summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  Mental health challenges are common in adolescence. Early intervention prevents
                  serious problems. According to WHO, 1 in 5 adolescents experiences mental health
                  issues.
                </p>
                <p><strong>Common Adolescent Mental Health Concerns:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Depression:</strong> Persistent sadness, loss of interest in activities,
                    sleep changes, fatigue
                  </li>
                  <li>
                    <strong>Anxiety:</strong> Excessive worry, panic attacks, avoidance behaviors
                  </li>
                  <li>
                    <strong>Eating Disorders:</strong> Disordered eating patterns, obsession with
                    weight/body image
                  </li>
                  <li>
                    <strong>Self-Harm:</strong> Cutting, scratching, or other self-injury as coping
                    mechanism
                  </li>
                  <li>
                    <strong>Substance Use:</strong> Experimenting with alcohol, tobacco, or drugs
                  </li>
                </ul>
                <p className="mt-2"><strong>Supporting Mental Health:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Normalize talking about feelings and emotions</li>
                  <li>Be alert to changes in mood, behavior, sleep, or eating</li>
                  <li>Don't minimize their concerns ("It's just a phase")</li>
                  <li>Seek professional help if concerned - early intervention is crucial</li>
                  <li>Maintain open doors for conversation</li>
                </ul>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">Peer Pressure & Risk Behavior</summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  Adolescents seek independence and peer acceptance. Understanding risk factors
                  helps parents guide without controlling.
                </p>
                <p><strong>Common Risk Behaviors & Prevention:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Substance Use:</strong> Provide factual information (not scare tactics),
                    discuss consequences, model responsible behavior
                  </li>
                  <li>
                    <strong>Risky Sexual Behavior:</strong> Open, non-judgmental conversations about
                    relationships, consent, contraception, and STI prevention
                  </li>
                  <li>
                    <strong>Dangerous Driving:</strong> Model safe driving, discuss distraction and
                    speeding, set clear rules about seatbelts and passengers
                  </li>
                  <li>
                    <strong>Cyberbullying/Social Media:</strong> Discuss online safety, privacy,
                    respectful communication, and reporting harassment
                  </li>
                </ul>
                <p className="mt-2">
                  <strong>Protective Factors:</strong> Strong family relationships, clear
                  boundaries, involvement in activities, positive peer groups, and connections to
                  mentors all reduce risky behavior.
                </p>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">
                Academic Success & Future Planning
              </summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  Adolescence is critical for academic achievement and thinking about the future.
                  Parents can be supportive without pushing.
                </p>
                <p><strong>Supporting Academic Success:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Maintain expectations for effort and responsibility (not perfection)</li>
                  <li>Help organize study time without managing every detail</li>
                  <li>Discuss interests and potential career paths</li>
                  <li>Support extracurricular activities aligned with interests</li>
                  <li>Help navigate college/vocational planning conversations</li>
                  <li>
                    Recognize that different teens have different academic paths (college, trade
                    school, workforce)
                  </li>
                </ul>
                <p className="mt-2">
                  Research shows parental involvement in education predicts better academic
                  outcomes, even when giving teens autonomy in how they study.
                </p>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">Physical Health & Healthy Habits</summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  Habits formed in adolescence often persist into adulthood. Support healthy choices
                  without micromanaging.
                </p>
                <p><strong>Health Priorities:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Physical Activity:</strong> 60+ minutes daily. Support sports, dance, or
                    other activities they enjoy
                  </li>
                  <li>
                    <strong>Nutrition:</strong> 1800-2600 calories daily (varies by age/size).
                    Involve them in meal planning and cooking
                  </li>
                  <li>
                    <strong>Sleep:</strong> 8-10 hours nightly. Adolescent circadian rhythm shifts
                    later; respect their need to sleep in on weekends
                  </li>
                  <li>
                    <strong>Sexual Health:</strong> Ensure access to factual information and
                    contraception. Discuss consent and healthy relationships
                  </li>
                  <li>
                    <strong>Preventive Care:</strong> Regular check-ups, immunizations (HPV vaccine,
                    flu, COVID), screening for mental health
                  </li>
                </ul>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">Setting Boundaries & Discipline</summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  Teens need clear boundaries even as they push for independence. Effective
                  discipline teaches responsibility and consequences.
                </p>
                <p><strong>Approaches That Work:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Involve teens in setting rules and discussing consequences</li>
                  <li>Explain the "why" behind rules - helps them develop judgment</li>
                  <li>
                    Apply natural consequences (lose phone privileges if misused, miss event if
                    late)
                  </li>
                  <li>Use problems as teaching opportunities, not punishment</li>
                  <li>Stay consistent while allowing flexibility for changing circumstances</li>
                  <li>Pick your battles - focus on safety and health priorities</li>
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
                    href="https://www.unicef.org/adolescent-health"
                    target="_blank"
                    rel="noopener"
                    >UNICEF Adolescent Health</a
                  >
                </li>
                <li>
                  <a
                    class="text-pink-600 hover:underline"
                    href="https://www.who.int/teams/mental-health-and-substance-use/adolescent-mental-health"
                    target="_blank"
                    rel="noopener"
                    >WHO Adolescent Mental Health</a
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
          Adolescent Development Milestones (13-19 Years)
        </h2>
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.2 }"
        >
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ContentCard
              title="Ages 13-15 (Early Teen)"
              description="Puberty underway, mood swings, increased focus on appearance and peer relationships. Abstract thinking developing. Greater independence seeking."
              icon="i-heroicons-sparkles"
              color="primary"
            />
            <ContentCard
              title="Ages 16-17 (Mid Teen)"
              description="Physical development nearing completion. Identity exploration active. May experiment with risk behaviors. Planning for future begins."
              icon="i-heroicons-user-group"
              color="secondary"
            />
            <ContentCard
              title="Ages 18-19 (Late Teen)"
              description="More stable sense of self. College/career planning active. Relationships more serious. Beginning to see long-term consequences of choices."
              icon="i-heroicons-star"
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
                💬 Stay Connected
              </h3>
              <ul class="space-y-2 text-neutral-700 dark:text-pink-100">
                <li>• Ask open-ended questions about their day</li>
                <li>• Share your own experiences and perspectives</li>
                <li>• Spend one-on-one time doing activities they enjoy</li>
                <li>• Attend their games, performances, activities</li>
                <li>• Listen without immediately offering advice</li>
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
                🎯 Support Independence
              </h3>
              <ul class="space-y-2 text-neutral-700 dark:text-pink-100">
                <li>• Give them increasing responsibility</li>
                <li>• Let them make decisions and learn from mistakes</li>
                <li>• Support their interests and passions</li>
                <li>• Respect their growing autonomy</li>
                <li>• Trust them while maintaining appropriate limits</li>
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
              Navigate the teenage years with Islamic wisdom and guidance for raising righteous
              Muslim youth.
            </p>
          </div>

          <div class="grid gap-6 md:grid-cols-3">
            <!-- Islamic Parenting Teens -->
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
                  Islamic Parenting
                </h3>
              </div>
              <ul class="space-y-3 text-neutral-700 dark:text-emerald-100">
                <li class="flex items-start gap-2">
                  <span class="text-emerald-500 mt-1">•</span>
                  <span
                    ><strong>Respect & Honor</strong> - Balance Islamic respect with modern
                    understanding</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-500 mt-1">•</span>
                  <span
                    ><strong>Islamic Education</strong> - Ensure Quran and Islamic studies
                    continue</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-500 mt-1">•</span>
                  <span
                    ><strong>Friend Selection</strong> - Guide toward righteous Muslim friends</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-500 mt-1">•</span>
                  <span
                    ><strong>Digital Boundaries</strong> - Islamic guidelines for social media
                    use</span
                  >
                </li>
              </ul>
              <div class="mt-4 p-3 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
                <a
                  href="https://www.jameelaho.com/2023/09/how-to-connect-with-your-teen.html"
                  target="_blank"
                  rel="noopener"
                  class="text-emerald-700 dark:text-emerald-300 font-medium hover:underline flex items-center gap-2"
                >
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="h-4 w-4" />
                  Islamic Teen Parenting
                </a>
              </div>
            </Motion>

            <!-- Faith & Identity -->
            <Motion
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5, delay: 0.2 }"
              class="bg-white dark:bg-emerald-950/60 rounded-2xl p-6 shadow-lg ring-1 ring-teal-200 dark:ring-teal-800"
            >
              <div class="flex items-center gap-3 mb-4">
                <div class="p-2 rounded-xl bg-teal-100 dark:bg-teal-900/50">
                  <UIcon
                    name="i-heroicons-sparkles"
                    class="h-6 w-6 text-teal-600 dark:text-teal-400"
                  />
                </div>
                <h3 class="text-xl font-semibold text-neutral-900 dark:text-white">
                  Faith & Identity
                </h3>
              </div>
              <ul class="space-y-3 text-neutral-700 dark:text-teal-100">
                <li class="flex items-start gap-2">
                  <span class="text-teal-500 mt-1">•</span>
                  <span
                    ><strong>Prayer Consistency</strong> - Help teens maintain regular Salah</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-teal-500 mt-1">•</span>
                  <span><strong>Hijab Support</strong> - Guide modesty choices with wisdom</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-teal-500 mt-1">•</span>
                  <span
                    ><strong>Mosque Involvement</strong> - Connect with Muslim youth groups</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-teal-500 mt-1">•</span>
                  <span
                    ><strong>Islamic Identity</strong> - Build strong Muslim character and
                    values</span
                  >
                </li>
              </ul>
              <div class="mt-4 p-3 bg-teal-50 dark:bg-teal-900/30 rounded-lg">
                <a
                  href="https://yaqeeninstitute.org/read/paper/islamic-parenting-strategies-how-to-help-children-feel-safe-in-their-attachment-to-god-and-parents"
                  target="_blank"
                  rel="noopener"
                  class="text-teal-700 dark:text-teal-300 font-medium hover:underline flex items-center gap-2"
                >
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="h-4 w-4" />
                  Muslim Youth Identity
                </a>
              </div>
            </Motion>

            <!-- Modern Challenges -->
            <Motion
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5, delay: 0.3 }"
              class="bg-white dark:bg-emerald-950/60 rounded-2xl p-6 shadow-lg ring-1 ring-cyan-200 dark:ring-cyan-800"
            >
              <div class="flex items-center gap-3 mb-4">
                <div class="p-2 rounded-xl bg-cyan-100 dark:bg-cyan-900/50">
                  <UIcon
                    name="i-heroicons-shield-check"
                    class="h-6 w-6 text-cyan-600 dark:text-cyan-400"
                  />
                </div>
                <h3 class="text-xl font-semibold text-neutral-900 dark:text-white">
                  Modern Challenges
                </h3>
              </div>
              <ul class="space-y-3 text-neutral-700 dark:text-cyan-100">
                <li class="flex items-start gap-2">
                  <span class="text-cyan-500 mt-1">•</span>
                  <span
                    ><strong>Social Media Wisdom</strong> - Islamic guidance for online
                    behavior</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-cyan-500 mt-1">•</span>
                  <span
                    ><strong>Dating Guidelines</strong> - Islamic approach to relationships</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-cyan-500 mt-1">•</span>
                  <span
                    ><strong>Peer Pressure</strong> - Islamic strategies to resist negative
                    influence</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-cyan-500 mt-1">•</span>
                  <span
                    ><strong>Future Planning</strong> - Education and career from Islamic
                    perspective</span
                  >
                </li>
              </ul>
              <div class="mt-4 p-3 bg-cyan-50 dark:bg-cyan-900/30 rounded-lg">
                <a
                  href="https://www.muslimpulse.com/parenting-tips-from-quran-and-sunnah"
                  target="_blank"
                  rel="noopener"
                  class="text-cyan-700 dark:text-cyan-300 font-medium hover:underline flex items-center gap-2"
                >
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="h-4 w-4" />
                  Muslim Youth Challenges
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
                href="https://soltlane.com/upbringing-of-children/"
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
                    Solt Lane
                  </h4>
                  <p class="text-sm text-neutral-600 dark:text-emerald-200">
                    Islamic upbringing guidance for teens
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
                    Islamic education for youth development
                  </p>
                </div>
              </a>
            </div>
          </div>
        </Motion>
      </div>
    </section>

    <!-- Teen Moms Survey -->
    <SurveyForm
      :title="surveyData.title"
      :subtitle="surveyData.subtitle"
      :instructions="surveyData.instructions"
      :scale="surveyData.scale"
      :scale-scores="surveyData.scaleScores"
      :sections="surveyData.sections"
      :max-score="surveyData.maxScore"
      :score-ranges="surveyData.scoreRanges"
      :light-moments="surveyData.lightMoments"
      :affirmations="surveyData.affirmations"
      :important-note="surveyData.importantNote"
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
                Based on adolescent health research
              </h3>
              <p class="text-neutral-700 dark:text-pink-100">
                Boundaries, communication, and wellbeing tips align with leading adolescent health
                guidance to keep teens safe and connected.
              </p>
            </div>
            <div class="grid gap-4">
              <div
                class="rounded-2xl bg-white dark:bg-deep-purple-950/60 p-5 shadow-sm ring-1 ring-neutral-200 dark:ring-purple-800"
              >
                <h4 class="text-lg font-semibold text-neutral-900 dark:text-white">
                  WHO Adolescent Mental Health
                </h4>
                <p class="text-sm text-neutral-700 dark:text-pink-100">
                  Stresses supportive relationships, early identification of anxiety/depression, and
                  limiting harmful substance use.
                </p>
                <a
                  class="text-pink-600 hover:underline text-sm font-semibold"
                  href="https://www.who.int/news-room/fact-sheets/detail/adolescent-mental-health"
                  target="_blank"
                  rel="noopener"
                >
                  WHO fact sheet
                </a>
              </div>
              <div
                class="rounded-2xl bg-white dark:bg-deep-purple-950/60 p-5 shadow-sm ring-1 ring-neutral-200 dark:ring-purple-800"
              >
                <h4 class="text-lg font-semibold text-neutral-900 dark:text-white">
                  UNICEF Adolescent Wellbeing
                </h4>
                <p class="text-sm text-neutral-700 dark:text-pink-100">
                  Emphasizes safe environments, skills-building, and participation to help teens
                  thrive and reduce risk behaviors.
                </p>
                <a
                  class="text-pink-600 hover:underline text-sm font-semibold"
                  href="https://www.unicef.org/adolescence"
                  target="_blank"
                  rel="noopener"
                >
                  UNICEF resources
                </a>
              </div>
              <div
                class="rounded-2xl bg-white dark:bg-deep-purple-950/60 p-5 shadow-sm ring-1 ring-neutral-200 dark:ring-purple-800"
              >
                <h4 class="text-lg font-semibold text-neutral-900 dark:text-white">
                  CDC Youth Risk Behavior Data
                </h4>
                <p class="text-sm text-neutral-700 dark:text-pink-100">
                  Tracks trends in mental health, substance use, and safety to guide evidence-based
                  prevention and conversations with teens.
                </p>
                <a
                  class="text-pink-600 hover:underline text-sm font-semibold"
                  href="https://www.cdc.gov/healthyyouth/data/yrbs/index.htm"
                  target="_blank"
                  rel="noopener"
                >
                  Explore YRBS
                </a>
              </div>
              <div
                class="rounded-2xl bg-white dark:bg-deep-purple-950/60 p-5 shadow-sm ring-1 ring-neutral-200 dark:ring-purple-800"
              >
                <h4 class="text-lg font-semibold text-neutral-900 dark:text-white">
                  AAP Media Use & Communication
                </h4>
                <p class="text-sm text-neutral-700 dark:text-pink-100">
                  Recommends family media plans, tech boundaries, and open dialogue to reduce sleep
                  loss and social stress from screens.
                </p>
                <a
                  class="text-pink-600 hover:underline text-sm font-semibold"
                  href="https://www.healthychildren.org/English/family-life/Media/Pages/default.aspx"
                  target="_blank"
                  rel="noopener"
                >
                  AAP media guidance
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
