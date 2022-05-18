import React, { useContext, useState } from 'react'
import { BorderButton } from '../UI'
import { Context } from '../..'
import AuthorizationPopup from '../AuthorizationPopup/AuthorizationPopup'

const Authorization = ({ className }) => {
    const { user } = useContext(Context)
    const isAuth = user.isAuth
    const [showAuthPopup, setShowAuthPopup] = useState(false)

    return (
        <div className={className}>
            <BorderButton
                onClick={() => { setShowAuthPopup(true) }}
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
}

export default Authorization