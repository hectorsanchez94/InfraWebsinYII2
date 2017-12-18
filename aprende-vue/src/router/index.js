import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Bye from '@/components/Bye'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
	  {
	  	path: '/bye',
      		name: 'Bye',
      		component: Bye
	  }
  ]
});
