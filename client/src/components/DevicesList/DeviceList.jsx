import React from 'react'
import DeviceItem from '../DeviceItem/DeviceItem'
import cl from './DeviceList.module.scss'

const DeviceList = ({ items }) => {
    return (
        <div className={cl.list}>
            {items &&
                items.map((item) => (
                    <DeviceItem
                        key={item.id}
                        item={item}
                    />
                ))
            }
        </div>
    )
}

export default DeviceList