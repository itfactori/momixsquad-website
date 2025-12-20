<script setup lang="ts">
useHead({
  title: 'Contact Us - Momix Squad',
  meta: [
    {
      name: 'description',
      content:
        "Get in touch with Momix Squad. We'd love to hear from you - questions, feedback, or just say hi!"
    }
  ]
});

const form = reactive({
  name: '',
  email: '',
  subject: '',
  category: '',
  message: ''
});

const categories = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'development', label: 'Mom Development' },
  { value: 'care', label: 'Mom Care & Wellness' },
  { value: 'hobbies', label: 'Hobbies & Tips' },
  { value: 'nutrition', label: 'Food & Nutrition' },
  { value: 'coaching', label: 'Coaching Request' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'other', label: 'Other' }
];

const isSubmitting = ref(false);
const isSubmitted = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;

  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.name,
        email: form.email,
        subject: form.subject,
        category: form.category,
        message: form.message
      }
    });

    if (response.success) {
      isSubmitted.value = true;
      // Reset form
      form.name = '';
      form.email = '';
      form.subject = '';
      form.category = '';
      form.message = '';
    }
  } catch (error: any) {
    console.error('Error submitting form:', error);
    // You could add error handling/toast notification here
    alert(
      'There was an error sending your message. Please try again or email us directly at aliya.asim@aispk.org'
    );
  } finally {
    isSubmitting.value = false;
  }
};

const contactInfo = [
  {
    icon: 'i-heroicons-envelope',
    title: 'Email Us',
    description: "We'll respond within 24 hours",
    value: 'info@momixsquad.com',
    href: 'mailto:aliya.asim@aispk.org'
  },
  {
    icon: 'i-heroicons-phone',
    title: 'WhatsApp Us',
    description: 'Available for urgent inquiries',
    value: '+92 310 0207414',
    href: 'tel:+923100207414'
  },
  {
    icon: 'i-heroicons-clock',
    title: 'Response Time',
    description: "We're here for you",
    value: 'Within 24-48 hours',
    href: '#'
  }
];

// Social links temporarily disabled
// const socialLinks = [
//   {
//     icon: 'i-simple-icons-instagram',
//     href: 'https://instagram.com/momixsquad',
//     label: 'Instagram',
//     color: 'hover:bg-pink-100 dark:hover:bg-pink-900/50 hover:text-pink-600'
//   },
//   {
//     icon: 'i-simple-icons-facebook',
//     href: 'https://facebook.com/momixsquad',
//     label: 'Facebook',
//     color: 'hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600'
//   },
//   {
//     icon: 'i-simple-icons-twitter',
//     href: 'https://twitter.com/momixsquad',
//     label: 'Twitter',
//     color: 'hover:bg-sky-100 dark:hover:bg-sky-900/50 hover:text-sky-500'
//   },
//   {
//     icon: 'i-simple-icons-linkedin',
//     href: 'https://linkedin.com/company/momixsquad',
//     label: 'LinkedIn',
//     color: 'hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-700'
//   }
// ];
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="relative overflow-hidden bg-neutral-50 dark:bg-neutral-950 py-20 sm:py-28">
      <div class="absolute inset-0 mesh-bg" />
      <div
        class="absolute inset-0 bg-gradient-to-b from-primary-100/30 dark:from-primary-900/20 to-transparent"
      />

      <div class="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <div
            class="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-100 dark:bg-primary-900/50 px-6 py-2 text-sm font-semibold text-primary-700 dark:text-primary-300 ring-1 ring-primary-200 dark:ring-primary-800"
          >
            <UIcon name="i-heroicons-envelope" class="h-5 w-5" />
            Get in Touch
          </div>
          <h1
            class="font-display text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl lg:text-6xl"
          >
            We'd Love to Hear from You
          </h1>
          <p
            class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-xl"
          >
            Whether you have a question, feedback, or just want to say hi - we're here for you.
            Reach out and let's connect!
          </p>
        </Motion>
      </div>
    </section>

    <!-- Contact Info Cards -->
    <section class="bg-white dark:bg-neutral-900 py-12 sm:py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-6 sm:grid-cols-3">
          <Motion
            v-for="(info, index) in contactInfo"
            :key="info.title"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: index * 0.1 }"
          >
            <a
              :href="info.href"
              class="group flex items-start gap-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800 p-6 shadow-lg ring-1 ring-neutral-200 dark:ring-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-primary-300 dark:hover:ring-primary-700"
            >
              <div
                class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 transition-colors group-hover:bg-primary-500 group-hover:text-white"
              >
                <UIcon :name="info.icon" class="h-6 w-6" />
              </div>
              <div>
                <h3 class="font-display text-lg font-bold text-neutral-900 dark:text-neutral-50">
                  {{ info.title }}
                </h3>
                <p class="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {{ info.description }}
                </p>
                <a
                  :href="info.href"
                  class="mt-2 block font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                  {{ info.value }}
                </a>
              </div>
            </a>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="relative overflow-hidden bg-neutral-50 dark:bg-neutral-950 py-20 sm:py-28">
      <div class="absolute inset-0 mesh-bg opacity-50" />

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-2 lg:items-start">
          <!-- Form -->
          <Motion
            :initial="{ opacity: 0, x: -30 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.6 }"
          >
            <div
              class="rounded-3xl bg-white dark:bg-neutral-900 p-8 shadow-xl ring-1 ring-neutral-200 dark:ring-neutral-800 sm:p-10"
            >
              <h2
                class="font-display text-2xl font-bold text-neutral-900 dark:text-neutral-50 sm:text-3xl"
              >
                Send Us a Message
              </h2>
              <p class="mt-2 text-neutral-600 dark:text-neutral-400">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <!-- Success Message -->
              <Transition
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="transition duration-200 ease-in"
                leave-from-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-95"
              >
                <div
                  v-if="isSubmitted"
                  class="mt-6 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 p-6 text-center ring-1 ring-emerald-200 dark:ring-emerald-800"
                >
                  <div
                    class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50"
                  >
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="h-6 w-6 text-emerald-600 dark:text-emerald-400"
                    />
                  </div>
                  <h3 class="font-display text-lg font-bold text-emerald-900 dark:text-emerald-100">
                    Message Sent Successfully!
                  </h3>
                  <p class="mt-2 text-sm text-emerald-700 dark:text-emerald-300">
                    Thank you for reaching out. We'll get back to you within 24-48 hours.
                  </p>
                  <UButton
                    color="success"
                    variant="soft"
                    size="sm"
                    class="mt-4"
                    @click="isSubmitted = false"
                  >
                    Send Another Message
                  </UButton>
                </div>
              </Transition>

              <!-- Form -->
              <form v-if="!isSubmitted" class="mt-8 space-y-6" @submit.prevent="handleSubmit">
                <div class="grid gap-6 sm:grid-cols-2">
                  <!-- Name -->
                  <div>
                    <label
                      for="name"
                      class="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      v-model="form.name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      class="mt-2 block w-full rounded-xl border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-3 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 shadow-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                    />
                  </div>

                  <!-- Email -->
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      class="mt-2 block w-full rounded-xl border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-3 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 shadow-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                    />
                  </div>
                </div>

                <!-- Category -->
                <div>
                  <label
                    for="category"
                    class="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    v-model="form.category"
                    class="mt-2 block w-full rounded-xl border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-3 text-neutral-900 dark:text-neutral-100 shadow-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                  >
                    <option value="">Select a category</option>
                    <option v-for="cat in categories" :key="cat.value" :value="cat.value">
                      {{ cat.label }}
                    </option>
                  </select>
                </div>

                <!-- Subject -->
                <div>
                  <label
                    for="subject"
                    class="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    Subject *
                  </label>
                  <input
                    id="subject"
                    v-model="form.subject"
                    type="text"
                    required
                    placeholder="What's this about?"
                    class="mt-2 block w-full rounded-xl border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-3 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 shadow-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                  />
                </div>

                <!-- Message -->
                <div>
                  <label
                    for="message"
                    class="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    required
                    rows="5"
                    placeholder="Tell us how we can help..."
                    class="mt-2 block w-full resize-none rounded-xl border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-3 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 shadow-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                  />
                </div>

                <!-- Submit Button -->
                <UButton
                  type="submit"
                  color="primary"
                  size="xl"
                  block
                  :loading="isSubmitting"
                  :disabled="isSubmitting"
                  class="shadow-lg shadow-primary-500/20"
                >
                  <span v-if="!isSubmitting">Send Message</span>
                  <span v-else>Sending...</span>
                  <template v-if="!isSubmitting" #trailing>
                    <UIcon name="i-heroicons-paper-airplane" class="h-5 w-5" />
                  </template>
                </UButton>
              </form>
            </div>
          </Motion>

          <!-- Side Content -->
          <Motion
            :initial="{ opacity: 0, x: 30 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.6 }"
          >
            <div class="space-y-8">
              <!-- Social Links -->
              <div
                class="rounded-3xl bg-white dark:bg-neutral-900 p-8 shadow-xl ring-1 ring-neutral-200 dark:ring-neutral-800"
              >
                <h3 class="font-display text-xl font-bold text-neutral-900 dark:text-neutral-50">
                  Connect With Us
                </h3>
                <p class="mt-2 text-neutral-600 dark:text-neutral-400">
                  Follow us on social media for tips, updates, and mom community moments.
                </p>
                <!-- Social Media - Temporarily Disabled -->
                <!--
                <div class="mt-6 flex gap-3">
                  <a
                    v-for="social in socialLinks"
                    :key="social.href"
                    :href="social.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    :aria-label="social.label"
                    class="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    :class="social.color"
                  >
                    <UIcon :name="social.icon" class="h-6 w-6" />
                  </a>
                </div>
                -->
              </div>

              <!-- FAQ Teaser -->
              <div
                class="rounded-3xl bg-gradient-to-br from-primary-100 to-amber-100 dark:from-primary-950/50 dark:to-amber-950/50 p-8 shadow-xl ring-1 ring-neutral-200/50 dark:ring-neutral-700/50"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/80 dark:bg-neutral-900/80 shadow-lg"
                  >
                    <UIcon
                      name="i-heroicons-question-mark-circle"
                      class="h-6 w-6 text-primary-600 dark:text-primary-400"
                    />
                  </div>
                  <div>
                    <h3
                      class="font-display text-xl font-bold text-neutral-900 dark:text-neutral-50"
                    >
                      Frequently Asked Questions
                    </h3>
                    <p class="mt-2 text-neutral-600 dark:text-neutral-400">
                      Have questions? Check out our FAQ section for quick answers to common
                      questions.
                    </p>
                    <div class="mt-4">
                      <span
                        class="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400"
                      >
                        <span class="relative flex h-2 w-2">
                          <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"
                          ></span>
                          <span
                            class="relative inline-flex rounded-full h-2 w-2 bg-primary-500"
                          ></span>
                        </span>
                        Coming Soon
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Newsletter -->
              <div
                class="rounded-3xl bg-white dark:bg-neutral-900 p-8 shadow-xl ring-1 ring-neutral-200 dark:ring-neutral-800"
              >
                <h3 class="font-display text-xl font-bold text-neutral-900 dark:text-neutral-50">
                  Stay in the Loop
                </h3>
                <p class="mt-2 text-neutral-600 dark:text-neutral-400">
                  Subscribe to our newsletter for exclusive tips, resources, and mom community
                  updates.
                </p>
                <form class="mt-6 flex gap-2" @submit.prevent>
                  <input
                    type="email"
                    placeholder="Your email"
                    class="flex-1 rounded-xl border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 px-4 py-3 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 shadow-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                  />
                  <UButton color="primary" size="lg" variant="solid" type="submit">
                    Subscribe
                  </UButton>
                </form>
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section
      class="bg-gradient-to-br from-primary-600 to-primary-700 dark:from-primary-800 dark:to-primary-900 py-16 sm:py-20"
    >
      <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <h2 class="font-display text-2xl font-bold text-white sm:text-3xl">
            Join the Momix Squad Community
          </h2>
          <p class="mt-4 text-lg text-primary-50">
            Be part of a supportive community of mothers helping each other thrive.
          </p>
          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <UButton
              to="/"
              color="neutral"
              size="xl"
              variant="solid"
              class="bg-white text-neutral-900 hover:bg-neutral-50"
            >
              Explore Resources
              <template #trailing>
                <UIcon name="i-heroicons-arrow-right" class="h-5 w-5" />
              </template>
            </UButton>
          </div>
        </Motion>
      </div>
    </section>
  </div>
</template>
