import cl from './AdminNav.module.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import { adminRoutes } from '../../routes'


const AdminNav = ({ adminPath }) => {
    console.log(adminPath)
    return (
        <div>
            {
                adminRoutes.map(({ path, name }) => (
                    <Link to={path} key={path}>
                        <div>{name}</div>
                    </Link>
                ))
            }
        </div>
    )
}

export default AdminNav