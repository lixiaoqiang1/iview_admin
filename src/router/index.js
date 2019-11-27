import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import HelloWorld from '@/pages/HelloWorld'
import Sc_ustomer from '@/pages/Sc_ustomer'
import Sc_ustomer_my from '@/pages/Sc_ustomer_my'
import Sc_ustomer_tuan from '@/pages/Sc_ustomer_tuan'
import Sc_ustomer_lizhi from '@/pages/Sc_ustomer_lizhi'



import myclient from '@/pages/myclient'
import tuandui from '@/pages/tuandui'
import kehu from '@/pages/kehu'
import kehualls from '@/pages/kehualls'
import kehufenpei from '@/pages/kehufenpei'

import customers from '@/pages/customers'
import customers1 from '@/pages/customers1'
import index from '@/pages/index'
import about from '@/pages/about'
import zexian from '@/pages/zexian'
import addpage from '@/pages/addpage'
import fenye from '@/pages/fenye'
import fenye1 from '@/pages/fenye1'
import fenye2 from '@/pages/fenye2'
import shangchuan from '@/pages/shangchuan'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'login',component: login},
    {path: '/HelloWorld',name: 'HelloWorld',component: HelloWorld,children:[
        //二级路由
        {path:'/Sc_ustomer',name:'Sc_ustomer',component:Sc_ustomer,children:[
          //三级路由
          { path: '/Sc_ustomer_my', component: Sc_ustomer_my},
          { path: '/Sc_ustomer_tuan', component: Sc_ustomer_tuan},
          { path: '/Sc_ustomer_lizhi', component: Sc_ustomer_lizhi},
        ]},

        
        {path:'/myclient',name:'myclient',component:myclient},
        {path:'/tuandui',name:'tuandui',component:tuandui,children:[
          //三级路由
          { path: '/kehu', component: kehu},
          { path: '/kehualls', component: kehualls},
          { path: '/kehufenpei', component: kehufenpei},
        ]},
        {path:'/customers',name:'customers',component:customers},
        {path:'/customers1',name:'customers1',component:customers1},
        {path:'/index',name:'index',component:index},
        {path:'/about',name:'about',component:about},
        {path:'/zexian',name:'zexian',component:zexian},
        {path:'/addpage',name:'addpage',component:addpage},
        {path:'/fenye',name:'fenye',component:fenye},
        {path:'/fenye1',name:'fenye1',component:fenye1},
        {path:'/fenye2',name:'fenye2',component:fenye2},
        {path:'/shangchuan',name:'fenye',component:shangchuan},
      ]
    },

  ]
})
