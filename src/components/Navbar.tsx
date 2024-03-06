import React from 'react'
import info from '../assets/square-info.svg'
import notify from '../assets/bell.svg'
import profile from '../assets/profile-image.jpg'

const Navbar: React.FC = () => {
    return (
        <div className='navbar'>
            <div className="navbar__container">

                <div className="navbar__icons">
                    <img src={info} alt="info-icon" />
                    <img src={notify} alt="notify-icon" />
                </div>

                <div className="navbar__details">
                    <p>Hi, <span>Muhammed Asad</span></p>
                    <p>Welcome Back</p>
                </div>

                <div className="navbar__profile">
                    <img src={profile} alt="profile-picture" />
                </div>
            </div>
        </div>    
    )
}

export default Navbar