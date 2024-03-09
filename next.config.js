module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.ctfassets.net", "res.cloudinary.com", "_.cloudinary.com", "evm.heg.mybluehost.me"],
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
