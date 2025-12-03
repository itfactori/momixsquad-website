<script setup lang="ts">
const currentYear = new Date().getFullYear();

const footerLinks = {
  resources: [
    { label: 'Mom Development', to: '/development' },
    { label: 'Mom Care', to: '/care' },
    { label: 'Hobbies & Tips', to: '/hobbies' },
    { label: 'Food & Nutrition', to: '/nutrition' }
  ],
  support: [
    { label: 'Contact Us', to: '/contact' },
    { label: 'FAQs', to: '/contact' },
    { label: 'Privacy Policy', to: '/contact' },
    { label: 'Terms of Service', to: '/contact' }
  ]
};

const socialLinks = [
  {
    icon: 'i-simple-icons-instagram',
    href: 'https://instagram.com/momixsquad',
    label: 'Instagram'
  },
  { icon: 'i-simple-icons-facebook', href: 'https://facebook.com/momixsquad', label: 'Facebook' },
  { icon: 'i-simple-icons-twitter', href: 'https://twitter.com/momixsquad', label: 'Twitter' },
  {
    icon: 'i-simple-icons-linkedin',
    href: 'https://linkedin.com/company/momixsquad',
    label: 'LinkedIn'
  }
];
</script>

<template>
  <footer
    class="relative overflow-hidden border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950"
  >
    <!-- Decorative background -->
    <div class="absolute inset-0 overflow-hidden opacity-30 dark:opacity-20">
      <div
        class="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-primary-200 dark:bg-primary-900/50 blur-3xl"
      />
      <div
        class="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-teal-200 dark:bg-teal-900/50 blur-3xl"
      />
    </div>

    <div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <!-- Main footer content -->
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <!-- Brand section -->
        <div class="lg:col-span-5">
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5 }"
          >
            <div class="space-y-6">
              <!-- Logo -->
              <NuxtLink to="/" class="group inline-flex items-center gap-3">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg shadow-primary-500/30 transition-all group-hover:shadow-xl group-hover:shadow-primary-500/40"
                >
                  <UIcon name="i-heroicons-heart" class="h-7 w-7 text-white" />
                </div>
                <span class="font-display text-2xl font-bold">
                  <span
                    class="bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent"
                    >Momix</span
                  >
                  <span class="text-teal-600 dark:text-teal-400">Squad</span>
                </span>
              </NuxtLink>

              <!-- Description -->
              <p class="max-w-md text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                Nurturing mothers to give children the best start in life. Supporting every mom with
                guidance, community, and care. Your journey, lighter and more joyful.
              </p>

              <!-- Newsletter -->
              <div class="space-y-3">
                <p class="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  Stay connected with us
                </p>
                <form class="flex gap-2" @submit.prevent>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    class="flex-1 rounded-xl border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-2.5 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 shadow-sm transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                  />
                  <UButton color="primary" size="md" variant="solid" type="submit">
                    Subscribe
                  </UButton>
                </form>
              </div>
            </div>
          </Motion>
        </div>

        <!-- Links sections -->
        <div class="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
          <!-- Resources -->
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="true"
            :visible="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.1 }"
          >
            <div>
              <h3
                class="mb-4 font-display text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100"
              >
                Resources
              </h3>
              <ul class="space-y-3">
                <li v-for="link in footerLinks.resources" :key="link.to">
                  <NuxtLink
                    :to="link.to"
                    class="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 transition-all hover:translate-x-1 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <span
                      class="h-1 w-1 rounded-full bg-primary-500 opacity-0 transition-opacity group-hover:opacity-100"
                    />
                    {{ link.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </Motion>

          <!-- Support -->
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="true"
            :visible="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.2 }"
          >
            <div>
              <h3
                class="mb-4 font-display text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100"
              >
                Support
              </h3>
              <ul class="space-y-3">
                <li v-for="link in footerLinks.support" :key="link.to + link.label">
                  <NuxtLink
                    :to="link.to"
                    class="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 transition-all hover:translate-x-1 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    {{ link.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </Motion>

          <!-- Contact -->
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="true"
            :visible="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.3 }"
          >
            <div>
              <h3
                class="mb-4 font-display text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100"
              >
                Get in Touch
              </h3>
              <ul class="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
                <li class="flex items-center gap-2">
                  <UIcon name="i-heroicons-envelope" class="h-4 w-4 text-primary-500" />
                  <a
                    href="mailto:aliya.asim@aispk.org"
                    class="hover:text-primary-600 dark:hover:text-primary-400"
                    >aliya.asim@aispk.org</a
                  >
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-heroicons-phone" class="h-4 w-4 text-primary-500" />
                  <a
                    href="tel:+923100207414"
                    class="hover:text-primary-600 dark:hover:text-primary-400"
                    >+92 310 0207414</a
                  >
                </li>
              </ul>
            </div>
          </Motion>
        </div>
      </div>

      <!-- Bottom section -->
      <Motion
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 0.5, delay: 0.4 }"
      >
        <div class="mt-12 border-t border-neutral-200 dark:border-neutral-800 pt-8">
          <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <!-- Copyright -->
            <p class="text-sm text-neutral-500 dark:text-neutral-400">
              © {{ currentYear }} Momix Squad. All rights reserved. Made
              <UIcon name="i-heroicons-heart" class="inline h-4 w-4 text-primary-500" />
              for moms everywhere.
            </p>

            <!-- Social links -->
            <div class="flex items-center gap-3">
              <a
                v-for="social in socialLinks"
                :key="social.href"
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="social.label"
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-white dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 shadow-sm ring-1 ring-neutral-200 dark:ring-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-50 dark:hover:bg-primary-950/50 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-md hover:ring-primary-300 dark:hover:ring-primary-700"
              >
                <UIcon :name="social.icon" class="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </Motion>
    </div>
  </footer>
</template>
