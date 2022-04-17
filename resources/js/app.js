
require('./bootstrap');

window.Vue = require('vue').default;
import store from './store'
import router from './router'
import App from './App.vue'
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue'
import "bootstrap-vue/dist/bootstrap-vue.css"
import Vuetify from '../plugins/vuetify'
import Vuex from 'vuex'
import moment from 'moment';
import Vue from 'vue';
import VueChatScroll from 'vue-chat-scroll'
import VueApexCharts from 'vue-apexcharts'


Vue.use(VueChatScroll)
Vue.component('apexchart', VueApexCharts)


// Vue.forceUpdate();



window.Vue = require("vue").default;
Vue.use(Vuex)
Vue.use(BootstrapVue)

Vue.component('Chat', require('./components/pages/Chat.vue').default);
window.moment = require('moment');
axios.defaults.baseURL ='http://127.0.0.1:8000/api/';
require('./store/subscriber');
store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
    const app = new Vue({
        vuetify: Vuetify, 
        el: '#app',
        router,
        store,
        moment:moment,
        render: h=> h(App),
        
    });
})




// const app = new Vue({
//     history: VueRouter.createWebHistory(),
//     router
// }).$mount('#app')