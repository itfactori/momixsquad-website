export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop',
      light: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop',
      alt: 'Momix Squad logo'
    },
    meetingLink: '/contact',
    email: 'hello@momixsquad.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'orange',
      secondary: 'amber',
      neutral: 'stone',
      success: 'emerald',
      warning: 'amber',
      error: 'red'
    },
    button: {
      defaultVariants: {
        color: 'primary'
      }
    },
    card: {
      defaultVariants: {
        variant: 'soft'
      }
    },
    pageHero: {
      slots: {
        container: 'py-20 sm:py-28 lg:py-36',
        title: 'mx-auto max-w-4xl text-pretty text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight',
        description: 'mt-6 text-lg sm:text-xl mx-auto max-w-3xl text-pretty leading-relaxed'
      }
    }
  },
  footer: {
    credits: `© ${new Date().getFullYear()} Momix Squad. All rights reserved.`,
    colorMode: true,
    links: [
      {
        icon: 'i-simple-icons-instagram',
        to: 'https://instagram.com/momixsquad',
        target: '_blank',
        'aria-label': 'Momix Squad on Instagram'
      },
      {
        icon: 'i-simple-icons-facebook',
        to: 'https://facebook.com/momixsquad',
        target: '_blank',
        'aria-label': 'Momix Squad on Facebook'
      },
      {
        icon: 'i-simple-icons-twitter',
        to: 'https://twitter.com/momixsquad',
        target: '_blank',
        'aria-label': 'Momix Squad on Twitter'
      }
    ]
  }
});
