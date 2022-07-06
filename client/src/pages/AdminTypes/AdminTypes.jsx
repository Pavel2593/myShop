import React from 'react'
import { useEffect } from 'react'
import { useFetching } from '../../hooks/useFetching'
import { getTypes } from '../../http/typeAPI'
import { DataGrid } from '@mui/x-data-grid';
import cl from './AdminTypes.module.scss'
import { getDate } from '../../utils/getDate';
import { Link } from 'react-router-dom';
import { BorderButton } from '../../components/UI';

const AdminTypes = () => {
    const [fetching, data, isLoading, error] = useFetching(getTypes)
    useEffect(() => {
        fetching()
    }, [])

    const copyData = JSON.parse(JSON.stringify(data))
    if (copyData) {
        copyData.map((row) => {
            const creatAt = getDate(row.createdAt)
            row.createdAt = creatAt
            const updatedAt = getDate(row.updatedAt)
            row.updatedAt = updatedAt
        })
    }
    
    return (
        <div className={cl.adminTypes__wrapper}>
            <Link to='./add-type' className='inline-block mb-20 mr-20'>
                <BorderButton className='box-shadow'>Добавить пользователя</BorderButton>
            </Link>
            <div className={cl.adminTypes__table }>
                {copyData&&
                    <DataGrid
                        rows={copyData}
                        columns={[
                            { field: 'id', headerName: 'id', width: 50 },
                            { field: 'name', headerName: 'Название', width: 100 },
                            { field: 'createdAt', headerName: 'Дата создания', width: 160 },
                            { field: 'updatedAt', headerName: 'Дата обновления', width: 160 }
                        ]}
                        rowsPerPageOptions={[5,10,25,50,100]}
                        checkboxSelection
                    />
                }
            </div>
        </div>
    )
}

export default AdminTypes