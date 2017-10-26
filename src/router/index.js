import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import aboutComponent from '@/components/About';
import skillComponent from '@/components/Skill';
import portfolioComponent from '@/components/Portfolio';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: aboutComponent
    }, {
      path: '/skills',
      name: 'skills',
      component: skillComponent
    }, {
      path: '/portfolio',
      name: 'portfolio',
      component: portfolioComponent
    },
  ]
})
