import HomePage from "@/pages/HomePage"
import FavoritePage from "@/pages/FavoritePage"
import ItemPage from "@/pages/ItemPage"
import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: '/Beans-Love-Beer-PET-Project/',
        component: HomePage,
    },
    {
        path: '/Beans-Love-Beer-PET-Project/favorite',
        component: FavoritePage,
    },
    {
        path: '/Beans-Love-Beer-PET-Project/:id',
        component: ItemPage,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router