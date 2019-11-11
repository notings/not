import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Choiceness from '../pages/Choiceness.vue'
import Classify from '../pages/Classify.vue'
import Game from '../pages/Game.vue'
import Software from '../pages/Software.vue'
import Main from '../pages/Main.vue'

import Detail from '../pages/Detail.vue'
import Login from '../pages/Login.vue'
import Loging from '../pages/Loging.vue'
import Search from '../pages/Search.vue'
import List from '../pages/List.vue'

import Lista from '../pages/Lista.vue'
import Listb from '../pages/Listb.vue'



const routes = [{
        path: '/main',
        name: 'main',
        component: Main,
        children: [{

                path: 'choiceness',
                name: 'choiceness',
                component: Choiceness,
            }, {
                path: 'classify', //跳转分类
                name: 'classify',
                component: Classify
            },
            {
                path: 'game', //跳转游戏
                name: 'game',
                component: Game
            },
            {
                path: 'software', //跳转软件
                name: 'software',
                component: Software
            },

        ]
    },

    {
        path: '/',
        redirect: '/main/choiceness',
    },
    {
        path: '/detail:id', //精选（首页）跳详情
        name: 'detail',
        component: Detail
    },
    {
        path: '/login', //精选（首页）跳 login
        name: 'login',
        component: Login
    },
    {
        path: '/loging', //login 跳 loging
        name: 'loging',
        component: Loging
    },
    {
        path: '/gohome', //loging 跳 精选（首页）
        name: 'gohome',
        redirect: '/main/choiceness'
    },
    {
        path: '/gomain', //详情 跳精选（首页）lllllll
        name: 'gomain',
        redirect: '/main/choiceness'
    },
    {
        path: '/gosoft', //详情跳软件
        name: 'gosoft',
        redirect: '/main/software'
    },
    {
        path: '/gogame', //详情跳游戏
        name: 'gogame',
        redirect: '/main/game'
    },
    {
        path: '/goclass', //详情跳分类
        name: 'goclass',
        redirect: '/main/classify'
    },
    {
        path: '/gosearch', //详情跳搜索
        name: 'gosearch',
        component: Search
    },
    {
        path: '/search', //精选（首页）跳搜索
        name: 'search',
        component: Search
    },
    {
        path: '/list', //精选（首页）跳 list
        name: 'list',
        component: List
    }, {
        path: '/lista', //精选（首页）跳 list
        name: 'lista',
        component: Lista
    }, {
        path: '/listb', //精选（首页）跳 list
        name: 'listb',
        component: Listb
    }

]
// router.beforeEach((to, from, next) => {
//     if (to.path === '/login') {
//         next();
//     } else {
//         let token = localStorage.getItem('Authorization');

//         if (token === 'null' || token === '') {
//             next('/login');
//         } else {
//             next();
//         }
//     }
// }
// );
const router = new VueRouter({
    routes,

})
export default router