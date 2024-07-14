module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.ctfassets.net",
      "res.cloudinary.com",
      "_.cloudinary.com",
      "evm.heg.mybluehost.me",
      "sqb.jln.mybluehost.me",
      "i0.wp.com",
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
