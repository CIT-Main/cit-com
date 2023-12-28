const forms = require('@tailwindcss/forms')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(var(--primary, 1))',
      },
    },
  },
  plugins: [forms],
}
