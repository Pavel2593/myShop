import React, { useEffect } from 'react'
import { useFetching } from '../../hooks/useFetching'
import { getUsers } from '../../http/userAPI'
import cl from './AdminUsers.module.scss'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const AdminUsers = () => {
    const [fetching, data, isLoading, error] = useFetching(getUsers)
    const rows = data.rows

    useEffect(() => {
        fetching()
    }, [])

    return (
        <div className={cl.table}>
            <div
                className={[cl.row, cl.row_title].join(' ')}
            >
                <div className={[cl.row__col, cl.row__id].join(' ')}>id</div>
                <div className={[cl.row__col, cl.row__email].join(' ')}>email</div>
                <div className={[cl.row__col, cl.row__role].join(' ')}>role</div>
            </div>
            {rows &&
                rows.map(({ id, email, role }) => (
                    <div
                        key={id}
                        className={cl.row}
                    >
                        <div className={[cl.row__col, cl.row__id].join(' ')}>{id}</div>
                        <div className={[cl.row__col, cl.row__email].join(' ')}>{email}</div>
                        <div className={[cl.row__col, cl.row__role].join(' ')}>{role}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default AdminUsers