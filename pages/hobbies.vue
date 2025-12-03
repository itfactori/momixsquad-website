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

      <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <ContentCard
          title="Creative Arts"
          description="Painting, knitting, and DIY crafts to express your creativity."
          icon="i-heroicons-paint-brush"
        />
        <ContentCard
          title="Gardening"
          description="Connect with nature and grow your own sanctuary."
          icon="i-heroicons-sun"
        />
        <ContentCard
          title="Fitness"
          description="Yoga, pilates, and strength training for a healthy body."
          icon="i-heroicons-fire"
        />
      </div>

      <div class="mt-16">
        <h3 class="text-2xl font-bold text-slate-900">Let's Read: Courses & Certifications</h3>
        <p class="mt-2 text-slate-600">Upskill and learn something new today.</p>
        <div class="mt-6">
          <InteractivePlaceholder
            title="Courses List"
            description="List of recommended courses and certifications for moms."
          />
        </div>
      </div>
    </div>
  </div>
</template>
