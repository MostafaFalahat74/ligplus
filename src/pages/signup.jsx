import React from 'react';
import tree from './../images/tree.jpg';

const Signup = () => {
    return (
        <div className='signup'>
            <div className='login-image'>
                <img src={tree} />
            </div>
            <div className='login-inputs'>
                <div className='row-login-item'>
                    <input className='input input-gray signup-input' placeholder="0912..." type="text" />
                    <button className='btn btn-primary signup-button'>بعدی</button>
                </div>
                <h6 className='text'>جهت ثبت نام یا ورود شماره موبایل</h6>
                <h6 className='text'>خود را وارد کنید</h6>
            </div>
        </div>
    )
}

export default Signup