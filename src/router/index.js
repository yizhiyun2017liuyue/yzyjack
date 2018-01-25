import Vue from 'vue'
import Router from 'vue-router'
import aboutShow from '@/components/aboutShow'
import information from '@/components/information'
import infordraghandle from '@/components/infordraghandle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'information',
      component: information
    },
    {
      path: '/aboutShow',
      name: 'aboutShow',
      component: aboutShow
    },
    {
      path: '/infordraghandle',
      name: 'infordraghandle',
      component: infordraghandle
    }
  ]
})
