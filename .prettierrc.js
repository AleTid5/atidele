module.exports = {
  singleQuote: true,
  semi: true,
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@core/(.*)$',
    '^@server/(.*)$',
    '^@/app/(.*)$',
    '^[./]',
  ],
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
};
