import React from 'react'
import { Outlet } from 'react-router-dom'
import topGradient from '../assets/top.svg'
import bottomGradient from '../assets/bottom.svg'

const AdminLayout: React.FC = () => {
    return (
        <div className='admin'>
            <div className="admin__bg--top">
                <img src={topGradient} alt="gradient-background" />
            </div>

            <div className="admin__bg--bottom">
                <img src={bottomGradient} alt="gradient-background" />
            </div>

            <Outlet />
        </div>
    )
}

export default AdminLayout