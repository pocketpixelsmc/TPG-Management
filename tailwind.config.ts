import type { Config } from "tailwindcss";

const config: Config = {
  future: {
    hoverOnlyWhenSupported: true
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        'auto-fill-300': 'repeat(auto-fill, minmax(300px, 1fr))',
        'auto-fit-300': 'repeat(auto-fit, minmax(300px, 1fr))',
        'auto-fill-150': 'repeat(auto-fill, minmax(150px, 1fr))',
        'auto-fit-150': 'repeat(auto-fit, minmax(150px, 1fr))',
      },
      screens: {
        'max-sm' : {'max': '639px'},
      },
    },
  },
  plugins: [],
};
export default config;
