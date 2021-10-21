module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/test',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/zip',
          },
        ],
      },
    ];
  },
};
