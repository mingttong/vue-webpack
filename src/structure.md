# 项目结构

``` bash
.
├── config.js                   # main project config
├── build/                      # webpack config files
│   └── ...
├── src/
│   ├── main.js                 # app entry file
│   ├── App.vue                 # main app component
│   ├── components/             # ui components
│   │   └── ...
│   └── assets/                 # module assets (processed by webpack)
│       └── ...
├── static/                     # pure static assets (directly copied)
├── test/
│   └── unit/                   # unit tests
│   │   ├── specs/              # test spec files
│   │   ├── index.js            # test build entry file
│   │   └── karma.conf.js       # test runner config file
│   └── e2e/                    # e2e tests
│   │   ├── specs/              # test spec files
│   │   ├── custom-assertions/  # custom assertions for e2e tests
│   │   ├── runner.js           # test runner script
│   │   └── nightwatch.conf.js  # test runner config file
├── .babelrc                    # babel config
├── .eslintrc.js                # eslint config
├── index.html                  # index.html template
└── package.json                # build scripts and dependencies
```

### `config.js`

这是进行开发和生产设置的大多数公共配置文件。详情请看[开发过程中的 API 代理](proxy.md)和[融合后台](backend.md)。

### `build/`

这个目录包含了开发环境和生产环境实际的 webpack 配置。通常你不需要修改这些文件，除非你想要自定义 webpack loaders，这是你也许需要看一下 `build/webpack.base.conf.js` 这个文件。

### `src/`

这里是项目大多数的源代码。在官方模版的基础上，src／ 整合了 vuex、vue－router、vue－resource、vue-validator 的基本配置，可以直接使用。详情请看[组件](components.md)

### `static/`

这里包含了你不想通过 webpack 打包的静态资源。这些文件在 build 时候会直接复制到生产目录中。

详情请看[静态资源](static.md)。

### `test/unit`

包含了单元测试相关文件。详情请看[单元测试](unit.md)。

### `test/e2e`

包含了端到端测试相关文件。详情请看[端到端测试](e2e.md)。

### `index.html`

这是 SPA 的 `index.html` 的**模版**。在开发和生产过程中，webpack 将会自动将静态资源和 url 相关的静态资源注入到最终的 html 文件中。

### `package.json`

NPM 的源文件，包含了依赖列表和 [指令](commands.md)。


