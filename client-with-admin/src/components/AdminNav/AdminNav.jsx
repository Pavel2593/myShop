import cl from './AdminNav.module.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import { adminRoutes } from '../../routes'
import DefaultLeftBlock from '../UI/DefaultLeftBlock/DefaultLeftBlock'


const AdminNav = ({ adminPath }) => {
    const selectedClassesLink = cl.AdminNav_selected + " " + cl.AdminNav__link
    const defaultClassesLink = cl.AdminNav__link;
    return (
        <DefaultLeftBlock>
            {
                adminRoutes.map(({ path, name }) => (
                    <Link
                        to={path}
                        key={path}
                        className={adminPath === path ? selectedClassesLink : defaultClassesLink}
                    >
                        {name}
                    </Link>
                ))
            }
        </DefaultLeftBlock>
    )
}

export default AdminNav