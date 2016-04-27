# 弹窗
##传入参数
无。

## 样式
css scale 动画。

自带黑色半透明遮罩层。

![-w300](http://markdownpic.hq5544.com/2016-04-27-14617512487423.jpg)
![-w300](http://markdownpic.hq5544.com/2016-04-27-14617514055431.jpg)


## 用法
组件引入。

默认 app.vue 中已经引入。

通过 utils.js 里面的 alert 和 confrim 方法调用。

```js
utils.alert('请输入11位手机号码')

utils.confirm('要删除吗?', '提示', [
  {
    text: '删除',
    fn () {}
  },
  {
    text: '取消',
    fn () {}
  }
])
```


