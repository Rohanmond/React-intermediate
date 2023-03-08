module.exports = {
  plugins: ['@babel/syntax-dynamic-import'],
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        targets: { node: 'current' },
      },
    ],
    '@babel/preset-react',
  ],
};
