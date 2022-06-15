import React from 'react'
import cl from './DefaultMain.module.scss'

const DefaultMain = ({ children, flexRow }) => {
    const mainClasses = [cl.main]
    if (flexRow) {
        mainClasses.push(cl.main_flexRow);
    }
    return (
        <main className={mainClasses.join(' ')}>
            {children}
        </main>
    )
}

export default DefaultMain