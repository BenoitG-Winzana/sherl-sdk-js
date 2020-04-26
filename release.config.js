module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    {
      preset: 'angular',
      releaseRules: [{ type: 'docs', scope: 'README', release: 'patch' }],
    },
  ],
};
