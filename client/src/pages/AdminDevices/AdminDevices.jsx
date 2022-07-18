import React from 'react'
import { useEffect } from 'react'
import { useFetching } from '../../hooks/useFetching'
import { deleteTypes, getTypes } from '../../http/typeAPI'
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { getDate } from '../../utils/getDate';
import { Link } from 'react-router-dom';
import { BorderButton, DefaultLoader, FloodedButton } from '../../components/UI';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { getDevices } from '../../http/deviceAPI';

const AdminDevices = () => {
    const resultGet = useFetching(getDevices)
    const resultDelete = useFetching(deleteTypes)
    const [checkedItems, setCheckedItems] = useState([])

    useEffect(() => {
        // other code
        resultGet.fetching()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resultDelete.data])

    let rows = []
    if (resultGet.data) {
        rows = resultGet.data?.rows
    }
    const copyData = JSON.parse(JSON.stringify(rows))
    if (copyData) {
        copyData.map((row) => {
            const creatAt = getDate(row.createdAt)
            row.createdAt = creatAt
            const updatedAt = getDate(row.updatedAt)
            row.updatedAt = updatedAt
            row.EditIcon = EditIcon
        })
    }

    if (resultGet.isLoading) {
        return <DefaultLoader />
    }

    return (
        <div className='admin__wrapper'>
            <div>
                <Link to='./add-device' className='inline-block mb-20 mr-20'>
                    <BorderButton className='box-shadow'>Добавить товар</BorderButton>
                </Link>
                {(checkedItems.length !== 0) &&
                    <div className='inline-block'>
                        <FloodedButton
                            className='box-shadow'
                            onClick={() => {
                                resultDelete.fetching(checkedItems)
                            }}
                        >Удалить
                        </FloodedButton>
                    </div>
                }
            </div>
            <div className='admin__table'>
                {copyData &&
                    <DataGrid
                        rows={copyData}
                        columns={[
                            { field: 'id', headerName: 'id', width: 80 },
                            { field: 'name', headerName: 'Название', width: 250 },
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
                                                className='admin__icon'
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

export default AdminDevices