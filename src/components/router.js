import {createRouter , createWebHistory} from 'vue-router'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import HomeView from '../components/HomeView'

const routes = [
    {
        path: '/',
        component : HomeView
    },
    {
        path: '/signup',
        component : SignUp
    },
    {
        path: '/signin',
        component : SignIn
    }
]

const router =createRouter({
    history : createWebHistory(),
    routes
})

export default router