<script setup lang="ts">
useHead({
  title: 'Hobbies & Passions - Momix Squad'
});
</script>

<template>
  <div class="bg-white py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Rediscover Your Passions
        </h2>
        <p class="mt-6 text-lg leading-8 text-slate-600">
          Motherhood is a big part of who you are, but it's not the only part. Reconnect with the
          things that bring you joy.
        </p>
      </div>

      <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Creative Hobbies -->
        <div class="rounded-2xl bg-amber-50 p-8">
          <div
            class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600"
          >
            <UIcon name="i-heroicons-paint-brush" class="h-6 w-6" />
          </div>
          <h3 class="text-xl font-bold text-slate-900">Creative Hobbies</h3>
          <ul class="mt-6 space-y-3 text-slate-700">
            <li>Journaling & Scrapbooking</li>
            <li>DIY Crafts & Home Décor</li>
            <li>Painting & Sketching</li>
            <li>Crochet, Knitting, Sewing</li>
            <li>Photography</li>
            <li>Baking & Cake Decoration</li>
            <li>Gardening</li>
            <li>Aromatherapy & Essential Oils</li>
          </ul>
        </div>

        <!-- Skill-Based Hobbies -->
        <div class="rounded-2xl bg-purple-50 p-8">
          <div
            class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600"
          >
            <UIcon name="i-heroicons-academic-cap" class="h-6 w-6" />
          </div>
          <h3 class="text-xl font-bold text-slate-900">Skill-Based Hobbies</h3>
          <ul class="mt-6 space-y-3 text-slate-700">
            <li>Learning a new language</li>
            <li>Coding for beginners</li>
            <li>Writing & Blogging</li>
            <li>Digital Design (Canva, Procreate)</li>
            <li>Calligraphy & Hand lettering</li>
          </ul>
        </div>

        <!-- Wellness & Nature -->
        <div class="rounded-2xl bg-green-50 p-8">
          <div
            class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600"
          >
            <UIcon name="i-heroicons-sun" class="h-6 w-6" />
          </div>
          <h3 class="text-xl font-bold text-slate-900">Wellness & Nature</h3>
          <ul class="mt-6 space-y-3 text-slate-700">
            <li>Yoga or Stretching routines</li>
            <li>Nature walks / Hiking</li>
            <li>Reading & Book clubs</li>
            <li>Mindful Meditation</li>
          </ul>
        </div>

        <!-- Social & Community -->
        <div class="rounded-2xl bg-pink-50 p-8">
          <div
            class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 text-pink-600"
          >
            <UIcon name="i-heroicons-users" class="h-6 w-6" />
          </div>
          <h3 class="text-xl font-bold text-slate-900">Social & Community</h3>
          <ul class="mt-6 space-y-3 text-slate-700">
            <li>Starting a mom support circle</li>
            <li>Volunteering</li>
            <li>Hosting Get-togethers</li>
            <li>Community learning groups</li>
          </ul>
        </div>

        <!-- Personal Development -->
        <div class="rounded-2xl bg-blue-50 p-8 md:col-span-2 lg:col-span-2">
          <div
            class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600"
          >
            <UIcon name="i-heroicons-rocket-launch" class="h-6 w-6" />
          </div>
          <h3 class="text-xl font-bold text-slate-900">Personal Development</h3>
          <div class="mt-6 grid gap-6 sm:grid-cols-2">
            <ul class="space-y-3 text-slate-700">
              <li>Goal setting for moms</li>
              <li>How to rediscover "yourself"</li>
              <li>Time-blocking for hobbies</li>
            </ul>
            <div>
              <h4 class="font-semibold text-blue-900">Let's Read: Courses & Certifications</h4>
              <p class="mt-2 text-sm text-slate-600">Upskill and learn something new today.</p>
              <div class="mt-4">
                <InteractivePlaceholder
                  title="Courses List"
                  description="List of recommended courses."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
