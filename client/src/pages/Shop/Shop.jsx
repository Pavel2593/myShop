import React, { useEffect } from 'react'
import { useFetching } from '../../hooks/useFetching'
import { fetchDevices, fetchTypes } from '../../http/deviceAPI'
import DeviceList from '../../components/DevicesList/DeviceList'
import Filter from '../../components/Filter/Filter'
import cl from './Shop.module.scss';

const Shop = () => {
    const [fetchingDevices, dataDevices] = useFetching(fetchDevices)
    const [fetchingTypes, dataTypes] = useFetching(fetchTypes)
    useEffect(() => {
        fetchingDevices()
        fetchingTypes()
    }, [])
    console.log(dataTypes)
    return (
        <section className={cl.catalog}>
            <Filter
            />
            <DeviceList
                count={dataDevices.count}
                items={dataDevices.rows}
            />
        </section>
    )
}

export default Shop