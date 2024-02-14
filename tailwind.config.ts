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
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#7f56d9',
        primarySmall: '#7C3BED',
        greenLogo: '#21C45D',
        primaryCustom: 'rgba(127, 86, 217, 0.90)',
        primaryBg: 'rgba(127, 86, 217, 0.10)',
        primaryBG: 'rgba(127, 86, 217, 0.15)',
        primaryBGA: 'rgba(124, 59, 237, 0.15)',
        grayCustom: '#929FB1',
        grayLight: 'A1A1AA',
        grayDark: 'D7D7D7',
        grayPlate: '#98A2B3',
        grayPlateBg: 'rgba(152, 162, 179, 0.15)',
        grayCard: '#EEF0F1',
        grayBg: 'rgba(208, 213, 221, 0.25)',
        greenDark: '21C45D',
        secondary: '#f2eefa',
        tertiary: 'rgba(127, 86, 217, 0.50)',
        warning: '#DC6803',
        warningCustom: 'rgba(220, 104, 3, 0.09)',
        blackCustom:'1D2939',
        blackMedium: '27272A',
      },
      fontSize: {
        xsm:'0.625rem'
      },
    },
  },
  plugins: [],
}
export default config
