import React from 'react';
import { TextFildInputComponent } from '../../../commen/partials/inputs/textFild-input.component'
import {SubmitButtonCompoent } from '../../../commen/partials/buttons/submit-button/submit.button.component'
const PlayerSignupView = () => {
    return (
        <>
                 {/* <TextFildInputComponent type={'text'} className={'primary'} placeholder={'test'}/>  */}
                <SubmitButtonCompoent className={'warning'} title={'ff'}/>

        </>
        // <div className='base'>
        //     <div className='login-image half-page middle-border'>
        //         {/* <img src={tree} /> */}
        //     </div>
        //     <div className='login-inputs'>
        //         <div className='row-login-item'>
        //             <input className='input input-gray signup-input' placeholder="0912..." type="text" />
        //             <button className='btn btn-primary signup-button'>بعدی</button>
        //         </div>
        //         <h6 className='text'>جهت ثبت نام یا ورود شماره موبایل</h6>
        //         <h6 className='text'>خود را وارد کنید</h6>
        //     </div>
        // </div>
    )
}

export default PlayerSignupView