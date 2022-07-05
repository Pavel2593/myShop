import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { BorderButton, DefaultInput, DefaultLoader, DefaultSelect, FloodedButton } from '../../components/UI';
import { useFetching } from '../../hooks/useFetching';
import { getUser } from '../../http/userAPI';
import { getDate } from '../../utils/getDate';
import { searchOptionName } from '../../utils/searchOptionName';
import cl from './AdminUser.module.scss'

const AdminUser = () => {
    const params = useParams();
    const id = params.id
    const [fetching, data, isLoading, error] = useFetching(getUser)
    useEffect(() => {
        fetching(id)
    }, [])

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const roleName = ''
    const roles = [
        {
            name: 'Админ',
            value: 'ADMIN',
        },
        {
            name: 'Пользователь',
            value: 'USER',
        }
    ]


    useEffect(() => {
        setEmail(data.email)
        setRole(data.role)
    }, [data])

    if (isLoading) {
        return <DefaultLoader/>
    }
    
    return (
        <form className={cl.user_info}>
            <div className={cl.user_info__row}>
                <p className={[cl.user_info__col20, cl.user_info_text_right].join(' ')}>Индификатор :</p>
                <p className={cl.user_info__col30}>{data.id}</p>
            </div>
            <div className={cl.user_info__row}>
                <p className={[cl.user_info__col20, cl.user_info_text_right].join(' ')}>Email :</p>
                <DefaultInput
                    className={cl.user_info__col30}
                    defaultValue={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
            </div>
            <div className={cl.user_info__row}>
                <p className={[cl.user_info__col20, cl.user_info_text_right].join(' ')}>Пароль :</p>
                <DefaultInput
                    className={cl.user_info__col30}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
            </div>
            <div className={cl.user_info__row}>
                <p className={[cl.user_info__col20, cl.user_info_text_right].join(' ')}>role :</p>
                <DefaultSelect
                    className={cl.user_info__col30}
                    defaultValue={searchOptionName(data.role, roles)}
                    returnValueFunction={setRole}
                    options={roles}
                />
            </div>
            <div className={cl.user_info__row}>
                <p className={[cl.user_info__col20, cl.user_info_text_right].join(' ')}>updatedAt :</p>
                <p className={cl.user_info__col30}>{getDate(data.updatedAt)}</p>
            </div>
            <div className={cl.user_info__row}>
                <p className={[cl.user_info__col20, cl.user_info_text_right].join(' ')}>createdAt :</p>
                <p className={cl.user_info__col30}>{getDate(data.createdAt)}</p>
            </div>
            <div className={cl.user_info__row}>
                <FloodedButton
                    className='mr-20'
                >
                    Сохранить
                </FloodedButton>
                <BorderButton>Назад</BorderButton>
            </div>
        </form>

    )
}

export default AdminUser