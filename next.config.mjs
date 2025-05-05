/** @type {import('next').NextConfig} */

import webpack from 'webpack';

const nextConfig = {
  reactStrictMode: false,

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    domains: [], // Add image domains if needed
  },

  webpack(config, { isServer }) {
    if (!isServer) {
      config.plugins.push(
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
        })
      );
    }

    // Handle CSS imports from node_modules (if needed)
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      include: /node_modules/,
    });

    return config;
  },
};

export default nextConfig;
