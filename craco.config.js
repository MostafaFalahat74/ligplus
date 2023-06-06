const path = require('path')

module.exports = {
    reactScriptsVersion: 'react-scripts',
  
    webpack: { 
      alias: {
        '@src': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/component'),
        "@images": path.resolve(__dirname, 'src/assets/images'),
        "@global" : path.resolve(__dirname, 'src/assets/style'),
        "@pubic" : path.resolve(__dirname, 'pubic')
      }
    }
  }
  