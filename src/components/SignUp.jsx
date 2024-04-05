import React from 'react'
import './SignUp.css'

function SignUp() {
    return (
        <div className='signUp'>
            <div className="innerSignup">
                <h2>Create your PopX account</h2>
                <div className="signupcont">
                    <label htmlFor="">Full Name</label>
                    <input type="text" name="" id="" className='contRad' value="Mary Doe" />

                    <label htmlFor="">Phone Number</label>
                    <input type="text" name="" id="" className='contRad' value="Mary Doe" />

                    <label htmlFor="">Email Address</label>
                    <input type="text" name="" id="" className='contRad' value="Mary Doe" />

                    <label htmlFor="">Password</label>
                    <input type="text" name="" id="" className='contRad' value="Mary Doe" />

                    <label htmlFor="">Company Name</label>
                    <input type="text" name="" id="" className='contRad' value="Mary Doe" />

                    <label htmlFor="">Are you an agency?</label>

                    <div className="rad">
                        <div>
                            <input type="radio" id="huey" name="drone" value="huey" className='radd' checked />
                            <label for="huey">yes</label>
                        </div>

                        <div>
                            <input type="radio" id="dewey" name="drone" value="dewey" className='radd' />
                            <label for="dewey">no</label>
                        </div>

                    </div>
                    <button className="createAcc">Create Account</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp