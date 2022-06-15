import React from 'react'
import cl from './DefaultLeftBlock.module.scss'

const DefaultLeftBlock = ({children}) => {
    return (
        <div className={cl.leftBlock}>
            {children}
        </div>
    )
}

export default DefaultLeftBlock