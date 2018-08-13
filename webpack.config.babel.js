import HtmlWebpackPlugin from 'html-webpack-plugin';
export default {
  "output": {
    "filename": "bundle.js"
  },
  "devtool": "sourcemap",
  "module": {
    "rules": [{
      "test": /\.mjs$/,
      "loader": "babel-loader",
      "query": {
                "babelrc": false,
                "plugins": ["transform-function-bind"],
               }
    }]
  },
  "plugins": [
    new HtmlWebpackPlugin()
  ]
};
