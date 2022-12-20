/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    if (process.env.NODE_ENV === "production") {
      return [
        {
          source: "/graphql",
          destination: "https://countries.trevorblades.com/",
        },
      ];
    }

    return [
      {
        source: "/graphql",
        destination: "https://countries.trevorblades.com/",
      },
    ];
  },
};

module.exports = nextConfig;
