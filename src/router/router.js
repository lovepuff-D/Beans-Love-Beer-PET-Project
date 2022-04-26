import HomePage from "@/pages/HomePage"
import FavoritePage from "@/pages/FavoritePage"
import ItemPage from "@/pages/ItemPage"
import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/favorite',
        component: FavoritePage,
    },
    {
        path: '/:id',
        component: ItemPage,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router