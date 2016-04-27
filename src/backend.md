# 和后台框架融合

如果你在构建一个纯静态 app（和后台 API 独立部署），也许你不需要去编辑 `config.js`。然而，如果你想要将模版融合到已经存在的后台模版中，例如 Rails/Django/Laravel，这些项目有自己的结构，你可以编辑 `config.js` 来直接将前端资源整合进后台项目中。

让我们看一下默认的 `config.js`：

``` js
var path = require('path')

module.exports = {
  build: {
    index: path.resolve(__dirname, 'dist/index.html'),
    assetsRoot: path.resolve(__dirname, 'dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true
  },
  dev: {
    port: 8080,
    proxyTable: {}
  }
}
```

在 `build` 一部分，我们有如下配置项：

### `build.index`

> 必须是一个本地文件系统的绝对路径。

这是 `index.html`（注入资源 url 的文件）所在位置。

如果你正在使用带有后台框架的模版，你可以编辑相应的 `index.html`文件，并且把路径指向后台 app 渲染的视图。例如：Rails app 的 `app/views/layouts/application.html.erb`，或者 Laravel app 的 `resources/views/index.blade.php`。

### `build.assetsRoot`

> 必须是一个本地文件系统的绝对路径。

需要指向包含你的 app 的全部静态资源的路径。例如，Rails/Laravel 的 `public/`。

### `build.assetsSubDirectory`

在 `build.assetsRoot` 路径下面生成 webpack 打包的静态资源，防止文件和其它在 `build.assetsRoot` 路径下的文件混合在一起。例如，如果 `build.assetsRoot` 设置成 `/path/to/dist`，`build.assetsSubDirectory` 设置成 `static`，那么所有的 webpack 打包后的静态资源会生成在 `path/to/dist/static` 路径下。

这个文件夹在每次编译前都会被清除，所以这里只能包含编译后的静态资源。

在 `static/` 内的文件在打包时将会直接被复制进入这个路径下。这意味着，如果你改变了这个前缀，所有指向 `static/` 内文件的绝对路径也都需要改变。详情请看 [静态文件的处理](static.md)。

### `build.assetsPublicPath`

这里应该是 `build.assetsRoot` 通过 HTTP 服务分发静态资源的路径。大多数情况下（如果项目有自己的域名），应该是根目录(`/`)。只有当后台框架分发静态资源带有前缀的时候，才需要改变。在内部处理时，这个路径将会传递给 webpack 的 `output.publicPath`。

但是实际应用的时候，尤其是部署在测试服务器上的时候（不是本地开发环境），很多项目共用一台服务器，并且不会给每个测试配置自己的域名，项目入口是指向一个 html 文件，而不是一个以 / 结尾的路径，因此这里默认值为 `./`。

### `dev.assetsPublicPath`

由于上一条所述原因，这里默认为 `/`，即官方模版的默认值，用于本地开发。

### `build.productionSourceMap`

是否为生产环境生成 source maps。

### `dev.port`

本地开发服务要监听的端口。

### `dev.proxyTable`

定义本地开发服务的代理规则。详情请看[开发过程中的 API 代理](proxy.md)


