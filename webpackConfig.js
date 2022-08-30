const CopyPlugin = require("copy-webpack-plugin");
const path = require('path')

plugins: [
    new CopyPlugin({
      patterns: [
        { from: "views", to: path.join(__dirname, '.webpack', 'service', 'views') },
      ],
    }),
  ]