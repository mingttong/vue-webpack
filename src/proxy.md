# 开发过程中的 API 代理

当将当前的模版和已经存在的后台模版进行融合时，一个公共需求就是本地开发时接入后台 API。为了这样，我们可以运行开发服务和 side-by-side 或者远程的后台 API，并且让开发服务代理全部的实际后台 API 请求。

在 `config.js` 内编辑 `dev.proxyTable` 来配置代理规则。开发服务器使用 [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware) 进行代理，因此你应该参考一下文档来了解更多用法。下面有一个简单示例：

``` js
// config.js
module.exports = {
  // ...
  dev: {
    proxyTable: {
      // 将所有以 /api 开头的请求通过 jsonplaceholder 代理
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
```

上面的例子中将 `/api/posts/1` 用 `http://jsonplaceholder.typicode.com/posts/1` 代理。


