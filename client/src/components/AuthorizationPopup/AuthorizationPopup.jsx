import React from 'react'
import AuthorizationForm from '../AuthorizationForm/AuthorizationForm'
import RegistrationLink from '../RegistrationLink/RegistrationLink'
import { DefaultPopup } from '../UI'

const AuthorizationPopup = ({ showPopup, setShowPopup }) => {
    return (
        <DefaultPopup
            title='Войти'
            show={showPopup}
            setShow={setShowPopup}
        >
            <AuthorizationForm
                setShow={setShowPopup}
            />
            <RegistrationLink/>
        </DefaultPopup>
    )
}

export default AuthorizationPopup