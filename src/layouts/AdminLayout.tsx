import React from 'react'
import { Outlet } from 'react-router-dom'
// import topGradient from '../assets/top.svg'
// import bottomGradient from '../assets/bottom.svg'
import { Navbar, Sidebar } from '../components'

const AdminLayout: React.FC = () => {
    return (
        <>
            <div className='admin'>
                <div className="admin__bg" />

                <Navbar />
                <Sidebar />
                <Outlet />
            </div>


        </>
    )
}

export default AdminLayout