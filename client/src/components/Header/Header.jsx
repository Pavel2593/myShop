import React from 'react'
import Authorization from '../Authorization/Authorization'
import { FloodedButton } from '../UI'
import cl from './Header.module.scss'

const Header = () => {
    return (
        <header className={cl.header}>
            <div>myShop</div>
            <div className={cl.header__auth}>
                <Authorization className={cl.header_mr} />
                <FloodedButton>Регистрация</FloodedButton>
            </div>
        </header>
    )
}

export default Header