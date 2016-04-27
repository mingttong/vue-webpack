# 组
##传入参数

```js
props: [
  'single',
  'fixed'
]
```

- single 只包含一个按钮的模式
	- 布尔
- fixed 固定在底部，只包含一个按钮的模式
	- 布尔

## 样式
顶部外边距 10px。
透明背景。
![-w300](http://markdownpic.hq5544.com/2016-04-27-14617501240718.jpg)
![-w300](http://markdownpic.hq5544.com/2016-04-27-14617509545564.jpg)


## 用法
组件引入。
三个 slot：默认、tip_top、tip_bottom。
tip 外部嵌套要加 .tip 类，tip 内可嵌套 ele 进行两段对齐，此时 ele 透明背景，边距自适应。

