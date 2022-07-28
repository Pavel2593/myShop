import React from 'react'
import cl from './ErrorText.module.scss'

const ErrorText = ({ children, className, ...props }) => {
    return (
        <span className={[cl.text, className].join(' ')} {...props}>
            {children}
        </span>
    )
}

export default ErrorText