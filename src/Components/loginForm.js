import React, { useState } from 'react';
import './loginForm.css';
export default function loginForm() {

    // const [popupStyle, showPopup] = useState("hide");

    // const popup = () => {
    //     showPopup("login-popup")
    //     // setTimeout(() => showPopup("hide"), 3000)
    // }

    return (
        <div className='page'>
            <div className='login-top'>
                <p className='p1' >ALREADY MEMBERS</p>
                <p className='p2'>Need help?</p>
            </div>
            <div className='cover'>
                {/* <h1>Login</h1> */}

                <input className='input1' type="text" placeholder="Enter Your Username" />
                <input className='input2' type="password" placeholder="Enter Your Password" />
                <div className='login-btn' >SIGN IN</div>

                {/* <p className='text'>Or login using</p> */}
            </div>
            <div className='login-bottom'>
                <h4 className='login-bottom-p1'>Don't have an account yet ?</h4>
                <h4 className='login-bottom-p2'>Create an account</h4>
            </div>
        </div>
    )
}
