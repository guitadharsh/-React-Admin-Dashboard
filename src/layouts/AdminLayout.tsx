import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Sidebar } from '../components'

const AdminLayout: React.FC = () => {
    return (
        <>
            <div className='admin'>
                <div className="admin__bg" />
                <Navbar />

                <div className="admin__container">
                    <Sidebar />
                    <Outlet />
                </div>
            </div>


        </>
    )
}

export default AdminLayout