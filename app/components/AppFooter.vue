<script setup lang="ts">
const currentYear = new Date().getFullYear();

const footerLinks = {
  company: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Story', to: '/story' },
    { label: 'Coaches', to: '/coaches' },
    { label: 'Blog', to: '/blog' }
  ],
  resources: [
    { label: 'Mom Development', to: '/development' },
    { label: 'Mom Care', to: '/care' },
    { label: 'Hobbies & Tips', to: '/hobbies' },
    { label: 'Food & Nutrition', to: '/nutrition' }
  ],
  support: [
    { label: 'Contact Us', to: '/contact' },
    { label: 'FAQs', to: '/faq' },
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Service', to: '/terms' }
  ]
};

const socialLinks = [
  { icon: 'i-simple-icons-instagram', href: 'https://instagram.com/momixsquad', label: 'Instagram' },
  { icon: 'i-simple-icons-facebook', href: 'https://facebook.com/momixsquad', label: 'Facebook' },
  { icon: 'i-simple-icons-twitter', href: 'https://twitter.com/momixsquad', label: 'Twitter' },
  { icon: 'i-simple-icons-linkedin', href: 'https://linkedin.com/company/momixsquad', label: 'LinkedIn' }
];
</script>

<template>
  <footer class="relative overflow-hidden border-t border-slate-200 bg-gradient-to-br from-slate-50 to-primary-50/30">
    <!-- Decorative background -->
    <div class="absolute inset-0 overflow-hidden opacity-30">
      <div class="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-primary-100 blur-3xl" />
      <div class="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-success-100 blur-3xl" />
    </div>

    <div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <!-- Main footer content -->
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <!-- Brand section -->
        <div class="lg:col-span-4">
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="true"
            :visible="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5 }"
          >
            <div class="space-y-6">
              <!-- Logo -->
              <NuxtLink to="/" class="group inline-flex items-center gap-2.5">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg shadow-primary-500/30 transition-all group-hover:shadow-xl group-hover:shadow-primary-500/40"
                >
                  <UIcon name="i-heroicons-heart" class="h-7 w-7 text-white" />
                </div>
                <span class="font-display text-2xl font-bold">
                  <span class="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent"
                    >Momix</span
                  >
                  <span class="text-success-600">Squad</span>
                </span>
              </NuxtLink>

              <!-- Description -->
              <p class="text-base leading-relaxed text-slate-600">
                Nurturing mothers to give children the best start in life. Supporting every mom with
                guidance, community, and care.
              </p>

              <!-- Newsletter -->
              <div class="space-y-3">
                <p class="text-sm font-semibold text-slate-900">Stay connected</p>
                <div class="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    class="flex-1 rounded-lg border-slate-200 bg-white px-4 py-2.5 text-sm shadow-sm transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                  />
                  <UButton color="primary" size="md" variant="solid">
                    Subscribe
                  </UButton>
                </div>
              </div>
            </div>
          </Motion>
        </div>

        <!-- Links sections -->
        <div class="grid gap-8 sm:grid-cols-3 lg:col-span-8">
          <!-- Company -->
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="true"
            :visible="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.1 }"
          >
            <div>
              <h3 class="mb-4 font-display text-sm font-bold uppercase tracking-wider text-slate-900">
                Company
              </h3>
              <ul class="space-y-3">
                <li v-for="link in footerLinks.company" :key="link.to">
                  <NuxtLink
                    :to="link.to"
                    class="inline-block text-sm text-slate-600 transition-all hover:translate-x-1 hover:text-primary-600"
                  >
                    {{ link.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </Motion>

          <!-- Resources -->
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="true"
            :visible="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.2 }"
          >
            <div>
              <h3 class="mb-4 font-display text-sm font-bold uppercase tracking-wider text-slate-900">
                Resources
              </h3>
              <ul class="space-y-3">
                <li v-for="link in footerLinks.resources" :key="link.to">
                  <NuxtLink
                    :to="link.to"
                    class="inline-block text-sm text-slate-600 transition-all hover:translate-x-1 hover:text-primary-600"
                  >
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
            :transition="{ duration: 0.5, delay: 0.3 }"
          >
            <div>
              <h3 class="mb-4 font-display text-sm font-bold uppercase tracking-wider text-slate-900">
                Support
              </h3>
              <ul class="space-y-3">
                <li v-for="link in footerLinks.support" :key="link.to">
                  <NuxtLink
                    :to="link.to"
                    class="inline-block text-sm text-slate-600 transition-all hover:translate-x-1 hover:text-primary-600"
                  >
                    {{ link.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </Motion>
        </div>
      </div>

      <!-- Bottom section -->
      <Motion
        :initial="{ opacity: 0 }"
        :visible-once="true"
        :visible="{ opacity: 1 }"
        :transition="{ duration: 0.5, delay: 0.4 }"
      >
        <div class="mt-12 border-t border-slate-200 pt-8">
          <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <!-- Copyright -->
            <p class="text-sm text-slate-500">
              © {{ currentYear }} Momix Squad. All rights reserved. Nurturing mothers everywhere.
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
                class="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-400 shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:bg-primary-50 hover:text-primary-600 hover:shadow-md hover:ring-primary-300"
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
