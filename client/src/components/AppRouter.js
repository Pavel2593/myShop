import React, { useContext } from 'react'
import { authRoutes, publicRoutes, adminRoutes } from './../routes'
import { Route, Routes } from 'react-router-dom'
import Shop from '../pages/Shop/Shop'
import { Context } from '..'
import { observer } from 'mobx-react-lite'

const AppRouter = observer(() => {
    const { user } = useContext(Context)
    const isAuth = user.isAuth
    const isAdmin = user.user === process.env.REACT_APP_USER_ADMIN
    return (
        <Routes>
            {isAdmin &&
                adminRoutes.map(({ path, Component }) =>
                    <Route
                        key={path}
                        path={path}
                        element={<Component />}
                        exact
                    />
                )
            }
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