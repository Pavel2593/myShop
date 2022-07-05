import React, { useState } from 'react'
import { addUser } from '../../http/userAPI'
import { useNavigate } from "react-router-dom";
import { DefaultInput, DefaultSelect, FloodedButton } from '../UI'
import ErrorText from '../UI/ErrorText/ErrorText'
import cl from './AdminAddUser.module.scss'

const AdminAddUser = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
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
    const postAddUser = async (e) => {
        e.preventDefault()
        try {
            if (!email || !password || !role) {
                setErrorMessage('Заполните все поля')
                return
            }
            const data = await addUser(email, password, role)
            console.log(data)
            setErrorMessage('')
            navigate('/admin/users')
            
        } catch (e) {
            setErrorMessage(e?.response?.data.message)
        }
    }

    return (
        <form onSubmit={postAddUser} className={cl.addUser}>
            <DefaultInput
                className='mb-20'
                placeholder='Email'
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
            />
            <DefaultInput
                className='mb-20'
                placeholder='Пароль'
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
            />
            <DefaultSelect
                className='mb-20'
                defaultValue='Выберите роль'
                returnValueFunction={setRole}
                options={roles}
            />
            <FloodedButton
                className={'mb-20'}
                type="submit"
            >
                Добавить
            </FloodedButton>
            {
                errorMessage &&
                <ErrorText>{errorMessage}</ErrorText>
            }
        </form>
    )
}

export default AdminAddUser