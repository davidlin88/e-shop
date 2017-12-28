# e-shop

> A Vue.js project

## 小鱼干
* `text-overflow:ellipsis`+`overflow:hidden`+`white-space:nowrap`:超出文本省略
* `a`标签的颜色要另定,不会继承body
* 是created不是creat啊啊啊啊啊
* v-bind时给src等赋值方法:data内定义时写作`src: require('../images/1.png')`
* vue :class时,拼接字符串:`:class="'board-item-' + item.id"`,双引号内,字符串放在单引号里
* transition动画里,v-if和v-show为什么会有表现上的差异?
* this[attr]是什么用法?
> this[attr]，其实是原生js里面获取对象属性的方法,或者给对象属性赋值。获取对象属性有点方法和中括号方法.中括号法可以用变量作为属性名,点方法旧不可以，即：
```
var objVue = {};
objVue.isShowLogDialog  = false;
var arg = 'isShowLogDialog'    // 这里就可以代表传入的任何参数 
console.log(objVue.arg)    // undefined
console.log(objVue[arg])   // false;
```
* vue里dom元素的打开和关闭方式都是以开关的形式存在的(v-if/v-show),要会转变思想