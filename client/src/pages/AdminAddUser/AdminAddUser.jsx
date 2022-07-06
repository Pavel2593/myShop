import React, { useState, useEffect } from 'react'
import { addUser } from '../../http/userAPI'
import { useNavigate } from "react-router-dom";
import { useFetching } from '../../hooks/useFetching';
import { DefaultInput, DefaultSelect, FloodedButton, BorderButton } from './../../components/UI'
import cl from './AdminAddUser.module.scss'

const AdminAddUser = () => {
    const navigate = useNavigate();
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
    const [fetching, data] = useFetching(addUser)
    useEffect(() => {
        if (data?.status === 200) {
            navigate('/admin/users')
        }
    }, [data])
    

    return (
        <form className='admin-add-page'>
            <div className='admin-add-page__row'>
                <p className={['admin-add-page__col20', 'admin-add-page_text_right'].join(' ')}>Email :</p>
                <DefaultInput
                    className='admin-add-page__col30'
                    defaultValue={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
            </div>
            <div className='admin-add-page__row'>
                <p className={['admin-add-page__col20', 'admin-add-page_text_right'].join(' ')}>Пароль :</p>
                <DefaultInput
                    className='admin-add-page__col30'
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
            </div>
            <div className='admin-add-page__row'>
                <p className={['admin-add-page__col20', 'admin-add-page_text_right'].join(' ')}>role :</p>
                <DefaultSelect
                    className='admin-add-page__col30'
                    defaultValue='Выберите роль'
                    returnValueFunction={setRole}
                    options={roles}
                />
            </div>
            <div className='admin-add-page__row'>
                <FloodedButton
                    className='mr-20'
                    onClick={(event) => {
                        event.preventDefault()
                        fetching(email, password, role)
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

export default AdminAddUser