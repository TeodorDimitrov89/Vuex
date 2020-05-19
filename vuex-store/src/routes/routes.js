import Home from '../pages/Home'
import Product from '../pages/Product'

export default [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/product/:id',
        component: Product,
        name: 'product',
        props: true
    }
]