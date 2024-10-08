// Babel config for web. Must be named babel.config.js to work with Jest (for some unknown reason).
module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      'babel-preset-expo',
      '@babel/preset-typescript',
      [
        '@babel/preset-env',
        {
          modules: false,
          targets: {
            browsers: '> 1%',
          },
          useBuiltIns: 'usage',
          corejs: 3,
          forceAllTransforms: true,
        },
      ],
    ],
    plugins: [
      ['@babel/plugin-transform-private-methods'],
      ['@babel/plugin-transform-private-property-in-object'],
      ['@babel/plugin-transform-class-properties'],
      [
        'module-resolver',
        {
          alias: {
            '@sample/app': './',
          },
        },
      ],
    ],
  }
}
