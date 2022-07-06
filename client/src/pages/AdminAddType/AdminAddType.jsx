import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BorderButton, DefaultInput, ErrorText, FloodedButton } from '../../components/UI'
import { useFetching } from '../../hooks/useFetching'
import { addType } from '../../http/typeAPI'

const AdminAddType = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [fetching, data, isLoading, error] = useFetching(addType)
    useEffect(() => {
        if (data?.status === 200) {
            navigate('/admin/users')
        }
    }, [data])

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
            {
                error &&
                <ErrorText>{error}</ErrorText>
            }
            <div className='admin-add-page__row'>
                <FloodedButton
                    className='mr-20'
                    onClick={(event) => {
                        event.preventDefault()
                        fetching(name)
                    }}
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

export default AdminAddType