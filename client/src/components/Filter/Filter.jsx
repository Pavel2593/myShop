import React, { useEffect, useState } from 'react'
import { fetchTypes } from '../../http/deviceAPI'
import { useFetching } from './../../hooks/useFetching'
import cl from './Filter.module.scss'

const Filter = () => {
    const [fetching, data, isLoading, error] = useFetching(fetchTypes)
    console.log(data);
    const [title, setTitle] = useState('Тип')
    useEffect(() => {
        fetching()
    },[])

    return (
        <div>
            <h2>{title}</h2>
            {data && 
                data.map((item) => (
                    <div>{item.name}</div>
                ))
            }
        </div>
    )
}

export default Filter