module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.ctfassets.net", "res.cloudinary.com", "_.cloudinary.com"],
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
        source: "/newsletter",
        destination: "https://thewanderingreader.substack.com/",
        permanent: true,
      },
    ];
  },
};
