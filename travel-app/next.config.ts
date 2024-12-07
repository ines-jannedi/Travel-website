const withTypescript = require('@zeit/next-typescript')({
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
});

module.exports = withTypescript({
  // Your Next.js configuration
});
