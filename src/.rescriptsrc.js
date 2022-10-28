import { resolve } from 'path'
import resolveFrom from 'resolve-from'

const fixLinkedDependencies = config => {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      react$: resolveFrom(resolve('node_modules'), 'react'),
      'react-dom$': resolveFrom(resolve('node_modules'), 'react-dom'),
    },
  }
  return config
}

const includeSrcDirectory = config => {
  config.resolve = {
    ...config.resolve,
    modules: [resolve('src'), ...config.resolve.modules],
  }
  return config
}

export default [
  ['use-babel-config', '.babelrc'],
  ['use-eslint-config', '.eslintrc'],
  fixLinkedDependencies,
  // includeSrcDirectory,
]
