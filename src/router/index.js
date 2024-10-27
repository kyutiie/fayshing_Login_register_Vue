import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../components/login.vue';
import RegisterView from '../components/register.vue';
import ForgotPasswordView from '../components/forgotPassword.vue';
import NewPasswordView from '../components/newPassword.vue';
import HomeView from '../views/Home.vue';
import { isAuthenticated } from '../utils/auth';

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
  },
  
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/forgotpassword',
    name: 'forgotpassword',
    component: ForgotPasswordView,
  },
  {
    path: '/newpassword',
    name: 'newpassword',
    component: NewPasswordView,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated()) {
        next('/'); 
      } else {
        next(); 
      }
    },
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'), 
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ['login', 'register', 'forgotpassword', 'newpassword'];
  const authRequired = !publicPages.includes(to.name);
  
  if (authRequired && !isAuthenticated()) {
    next('/'); 
  } else {
    next(); 
  }
});

export default router;
