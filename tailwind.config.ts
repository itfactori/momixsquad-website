import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        momix: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9', // Primary Brand Color (Calm Blue)
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49'
        },
        sage: {
          50: '#f6fcf8',
          100: '#ecf9f2',
          200: '#d3f0df',
          300: '#aee0c5',
          400: '#7ec6a4',
          500: '#55a883', // Secondary Brand Color (Nature Green)
          600: '#3f8868',
          700: '#346d55',
          800: '#2b5745',
          900: '#24483a',
          950: '#132821'
        }
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Outfit', ...defaultTheme.fontFamily.sans]
      }
    }
  }
};
