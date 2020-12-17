module.exports = {
  plugins: ['react', 'prettier', 'react-hooks', 'react-perf', 'markdown'],
  extends: [
    'react-app',
    'plugin:react-perf/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-console': 'error',
  },
};
