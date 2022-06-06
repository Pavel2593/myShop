import React, { useState } from 'react'
import DefaultMain from '../components/UI/DefaultMain/DefaultMain'
import UserList from '../components/UserList/UserList'

const Admin = () => {
    const [ActiveComponent, setActiveComponent] = useState(<UserList/>)
    return (
        <DefaultMain>
            <UserList/>
        </DefaultMain>
    )
}

export default Admin