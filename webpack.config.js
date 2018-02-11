module.exports = {
  "entry": "./src/index.mjs",
  "resolve" : {"extensions": [".js", ".mjs"]},
  "output": {
    "path": __dirname,
    "filename": "bundle.js"
  }
};
