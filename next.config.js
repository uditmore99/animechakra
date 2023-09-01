/** @type {import('next').NextConfig} */
const nextConfig = {};

// module.exports = nextConfig;
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s4.anilist.co",
        port: "",
        pathname: "/file/anilistcdn/media/anime/cover/large/**",
      },
    ],
  },
};
