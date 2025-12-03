<template>
  <div
    class="flex min-h-screen flex-col bg-neutral-50 dark:bg-deep-purple-950 text-neutral-900 dark:text-pink-50 transition-colors duration-300"
  >
    <AppHeader />
    <main class="flex-1 overflow-x-hidden">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style>
/* Page transition animations - simplified to prevent hiding content */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease-out;
}

.page-enter-from {
  opacity: 0;
}

.page-leave-to {
  opacity: 0;
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
