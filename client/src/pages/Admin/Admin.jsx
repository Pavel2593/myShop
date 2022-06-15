import React, { useState } from 'react'
import AdminNav from '../../components/AdminNav/AdminNav'
import DefaultLeftBlock from '../../components/UI/DefaultLeftBlock/DefaultLeftBlock'
import DefaultMain from '../../components/UI/DefaultMain/DefaultMain'

const Admin = ({ adminPath, SubComponent }) => {
    return (
        <DefaultMain
            flexRow={true}
        >
            <DefaultLeftBlock>
                <AdminNav adminPath={adminPath} />
            </DefaultLeftBlock>
            <SubComponent />
        </DefaultMain>
    )
}

export default Admin