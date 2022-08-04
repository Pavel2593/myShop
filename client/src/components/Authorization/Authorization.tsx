import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite';
import { BorderButton } from '../UI'
import { Context } from '../../../pages/_app'
import AuthorizationPopup from '../AuthorizationPopup/AuthorizationPopup'
import { AppContextInterface } from '../../../types/store';

interface IAuthorization {
    className?: string
}

const Authorization: React.FunctionComponent<IAuthorization> = observer(({ className }) => {
    const { user }: AppContextInterface = useContext(Context)
    const isAuth: boolean = user.isAuth
    const [showAuthPopup, setShowAuthPopup] = useState<boolean>(false)
    const logout = () => {
        user.setUser('')
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }

    return (
        <div className={className}>
            <BorderButton
                onClick={() => {
                    logout()
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