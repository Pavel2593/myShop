import React from 'react'
import { BorderButton } from '../UI'
import cl from './RegistrationLink.module.scss'

const RegistrationLink = ({ setShow, setPopupTitle }) => {
    return (
        <div className={cl.wrapper}>
            <span className={cl.text}>Нет аккаунта?</span>
            <BorderButton
                className={cl.btn}
                onClick={() => {
                    setShow(true)
                    setPopupTitle('Регистрация')
                }}
            >
                Создать
            </BorderButton>
        </div>
    )
}

export default RegistrationLink