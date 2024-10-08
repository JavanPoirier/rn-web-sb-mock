import type { StorybookConfig } from '@storybook/react-webpack5'
import { join, dirname, resolve } from 'path'
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
  stories: [
    '../packages/app/**/*.mdx',
    '../packages/app/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: [
          'react-native-vector-icons',
          'react-native-crypto',
          'crypto-browserify',
          'solito',
        ],
        babelPlugins: [
          '@babel/plugin-transform-private-methods',
          '@babel/plugin-transform-private-property-in-object',
          '@babel/plugin-transform-export-namespace-from',
          '@babel/plugin-transform-class-properties',
          '@babel/plugin-syntax-dynamic-import',
        ],
      },
    },
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  staticDirs: [],
  webpackFinal: async (config) => {
    config?.plugins?.push(new NodePolyfillPlugin())
    if (config.resolve) {
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: config.resolve.extensions,
        }),
      ]

      config.resolve.extensions = ['.mock.ts', ...config.resolve.extensions]

      config.resolve.alias = {
        ...config.resolve.alias,
        '@storybook/test': resolve(__dirname, '../node_modules/@storybook/test/dist/index.mjs'),
        '@powersync/react-native$': resolve(
          __dirname,
          '../node_modules/@powersync/react',
        ),
      }
    }

    config.module?.rules?.push({
      test: /\.xml$/,
      loader: 'xml-loader',
      exclude: /\*.xml/,
    })

    config.module?.rules?.push({
      test: /\.yaml$/,
      loader: 'yaml-loader',
      exclude: /\*.yaml/,
    })

    config.module?.rules?.push({
      test: /\.sample$/,
      loader: 'sample-loader',
      exclude: /\*.sample/,
    })

    config.module?.rules?.push({
      test: /tsconfig.json$/,
      loader: 'tsconfig-loader',
      exclude: /\*.tsconfig.json/,
    })

    return config
  },
}
export default config
