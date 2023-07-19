/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        RobotoMonoRegular: ['Roboto Mono Regular', 'monospace'],
        RobotoMonoBold: ['Roboto Mono Bold', 'monospace'],
        RobotoMonoItalic: ['Roboto Mono Italic', 'monospace'],
        RobotoMonoMedium: ['Roboto Mono Medium', 'monospace'],
        RobotoMonoBoldItalic: ['Roboto Mono BoldItalic', 'monospace'],
        RobotoMonoExtraLight: ['Roboto Mono ExtraLight', 'monospace'],
        RobotoMonoExtraLightItalic: ['Roboto Mono ExtraLightItalic', 'monospace'],
        RobotoMonoLight: ['Roboto Mono Light', 'monospace'],
        RobotoMonoLightItalic: ['Roboto Mono LightItalic', 'monospace'],
        RobotoMonoMediumItalic: ['Roboto Mono MediumItalic', 'monospace'],
        RobotoMonoSemiBold: ['Roboto Mono SemiBold', 'monospace'],
        RobotoMonoSemiBoldItalic: ['Roboto Mono SemiBoldItalic', 'monospace'],
        RobotoMonoThin: ['Roboto Mono Thin', 'monospace'],
        RobotoMonoThinItalic: ['Roboto Mono ThinItalic', 'monospace'],
      },
    },
    colors: {
      my_bg_color: '#f7f7f7',
    },
  },
  plugins: [require('flowbite/plugin')],
};
