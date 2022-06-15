import React, { useEffect, useState } from 'react'
import { useFetching } from '../../hooks/useFetching'
import { fetchBrands, fetchDevices, fetchTypes } from '../../http/deviceAPI'
import DeviceList from '../../components/DevicesList/DeviceList'
import Filter from '../../components/Filter/Filter'
import cl from './Shop.module.scss';
import DefaultLeftBlock from '../../components/UI/DefaultLeftBlock/DefaultLeftBlock'
import DefaultMain from '../../components/UI/DefaultMain/DefaultMain'

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
        <DefaultMain>
            <section className={cl.catalog}>
                <DefaultLeftBlock>
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
                            width: '100%',
                            fontFamily: 'Montserrat',
                            cursor: 'pointer',
                            padding: '0 20px',
                            textAlign: 'center',
                            boxSizing: 'border-box'
                        }}
                        onClick={() => {
                            setTypeId(null)
                            setBrandId(null)
                        }}
                    >Сбросить фильтры</div>

                </DefaultLeftBlock>
                <DeviceList
                    isLoading={isLoadingDevices}
                    count={dataDevices.count}
                    items={dataDevices.rows}
                />
            </section>
        </DefaultMain>
    )
}

export default Shop