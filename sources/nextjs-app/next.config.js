module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/static-assets/:path*',
        destination: 'http://localhost:8080/static-assets/:path*',
      },
    ]
  },
}
