import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { BorderButton, DefaultInput, DefaultLoader, DefaultSelect, FloodedButton } from '../../components/UI';
import DefaultInputFile from '../../components/UI/DefaultInputFile/DefaultInputFile';
import { useFetching } from '../../hooks/useFetching';
import { getBrands } from '../../http/brandAPI';
import { getDevice, updateDevices } from '../../http/deviceAPI';
import { getTypes } from '../../http/typeAPI';
// import { getType, updateType } from '../../http/typeAPI';
import { getDate } from '../../utils/getDate';
import { searchOptionName } from '../../utils/searchOptionName';

const AdminDevice = () => {
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [brand, setBrand] = useState('')
    const [type, setType] = useState('')
    const [img, setImg] = useState(null)
    const [info, setInfo] = useState([])
    const resultGet = useFetching(getDevice)
    const resultBrandList = useFetching(getBrands)
    const resultTypeList = useFetching(getTypes)
    const resultUpdate = useFetching(updateDevices)

    useEffect(() => {
        // other code
        resultGet.fetching(id)
        resultBrandList.fetching()
        resultTypeList.fetching()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        // other code
        setName(resultGet.data.name)
        setPrice(resultGet.data.price)
        setBrand(resultGet.data.brandId)
        setType(resultGet.data.typeId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resultGet.data])

    useEffect(() => {
        // other code
        if (resultUpdate.status === 200) {
            navigate('/admin/devices/')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resultUpdate.status])

    if (resultGet.isLoading) {
        return <DefaultLoader />
    }

    return (
        <form className='admin-add-page'>
            <div className='admin-add-page__row'>
                <p className={['admin-add-page__col20', 'admin-add-page_text_right'].join(' ')}>Индификатор :</p>
                <p className='admin-add-page__col30'>{resultGet.data.id}</p>
            </div>
            <div className='admin-add-page__row'>
                <p className={['admin-add-page__col20', 'admin-add-page_text_right'].join(' ')}>Название :</p>
                <DefaultInput
                    className='admin-add-page__col30'
                    defaultValue={name}
                    onChange={(event) => {
                        setName(event.target.value)
                    }}
                />
            </div>
            <div className='admin-add-page__row'>
                <p className={['admin-add-page__col20', 'admin-add-page_text_right'].join(' ')}>Цена :</p>
                <DefaultInput
                    type='number'
                    min="0"
                    className='admin-add-page__col30'
                    defaultValue={price}
                    onChange={(event) => {
                        setPrice(event.target.value)
                    }}
                />
            </div>
            <div className='admin-add-page__row'>
                <p className={['admin-add-page__col20', 'admin-add-page_text_right'].join(' ')}>Тип :</p>
                {resultTypeList.data &&
                    <DefaultSelect
                        className='admin-add-page__col30'
                        defaultValue={searchOptionName(resultGet.data.typeId, resultTypeList.data)}
                        returnValueFunction={setType}
                        options={resultTypeList.data}
                    />
                }
            </div>
            <div className='admin-add-page__row'>
                <p className={['admin-add-page__col20', 'admin-add-page_text_right'].join(' ')}>Бренд :</p>
                {resultBrandList.data &&
                    <DefaultSelect
                        className='admin-add-page__col30'
                        defaultValue={searchOptionName(resultGet.data.brandId, resultBrandList.data)}
                        returnValueFunction={setBrand}
                        options={resultBrandList.data}
                    />
                }
            </div>
            <div className='admin-add-page__row'>
                <p className={['admin-add-page__col20', 'admin-add-page_text_right'].join(' ')}>Изображение :</p>
                <div className='admin-add-page__col30 admin-add-page__column'>
                    {(resultGet.data.img && (img === null)) &&
                        <p className='mb-20'>{resultGet.data.img}</p>
                    }
                    <DefaultInputFile
                        setFile={setImg}
                    />
                </div>
            </div>
            <div className='admin-add-page__row'>
                <p className={['admin-add-page__col20', 'admin-add-page_text_right'].join(' ')}>Дата обновления :</p>
                <p className='admin-add-page__col30'>{getDate(resultGet.data.updatedAt)}</p>
            </div>
            <div className='admin-add-page__row'>
                <p className={['admin-add-page__col20', 'admin-add-page_text_right'].join(' ')}>Дата создания :</p>
                <p className='admin-add-page__col30'>{getDate(resultGet.data.createdAt)}</p>
            </div>
            <div className='admin-add-page__row'>
                <FloodedButton
                    className='mr-20'
                    onClick={(event) => {
                        event.preventDefault()
                        resultUpdate.fetching(id, name, price, type, brand, img)
                    }}
                >
                    Сохранить
                </FloodedButton>
                <BorderButton
                    onClick={(event) => {
                        event.preventDefault()
                        navigate(-1)
                    }}
                >
                    Назад
                </BorderButton>
            </div>
        </form>
    )
}

export default AdminDevice