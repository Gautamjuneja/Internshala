import React from 'react'
import './Main.css';

function Main() {
    return (
        <div className='main'>
            <div className="cont">
                <div className="innerCont">
                    <div className="content">
                        <h2>Welcome to PopX</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="buttons">
                        <button className='create'>Create Account</button>
                        <button className="login">Already Registered?Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main