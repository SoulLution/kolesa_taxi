import Vue from 'vue';
import App from './App';
import axios from 'axios';

import './tailwind.scss';

import Vue2TouchEvents from 'vue2-touch-events'
Vue.use(Vue2TouchEvents)

import VueMask from 'v-mask'
Vue.use(VueMask);
import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective);
import { VueMaskFilter } from 'v-mask'
Vue.filter('VMask', VueMaskFilter)

Vue.prototype.$axios = axios;

new Vue({
  el: '#app',
  render: h => h(App),
});