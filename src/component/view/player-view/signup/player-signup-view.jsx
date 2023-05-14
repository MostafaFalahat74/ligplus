import React from 'react';
import {TextFild ,SubmitButton} from '../../../commen/partials'
import { GlobalStyle as GS } from "../../../../assets/style/global-style";
import tree from '../../.././../assets/images/tree.jpg'
const PlayerSignupView = () => {
    return (
        <GS.FullCenterDiv>
            <GS.HalfPage>
                <GS.LoginImg src={tree} />
            </GS.HalfPage>
            <GS.HalfPage>
                <GS.Row>
                    <TextFild />
                    <SubmitButton className={'warning '} title={'بعدی'} />
                </GS.Row>
                <GS.Row>
                    <SubmitButton className={'warning'} title={'1111111111'} />
                    <SubmitButton className={'warning'} title={'ff'} />
                </GS.Row>
            </GS.HalfPage>


            {/* <TextFildInputComponent type={'text'} className={'primary'} placeholder={'test'}/>  */}



        </GS.FullCenterDiv>
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