import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/frontend/common/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/ui/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'vsm': { max: '576px' },
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'wide': '1820px',
      'container-mobile': { max: '768px' },
      'container-desktop-between': { min: '1024px', max: '1215px' },
      'container-widescreen-between': { min: '1216px', max: '1407px' },
      'container-fullhd': '1408px',
    },
    colors: {
      primary: "#aab4a9",
      secondary: "#7f7d69",
      background: "#f0ded6",
      primaryHover: "#7f7d69",
      primaryActive: "#7f7d69",
      danger: "#f14668",
      success: "#3abb81",
      disabled: "#939393",
      light: "#fff",
      dark: "#1a1a1a",
      grey: "#9b9b9b",
      lightGrey: "#f2f2f2",
      darkGrey: "#4d4d4d",
      warningYellow: "#eed202",
      whatsapp: "#1ad03f",
    },
    extend: {},
  },
  plugins: [],
}
export default config
