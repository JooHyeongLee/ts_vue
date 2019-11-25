import vue from 'vue';
import App from './App.vue';
// axios 모듈 사용
import axios from 'axios';
vue.prototype.$http = axios;

// Vue devtools 설정
if (process.env.NODE_ENV === 'development') {
  Vue.config.devtools = true;
}

new vue({
  el: '#app',
  render: h => h(App),
});
