import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { BorderButton, DefaultInput, DefaultLoader, FloodedButton } from '../../components/UI';
import { useFetching } from '../../hooks/useFetching';
import { getType, updateType } from '../../http/typeAPI';
import { getDate } from '../../utils/getDate';

const AdminType = () => {
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id
    const [name, setName] = useState('')
    const resultGet = useFetching(getType)
    const resultUpdate = useFetching(updateType)

    useEffect(() => {
        // other code
        resultGet.fetching(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        // other code
        setName(resultGet.data.name)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resultGet.data])

    useEffect(() => {
        // other code
        if (resultUpdate.status === 200) {
            navigate('/admin/types/')
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
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
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
                        resultUpdate.fetching(id, name)
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

export default AdminType