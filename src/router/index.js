import { createRouter, createWebHistory } from 'vue-router';
import Cv from '../components/MainContent.vue';
import ProjetsIndex from '../components/portfolio/ProjetsIndex.vue';
import CompetencesIndex from '@/components/portfolio/CompetencesIndex.vue';

const routes = [
  {
    path: '/',
    name: 'Cv',
    component: Cv
  },
  {
    path: '/projets',
    name: 'Projets',
    component: ProjetsIndex
  },
  {
    path: '/competences',
    name: 'ComptencesIndex',
    component: CompetencesIndex
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;