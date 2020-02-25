import Pay from './Pay.vue';
let Vue;
const MyPlugin = {
  install(_vue){
    Vue = _vue
    Vue.component('vpay',Pay)
  }
}
export default MyPlugin