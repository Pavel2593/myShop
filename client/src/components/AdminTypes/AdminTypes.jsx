import React, { useEffect } from 'react'
import { useFetching } from '../../hooks/useFetching'
import { fetchTypes } from '../../http/deviceAPI'
import cl from './AdminTypes.module.scss'

const AdminTypes = () => {
    const [fetching, data, isLoading, error] = useFetching(fetchTypes)
    const rows = data

    useEffect(() => {
        fetching()
    }, [])

    return (
        <div className={cl.table}>
            <div
                className={[cl.row, cl.row_title].join(' ')}
            >
                <div className={[cl.row__col, cl.row__id].join(' ')}>id</div>
                <div className={[cl.row__col, cl.row__email].join(' ')}>name</div>
                <div className={[cl.row__col, cl.row__role].join(' ')}>created at</div>
            </div>
            {rows &&
                rows.map(({ id, name, createdAt }) => (
                    <div
                        key={id}
                        className={cl.row}
                    >
                        <div className={[cl.row__col, cl.row__id].join(' ')}>{id}</div>
                        <div className={[cl.row__col, cl.row__email].join(' ')}>{name}</div>
                        <div className={[cl.row__col, cl.row__role].join(' ')}>{createdAt}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default AdminTypes