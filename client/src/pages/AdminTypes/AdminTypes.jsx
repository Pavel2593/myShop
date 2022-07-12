import React from 'react'
import { useEffect } from 'react'
import { useFetching } from '../../hooks/useFetching'
import { deleteTypes, getTypes } from '../../http/typeAPI'
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import cl from './AdminTypes.module.scss'
import { getDate } from '../../utils/getDate';
import { Link } from 'react-router-dom';
import { BorderButton, DefaultLoader, FloodedButton } from '../../components/UI';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';

const AdminTypes = () => {
    const [fetching, data, isLoading, error] = useFetching(getTypes)
    const [fetchingDelete, dataDelete] = useFetching(deleteTypes)
    const [checkedItems, setCheckedItems] = useState([])
    useEffect(() => {
        fetching()
    }, [dataDelete])

    const copyData = JSON.parse(JSON.stringify(data))
    if (copyData) {
        copyData.map((row) => {
            const creatAt = getDate(row.createdAt)
            row.createdAt = creatAt
            const updatedAt = getDate(row.updatedAt)
            row.updatedAt = updatedAt
            row.EditIcon = EditIcon
        })
    }

    if (isLoading) {
        return <DefaultLoader />
    }

    return (
        <div className={cl.adminTypes__wrapper}>
            <div>
                <Link to='./add-type' className='inline-block mb-20 mr-20'>
                    <BorderButton className='box-shadow'>Добавить пользователя</BorderButton>
                </Link>
                {(checkedItems.length !== 0) &&
                    <div className='inline-block'>
                        <FloodedButton
                            className='box-shadow'
                            onClick={() => {
                                fetchingDelete(checkedItems)
                            }}
                        >Удалить
                        </FloodedButton>
                    </div>
                }
            </div>
            <div className={cl.adminTypes__table}>
                {copyData &&
                    <DataGrid
                        rows={copyData}
                        columns={[
                            { field: 'id', headerName: 'id', width: 50 },
                            { field: 'name', headerName: 'Название', width: 500 },
                            { field: 'createdAt', headerName: 'Дата создания', width: 160 },
                            {
                                field: 'updatedAt',
                                headerName: 'Дата обновления',
                                width: 200,
                                renderCell: (params: GridRenderCellParams) => (
                                    <div>
                                        {params.value}
                                        <Link
                                            to={`./${params.id}`}
                                            className='ml-20'
                                        >
                                            <EditIcon
                                                className={cl.adminTypes__icon}
                                            />
                                        </Link>
                                    </div>
                                ),
                            },
                        ]}
                        rowsPerPageOptions={[5, 10, 25, 50, 100]}
                        checkboxSelection
                        onSelectionModelChange={(listId) => {
                            setCheckedItems(listId)
                        }}
                    />
                }
            </div>
        </div>
    )
}

export default AdminTypes