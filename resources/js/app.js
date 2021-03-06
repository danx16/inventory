require('./bootstrap');

window.Vue = require('vue');

import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios)

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import moment from 'moment'
Vue.prototype.moment = moment

Vue.use(require('vue-moment'));

import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

// Router-view to mount
import App from './layouts/app.vue';

//routes
import routes from './routes';
const router = new VueRouter
({
	mode: 'history',
	IinkActiveClass: 'is-active', 
	routes
});


const app = new Vue({
	el: '#app',
	components:{ App },
	router,
});
