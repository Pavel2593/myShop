import React from 'react'
import cl from './BorderButton.module.scss'

const BorderButton = ({children, className, ...props}) => {
    return (
        <button className={[cl.button, className].join(' ')} {...props}>
            {children}
        </button>
    )
}

export default BorderButton
