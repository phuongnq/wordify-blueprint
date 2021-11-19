module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/static-assets/:path*',
        destination: 'http://localhost:8080/static-assets/:path*',
      },
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/api/:path*'
      }
    ]
  },
}
