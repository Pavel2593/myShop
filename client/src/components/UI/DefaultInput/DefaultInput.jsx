import React from 'react'
import cl from './DefaultInput.module.scss'

const DefaultInput = ({ className, ...props}) => {
    return (
        <input
            {...props}
            className={[cl.input, className].join(' ')}
        />
    )
}

export default DefaultInput
