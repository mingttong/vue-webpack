# 按钮
##传入参数

```js
props: {
  text: {
    default: '确认'
  },
  cut: {
    default: 0
  },
  allow: {
    default: true
  },
  alert: {
    default: false
  },
  warning: {
    default: false
  },
  next: {
    default: false
  },
  btnFn: {
    type: Function,
    default: function () {}
  }
}
```

- text 按钮文子
	- 字符串
	- 默认“确认”
- cut 宽度被分割的分数，例如 cut＝2，即宽度50%
	- 字符串
	- 默认 100px
- allow 是否可以点击
	- 布尔
- alert 警示类样式
	- 布尔
- warning 提示类样式
	- 布尔
- next 下一步样式
	- 布尔
- btnFn 按钮点击方法
	- 函数

## 样式
默认、警示、提示、下一步、禁用，五种样式。

无圆角。

![-w200](http://markdownpic.hq5544.com/2016-04-27-14617478877959.jpg)
![-w200](http://markdownpic.hq5544.com/2016-04-27-14617480656707.jpg)
![-w200](http://markdownpic.hq5544.com/2016-04-27-14617481024412.jpg)
![-w200](http://markdownpic.hq5544.com/2016-04-27-14617481277679.jpg)
![-w200](http://markdownpic.hq5544.com/2016-04-27-14617481559999.jpg)

## 用法
组件引入。

