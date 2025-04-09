import { createRouter, createWebHistory } from 'vue-router';
import Cv from '../components/MainContent.vue';
import ProjetsIndex from '../components/portfolio/ProjetsIndex.vue';

const routes = [
  {
    path: '/cv',
    name: 'Cv',
    component: Cv
  },
  {
    path: '/projets',
    name: 'Projets',
    component: ProjetsIndex
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;