# 代码质量配置

这个模版使用了 [ESLint](http://eslint.org/) 作为代码质量工具，并且使用了 [airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) 的规则，并且带有一些自定义规则。

如果你对默认规则不习惯，你有如下配置项：

1. 在 `.eslintrc.js` 改写单独的规则。例如，可以加入下面的规则来强制以分号结尾：

  ``` js
  "semi": [2, "always"]
  ```

2. 在 `.eslintrc.js` 移除 `extends: 'standard'` 然后使用一个完全自定义的 eslint 配置。详情请看 [ESLint documentation](http://eslint.org/docs/user-guide/configuring)。

3. 完全禁用 eslint：在 `build/webpack.base.conf.js` 中注释掉 `module.preLoaders` 模块。

如果你正在使用一种可编译的 js 语言，例如CoffeeScript，你同样需要禁用 eslint。


