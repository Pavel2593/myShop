import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite';
import { BorderButton } from '../UI'
import { Context } from './../../../pages/_app'
import AuthorizationPopup from '../AuthorizationPopup/AuthorizationPopup'

const Authorization = observer(({ className }) => {
    const { user } = useContext(Context)
    const isAuth = user.isAuth
    const [showAuthPopup, setShowAuthPopup] = useState(false)
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }
    
    return (
        <div className={className}>
            <BorderButton
                onClick={() => {
                    logOut()
                    !isAuth && setShowAuthPopup(true)
                }}
            >
                {isAuth ? 'Выйти' : 'Войти'}
            </BorderButton>
            {
                showAuthPopup &&
                <AuthorizationPopup
                    showPopup={showAuthPopup}
                    setShowPopup={setShowAuthPopup}
                />
            }
        </div>
    )
})

export default Authorization