import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/codegeneration',
      name: 'codegeneration',
      redirect: '/codegeneration/project',
      children:[
        {
          path: 'project',
          name: 'cg_project',
          component: () => import('../views/codegeneration/TableInfo.vue')
        },{
          path: 'template',
          name: 'cg_template',
          component: () => import('../views/codegeneration/TemplateInfo.vue')
        }
        ,{
          path: 'datasource',
          name: 'cg_datasource',
          component: () => import('../views/codegeneration/datasource/index.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: HomeView
    }
  ]
})

export default router
