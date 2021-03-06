import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // 실제 이 페이지에 방문하는 순간에 컴포넌트를 로드한다
    // 프리패치 O : 해당 페이지로 오기 전까진 캐시에 있다가 오면 클라이언트로 내려준다
    // 프리패치 x : 캐시에 올리지 않고 메뉴를 클릭하는 순간 캐시에 등록
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact", "webpackPrefetch:true" */ '../views/Contact.vue')
    // webpackPrefetch:true => 프리패치 기능 사용해서 미리 캐시에 올려둔다 (디폴트로 적용되는 프리패치 기능을 껐을 때 사용)
  },
  {
    path: '/basic',
    name: 'Basic',
    component: () => import(/* webpackChunkName: "basic" */ '../views/01.Basic.vue')
  }
  ,
  {
    path: '/example',
    name: 'Example',
    component: () => import(/* webpackChunkName: "Example" */ '../views/Example.vue')
  },
  {
    path: '/slot',
    name: 'Slot',
    component: () => import(/* webpackChunkName: "Slot" */ '../views/20.SlotUseModalLayout.vue')
  },
  {
    path: '/provideinjectchildchild',
    name: 'provideinject',
    component: () => import(/* webpackChunkName: "provideInjectChildChild" */ '../views/ProvideInjectChildChild.vue')
  },
  {
    path: '/provideinjectparent',
    name: 'provideinjectparent',
    component: () => import(/* webpackChunkName: "provideInjectParent" */ '../views/21.ProvideInject.vue')
  },
  {
    path: '/provideinjectchild',
    name: 'provideinjectchild',
    component: () => import(/* webpackChunkName: "provideInjectChild" */ '../views/ProvideInjectChild.vue')
  },
  {
    path: '/mixin',
    name: 'Mixin',
    component: () => import(/* webpackChunkName: "provideInjectChild" */ '../views/22.Mixins.vue')
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: () => import(/* webpackChunkName: "provideInjectChild" */ '../views/23.Calculator.vue')
  },
  {
    path: '/compositionapi',
    name: 'CompositionAPI',
    component: () => import(/* webpackChunkName: "CompositionAPI" */ '../views/CompositionAPI3.vue')
  },
  {
    path: '/customdirective',
    name: 'CustomDirective',
    component: () => import(/* webpackChunkName: "CompositionAPI" */ '../views/CustomDirective.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
