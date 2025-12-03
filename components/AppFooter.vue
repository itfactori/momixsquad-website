<template>
  <footer class="border-t border-slate-200 bg-slate-50 py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div class="flex items-center gap-2">
          <span class="font-display text-xl font-bold text-momix-600"
            >Momix<span class="text-sage-500">Squad</span></span
          >
        </div>

        <p class="text-sm text-slate-500">
          © {{ new Date().getFullYear() }} Momix Squad. Nurturing Mothers.
        </p>

        <div class="flex gap-4">
          <!-- Social Placeholders -->
          <a href="#" class="text-slate-400 hover:text-momix-500"
            ><UIcon name="i-simple-icons-instagram" class="h-5 w-5"
          /></a>
          <a href="#" class="text-slate-400 hover:text-momix-500"
            ><UIcon name="i-simple-icons-facebook" class="h-5 w-5"
          /></a>
          <a href="#" class="text-slate-400 hover:text-momix-500"
            ><UIcon name="i-simple-icons-twitter" class="h-5 w-5"
          /></a>
        </div>
      </div>
    </div>
  </footer>
</template>
