const pkg = require('./package.json')
const typescript = require('typescript')
const external = Object.keys(pkg.dependencies)
const global = (() => {
  const members = {}
  external.forEach((value) => {
    members[value] = value
  })
  return members
})()

const banner = `/*!
* ${pkg.name} v${pkg.version}
*
* @license
* Copyright (c) 2018 ${pkg.author}
*/`

module.exports = {
  input: 'src/index.ts',
  name: 'index',

  banner,
  format: ['umd', 'umd-min'],
  exports: 'named',
  moduleName: pkg.name,
  alias: {
    '@': './src',
  },

  global,
  external,

  plugin: ['vue', 'css-only'],

  // Plugin options

  vue: {
    css: false,
  },

  typescript2: {
    tsconfig: './tsconfig.main.json',
    clean: true,
    typescript: typescript,
  },

  'css-only': {
    output: 'dist/' + pkg.name + '.css',
  },
}