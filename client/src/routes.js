import Admin from './pages/Admin/Admin'
import Basket from './pages/Basket'
import Shop from './pages/Shop/Shop'
import DevicePage from './pages/DevicePage'
import { ADMIN_ROUTER, BASKET_ROUTER, DEVICE_ROUTER, SHOP_ROUTER } from './utils/consts'
import AdminTypes from './components/AdminTypes/AdminTypes'
import AdminBrands from './components/AdminBrands/AdminBrands'
import AdminAddUser from './components/AdminAddUser/AdminAddUser'
import AdminUser from './pages/AdminUser/AdminUser'
import AdminUsers from './pages/AdminUsers/AdminUsers'

export const adminRoutesItem = [
    {
        name: 'Пользователи',
        path: ADMIN_ROUTER.adminUsers + '/add-user' ,
        role: process.env.REACT_APP_USER_ADMIN,
        Component: Admin,
        SubComponent: AdminAddUser
    },
    {
        name: 'Пользователи',
        path: ADMIN_ROUTER.adminUsers + '/:id',
        role: process.env.REACT_APP_USER_ADMIN,
        Component: Admin,
        SubComponent: AdminUser
    },
]

export const adminRoutes = [
    {
        name: 'Пользователи',
        path: ADMIN_ROUTER.adminUsers,
        role: process.env.REACT_APP_USER_ADMIN,
        Component: Admin,
        SubComponent: AdminUsers
    },
    {
        name: 'Типы',
        path: ADMIN_ROUTER.adminTypes,
        role: process.env.REACT_APP_USER_ADMIN,
        Component: Admin,
        SubComponent: AdminTypes
    },
    {
        name: 'Бренды',
        path: ADMIN_ROUTER.adminBrands,
        role: process.env.REACT_APP_USER_ADMIN,
        Component: Admin,
        SubComponent: AdminBrands
    },
]

export const authRoutes = [
    {
        path: BASKET_ROUTER,
        Component: Basket
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTER,
        Component: Shop
    },
    {
        path: DEVICE_ROUTER + '/:id',
        Component: DevicePage
    },
]