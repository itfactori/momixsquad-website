<script setup lang="ts">
useHead({
  title: 'New Moms (0-2 Years) - Early Motherhood Support | Momix Squad',
  meta: [
    {
      name: 'description',
      content:
        'Evidence-based guidance for new mothers with infants. Learn about postpartum care, breastfeeding, infant development, and adjusting to motherhood.'
    }
  ]
});

definePageMeta({
  layout: 'default'
});
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 dark:from-amber-950/20 dark:via-orange-950/20 dark:to-rose-950/20"
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
              New Moms (0-2 Years)
            </h1>
            <p class="text-xl text-neutral-600 dark:text-pink-200 max-w-2xl mx-auto">
              Support and guidance for the early and transformative years of motherhood. Navigate
              postpartum recovery, infant care, and bonding.
            </p>
            <div class="mt-8">
              <img
                src="/hero/home-2.jpg"
                alt="New moms supporting each other"
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
          Evidence-Based Guidance for New Mothers
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
              <summary class="font-medium cursor-pointer">Postpartum Recovery & Care</summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  The postpartum period (first 6 weeks) is critical for maternal recovery. Key
                  aspects include:
                </p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Physical Recovery:</strong> Healing from delivery, managing pain,
                    restoring strength through gentle movement
                  </li>
                  <li>
                    <strong>Lochia Management:</strong> Normal vaginal bleeding lasting 4-6 weeks;
                    use pads and monitor for excessive bleeding
                  </li>
                  <li>
                    <strong>Perineal Care:</strong> If tearing or episiotomy occurred, keep area
                    clean and dry. Sitz baths and pelvic floor exercises support healing
                  </li>
                  <li>
                    <strong>Rest & Sleep:</strong> Sleep when baby sleeps; aim for 7-8 hours daily.
                    Sleep deprivation increases mood disorder risk
                  </li>
                  <li>
                    <strong>Nutrition:</strong> Eat nutrient-rich foods, stay hydrated (especially
                    if breastfeeding), and include iron-rich foods for anemia recovery
                  </li>
                </ul>
                <p class="text-sm text-neutral-600 dark:text-pink-200 mt-2">
                  WHO recommends postnatal visits at 24-48 hours, 7-14 days, and 6 weeks postpartum.
                </p>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">Breastfeeding & Infant Feeding</summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  WHO and UNICEF recommend exclusive breastfeeding for the first 6 months, then
                  introduce complementary foods while continuing breastfeeding until 2 years.
                </p>
                <p><strong>Breastfeeding Benefits:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Reduces infant infections, diarrhea, and respiratory illnesses</li>
                  <li>Decreases risk of SIDS and childhood obesity</li>
                  <li>Supports brain development and cognitive function</li>
                  <li>Reduces maternal breast and ovarian cancer risk</li>
                </ul>
                <p class="mt-2"><strong>Getting Started:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Start within first hour after birth (skin-to-skin contact)</li>
                  <li>Feed on demand (8-12 times daily initially)</li>
                  <li>Ensure proper latch to prevent pain and improve milk transfer</li>
                  <li>Seek lactation support for concerns with supply or latch</li>
                  <li>If formula feeding, follow safe preparation and hygiene guidelines</li>
                </ul>
                <p class="text-sm text-neutral-600 dark:text-pink-200 mt-2">
                  Resources:
                  <a
                    class="text-pink-600 font-semibold hover:underline"
                    href="https://www.unicef.org/breastfeeding"
                    target="_blank"
                    rel="noopener"
                    >UNICEF Breastfeeding Info</a
                  >
                </p>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">Infant Development & Milestones</summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  Understanding typical infant development helps you identify delays and support
                  healthy growth.
                </p>
                <p>
                  <strong>0-3 Months:</strong> Follows faces, makes cooing sounds, lifts head
                  briefly, responds to voices
                </p>
                <p>
                  <strong>3-6 Months:</strong> Rolls over, reaches for objects, babbles, recognizes
                  caregivers, smiles socially
                </p>
                <p>
                  <strong>6-12 Months:</strong> Sits up, begins crawling, says "mama/dada", waves
                  bye-bye, understands simple words
                </p>
                <p>
                  <strong>12-24 Months:</strong> Walks independently, says 10+ words, points to show
                  interest, plays simple games like peek-a-boo
                </p>
                <p class="text-sm text-neutral-600 dark:text-pink-200 mt-2">
                  Regular developmental screening catches delays early. Consult your pediatrician if
                  you have concerns.
                </p>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">Maternal Mental Health</summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  Postpartum mood disorders are common and treatable. UNICEF and WHO emphasize
                  mental health screening.
                </p>
                <p>
                  <strong>Baby Blues (first 2 weeks):</strong> Mild mood changes, crying, anxiety -
                  usually resolves without treatment
                </p>
                <p>
                  <strong>Postpartum Depression (PPD):</strong> Persistent sadness, hopelessness,
                  fatigue, difficulty bonding. Affects 10-15% of new mothers.
                </p>
                <p>
                  <strong>Postpartum Anxiety:</strong> Racing thoughts, panic attacks, excessive
                  worry about baby's health
                </p>
                <p><strong>Postpartum OCD:</strong> Intrusive thoughts, compulsive behaviors</p>
                <p class="mt-2">
                  <strong>Seek help if you experience:</strong> Thoughts of harming yourself or
                  baby, inability to care for baby, severe anxiety or panic, persistent sadness
                  lasting >2 weeks
                </p>
                <p class="text-sm text-neutral-600 dark:text-pink-200 mt-2">
                  Treatment options include therapy, support groups, and medications (many safe
                  during breastfeeding).
                </p>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">Infant Sleep & Soothing</summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  Newborns sleep 16-17 hours daily in short bursts. Understanding safe sleep
                  practices reduces SIDS risk.
                </p>
                <p><strong>Safe Sleep Guidelines:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Place baby on back for all sleeps</li>
                  <li>Use a firm sleep surface (crib, bassinet, play yard)</li>
                  <li>Room-share without bed-sharing for at least 6 months (ideally 1 year)</li>
                  <li>Avoid soft objects, loose bedding, bumpers, and pillows</li>
                  <li>Offer pacifier at nap time and bedtime after 1 month</li>
                  <li>Avoid overheating - keep room at comfortable temperature</li>
                  <li>Consider white noise to soothe baby</li>
                </ul>
                <p class="mt-2">
                  <strong>Soothing Techniques:</strong> Swaddling, gentle rocking, shushing sounds,
                  sucking
                </p>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">
                Immunizations & Health Screenings
              </summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  Vaccinations protect infants from serious, potentially life-threatening diseases.
                  WHO recommends:
                </p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>First dose of hepatitis B vaccine within 24 hours of birth</li>
                  <li>BCG vaccine (tuberculosis protection)</li>
                  <li>Diphtheria, tetanus, pertussis (DPT) series</li>
                  <li>Polio vaccine (IPV)</li>
                  <li>Rotavirus vaccine (prevents severe diarrhea)</li>
                  <li>Measles, mumps, rubella (MMR)</li>
                </ul>
                <p className="mt-2">
                  <strong>Regular Health Checks:</strong> Weight, length, head circumference
                  monitoring; developmental screening; vision and hearing tests
                </p>
              </div>
            </details>

            <details
              class="bg-white dark:bg-deep-purple-900 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <summary class="font-medium cursor-pointer">Bonding & Attachment</summary>
              <div class="mt-3 text-neutral-700 dark:text-pink-100 space-y-2">
                <p>
                  Secure attachment forms through responsive caregiving. Hold, comfort, and respond
                  to your baby's needs.
                </p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>
                    Skin-to-skin contact promotes bonding and regulates baby's body temperature
                  </li>
                  <li>Make eye contact and talk to your baby</li>
                  <li>Respond promptly to cries - you cannot spoil a newborn</li>
                  <li>Create predictable routines for feeding, sleeping, and play</li>
                  <li>Involve partner and family in caregiving</li>
                  <li>Don't worry if bonding doesn't happen instantly - it develops over time</li>
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
                    href="https://www.unicef.org/parenting"
                    target="_blank"
                    rel="noopener"
                    >UNICEF Parenting Guide</a
                  >
                </li>
                <li>
                  <a
                    class="text-pink-600 hover:underline"
                    href="https://www.who.int/health-topics/maternal-health"
                    target="_blank"
                    rel="noopener"
                    >WHO Maternal & Infant Health</a
                  >
                </li>
                <li>
                  <a
                    class="text-pink-600 hover:underline"
                    href="https://www.unicef.org/breastfeeding"
                    target="_blank"
                    rel="noopener"
                    >UNICEF Breastfeeding Resources</a
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
              Navigate your new motherhood journey with Islamic wisdom and spiritual guidance for
              postpartum care.
            </p>
          </div>

          <div class="grid gap-6 md:grid-cols-3">
            <!-- Postpartum Islamic Care -->
            <Motion
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5, delay: 0.1 }"
              class="bg-white dark:bg-emerald-950/60 rounded-2xl p-6 shadow-lg ring-1 ring-emerald-200 dark:ring-emerald-800"
            >
              <div class="flex items-center gap-3 mb-4">
                <div class="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-900/50">
                  <UIcon
                    name="i-heroicons-heart"
                    class="h-6 w-6 text-emerald-600 dark:text-emerald-400"
                  />
                </div>
                <h3 class="text-xl font-semibold text-neutral-900 dark:text-white">
                  Postpartum Care
                </h3>
              </div>
              <ul class="space-y-3 text-neutral-700 dark:text-emerald-100">
                <li class="flex items-start gap-2">
                  <span class="text-emerald-500 mt-1">•</span>
                  <span
                    ><strong>Nifas Period</strong> - 40-day postpartum confinement with specific
                    Islamic guidelines</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-500 mt-1">•</span>
                  <span
                    ><strong>Ghusl after Nifas</strong> - Ritual purification before resuming
                    prayers</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-500 mt-1">•</span>
                  <span
                    ><strong>Postponed Fasting</strong> - Make up missed Ramadan fasts later</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-500 mt-1">•</span>
                  <span
                    ><strong>Rest & Recovery</strong> - Accept help from family and community</span
                  >
                </li>
              </ul>
              <div class="mt-4 p-3 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
                <a
                  href="https://thegoodchild.org/companion"
                  target="_blank"
                  rel="noopener"
                  class="text-emerald-700 dark:text-emerald-300 font-medium hover:underline flex items-center gap-2"
                >
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="h-4 w-4" />
                  Islamic Postpartum Guide
                </a>
              </div>
            </Motion>

            <!-- Breastfeeding in Islam -->
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
                  Breastfeeding
                </h3>
              </div>
              <ul class="space-y-3 text-neutral-700 dark:text-teal-100">
                <li class="flex items-start gap-2">
                  <span class="text-teal-500 mt-1">•</span>
                  <span
                    ><strong>Rida'ah Rights</strong> - 2 years of breastfeeding as Islamic
                    right</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-teal-500 mt-1">•</span>
                  <span
                    ><strong>Du'a for Milk</strong> - Prophet's prayer for abundant milk
                    supply</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-teal-500 mt-1">•</span>
                  <span
                    ><strong>Halal Nutrition</strong> - Maintain halal diet while
                    breastfeeding</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-teal-500 mt-1">•</span>
                  <span
                    ><strong>Modesty in Feeding</strong> - Follow Islamic guidelines for
                    privacy</span
                  >
                </li>
              </ul>
              <div class="mt-4 p-3 bg-teal-50 dark:bg-teal-900/30 rounded-lg">
                <a
                  href="https://www.muslimparenting.net/"
                  target="_blank"
                  rel="noopener"
                  class="text-teal-700 dark:text-teal-300 font-medium hover:underline flex items-center gap-2"
                >
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="h-4 w-4" />
                  Breastfeeding in Islam
                </a>
              </div>
            </Motion>

            <!-- Baby's Islamic Upbringing -->
            <Motion
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5, delay: 0.3 }"
              class="bg-white dark:bg-emerald-950/60 rounded-2xl p-6 shadow-lg ring-1 ring-cyan-200 dark:ring-cyan-800"
            >
              <div class="flex items-center gap-3 mb-4">
                <div class="p-2 rounded-xl bg-cyan-100 dark:bg-cyan-900/50">
                  <UIcon
                    name="i-heroicons-academic-cap"
                    class="h-6 w-6 text-cyan-600 dark:text-cyan-400"
                  />
                </div>
                <h3 class="text-xl font-semibold text-neutral-900 dark:text-white">
                  Baby's Upbringing
                </h3>
              </div>
              <ul class="space-y-3 text-neutral-700 dark:text-cyan-100">
                <li class="flex items-start gap-2">
                  <span class="text-cyan-500 mt-1">•</span>
                  <span><strong>Adhan & Iqamah</strong> - Call prayer in baby's ear at birth</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-cyan-500 mt-1">•</span>
                  <span><strong>Aqiqah</strong> - Sacrifice and shave baby's head on 7th day</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-cyan-500 mt-1">•</span>
                  <span
                    ><strong>Tahneek</strong> - Chew date and place in baby's mouth for
                    blessings</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-cyan-500 mt-1">•</span>
                  <span
                    ><strong>Quran Recitation</strong> - Play Quran softly for baby's comfort</span
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
                  Newborn Islamic Care
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
                    Muslim parenting articles and guidance
                  </p>
                </div>
              </a>
              <a
                href="https://www.bayyinahtv.com/"
                target="_blank"
                rel="noopener"
                class="group flex items-center gap-3 p-4 rounded-xl bg-teal-50 dark:bg-teal-900/30 hover:bg-teal-100 dark:hover:bg-teal-900/50 transition-colors"
              >
                <UIcon name="i-heroicons-heart" class="h-8 w-8 text-teal-600 dark:text-teal-400" />
                <div>
                  <h4
                    class="font-semibold text-neutral-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-300"
                  >
                    Bayyinah TV
                  </h4>
                  <p class="text-sm text-neutral-600 dark:text-teal-200">
                    Islamic education for new moms
                  </p>
                </div>
              </a>
            </div>
          </div>
        </Motion>
      </div>
    </section>

    <!-- Baby Care Essentials Section -->
    <section class="px-4 sm:px-6 lg:px-8 py-20">
      <div class="mx-auto max-w-7xl">
        <h2 class="text-3xl font-bold text-neutral-900 dark:text-white mb-12 text-center">
          Essential Baby Care Skills
        </h2>
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.2 }"
        >
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ContentCard
              title="Diaper Care & Hygiene"
              description="Change diapers 8-12 times daily. Clean skin gently, use diaper cream for rashes. Wash hands before and after each change."
              icon="i-heroicons-heart"
              color="primary"
            />
            <ContentCard
              title="Bathing & Temperature"
              description="Give first bath after umbilical cord falls off. Use warm water (37°C), keep bath short. Pat dry thoroughly, especially skin folds."
              icon="i-heroicons-sparkles"
              color="secondary"
            />
            <ContentCard
              title="Handling & Comfort"
              description="Support baby's head and neck always. Use gentle touch and soothing voice. Learn baby's cues for hunger, tiredness, and discomfort."
              icon="i-heroicons-face-smile"
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
          Tips for New Moms
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Motion
            :initial="{ opacity: 0, x: -20 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.5 }"
          >
            <div class="bg-white dark:bg-deep-purple-900 rounded-xl p-6 shadow-md">
              <h3 class="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                💪 Self-Care & Recovery
              </h3>
              <ul class="space-y-2 text-neutral-700 dark:text-pink-100">
                <li>• Accept help from family and friends</li>
                <li>• Sleep when baby sleeps to recover energy</li>
                <li>• Eat nutritious meals and stay hydrated</li>
                <li>• Start gentle exercise after clearance from doctor</li>
                <li>• Take time for yourself - even 15 minutes daily</li>
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
                👶 Building Confidence
              </h3>
              <ul class="space-y-2 text-neutral-700 dark:text-pink-100">
                <li>• Trust your instincts - you know your baby best</li>
                <li>• Join parent support groups or classes</li>
                <li>• Don't compare your baby to others</li>
                <li>• Ask healthcare providers questions</li>
                <li>• Remember: there's no "perfect" way to parent</li>
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
                Grounded in infant health research
              </h3>
              <p class="text-neutral-700 dark:text-pink-100">
                Feeding, safe sleep, and early development advice reflects global recommendations to
                protect newborn health and support thriving families.
              </p>
            </div>
            <div class="grid gap-4">
              <div
                class="rounded-2xl bg-white dark:bg-deep-purple-950/60 p-5 shadow-sm ring-1 ring-neutral-200 dark:ring-purple-800"
              >
                <h4 class="text-lg font-semibold text-neutral-900 dark:text-white">
                  WHO Breastfeeding Guidelines
                </h4>
                <p class="text-sm text-neutral-700 dark:text-pink-100">
                  Recommends exclusive breastfeeding for 6 months and continued breastfeeding with
                  complementary foods up to 2 years and beyond.
                </p>
                <a
                  class="text-pink-600 hover:underline text-sm font-semibold"
                  href="https://www.who.int/health-topics/breastfeeding"
                  target="_blank"
                  rel="noopener"
                >
                  WHO breastfeeding hub
                </a>
              </div>
              <div
                class="rounded-2xl bg-white dark:bg-deep-purple-950/60 p-5 shadow-sm ring-1 ring-neutral-200 dark:ring-purple-800"
              >
                <h4 class="text-lg font-semibold text-neutral-900 dark:text-white">
                  AAP Safe Sleep (2022 Policy)
                </h4>
                <p class="text-sm text-neutral-700 dark:text-pink-100">
                  Details ABCs of safe sleep (Alone, on Back, in Crib), room-sharing, and avoiding
                  soft bedding to prevent SIDS.
                </p>
                <a
                  class="text-pink-600 hover:underline text-sm font-semibold"
                  href="https://publications.aap.org/pediatrics/article/150/1/e2022057990/188297"
                  target="_blank"
                  rel="noopener"
                >
                  Read AAP policy
                </a>
              </div>
              <div
                class="rounded-2xl bg-white dark:bg-deep-purple-950/60 p-5 shadow-sm ring-1 ring-neutral-200 dark:ring-purple-800"
              >
                <h4 class="text-lg font-semibold text-neutral-900 dark:text-white">
                  CDC Developmental Milestones (0-2 yrs)
                </h4>
                <p class="text-sm text-neutral-700 dark:text-pink-100">
                  Provides age-specific social, motor, and language milestones with red-flag
                  guidance for early intervention.
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
                  UNICEF Early Moments Matter
                </h4>
                <p class="text-sm text-neutral-700 dark:text-pink-100">
                  Highlights responsive caregiving, nutrition, and early stimulation to build brain
                  development in the first 1,000 days.
                </p>
                <a
                  class="text-pink-600 hover:underline text-sm font-semibold"
                  href="https://www.unicef.org/early-childhood-development"
                  target="_blank"
                  rel="noopener"
                >
                  UNICEF ECD
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
