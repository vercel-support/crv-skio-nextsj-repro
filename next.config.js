module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/',
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
