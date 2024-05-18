# Issues and solutions:

- Problem: `Error: [Reanimated] Mismatch between JavaScript part and native part of Reanimated (3.11.0 vs 3.10.0).`

Solution:

```code
npx expo install react-native-reanimated

Then inside bable.config.js we need to paste plugin: ['react-native-reanimated/plugin'],
```
