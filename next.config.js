module.exports = {
  experimental: {
    scrollRestoration: true,
  },
  reactStrictMode: true,
  images: {
    domains: [
      "images.ctfassets.net",
      "res.cloudinary.com",
      "_.cloudinary.com",
      "evm.heg.mybluehost.me",
      "i0.wp.com",
      "dltnio.wc.reclaim.press",
    ],
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
    ];
  },
};
