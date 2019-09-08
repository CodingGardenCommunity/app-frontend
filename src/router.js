import Vue from 'vue';
import Router from 'vue-router';
import History from './views/History.vue';
import FAQPage from './views/FAQPage/index.vue';
import Videos from './views/Videos.vue';
import Contributors from './views/ContributorsPage/Contributors.vue';

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
