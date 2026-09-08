import { createRouter, createWebHistory } from 'vue-router';
import Cv from '../components/MainContent.vue';
import ProjetsIndex from '../components/portfolio/ProjetsIndex.vue';
import CompetencesIndex from '@/components/portfolio/CompetencesIndex.vue';
import ImageNumerique from '@/components/portfolio/ImageNumerique.vue';

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
  },
  {
    path: '/image-numerique',
    name: 'ImageNumerique',
    component: ImageNumerique
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;