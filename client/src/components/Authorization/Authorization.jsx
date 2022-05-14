import React from 'react'
import { BorderButton } from '../UI'
// import cl from './Authorization.module.scss'

const Authorization = ({ children }) => {
    return (
        <div>
            <BorderButton>{children}</BorderButton>
        </div>
    )
}

export default Authorization