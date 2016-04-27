# 弹窗基础

##传入参数

```js
props: [
  'title',
  'alertShow',
  'btnList'
]
```

- title 弹窗标题
	- 字符串
- alertShow 是否展示
	- 布尔
- btnList 按钮列表 
	- 数组

```js
[{
  text: '去登录',
  fn () {} // 按钮方法，每次点击弹窗都会自动消失
}]
```

## 用法
基础组件，无法单独使用。
包含一个 slot，用于插入弹窗 DOM。

