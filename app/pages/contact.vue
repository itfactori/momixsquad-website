<script setup lang="ts">
useHead({
  title: 'Contact Us - Momix Squad'
});
</script>

<template>
  <div class="bg-white py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Get in Touch
        </h2>
        <p class="mt-4 text-lg text-slate-600">
          We'd love to hear from you. Whether you have a question or just want to say hi, drop us a
          message.
        </p>
      </div>

      <div class="mt-16 mx-auto max-w-xl">
        <InteractivePlaceholder
          title="Contact Form & Details"
          description="Official email, physical address, and social media links."
        />
      </div>
    </div>
  </div>
</template>
