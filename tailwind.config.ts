import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",        
        'modal': "url('/modal-bg.webp')",
      },
      boxShadow: {
        'solid': '0px 8px 0 0 #83abdc',
        'solid-up': '0px -8px 0 0 #83abdc',
      },
      fontFamily: {
        handlee: 'var(--font-handlee)',
        nunito: 'var(--font-nunito)',
        montserrat: 'var(--font-montserrat)'
      },
      colors:
      {
        softGreen: '#BED9B5',
        softYellow: '#FCF0D3',
        softBlue: '#B5D9D7',
        softPink: '#E3BBCE',  
      },
      keyframes: {
        'fade-in-out': {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'right',  },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left', },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.06)', opacity: '1' },
        },
      },
      animation: {
        'fade-in-out': 'fade-in-out 1s infinite',
        slideIn: 'slideIn 1s ease-in-out forwards',
        pulse: 'pulse 2s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
