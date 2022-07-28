import React, { useEffect, useState } from 'react'
import { useFetching } from '../../hooks/useFetching'
import { fetchBrands, getDevices } from '../../http/deviceAPI'
import { getTypes } from '../../http/typeAPI'
import DeviceList from '../../components/DevicesList/DeviceList'
import Filter from '../../components/Filter/Filter'
import cl from './Shop.module.scss';
import DefaultLeftBlock from '../../components/UI/DefaultLeftBlock/DefaultLeftBlock'
import DefaultMain from '../../components/UI/DefaultMain/DefaultMain'

const Shop = () => {
    const limit = 20;
    const [typeId, setTypeId] = useState(null)
    const [brandId, setBrandId] = useState(null)
    const resultGetDevices = useFetching(getDevices)
    const resultGetTypes = useFetching(getTypes)
    const resultGetBrands = useFetching(fetchBrands)

    useEffect(() => {
        // other code
        resultGetDevices.fetching(brandId, typeId, limit)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [brandId, typeId])

    useEffect(() => {
        // other code
        resultGetTypes.fetching()
        resultGetBrands.fetching()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <DefaultMain>
            <section className={cl.catalog}>
                <DefaultLeftBlock>
                    <Filter
                        title='Тип'
                        items={resultGetTypes.data}
                        selectedItem={typeId}
                        changeSelected={setTypeId}
                    />
                    <Filter
                        title='Бренд'
                        items={resultGetBrands.data}
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
                    isLoading={resultGetDevices.isLoading}
                    count={resultGetDevices.data.count}
                    items={resultGetDevices.data.rows}
                />
            </section>
        </DefaultMain>
    )
}

export default Shop