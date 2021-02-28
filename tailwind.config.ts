import lineClamp from 'windicss/plugin/line-clamp';
import colors from 'windicss/colors';

import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  darkMode: 'class',
  plugins: [lineClamp],
  theme: {
    extend: {
      colors,
    },
  },
});
