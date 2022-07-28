import React, { useState, useEffect } from 'react'
import { addUser } from '../../http/userAPI'
import { useNavigate } from "react-router-dom";
import { useFetching } from '../../hooks/useFetching';
import { DefaultInput, DefaultSelect, FloodedButton, BorderButton, ErrorText } from './../../components/UI'

const AdminAddUser = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const roles = [
        {
            name: 'Админ',
            id: 'ADMIN',
        },
        {
            name: 'Пользователь',
            id: 'USER',
        }
    ]
    const resultAdd = useFetching(addUser)
    const [textError, setTextError] = useState(resultAdd.error)
    useEffect(() => {
        // other code
        if (resultAdd.status === 200) {
            navigate('/admin/users')
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
        if (email && password && role) {
            resultAdd.fetching(email, password, role)
            setTextError(resultAdd.error)
        } else {
            setTextError('Заполните поля')
        }
    }
    
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

export default AdminAddUser