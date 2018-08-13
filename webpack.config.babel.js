export default {
  "output": {
    "filename": "bundle.js"
  },
  "devtool": "sourcemap",
  "module": {
    "rules": [{
      "loader": "babel-loader",
      "query": {
                "babelrc": false,
                "plugins": ["transform-function-bind"],
               }  
    }]
  }
};