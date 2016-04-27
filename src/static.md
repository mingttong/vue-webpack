# 处理静态资源

你会注意到，项目中我们有两个目录存放静态资源：`src/assets` 和 `static/`。这两者有什么区别呢？

### 打包资源

为了回答这个问题，我们首先要理解 webpack 如何处理静态资源。在 `vue` 组件中，所有的模版和 CSS 都是通过 `vue-html-loader` 和 `css-loader` 分析静态资源 URL。例如，在 `<img src="./logo.png">` 和 `background: url(./logo.png)`，`"./logo.png"` 是一个相对路径，**会被 webpack 作为依赖模块处理**。

因为 `logo.png` 不是 JavaScript，当作为一个依赖模块处理的时候，我们需要使用 `url-loader` 和 `file-loader` 来处理。这个模版已经为你配置好这些 loader，因此你可以直接使用例如文件名指纹和内嵌的 base64 代码等特性，在使用相对路径的某块的时候也不用担心部署问题。

因为 build 过程中，这些资源也许会被内嵌／复制／重命名，它们本质上是源代码的一部分。这就是为什么我们建议把要打包的静态资源放在 `/src` 中，和其它源代码并列。事实上，你甚至不用把全部静态资源放在 `/src/assets`：捏可以在模块／组件的基础上组织它们。例如，你可以为每一个组件自己建一个文件夹，让静态资源紧挨着它。

### 资源路径的处理

- **相对路径**，例如，`./assets/logo.png` 将会被解析成依赖模块。它们将会被基于 webpack 输出配置所自动生成的 URL 所代替。

- **无前缀 URL**，例如，`assets/logo.png` 将会被视为相对路径，并且变成 `./assets/logo.png`。

- **带有 `~` 前缀的 URL** 将会被视为依赖模块的请求，类似于 `require('some-module/image.png')`。如果你想要让 webpack 将它作为模块处理，可以使用这个前缀。例如，如果你想要用 `assets` 作为 alias，你需要使用 `<img src="~assets/logo.png">` 来确保 alias 可以使用。

- **相对跟目录的 URL**，例如，`/assets/logo.png` 完全不会被 webpack 处理。

### “真正的”静态资源

相比之下，`static/` 完全不会被 webpack 处理：它们会直接原样的复制到目标位置，也不更改文件名。你必须根据 `config.js` 文件中 `build.assetsPublicPath` 和 `build.assetsSubDirectory`，用绝对路径饮用这些文件。

假设一个带有如下默认配置的例子：

``` js
// config.js
module.exports = {
  // ...
  build: {
    assetsPublicPath: '/',
    assetsSubDirectory: 'static'
  }
}
```

存放在 `static/` 中的文件应该用绝对路径 `/static/[filename]` 来引用。如果将 `assetSubDirectory` 的值改成 `assets`，那么这些 URL 将会变成 `/assets/[filename]`。

我们将会在 [下一节](backend.md) 了解更多配置。


