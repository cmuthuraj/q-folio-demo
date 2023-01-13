const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? "../" : undefined,
  images: {
    loader: "custom",
    unoptimized: true,
  },
};

module.exports = nextConfig;
