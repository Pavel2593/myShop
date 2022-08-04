import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'
import { IUseFetching, useFetching } from '../../hooks/useFetching'
import { Context } from '../../../pages/_app'
import { AppContextInterface } from '../../../types/store'
import { login } from '../../http/userAPI'
import { DefaultInput, FloodedButton } from '../UI'
import ErrorText from '../UI/ErrorText/ErrorText'

interface IAuthorizationForm {
    setShow: Dispatch<SetStateAction<boolean>>
}

const AuthorizationForm: React.FunctionComponent<IAuthorizationForm> = ({ setShow }) => {
    const { user }: AppContextInterface = useContext(Context)
    const [email, setEmail] = useState<string>('admin@admin.ru')
    const [password, setPassword] = useState<string>('admin')
    const [errorMessage, setErrorMessage] = useState<string>('')
    const postLogin: IUseFetching = useFetching(login)
    console.log(postLogin)
    const singUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        postLogin.fetching(email, password)
    }

    useEffect(() => {
        if (postLogin.status === 200) {
            setShow(false)
        }
    }, [postLogin.status])

    useEffect(() => {
        setErrorMessage(postLogin.error)
    }, [postLogin.error])

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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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