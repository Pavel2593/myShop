import React, { useEffect, useState } from 'react'
import { useFetching } from '../../hooks/useFetching'
import { fetchBrands, fetchDevices, fetchTypes } from '../../http/deviceAPI'
import DeviceList from '../../components/DevicesList/DeviceList'
import Filter from '../../components/Filter/Filter'
import cl from './Shop.module.scss';

const Shop = () => {
    const limit = 20;
    const [typeId, setTypeId] = useState(null)
    const [brandId, setBrandId] = useState(null)
    const [fetchingDevices, dataDevices, isLoadingDevices] = useFetching(fetchDevices)
    const [fetchingTypes, dataTypes] = useFetching(fetchTypes)
    const [fetchingBrands, dataBrands] = useFetching(fetchBrands)

    useEffect(() => {
        fetchingDevices(brandId, typeId, limit)
    }, [brandId, typeId])

    useEffect(() => {
        fetchingTypes()
        fetchingBrands()
    }, [])

    return (
        <section className={cl.catalog}>
            <div style={{ width: '300px' }}>
                <Filter
                    title='Тип'
                    items={dataTypes}
                    selectedItem={typeId}
                    changeSelected={setTypeId}
                />
                <Filter
                    title='Бренд'
                    items={dataBrands}
                    selectedItem={brandId}
                    changeSelected={setBrandId}
                />
                <div
                    style={{
                        fontFamily: 'Montserrat',
                        cursor: 'pointer',
                        padding: '0 20px'
                    }}
                    onClick={() => {
                        setTypeId(null)
                        setBrandId(null)
                    }}
                >Сбросить фильтры</div>
            </div>
            <DeviceList
                isLoading={isLoadingDevices}
                count={dataDevices.count}
                items={dataDevices.rows}
            />
        </section>
    )
}

export default Shop