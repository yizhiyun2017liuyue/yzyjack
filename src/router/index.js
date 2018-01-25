import Vue from 'vue'
import Router from 'vue-router'
import aboutShow from '@/components/aboutShow'
import information from '@/components/information'

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
    }
  ]
})
