import { createRouter, createWebHistory } from 'vue-router';

// import ResourceRoutes from '@/pages/ResourceRoutes';
import ResourceHome from '@/pages/ResourceHome';
import ResourceNew from '@/pages/ResourceNew';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
