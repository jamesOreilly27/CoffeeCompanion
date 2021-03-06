const presets = [ "env", "es2015", "react"]

const plugins = [
  [
    'babel-plugin-import',
    {
      'libraryName': '@material-ui/core',
      'libraryDirectory': 'esm',
      'camel2DashComponentName': false
    },
    'core'
  ],
  [
    'babel-plugin-import', {
      'libraryName': '@material-ui/icons',
      'libraryDirectory': 'esm',
      'camel2DashComponentName': false
    },
    'icons'
  ],
  "lodash"
]

module.exports = { plugins, presets }
