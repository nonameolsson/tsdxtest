module.exports = {
  extends: [
    'react-app',
    'plugin:react-perf/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'react-hooks', 'react-perf'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-console': 'error',
  },
};
