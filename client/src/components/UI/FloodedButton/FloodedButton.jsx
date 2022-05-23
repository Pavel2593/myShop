import React from 'react'
import cl from './FloodedButton.module.scss'


const FloodedButton = ({ children, className, ...props}) => {
    return (
        <button className={[cl.button, className].join(' ')} {...props}>
            {children}
        </button>
    )
}


export default FloodedButton
