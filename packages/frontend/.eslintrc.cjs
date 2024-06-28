/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['plugin:react-hooks/recommended'],
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
};
