import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/views/Default';
import Blank from '@/views/Blank';
import Home from '@/components/body/yzMain';
import News from '@/components/body/yzNews';
import Cooperation from '@/components/body/yzCooperation';
import Join from '@/components/body/yzJoinUs';
import About from '@/components/body/yzAboutUs';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'home',
      component: Default,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },{
          path: 'news/:title',
          name: 'news',
          component: News
        },{
          path: 'cooperation/:title',
          name: 'cooperation',
          component: Cooperation
        },{
          path: 'join/:title',
          name: 'join',
          component: Join
        },{
          path: 'about/:title',
          name: 'about',
          component: About
        }
      ]

    },
    {
      path: '/blank',
      name: 'blank',
      component: Blank
    }
      
  ]
})
