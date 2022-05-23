import React, { useContext, useEffect } from 'react'
import { Context } from '../..'
import { useFetching } from '../../hooks/useFetching'
import { getUsers } from '../../http/userAPI'
import { DefaultLoader } from '../UI'

const UserList = () => {
    const [fetching, data, isLoading, error] = useFetching(getUsers)
    const rows = data.rows

    useEffect(() => {
        fetching()
    }, [])
    console.log(data)
    return (
        <div>
            {rows &&
                rows.map(({ id, email, role }) => (
                    <div
                        key={id}
                        style={{display: 'flex'}}
                    >
                        <div>{id}</div>
                        <div>{email}</div>
                        <div>{role}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default UserList