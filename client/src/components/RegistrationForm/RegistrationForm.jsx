import React, { useContext, useMemo, useState } from 'react'
import { Context } from '../..'
import { registration } from '../../http/userAPI'
import { DefaultInput, FloodedButton } from '../UI'
import ErrorText from '../UI/ErrorText/ErrorText'

const RegistrationForm = ({ setShow }) => {
    const { user } = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const singIn = async (e) => {
        e.preventDefault()
        try {
            const data = await registration(email, password)
            user.setUser(data)
            user.setIsAuth(true)
            setShow(false)
            setErrorMessage('')
        } catch (e) {
            setErrorMessage(e?.response?.data.message)
        }
    }
    
    return (
        <form onSubmit={singIn}>
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
            <FloodedButton
                className={'mb-20'}
                type="submit"
            >
                Зарегистрироваться
            </FloodedButton>
            {
                errorMessage &&
                <ErrorText>{errorMessage}</ErrorText>
            }
        </form>
    )
}

export default RegistrationForm