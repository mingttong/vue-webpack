# hq5544 的 vue-webpack 模版 hq5544/vue-webpack template

The template is forked from official vuejs-templates/webpack repo.
Using a lot of ES6 and the rules preset of airbnb eslint.

这是一个基于官方 vuejs-templates/webpack 模版更改的项目.
使用了大量 ES6 语法, 还有 airbnb 的 eslint 标准.

[Document](http://hq5544.github.io/vue-webpack/)
[文档](http://hq5544.github.io/vue-webpack/)

##  增加内容

* Add more vue plugins
    * eslint-config-airbnb
    * fastclick
    * vue-resource
    * vue-router
    * vue-validator
    * vuex
* Add some basic component and utils that we can use
    * popup
    * button
    * loading bar
    * loading more icon
    * ele
    * group
    * code button
    * address selecter
    * free-draging button
    * `json` `form` `jsonp` methods
    * form validator
* Add the function to change the path of different mode
* More


* 增加了更多的 vue 插件
    * eslint-config-airbnb
    * fastclick
    * vue-resource
    * vue-router
    * vue-validator
    * vuex
* 增加了可能使用到的基础组件和工具函数
    * 弹窗
    * 按钮
    * 载入进度条
    * 加载更多动画
    * 行
    * 组
    * 验证码按钮
    * 街区选择
    * 自由拖动的按钮
    * 封装了 `json` `form` `jsonp` 三种请求方法
    * 表单验证函数
* 增加了可以改变生产和开发的文件路径
* 其它细节

##  如何使用

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).
这是一个 [vue-cli](https://github.com/vuejs/vue-cli) 模版。

``` bash
$ npm install -g vue-cli
$ vue init hq5544/vue-webpack your-project-name
$ cd your-project-name
$ npm install
$ npm run dev
```


