import Vue from 'vue';
import Router from 'vue-router';
import VueCodemirror from 'vue-codemirror';
import History from './views/History.vue';
import FAQ from './views/FAQ.vue';
import Videos from './views/Videos.vue';
import Contributors from './views/Contributors.vue';

Vue.use(VueCodemirror);
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'default',
      component: Videos,
    },
    {
      path: '/history',
      name: 'history',
      component: History,
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQ,
    },
    {
      path: '/videos',
      name: 'videos',
      component: Videos,
    },
    {
      path: '/contributors',
      name: 'contributors',
      component: Contributors,
    },
  ],
});
