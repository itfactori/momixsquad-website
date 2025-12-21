<script setup lang="ts">
useHead({
  title: 'Toddler Moms (3-5 Years) - Parenting Guidance | Momix Squad',
  meta: [
    {
      name: 'description',
      content:
        'Expert guidance for parents of toddlers. Learn about child development, behavior management, nutrition, play-based learning, and supporting independence.'
    }
  ]
});

definePageMeta({
  layout: 'default'
});
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-deep-purple-950">
    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5 }"
        >
          <div class="text-center">
            <h1
              class="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-6"
            >
              Toddler Moms (3-5 Years)
            </h1>
            <p class="text-xl text-neutral-600 dark:text-pink-200 max-w-2xl mx-auto">
              Guide your toddler through this exciting and challenging phase. Learn strategies for
              behavior, learning, and supporting independence.
            </p>
            <div class="mt-8">
              <img
                src="/hero/home-3.jpg"
                alt="Toddlers playing and learning"
                class="mx-auto rounded-3xl w-full max-w-3xl object-cover shadow-lg"
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
          Evidence-Based Toddler Parenting Strategies
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
                Play-Based Learning & Development
              </summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  Play is a toddler's primary way of learning. UNICEF's Nurturing Care Framework
                  emphasizes play for cognitive, social, and emotional development.
                </p>
                <p><strong>Types of Play:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Sensory Play:</strong> Sand, water, playdough - develops fine motor
                    skills and exploration
                  </li>
                  <li>
                    <strong>Imaginative Play:</strong> Pretend play with dolls, dress-up, kitchen -
                    develops social skills and creativity
                  </li>
                  <li>
                    <strong>Physical Play:</strong> Running, climbing, dancing - supports gross
                    motor development and confidence
                  </li>
                  <li>
                    <strong>Constructive Play:</strong> Blocks, puzzles - builds problem-solving and
                    spatial awareness
                  </li>
                </ul>
                <p className="mt-2">
                  <strong>Tips:</strong> Allow unstructured play daily, rotate toys, limit screen
                  time to 1 hour of quality content, play alongside your toddler
                </p>
                <p class="text-sm text-neutral-600 dark:text-pink-200 mt-2">
                  Learn more:
                  <a
                    class="text-pink-600 font-semibold hover:underline"
                    href="https://www.unicef.org/early-childhood-development"
                    target="_blank"
                    rel="noopener"
                    >UNICEF Early Childhood Development</a
                  >
                </p>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">Behavior Management & Discipline</summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  Toddlers test boundaries as they develop autonomy. Positive discipline teaches
                  rather than punishes.
                </p>
                <p><strong>Positive Discipline Strategies:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Set Clear Expectations:</strong> Use simple, consistent rules. Toddlers
                    thrive with routine and predictability
                  </li>
                  <li>
                    <strong>Positive Reinforcement:</strong> Praise specific good behavior ("You
                    shared nicely!") more than correcting mistakes
                  </li>
                  <li>
                    <strong>Natural Consequences:</strong> Let safe consequences teach (e.g.,
                    spilled milk means we clean up together)
                  </li>
                  <li>
                    <strong>Redirect Behavior:</strong> Offer alternative activities rather than
                    just saying "no"
                  </li>
                  <li>
                    <strong>Timeout (1-2 minutes):</strong> When needed, use calm-down time rather
                    than punishment
                  </li>
                  <li>
                    <strong>Stay Calm:</strong> Your calm response models emotional regulation for
                    your toddler
                  </li>
                </ul>
                <p className="mt-2">
                  <strong>Understanding Tantrums:</strong> Tantrums are normal as toddlers struggle
                  with big emotions in small bodies. Validate feelings ("You're frustrated"),
                  maintain safety, and offer comfort once calm.
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
                  Toddlers' growth slows after age 2, so appetite may decrease. Focus on nutrition,
                  not quantity.
                </p>
                <p><strong>Nutritional Needs (ages 3-5):</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>1200-1400 calories daily (varies by size and activity)</li>
                  <li>Dairy or alternatives for calcium and bone development</li>
                  <li>Lean proteins for growth and brain development</li>
                  <li>Fruits and vegetables for vitamins and fiber</li>
                  <li>Whole grains for energy and sustained development</li>
                  <li>
                    Iron-rich foods (meat, legumes, fortified cereals) - especially important
                    post-toddlerhood
                  </li>
                </ul>
                <p className="mt-2"><strong>Healthy Eating Habits:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Offer 3 meals + 2-3 snacks at regular times</li>
                  <li>
                    Use the "Division of Responsibility" - you decide what, when, and where; child
                    decides whether and how much
                  </li>
                  <li>Involve toddlers in food selection and simple prep</li>
                  <li>Model healthy eating - children copy parents</li>
                  <li>Limit sugary drinks and processed foods</li>
                  <li>Make mealtimes social and enjoyable, not battles</li>
                </ul>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">
                Language & Early Literacy Development
              </summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  The early years are critical for language development. By age 5, toddlers should
                  understand most of what's said to them and speak in sentences.
                </p>
                <p><strong>Supporting Language Growth:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>
                    Talk, narrate, and explain daily activities ("We're putting on your shoes
                    now...")
                  </li>
                  <li>
                    Read daily - 20+ minutes of stories builds vocabulary and brain connections
                  </li>
                  <li>Respond to babbling and early words - encourages more communication</li>
                  <li>
                    Ask open-ended questions ("What do you see?") rather than yes/no questions
                  </li>
                  <li>Limit screen time - interactive conversation is far more beneficial</li>
                  <li>Listen actively and give your toddler time to express themselves</li>
                </ul>
                <p className="mt-2">
                  <strong>Red Flags:</strong> If your child isn't speaking, understanding simple
                  directions, or engaging by age 3, discuss with your pediatrician about speech
                  screening.
                </p>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">
                Toilet Training Readiness & Support
              </summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  Most children show readiness for toilet training between 2-3 years, though
                  readiness varies widely. Forcing too early can backfire.
                </p>
                <p><strong>Signs of Readiness (around age 3):</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Staying dry for 2+ hours or through naps</li>
                  <li>Showing interest in bathroom habits</li>
                  <li>Communicating need to use the bathroom</li>
                  <li>Ability to follow simple instructions</li>
                  <li>Discomfort in dirty diapers</li>
                </ul>
                <p className="mt-2"><strong>Supportive Strategies:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Start when life is calm (not during big changes like new sibling, moving)</li>
                  <li>Let child choose a potty chair or seat reducer - give ownership</li>
                  <li>Establish routine (after meals, before bed, etc.)</li>
                  <li>Celebrate successes matter-of-factly - avoid pressure</li>
                  <li>Accidents are normal - respond with patience and encouragement</li>
                  <li>Nighttime training comes later - separate from daytime training</li>
                </ul>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">
                Safety, Immunizations & Health Monitoring
              </summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  Toddlers are curious and mobile, requiring increased safety measures. Regular
                  health checks ensure development is on track.
                </p>
                <p><strong>Health Screening (Ages 3-5):</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Annual well-child visits with growth measurements</li>
                  <li>Developmental screening and behavioral assessment</li>
                  <li>Vision and hearing tests</li>
                  <li>Blood pressure monitoring</li>
                  <li>Ongoing immunizations (check schedule for your region)</li>
                </ul>
                <p className="mt-2"><strong>Home Safety:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Secure furniture to walls to prevent tipping</li>
                  <li>Gates at stairs and access to hazardous areas</li>
                  <li>Outlet covers and secure electrical cords</li>
                  <li>Medications and cleaning supplies locked away</li>
                  <li>Constant supervision near water (pools, bathtubs)</li>
                  <li>Car seats and proper restraint systems</li>
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
                    href="https://www.unicef.org/early-childhood-development"
                    target="_blank"
                    rel="noopener"
                    >UNICEF Early Childhood Development</a
                  >
                </li>
                <li>
                  <a
                    class="text-pink-600 hover:underline"
                    href="https://www.who.int/publications/i/item/9241546956"
                    target="_blank"
                    rel="noopener"
                    >WHO Child Growth Standards</a
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
          Toddler Development Milestones (3-5 Years)
        </h2>
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.2 }"
        >
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ContentCard
              title="Age 3-4 Years"
              description="Pedals tricycle, runs smoothly, climbs stairs. Says 250+ words, follows simple instructions. Plays cooperatively, shows independence in dressing."
              icon="i-heroicons-puzzle-piece"
              color="primary"
            />
            <ContentCard
              title="Age 4-5 Years"
              description="Hops and balances briefly, throws with aim. Uses sentences, tells stories, asks 'why' questions. Engages in group play, shows friendship interests."
              icon="i-heroicons-sparkles"
              color="secondary"
            />
            <ContentCard
              title="Pre-K Readiness"
              description="By age 5, most toddlers show school readiness: following classroom routines, focusing for 10-15 minutes, interacting positively with peers."
              icon="i-heroicons-academic-cap"
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
                🎯 Setting Routines
              </h3>
              <ul class="space-y-2 text-neutral-700 dark:text-pink-100">
                <li>• Create predictable daily schedules</li>
                <li>• Consistent bedtime routine supports sleep</li>
                <li>• Regular mealtimes establish healthy habits</li>
                <li>• Build in transition warnings before changes</li>
                <li>• Use visual schedules to help understanding</li>
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
                💡 Encouraging Independence
              </h3>
              <ul class="space-y-2 text-neutral-700 dark:text-pink-100">
                <li>• Let them help with simple tasks (sorting, setting table)</li>
                <li>• Offer choices ("apple or banana?")</li>
                <li>• Praise effort, not just results</li>
                <li>• Allow safe exploration and mistakes</li>
                <li>• Balance support with letting them try</li>
              </ul>
            </div>
          </Motion>
        </div>
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
                Built on early childhood research
              </h3>
              <p class="text-neutral-700 dark:text-pink-100">
                Routines, language play, and positive discipline here reflect global standards on
                nurturing care for 2-5 year-olds.
              </p>
            </div>
            <div class="grid gap-4">
              <div
                class="rounded-2xl bg-white dark:bg-deep-purple-950/60 p-5 shadow-sm ring-1 ring-neutral-200 dark:ring-purple-800"
              >
                <h4 class="text-lg font-semibold text-neutral-900 dark:text-white">
                  WHO Nurturing Care Framework
                </h4>
                <p class="text-sm text-neutral-700 dark:text-pink-100">
                  Highlights responsive caregiving, safety, adequate nutrition, early learning, and
                  health services to build strong foundations.
                </p>
                <a
                  class="text-pink-600 hover:underline text-sm font-semibold"
                  href="https://www.who.int/teams/maternal-newborn-child-adolescent-health-and-ageing/nurturing-care"
                  target="_blank"
                  rel="noopener"
                >
                  Read framework
                </a>
              </div>
              <div
                class="rounded-2xl bg-white dark:bg-deep-purple-950/60 p-5 shadow-sm ring-1 ring-neutral-200 dark:ring-purple-800"
              >
                <h4 class="text-lg font-semibold text-neutral-900 dark:text-white">
                  UNICEF Early Childhood Development
                </h4>
                <p class="text-sm text-neutral-700 dark:text-pink-100">
                  Emphasizes play-based learning, caregiver bonding, and protection from violence
                  for cognitive and socio-emotional growth.
                </p>
                <a
                  class="text-pink-600 hover:underline text-sm font-semibold"
                  href="https://www.unicef.org/early-childhood-development"
                  target="_blank"
                  rel="noopener"
                >
                  UNICEF ECD guidance
                </a>
              </div>
              <div
                class="rounded-2xl bg-white dark:bg-deep-purple-950/60 p-5 shadow-sm ring-1 ring-neutral-200 dark:ring-purple-800"
              >
                <h4 class="text-lg font-semibold text-neutral-900 dark:text-white">
                  CDC Milestones (2-5 years)
                </h4>
                <p class="text-sm text-neutral-700 dark:text-pink-100">
                  Provides age-based speech, motor, and social markers plus red flags that warrant
                  developmental screening.
                </p>
                <a
                  class="text-pink-600 hover:underline text-sm font-semibold"
                  href="https://www.cdc.gov/ncbddd/actearly/milestones/index.html"
                  target="_blank"
                  rel="noopener"
                >
                  Check milestones
                </a>
              </div>
              <div
                class="rounded-2xl bg-white dark:bg-deep-purple-950/60 p-5 shadow-sm ring-1 ring-neutral-200 dark:ring-purple-800"
              >
                <h4 class="text-lg font-semibold text-neutral-900 dark:text-white">
                  AAP Positive Parenting (Toddlers)
                </h4>
                <p class="text-sm text-neutral-700 dark:text-pink-100">
                  Recommends calm responses to tantrums, consistent routines, and age-appropriate
                  choices to build autonomy.
                </p>
                <a
                  class="text-pink-600 hover:underline text-sm font-semibold"
                  href="https://www.healthychildren.org/English/ages-stages/toddler/Pages/default.aspx"
                  target="_blank"
                  rel="noopener"
                >
                  HealthyChildren.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
