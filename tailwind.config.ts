import type { Config } from 'tailwindcss'

const config: Config = {
  mode:'JIT',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#7f56d9',
        primaryCustom: 'rgba(127, 86, 217, 0.90)',
        primaryBg: 'rgba(127, 86, 217, 0.10)',
        grayCustom: '#929FB1',
        grayPlate: '#98A2B3',
        grayBg: 'rgba(208, 213, 221, 0.25)',
        secondary: '#f2eefa',
        tertiary: 'rgba(127, 86, 217, 0.50)',
        warning: '#DC6803',
        warningCustom: 'rgba(220, 104, 3, 0.09)',
        
      }
    },
  },
  plugins: [],
}
export default config
