import React, { useState } from 'react'
import AuthorizationForm from '../AuthorizationForm/AuthorizationForm'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import RegistrationLink from '../RegistrationLink/RegistrationLink'
import { DefaultPopup } from '../UI'

const AuthorizationPopup = ({ showPopup, setShowPopup }) => {
    const [showRegistrationForm, setShowRegistrationForm] = useState(false)
    const [popupTitle, setPopupTitle] = useState('Войти')
    return (
        <DefaultPopup
            title={popupTitle}
            show={showPopup}
            setShow={setShowPopup}
        >
            {
                showRegistrationForm
                ?
                <RegistrationForm
                    setShow={setShowPopup}
                />
                :
                <AuthorizationForm
                    setShow={setShowPopup}
                />
            }
            {
                !showRegistrationForm &&
                <RegistrationLink
                    setShow={setShowRegistrationForm}
                    setPopupTitle={setPopupTitle}
                />
            }
        </DefaultPopup>
    )
}

export default AuthorizationPopup