# Vpay
vue移动端支付密码窗插件，仿支付宝密码框。

### 插件安装
#### NPM
```
npm i Vpay
```
#### 引入插件
```
import Vue from 'vue'
import Vpay from 'Vpay'
Vue.use(Vpay)
```
#### 基本用法
```html 
<Vpay ref="pays"
  v-mode="show"
  @close="close"
  @forget="forget"
  @input-end="inputEnd"
></Vpay>
```
### API
| 参数 | 说明 |  类型 | 默认值 |
| - | :- |  :- | :-: |
| v-model | 密码框的显示隐藏 | Boolean | false | 
| digit | 密码的位数| Number | 6 |
| ref | 获取当前插件实例 | String | - |
| title | 弹窗标题 | String | 请输入支付密码 |
| loading-text | 正在支付的文字提示 | String | 正在支付 |
| finished-text | 支付成功的文字提示 | String | 支付成功 |
| duration | 支付成功提示的显示时间 | Number | 500 |

### Event 

| 事件名 | 说明 | 参数 |  
| :- | :- | :- |
| input-end | 密码输入完成后的回调函数 | - |
| close | 密码弹窗关闭后的回调函数 | - |
| forget | 点击忘记密码的回调函数 | - |
### input-end 回调参数
| 参数名 | 说明 | 类型 |
| - | :- | :- |
| val | 支付密码 | String |

### 插件内部方法  
| 方法名 | 说明 | 参数 |  
| :- | :- | :- |
| $success | 通知插件支付结果成功，该方法返回promise，可在.then()方法中进行成功后的回调函数 | - |
| $fail| 密码弹窗关闭后的回调函数 | - |  

#### 用法示例：  
支付结果成功：  
```js
this.$refs.pays.$success(true).then(res => {console.log('支付成',res)})
```
支付结果失败：  
```js  
this.$refs.pays.$fail('可以自定义错误提示，默认：支付密码错误')  
```  