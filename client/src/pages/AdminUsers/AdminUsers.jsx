import React, { useEffect } from 'react'
import { useFetching } from '../../hooks/useFetching'
import { getUsers, deleteUsers } from '../../http/userAPI'
import cl from './AdminUsers.module.scss'
import { useState } from 'react';
import { BorderButton, FloodedButton, DefaultCheckbox, Pagination } from './../../components/UI';
import { Link } from 'react-router-dom';
import { getPageCount } from './../../utils/pageNavigation'
import EditIcon from '@mui/icons-material/Edit';

const AdminUsers = () => {
    const [fetching, data] = useFetching(getUsers)
    const [fetchingDelete, dataDelete] = useFetching(deleteUsers)
    const rows = data.rows

    const [page, setPage] = useState(1)
    const limitPage = 10;
    const totalPages = getPageCount(data.count, limitPage)

    const [checkedItems, setCheckedItems] = useState([])
    const addIdCheckedItem = (id) => {
        const copyCheckedItems = [...checkedItems]
        const indexThisId = copyCheckedItems.indexOf(id)
        if (indexThisId === -1) {
            copyCheckedItems.push(id)
        } else {
            copyCheckedItems.splice(indexThisId, 1)
        }
        setCheckedItems(copyCheckedItems)
    }

    useEffect(() => {
        // other code
        fetching(page, limitPage)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, dataDelete])

    return (
        <div className={cl.table_page}>
            <div>
                <Link to='./add-user' className='inline-block mb-20 mr-20'>
                    <BorderButton className='box-shadow'>Добавить пользователя</BorderButton>
                </Link>
                {(checkedItems.length !== 0) &&
                    <div className='inline-block'>
                        <FloodedButton className='box-shadow' onClick={() => { fetchingDelete(checkedItems) }}>Удалить</FloodedButton>
                    </div>
                }
            </div>
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
                            className={[cl.row, cl.row_hover].join(' ')}

                        >
                            <DefaultCheckbox
                                id={id}
                                className={[cl.row__col, cl.row__checkbox].join(' ')}
                                returnValue={addIdCheckedItem}
                            />
                            <div className={[cl.row__col, cl.row__id].join(' ')}>{id}</div>
                            <div className={[cl.row__col, cl.row__email].join(' ')}>{email}</div>
                            <div className={[cl.row__col, cl.row__role].join(' ')}>{role}</div>
                            <Link
                                to={`./${id}`}
                                className={cl.row__col}
                            >
                                <EditIcon
                                    className={cl.row__icon}
                                />
                            </Link>
                        </div>
                    ))
                }
            </div>
            {totalPages > 1 &&
                <Pagination
                    totalPages={totalPages}
                    page={page}
                    changePage={setPage}
                />
            }
        </div>
    )
}

export default AdminUsers