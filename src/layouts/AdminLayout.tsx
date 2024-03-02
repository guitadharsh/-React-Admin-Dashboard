import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout: React.FC = () => {
    return (
        <div className='admin'>
            a
            <Outlet />
        </div>
    )
}

export default AdminLayout