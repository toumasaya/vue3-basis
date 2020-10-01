import { createRouter, createWebHistory } from 'vue-router';

// import ResourceRoutes from '@/pages/ResourceRoutes';
import ResourceHome from '@/pages/ResourceHome';
import ResourceNew from '@/pages/ResourceNew';
import ResourceShow from '@/pages/ResourceShow';

// const routes = [
//   { path: '/', redirect: { name: 'resourceHome' } },
//   {
//     path: '/resources',
//     name: 'resourcesRoutes',
//     component: ResourceRoutes,
//     children: [
//       { path: '', name: 'resourceHome', component: ResourceHome },
//       { path: 'new', name: 'resourceNew', component: ResourceNew },
//     ],
//   },
// ];

const routes = [
  { path: '/', redirect: { name: 'resourceHome' } },
  { path: '/resources', name: 'resourceHome', component: ResourceHome },
  { path: '/resources/new', name: 'resourceNew', component: ResourceNew },
  { path: '/resources/:id', name: 'resourceShow', component: ResourceShow },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'is-hovered',
  routes,
});

export default router;
