import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Router from 'vue-router';

Vue.use(BootstrapVue);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('@/components/Index').default,
    },
    {
      path: '/register',
      name: 'register',
      component: require('@/components/Register').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
