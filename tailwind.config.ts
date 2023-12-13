import { type Config } from 'tailwindcss';

// import ThemerPlugin from 'tailwindcss-themer';

const twConfig: Config = {
  content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default twConfig;
