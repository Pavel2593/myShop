import React, { useContext } from 'react'
import { authRoutes, publicRoutes } from './../routes'
import { Route, Routes } from 'react-router-dom'
import Shop from '../pages/Shop'
import { Context } from '..'

const AppRouter = () => {
    const { user } = useContext(Context)
    const isAuth = user.isAuth
    return (
        <Routes>
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
            <Route path="*" element={<Shop />} />
        </Routes>
    )
}

export default AppRouter