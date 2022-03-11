module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  globals: {
    wx: 'readonly',
  },
  rules: {
    'no-unused-vars': 'off'
  },
}
//可以添加规则 禁止删除忽略规则 请严格执行
