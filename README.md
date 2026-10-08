# [Next.js Example](https://www.nextjs.org/)

<p>
  <!-- Web -->
  <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
</p>

This demo shows you how to setup your Next.js website to use packages from the Expo SDK like Camera, Gestures, Permissions, etc... Refer to the [Next adapter docs](https://github.com/expo/expo-cli/tree/main/packages/next-adapter) to learn how to add more React Native packages to your Next.js project.

## Launch your own

[![Launch with Expo](https://github.com/expo/examples/blob/master/.gh-assets/launch.svg?raw=true)](https://launch.expo.dev/?github=https://github.com/expo/examples/tree/master/with-nextjs)

### 🏁 New Commands

When targeting web, you'll need to use the Next.js CLI instead of Expo CLI:

- **Starting web**

  - 🚫 `yarn expo`
  - ✅ `yarn next`

- **Building web**
  - 🚫 `yarn expo export:web`
  - ✅ `yarn next build`

### 👀 More Info

- [Next Adapter repo](https://github.com/expo/expo-cli/tree/main/packages/next-adapter)
- [Next.js Documentation](https://docs.expo.dev/guides/using-nextjs/)
- An LLM was used to modify dependencies so project can build. I tried myself to fix them before using an LLM but failed.
