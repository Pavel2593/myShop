import React from 'react'
import cl from './DefaultMain.module.scss'

const DefaultMain = ({ children }) => {
    return (
        <main className={cl.main}>
            {children}
        </main>
    )
}

export default DefaultMain