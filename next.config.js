module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.ctfassets.net", "res.cloudinary.com", "_.cloudinary.com", "evm.heg.mybluehost.me", "github.com"],
  },

  async redirects() {
    return [
      {
        source: "/thoughts/:path*",
        destination: "/posts/:path*",
        permanent: true,
      },
      {
        source: "/essays/:path*",
        destination: "/posts/:path*",
        permanent: true,
      },
      {
        source: "/rss",
        destination: "/rss.xml/",
        permanent: true,
      },
    ];
  },

  experimental: {
    scrollRestoration: true,
  },
};
