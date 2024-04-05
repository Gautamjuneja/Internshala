import React from 'react'
import './Profile.css'

function Profile() {
    return (
        <div className='profile'>
            <div className="head"><div>Account Settings</div></div>
            <div className="innerPro">
                <div className="imag"></div>
                <div className="imag2"></div>
                <div className="context">
                    <h2>Mary Doe</h2>
                    <p>Mary@gmail.com</p>
                </div>
            </div>
            <div className='para'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</div>
        </div>
    )
}

export default Profile;