import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { BorderButton, DefaultInput, DefaultLoader, DefaultSelect, FloodedButton } from '../../components/UI';
import { useFetching } from '../../hooks/useFetching';
import { getUser, updateUser } from '../../http/userAPI';
import { getDate } from '../../utils/getDate';
import { searchOptionName } from '../../utils/searchOptionName';
import cl from './AdminUser.module.scss'

const AdminUser = () => {
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id
    const resultGet = useFetching(getUser)
    const resultUpdate = useFetching(updateUser)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
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
        // other code
        resultGet.fetching(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resultUpdate.data])

    useEffect(() => {
        // other code
        setEmail(resultGet.data.email)
        setRole(resultGet.data.role)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resultGet.data])

    useEffect(() => {
        // other code
        if (resultUpdate.status === 200) {
            navigate('/admin/users/')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resultUpdate.status])

    if (resultGet.isLoading) {
        return <DefaultLoader />
    }

    return (
        <form className={cl.user_info}>
            <div className={cl.user_info__row}>
                <p className={[cl.user_info__col20, cl.user_info_text_right].join(' ')}>Индификатор :</p>
                <p className={cl.user_info__col30}>{resultGet.data.id}</p>
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
                    defaultValue={searchOptionName(resultGet.data.role, roles)}
                    returnValueFunction={setRole}
                    options={roles}
                />
            </div>
            <div className={cl.user_info__row}>
                <p className={[cl.user_info__col20, cl.user_info_text_right].join(' ')}>updatedAt :</p>
                <p className={cl.user_info__col30}>{getDate(resultGet.data.updatedAt)}</p>
            </div>
            <div className={cl.user_info__row}>
                <p className={[cl.user_info__col20, cl.user_info_text_right].join(' ')}>createdAt :</p>
                <p className={cl.user_info__col30}>{getDate(resultGet.data.createdAt)}</p>
            </div>
            <div className={cl.user_info__row}>
                <FloodedButton
                    className='mr-20'
                    onClick={(event) => {
                        event.preventDefault()
                        resultUpdate.fetching(id, email, role)
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

export default AdminUser