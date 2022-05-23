import React from 'react'
import cl from './DefaultInput.module.scss'

const DefaultInput = ({ className, ...props}) => {
    return (
        <input
            type="text"
            {...props}
            className={[cl.input, className].join(' ')}
        />
    )
}

export default DefaultInput
