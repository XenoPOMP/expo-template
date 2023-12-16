# Expo template

<p>
<img alt="GitHub release (latest by SemVer including pre-releases)" src="https://img.shields.io/github/downloads-pre/XenoPOMP/expo-template/latest/total?style=flat&label=Release&color=blue">
</p>

<hr/>

Start using Expo template - template for creating mobile crossplatform apps using React Native and TypeScript.

## ⚒️ Node version

This repo requires version of Node `18.7+`.

## 🏃‍♂️ Running project

You can use mobile **Expo Go** app.

Run:
```shell
yarn start:dev
```

Then scan QR-code from terminal and open link in **Expo Go**.

## 🤖 Running local Android emulator

If you didn`t installed Android SDK, then [follow guide](https://docs.expo.dev/workflow/android-studio-emulator/) from Expo docs.

Then you can run Android emulator by running this command:
```shell
yarn android:dev
```

## 📚 Stack

Here you can see, which technologies did I used to create this project:

- **Framework** - Expo, React Native
- **Styles** - TailwindCSS, Nativewind (this lib makes Tailwind works in React Native with classic approach (via classes))
- **State management** - Redux Toolkit, Redux Persist, AsyncStorage
- **Navigation** - `react-native-screens/native-stack`
