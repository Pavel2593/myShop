import React from 'react'
import { useState } from 'react'
import cl from './DefaultCheckbox.module.scss'

const DefaultCheckbox = ({ children, className, returnValue, id}) => {
    const [checked, setChecked] = useState(false)
    const clickLable = () => {
        setChecked(!checked)
        returnValue(id)
    }

    return (
        <div className={className}>
            <input
                type="checkbox"
                className={cl.checkbox}
                checked={checked}
                readOnly
            />
            <label
                className={cl.label}
                onClick={clickLable}
            >{children}</label>
        </div>
    )
}

export default DefaultCheckbox