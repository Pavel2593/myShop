import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BorderButton, DefaultInput, ErrorText, FloodedButton } from '../../components/UI'
import { useFetching } from '../../hooks/useFetching'
import { addType } from '../../http/typeAPI'

const AdminAddType = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const resultAdd = useFetching(addType)
    const [textError, setTextError] = useState(resultAdd.error)
    
    useEffect(() => {
        // other code
        if (resultAdd.status === 200) {
            navigate('/admin/types')
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
        if (name) {
            resultAdd.fetching(name)
            setTextError(resultAdd.error)
        } else {
            setTextError('Заполните поле')
        }
    }
    
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

export default AdminAddType