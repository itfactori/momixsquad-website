<script setup lang="ts">
const currentYear = new Date().getFullYear();

const footerLinks = {
  resources: [
    { label: 'Mom Development', to: '/development' },
    { label: 'Mom Care', to: '/care' },
    { label: 'Hobbies & Tips', to: '/hobbies' },
    { label: 'Food & Nutrition', to: '/nutrition' }
  ],
  support: []
};

const socialLinks = [
  {
    icon: 'i-simple-icons-instagram',
    href: 'https://www.instagram.com/momix_squad/',
    label: 'Instagram',
    color: 'hover:bg-pink-100 dark:hover:bg-pink-900/50 hover:text-pink-600'
  },
  {
    icon: 'i-simple-icons-facebook',
    href: 'https://www.facebook.com/profile.php?id=61584283265491',
    label: 'Facebook',
    color: 'hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600'
  },
  {
    icon: 'i-simple-icons-youtube',
    href: 'https://www.youtube.com/@momixsquad',
    label: 'YouTube',
    color: 'hover:bg-red-100 dark:hover:bg-red-900/50 hover:text-red-600'
  }
];
</script>

<template>
  <footer
    class="relative bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-purple-950 dark:to-purple-900 overflow-hidden"
  >
    <!-- Decorative background elements -->
    <div class="absolute inset-0 overflow-hidden opacity-20 dark:opacity-10">
      <div
        class="absolute -left-48 -top-48 h-96 w-96 rounded-full bg-gradient-to-br from-pink-300 to-pink-500 dark:from-pink-900/50 dark:to-pink-700/50 blur-3xl"
      />
      <div
        class="absolute -right-48 bottom-0 h-96 w-96 rounded-full bg-gradient-to-br from-purple-300 to-purple-500 dark:from-purple-900/50 dark:to-purple-700/50 blur-3xl"
      />
    </div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <!-- Main footer content -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
        <!-- Brand and Newsletter Section -->
        <div class="lg:col-span-1 space-y-6">
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6 }"
          >
            <!-- Logo -->
            <NuxtLink to="/" class="group inline-flex items-center gap-3">
              <div class="relative">
                <img
                  src="/logo.png"
                  alt="Momix Squad"
                  class="h-14 w-14 rounded-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
                />
                <div
                  class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                />
              </div>
              <span class="font-display text-3xl lg:text-4xl font-bold">
                <span
                  class="bg-gradient-to-r from-pink-600 via-pink-500 to-purple-600 dark:from-pink-400 dark:via-pink-300 dark:to-purple-400 bg-clip-text text-transparent"
                >
                  Momix
                </span>
                <span class="text-purple-600 dark:text-purple-400">Squad</span>
              </span>
            </NuxtLink>

            <!-- Description -->
            <p
              class="text-base lg:text-lg leading-relaxed text-neutral-700 dark:text-pink-200 max-w-sm"
            >
              Empowering mothers with expert guidance, supportive community, and personalized care.
              Your motherhood journey, made lighter and more joyful.
            </p>

            <!-- Newsletter Signup -->
            <div class="space-y-4">
              <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-sparkles" class="h-5 w-5 text-pink-500" />
                <h3 class="text-lg font-bold text-neutral-900 dark:text-white">Stay Connected</h3>
              </div>
              <p class="text-sm text-neutral-600 dark:text-pink-300">
                Get weekly tips and exclusive resources delivered to your inbox
              </p>
              <form class="flex flex-col sm:flex-row gap-3" @submit.prevent>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  class="flex-1 rounded-xl border border-neutral-300 dark:border-purple-700 bg-white dark:bg-purple-900/50 px-4 py-3 text-sm text-neutral-900 dark:text-pink-100 placeholder-neutral-500 dark:placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400 focus:border-transparent transition-all duration-200"
                  required
                />
                <UButton
                  color="primary"
                  size="lg"
                  variant="solid"
                  type="submit"
                  class="px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Subscribe
                </UButton>
              </form>
            </div>
          </Motion>
        </div>

        <!-- Quick Links Section -->
        <div class="lg:col-span-2">
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 0.1 }"
          >
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <!-- Resources -->
              <div>
                <h4
                  class="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-pink-100 mb-6 flex items-center gap-3"
                >
                  <div
                    class="p-2 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 shadow-lg"
                  >
                    <UIcon name="i-heroicons-book-open" class="h-5 w-5 text-white" />
                  </div>
                  Explore Resources
                </h4>
                <ul class="space-y-4">
                  <li v-for="link in footerLinks.resources" :key="link.to">
                    <NuxtLink
                      :to="link.to"
                      class="group flex items-center gap-3 text-sm text-neutral-600 dark:text-pink-300 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300 transform hover:translate-x-2"
                    >
                      <div class="relative">
                        <div
                          class="h-2 w-2 rounded-full bg-pink-500 scale-0 group-hover:scale-100 transition-transform duration-300"
                        />
                        <div
                          class="absolute inset-0 h-2 w-2 rounded-full bg-pink-500 scale-150 opacity-0 group-hover:opacity-30 animate-ping"
                        />
                      </div>
                      <span class="font-medium">{{ link.label }}</span>
                    </NuxtLink>
                  </li>
                </ul>
              </div>

              <!-- Contact -->
              <div>
                <h4
                  class="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-pink-100 mb-6 flex items-center gap-3"
                >
                  <div
                    class="p-2 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg"
                  >
                    <UIcon name="i-heroicons-phone" class="h-5 w-5 text-white" />
                  </div>
                  Get in Touch
                </h4>
                <div class="space-y-4">
                  <div class="group relative">
                    <div
                      class="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"
                    />
                    <div
                      class="relative flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-purple-900/50 border border-neutral-200 dark:border-purple-700 group-hover:border-pink-300 dark:group-hover:border-pink-600 transition-all duration-300"
                    >
                      <div
                        class="p-3 rounded-xl bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900/30 dark:to-pink-800/30 group-hover:scale-110 transition-transform duration-300"
                      >
                        <UIcon
                          name="i-heroicons-envelope"
                          class="h-6 w-6 text-pink-600 dark:text-pink-400"
                        />
                      </div>
                      <div>
                        <div class="text-xs font-semibold text-neutral-500 dark:text-pink-400 mb-1">
                          Email Us
                        </div>
                        <a
                          href="mailto:info@momixsquad.com"
                          class="text-sm font-medium text-neutral-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200"
                        >
                          info@momixsquad.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Motion>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="mt-12 pt-8 border-t border-neutral-200 dark:border-purple-800">
        <Motion
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 0.6, delay: 0.2 }"
        >
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
            <!-- Copyright -->
            <div class="flex items-center gap-2 text-sm text-neutral-600 dark:text-pink-300">
              <span>© {{ currentYear }} Momix Squad. All rights reserved.</span>
              <span class="hidden sm:inline">•</span>
              <span class="flex items-center gap-1">
                Made with
                <UIcon name="i-heroicons-heart" class="h-4 w-4 text-pink-500 animate-pulse" />
                for moms everywhere
              </span>
            </div>

            <!-- Social Links -->
            <div class="flex items-center gap-4">
              <span class="text-xs text-neutral-500 dark:text-pink-400">Follow our journey</span>
              <div class="flex items-center gap-3">
                <a
                  v-for="social in socialLinks"
                  :key="social.label"
                  :href="social.href"
                  :aria-label="social.label"
                  :class="`p-2 rounded-lg text-neutral-500 ${social.color} transition-all duration-200 hover:scale-110`"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <UIcon :name="social.icon" class="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </Motion>
      </div>
    </div>
  </footer>
</template>
