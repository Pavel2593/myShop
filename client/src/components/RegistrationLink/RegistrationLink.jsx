import React from 'react'
import { BorderButton } from '../UI'
import cl from './RegistrationLink.module.scss'

const RegistrationLink = () => {
    return (
        <div className={cl.wrapper}>
            <span className={cl.text}>Нет аккаунта?</span>
            <BorderButton
                className={cl.btn}
                onClick={() => {}}
            >
                Создать
            </BorderButton>
        </div>
    )
}

export default RegistrationLink