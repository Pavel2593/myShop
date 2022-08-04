import React, { Dispatch, SetStateAction, useState } from 'react'
import AuthorizationForm from '../AuthorizationForm/AuthorizationForm'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import RegistrationLink from '../RegistrationLink/RegistrationLink'
import { DefaultPopup } from '../UI'

interface IAuthorizationPopup {
    showPopup: boolean
    setShowPopup: Dispatch<SetStateAction<boolean>>
}

const AuthorizationPopup: React.FunctionComponent<IAuthorizationPopup> = ({ showPopup, setShowPopup }) => {
    const [showRegistrationForm, setShowRegistrationForm] = useState<boolean>(false)
    const [popupTitle, setPopupTitle] = useState<string>('Войти')
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