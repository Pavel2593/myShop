import Admin from './pages/Admin/Admin'
import Basket from './pages/Basket'
import Shop from './pages/Shop/Shop'
import DevicePage from './pages/DevicePage'
import { ADMIN_ROUTER, BASKET_ROUTER, DEVICE_ROUTER, SHOP_ROUTER } from './utils/consts'
import AdminBrands from './pages/AdminBrands/AdminBrands'
import AdminAddBrand from './pages/AdminAddBrand/AdminAddBrand'
import AdminAddUser from './pages/AdminAddUser/AdminAddUser'
import AdminUser from './pages/AdminUser/AdminUser'
import AdminUsers from './pages/AdminUsers/AdminUsers'
import AdminAddType from './pages/AdminAddType/AdminAddType'
import AdminType from './pages/AdminType/AdminType'
import AdminTypes from './pages/AdminTypes/AdminTypes'
import AdminBrand from './pages/AdminBrand/AdminBrand'
import AdminDevices from './pages/AdminDevices/AdminDevices'
import AdminAddDevice from './pages/AdminAddDevice/AdminAddDevice'
import AdminDevice from './pages/AdminDevice/AdminDevice'

export const adminRoutesItem = [
    {
        name: 'Типы',
        path: ADMIN_ROUTER.adminTypes + '/add-type',
        role: process.env.REACT_APP_USER_ADMIN,
        Component: Admin,
        SubComponent: AdminAddType
    },
    {
        name: 'Типы',
        path: ADMIN_ROUTER.adminTypes + '/:id',
        role: process.env.REACT_APP_USER_ADMIN,
        Component: Admin,
        SubComponent: AdminType
    },
    {
        name: 'Бренд',
        path: ADMIN_ROUTER.adminBrands + '/add-brand',
        role: process.env.REACT_APP_USER_ADMIN,
        Component: Admin,
        SubComponent: AdminAddBrand
    },
    {
        name: 'Бренд',
        path: ADMIN_ROUTER.adminBrands + '/:id',
        role: process.env.REACT_APP_USER_ADMIN,
        Component: Admin,
        SubComponent: AdminBrand
    },
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
    {
        name: 'Товары',
        path: ADMIN_ROUTER.adminDevices + '/add-device',
        role: process.env.REACT_APP_USER_ADMIN,
        Component: Admin,
        SubComponent: AdminAddDevice
    },
    {
        name: 'Товары',
        path: ADMIN_ROUTER.adminDevices + '/:id',
        role: process.env.REACT_APP_USER_ADMIN,
        Component: Admin,
        SubComponent: AdminDevice
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
    {
        name: 'Товары',
        path: ADMIN_ROUTER.adminDevices,
        role: process.env.REACT_APP_USER_ADMIN,
        Component: Admin,
        SubComponent: AdminDevices 
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