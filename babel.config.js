module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for expo-router
      'nativewind/babel',
      'expo-router/babel',
      ['module-resolver', { root: ['./'], alias: { '@': './*' } }],
    ],
  };
};
