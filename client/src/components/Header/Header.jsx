import React from 'react'
import Authorization from '../Authorization/Authorization'
import Registration from '../Registration/Registration'
import cl from './Header.module.scss'

const Header = () => {
    return (
        <header className={cl.header}>
            <div>myShop</div>
            <div className={cl.header__auth}>
                <Authorization>ВОЙТИ</Authorization>
                <Registration>ЗАРЕГИСТРИРОВАТЬСЯ</Registration>
            </div>
        </header>
    )
}

export default Header