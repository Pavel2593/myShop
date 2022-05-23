import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Context } from '../..'
import { ADMIN_ROUTER } from '../../utils/consts';
import Authorization from '../Authorization/Authorization'
import { FloodedButton } from '../UI'
import cl from './Header.module.scss'

const Header = observer(() => {
    const { user } = useContext(Context)
    const isRoleAdmin = user.user === process.env.REACT_APP_USER_ADMIN
    return (
        <header className={cl.header}>
            <Link to='/'>myShop</Link>
            <div className={cl.header__auth}>
                {isRoleAdmin &&
                    <Link to={ADMIN_ROUTER} className={cl.header_mr} >
                        <FloodedButton>
                            Админка
                        </FloodedButton>
                    </Link>
                }
                <Authorization />
            </div>
        </header>
    )
})

export default Header