import React from 'react'
import { FloodedButton } from '../UI'
import cl from './DeviceItem.module.scss'

const DeviceItem = ({ item }) => {
    const { brand } = item
    return (
        <div className={cl.item}>
            <picture className={cl.item__picture}>
                <img
                    className={cl.item__img}
                    src={process.env.REACT_APP_API_URL + item.img}
                    alt="#"
                />
            </picture>
            <div className={cl.item__brand}>{brand.name}</div>
            <div className={cl.item__name}>{item.name}</div>
            <div className={cl.item__buy_box}>
                <div className={cl.item__price}>
                    {item.price.toLocaleString('ru')} руб.
                </div>
                <FloodedButton
                    className={cl.item__btn}
                >
                    Купить
                </FloodedButton>
            </div>
        </div>
    )
}

export default DeviceItem