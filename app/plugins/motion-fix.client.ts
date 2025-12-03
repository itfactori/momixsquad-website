// Force Motion components to always show content
export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    const forceVisibility = () => {
      // Force all Motion components and their content to be visible
      const selectors = ['[data-motion]', '.motion-content', 'section'];
      selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach((el: Element) => {
          const htmlEl = el as HTMLElement;
          htmlEl.style.setProperty('opacity', '1', 'important');
          htmlEl.style.setProperty('transform', 'translateY(0)', 'important');
          htmlEl.style.setProperty('visibility', 'visible', 'important');
        });
      });
    };

    // Run immediately and on route changes
    nextTick(forceVisibility);

    // Watch for route changes
    const router = useRouter();
    router.afterEach(() => {
      setTimeout(forceVisibility, 50);
    });

    // Also run periodically to catch any missed elements
    setInterval(forceVisibility, 500);
  }
});
