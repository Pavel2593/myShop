import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Context } from '.';
import AppRouter from './components/AppRouter';
import Header from './components/Header/Header';
import { DefaultLoader } from './components/UI';
import { check } from './http/userAPI';

const App = observer(() => {
    const { user } = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then((data) => {
            user.setUser(data.role)
            user.setIsAuth(data.role ? true : false)
        }).catch((e) => {
            console.log(e)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <DefaultLoader />
    }

    return (
        <BrowserRouter>
            <Header />
            <AppRouter />
        </BrowserRouter>
    );
})

export default App;
