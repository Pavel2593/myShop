import React, { useContext, useState } from 'react'
import { Context } from './../../../pages/_app'
import { login } from '../../http/userAPI'
import { DefaultInput, FloodedButton } from '../UI'
import ErrorText from '../UI/ErrorText/ErrorText'

const AuthorizationForm = ({ setShow }) => {
    const { user } = useContext(Context)
    const [email, setEmail] = useState('admin@admin.ru')
    const [password, setPassword] = useState('admin')
    const [errorMessage, setErrorMessage] = useState('')
    const singUp = async (e) => {
        e.preventDefault()
        try {
            const data = await login(email, password)
            user.setUser(data.role)
            user.setIsAuth(true)
            setShow(false)
            setErrorMessage('')
        } catch (e) {
            setErrorMessage(e?.response?.data?.message)
        }
    }

    return (
        <form onSubmit={singUp}>
            <DefaultInput
                className='mb-20'
                placeholder='Email'
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
            />
            <DefaultInput
                className='mb-20'
                placeholder='Пароль'
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
            />
            <FloodedButton
                className={'mb-20 w100'}
                type="submit"
            >
                Войти
            </FloodedButton>
            {
                errorMessage &&
                <ErrorText className={'mb-20'}>{errorMessage}</ErrorText>
            }
        </form>
    )
}

export default AuthorizationForm