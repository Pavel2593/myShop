import React, { Dispatch, SetStateAction } from 'react'
import cl from './DefaultPopup.module.scss'

interface IDefaultPopup {
    children: React.ReactNode
    title?: string
    show: boolean
    setShow: Dispatch<SetStateAction<boolean>>
}

const DefaultPopup: React.FunctionComponent<IDefaultPopup> = ({ children, title, show, setShow }) => {

    const wrapperClasses: string[] = [cl.popupWrapper]
    if (show) {
        wrapperClasses.push(cl.popupWrapperActive);
    }

    return (
        <div className={wrapperClasses.join(' ')} onClick={() => setShow(false)}>
            <div className={cl.popup} onClick={(e) => e.stopPropagation()}>
                <div className={cl.closeIcon} onClick={() => setShow(false)}></div>
                <h1 className={cl.title}>{title}</h1>
                {children}
            </div>
        </div>
    )
}

export default DefaultPopup
