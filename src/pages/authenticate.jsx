import React from 'react'
import fotball from './../images/fotbal-ground.png';
const Authenticate = () => {
    return (
        <div className='base'>
            <div className='login-image half-page middle-border'>
                <img src={fotball} />
            </div>
            <div className='login-inputs'>
                <div className='row-login-item'>
                    <input className='input input-gray signup-input' placeholder="0912..." type="text" />
                    <button className='btn btn-primary signup-button  authen-btn'>ورود</button>
                </div>
                <div className='row-login-item'>
                    <button className='btn btn-pink signup-button authen-btn'>ویرایش شماره</button>
                    <button className='btn btn-yellow signup-button  authen-btn'>ارسال مجدد کد</button>
                </div>
                <h6 className='text'>کد ورود برای شما ارسال شد لطفا پس از</h6>
                <h6 className='text'>دریافت کد آن را وارد کنید</h6>
            </div>
        </div>
    )
}

export default Authenticate