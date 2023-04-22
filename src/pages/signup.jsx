import React from 'react';
import tree from './../images/tree.jpg'; 

const Signup = () => {
    return (
        <div className='signup'>
            <div className='login-image'>
                <img src={tree} />
            </div>
            <div className='login-input'>
                <input placeholder="0912..." type="text" />
                <button>بعدی</button>
                <h6 >جهت ثبت نام یا ورود شماره موبایل</h6>
                <h6>خود را وارد کنید</h6>
            </div>
        </div>
    )
}

export default Signup