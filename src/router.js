import Vue from 'vue';
import Router from 'vue-router';
import Menu from './views/Menu.vue';
import History from './views/History.vue';
// eslint-disable-next-line import/extensions
import FAQPage from './views/FAQPage';
import Videos from './views/Videos.vue';
import Contributors from './views/Contributors.vue';

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
      path: '/menu',
      name: 'menu',
      component: Menu,
    },
    {
      path: '/history',
      name: 'history',
      component: History,
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQPage,
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
