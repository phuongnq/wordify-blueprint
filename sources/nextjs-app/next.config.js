module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/static-assets/:path*',
        destination: 'http://localhost:8080/static-assets/:path*',
      },
      {
        source: '/api/1/site/graphql:path*',
        destination: 'http://localhost:8080/api/1/site/graphql:path*',
      },
      {
        source: '/api/1/site/content_store/:path*',
        destination: 'http://localhost:8080/api/1/site/content_store/:path*'
      }
    ]
  },
}
