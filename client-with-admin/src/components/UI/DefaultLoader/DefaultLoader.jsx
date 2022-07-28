import React from 'react'
import cl from './DefaultLoader.module.scss'

const DefaultLoader = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.ellipsis}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default DefaultLoader
