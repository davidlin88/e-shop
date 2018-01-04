# e-shop

> A Vue.js project

## 小鱼干
* `text-overflow:ellipsis`+`overflow:hidden`+`white-space:nowrap`:超出文本省略
* `a`标签的颜色要另定,不会继承body
* 是created不是creat啊啊啊啊啊
* v-bind时给src等赋值方法:data内定义时写作`src: require('../images/1.png')`
* vue :class时,拼接字符串:`:class="'board-item-' + item.id"`,双引号内,字符串放在单引号里

> this[attr]，其实是原生js里面获取对象属性的方法,或者给对象属性赋值。获取对象属性有点方法和中括号方法.中括号法可以用变量作为属性名,点方法旧不可以，即：
```
var objVue = {};
objVue.isShowLogDialog  = false;
var arg = 'isShowLogDialog'    // 这里就可以代表传入的任何参数 
console.log(objVue.arg)    // undefined
console.log(objVue[arg])   // false;
```
* vue里dom元素的打开和关闭方式都是以开关的形式存在的(v-if/v-show),要会转变思想
* `this.$emit('on-close')`:将子组件的on-close事件发射给父组件
* `props`:从父组件获取的参数
* `transition: all .5s ease`:ease是动画逐渐变慢,缓和
* `transform: translateY(-500px)`坐标和`box-shadow`一样,右下为xy的正方向
* `router-link`标签可通过增加`tag="li"`修改默认的a标签为特定标签

## 这是个啥?
* transition动画里,v-if和v-show为什么会有表现上的差异?
* this[attr]是什么用法?
> Object[property]是js获取对象属性值的形式,另可写作`Object.property`,但写作中括号形式时可以传递动态参数
* `onSuccessLog`里的data哪来的?怎么传来的
* dialog.vue里的`<slot>empty</slot>`有什么用?
* `userFlag`和`passwordFlag`是个啥?
> 一种小技巧,可以让用户没有编辑输入框时,校验结果不显示的技巧

```
<template>
  <span>{{userErrors.errorText}}</span>
</templa>
<script>
  computed:{
  userErrors () {
    let errorText, status
    if (!/@/g.test(this.usernameModel)) {
      status = false
      errorText = '格式不正确,需有@'
    } else {
      console.log(this.userFlag)
      status = true
      errorText = ''
      } if (!this.userFlag) {
        console.log(this.userFlag)
        errorText = ''
        this.userFlag = true
      }
      return {
        status,
        errorText
      }
    }
  }
</script>
```

> 原理:用户打开登录页=>进行userErrors的计算=>判断!this.userFlag为真(userFlag为undefiend)=>设置校验结果为空+this.userFlag为true=>校验结果显示为空

> 用户编辑输入框=>触发userErrors的计算=>!this.userFlag为false=>跳过=>显示校验结果
