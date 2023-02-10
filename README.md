# React-Native-Reanimated evitar conflictos


## Instalación

```bash
npm install @react-navigation/drawer
```
```bash
npm install react-native-gesture-handler react-native-reanimated
```

## Agregar en el archivo babel.config.js

```python
    module.exports = {
      plugins: [
        'react-native-reanimated/plugin',
      ],
      presets: ['module:metro-react-native-babel-preset'],
    };
```

## Reset Cache
```bash
npx react-native start --reset-cache
```

## Ejecutar nuevamente el proyecto segun dispositivo corresponda

```bash
npx react-native run-ios

```

```bash
npx react-native run-android

```

## Mas info en

[React Native Reanimated Docs](https://docs.swmansion.com/react-native-reanimated/docs/2.3.0-alpha.2/installation)