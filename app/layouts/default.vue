<template>
  <div
    class="flex min-h-screen flex-col bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-300"
  >
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style>
/* Page transition animations */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Layout transition animations */
.layout-enter-active,
.layout-leave-active {
  transition: all 0.3s ease-out;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}
</style>
