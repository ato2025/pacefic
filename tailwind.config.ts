import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        // Add custom column configurations
        '14': 'repeat(14, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
        '17': 'repeat(17, minmax(0, 1fr))',
        '18': 'repeat(18, minmax(0, 1fr))',
        '20': 'repeat(20, minmax(0, 1fr))',
        '23': 'repeat(23, minmax(0, 1fr))',
        '21': 'repeat(21, minmax(0, 1fr))',
        '22': 'repeat(22, minmax(0, 1fr))',
        '24': 'repeat(24, minmax(0, 1fr))',
        
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 18',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 20',
        'span-22': 'span 22 / span 20',
        'span-23': 'span 23 / span 20',
        'span-24': 'span 24 / span 20',
        // Add more as needed
      },
      colors:{
        BGprimary:'var(--color-bg-main)',
        BGseconday:'var(--color-bg-subMain)',
        mainPurple:'var(--main-purple)',
        textPrimary:'var(--text-primary)',
        textSecondary:'var(--text-secondary)',
        colorDisable:'var(--color-disable)',
        layoutBg:'var(--layoutBg)',
        modalBg:'var(--modalBg)',
        borderColor:'var(--borderColor)',
        hoverColor:'#594A99'
      },
    },
  },
  plugins: [],
  darkMode: 'class'
};
export default config;
