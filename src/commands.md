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

> Run unit tests in PhantomJS with [Karma](http://karma-runner.github.io/0.13/index.html). See [Unit Testing](unit.md) for more details.

- Supports ES2015 in test files.
- Supports all webpack loaders.
- Easy [mock injection](http://vuejs.github.io/vue-loader/workflow/testing-with-mocks.html).

### `npm run e2e`

> Run end-to-end tests with [Nightwatch](http://nightwatchjs.org/). See [End-to-end Testing](e2e.md) for more details.

- Run tests in multiple browsers in parallel.
- Works with one command out of the box:
  - Selenium and chromedriver dependencies automatically handled.
  - Automatically spawns the Selenium server.


