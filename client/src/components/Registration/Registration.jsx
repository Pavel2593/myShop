import React from 'react'
import { FloodedButton } from '../UI'
// import cl from './Registration.module.scss'

const Registration = ({ children }) => {
    return (
        <div>
            <FloodedButton>{children}</FloodedButton>
        </div>
    )
}

export default Registration