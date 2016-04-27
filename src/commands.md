# 指令

所有的开发之灵都包含在 [NPM Scripts](https://docs.npmjs.com/misc/scripts) 中。

### `npm run dev`

> 开始一个 Node.js 本地开发服务。详情请看 [开发过程中的 API 代理](proxy.md)。

- Webpack + `vue-loader` 开发 Vue components SPA
- 热重载的数据持久化
- 编译错误时的数据持久化
- 保存时自动 ESLint
- Source maps

### `npm run build`

> 编译生产环境静态资源。详情请看 [融合后台](backend.md)。

- JavaScript 通过 [UglifyJS](https://github.com/mishoo/UglifyJS2) 压缩。
- HTML 通过 [html-minifier](https://github.com/kangax/html-minifier) 压缩。
- 全部组件中的 CSS 会被剥离生成一个单独文件，并通过 [cssnano](https://github.com/ben-eb/cssnano) 压缩。
- 所有的静态资源都带有自己的 hash 版本，并且超长缓存。生产环境的 `index.html` 会自动加入对应的 url 来引入静态资源。

### `npm run unit`

> 在 PhantomJS 通过 [Karma](http://karma-runner.github.io/0.13/index.html) 运行单元测试。详情请看 [单元测试](unit.md)。

- 文件支持 ES2015。
- 支持所有的 webpack loaders.
- Easy [mock injection](http://vuejs.github.io/vue-loader/workflow/testing-with-mocks.html).

### `npm run e2e`

> 通过 [Nightwatch](http://nightwatchjs.org/) 运行端到端测试。详情请看 [端到端测试](e2e.md)。

- 同时在浏览器运行多个测试。
- 模拟器外一键运行：
  - 自动安装 Selenium 和 chromedriver 依赖。
  - 自动运行（spawn） Selenium 服务。


