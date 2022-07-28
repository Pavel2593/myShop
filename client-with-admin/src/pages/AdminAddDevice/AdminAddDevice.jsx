import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BorderButton, DefaultInput, DefaultSelect, ErrorText, FloodedButton } from '../../components/UI'
import { useFetching } from '../../hooks/useFetching'
import { getBrands } from '../../http/brandAPI'
import { getTypes } from '../../http/typeAPI'
import { addDevice } from '../../http/deviceAPI'
import DefaultInputFile from '../../components/UI/DefaultInputFile/DefaultInputFile'

const AdminAddDevice = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [brand, setBrand] = useState('')
    const [type, setType] = useState('')
    const [img, setImg] = useState(null)
    const [info, setInfo] = useState([])
    const resultAdd = useFetching(addDevice)
    const resultBrandList = useFetching(getBrands)
    const resultTypeList = useFetching(getTypes)
    const [textError, setTextError] = useState(resultAdd.error)

    useEffect(() => {
        resultBrandList.fetching()
        resultTypeList.fetching()
    }, [])

    useEffect(() => {
        // other code
        if (resultAdd.status === 200) {
            navigate('/admin/devices')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resultAdd.status])

    useEffect(() => {
        // other code
        setTextError(resultAdd.error)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resultAdd.error])


    const addClickButton = (event) => {
        event.preventDefault()
        if (name || price || brand || type || img) {
            // resultAdd.fetching(name, price, brandId, typeId, info)
            resultAdd.fetching(name, price, brand, type, img)
            setTextError(resultAdd.error)
        } else {
            setTextError('Заполните поле')
        }
    }

    return (
        <form className='admin-add-page'>
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
                        defaultValue='Выберите тип'
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
                        defaultValue='Выберите бренд'
                        returnValueFunction={setBrand}
                        options={resultBrandList.data}
                    />
                }
            </div>
            <div className='admin-add-page__row'>
                <p className={['admin-add-page__col20', 'admin-add-page_text_right'].join(' ')}>Изображение :</p>
                <DefaultInputFile
                    setFile={setImg}
                />
            </div>
            {
                textError &&
                <ErrorText>{textError}</ErrorText>
            }
            <div className='admin-add-page__row'>
                <FloodedButton
                    className='mr-20'
                    onClick={addClickButton}
                >
                    Добавить
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

export default AdminAddDevice