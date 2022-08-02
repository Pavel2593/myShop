import React, { useEffect, useState } from 'react'
import { fetchTypes } from '../../http/deviceAPI'
import { useFetching } from './../../hooks/useFetching'
import cl from './Filter.module.scss'

const Filter = ({ title, items, selectedItem, changeSelected}) => {
    return (
        <div className={cl.item}>
            <h2 className={cl.item__title}>{title}</h2>
            {items &&
                items.map((item) => (
                    <div
                        key={item.id}
                        className={cl.item__value}
                        onClick={() => { changeSelected(item.id) }}
                    >
                        {item.name}
                    </div>
                ))
            }
        </div>
    )
}

export default Filter