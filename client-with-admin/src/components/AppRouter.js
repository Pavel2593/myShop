import React, { useContext } from 'react'
import { authRoutes, publicRoutes, adminRoutes, adminRoutesItem } from './../routes'
import { Route, Routes } from 'react-router-dom'
import Shop from '../pages/Shop/Shop'
import { Context } from '..'
import { observer } from 'mobx-react-lite'
import Admin from '../pages/Admin/Admin'

const AppRouter = observer(() => {
    const { user } = useContext(Context)
    const isAuth = user.isAuth
    const isAdmin = user.user === process.env.REACT_APP_USER_ADMIN
    return (
        <Routes>
            {isAdmin &&
                adminRoutesItem.map(({ path, Component, SubComponent }) =>
                    <Route
                        key={path}
                        path={path}
                        element={<Component SubComponent={SubComponent} />}
                        exact
                    />
                )
            }
            {isAdmin &&
                adminRoutes.map(({ path, Component, SubComponent }) =>
                    <Route
                        key={path}
                        path={path}
                        element={<Component SubComponent={SubComponent} adminPath={path}/>}
                        exact
                    />
                )
            }
            <Route path='/admin' element={<Admin/>} />
            {isAuth &&
                authRoutes.map(({ path, Component }) => 
                    <Route
                        key={path}
                        path={path}
                        element={<Component />}
                        exact
                    />
                )
            }
            {
                publicRoutes.map(({ path, Component }) =>
                    <Route
                        key={path}
                        path={path}
                        element={<Component />}
                        exact
                    />
                )
            }
            <Route path='*' element={<Shop />} />
        </Routes>
    )
})

export default AppRouter