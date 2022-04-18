module.exports = [
  {
    // ...
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer']
      })
    ],
    resolve: {
      fallback: {
        fs: false,
        tls: false,
        net: false,
        path: false,
        zlib: false,
        http: false,
        https: false,
        stream: false,
        crypto: false,
        'path-browserify': require.resolve('path-browserify'),
        'crypto-browserify': require.resolve('crypto-browserify') //if you want to use this module also don't forget npm i crypto-browserify
      }
    }
  }
];
