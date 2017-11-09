# webpack
webpack research

в современном варианте webpack.config.babel.js оформляется в стилистике импортов/экспортов (в октябре 2017 не поддерживается mjs)

для его обработки используется .babelrc

если там указать только env, то преобразование будет применено к webpack.config.babel.js
далее, если в webpack.config.babel.js указать просто babel-loader, то env будет применено и к файлам js проекта.

это сделано в https://github.com/GossJS/webpack_starters24102017 
 (демо полей класса и stage-0)

а если в webpack.config.babel.js указать игнорирование .babelrc, то нужно в webpack.config.babel.js указать и все пресеты и плагины.

это сделано в https://github.com/GossJS/webpack_starters31102017
 (демо оператора bind и babel-plugin-transform-function-bind - хотя возм. достаточно stage-0)
 
 ===
 
 здесь в ветке simple рассматривается примитивный вариант без babel - вебпак собирает bundle из модулей mjs и его файл webpack.config.js
 
 см. также  babel-конфигурацию для реакта https://github.com/GossJS/react_starters1
 
 и конфигурации для реакта для dev и prod - https://github.com/GossJS/quick-start-react

минималистичная сборка для портфолио в хироку с использованием преобразователя SASS

https://github.com/GossJS/heroku/tree/sass_webpack
