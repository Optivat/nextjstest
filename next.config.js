const { withExpo } = require("@expo/next-adapter");

/** @type {import('next').NextConfig} */
const nextConfig = withExpo({
  output: process.env.BUILD_IOS === "1" ? "export" : undefined,
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    "react-native",
    "react-native-web",
    "expo",
      "expo-camera",
      "expo-modules-core",
  ],
  experimental: {
    forceSwcTransforms: true,
  },
});

module.exports = nextConfig;
