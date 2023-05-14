import React from 'react';
import { TextFild, SubmitButton, CaptionComponent } from '../../../commen/partials'
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
                    <TextFild className={'big'} />
                    <SubmitButton className={'warning small'} title={'بعدی'} />
                </GS.Row>
                <GS.Row className='right'>
                    <CaptionComponent className={'big'}>جهت ثبت نام یا ورود شماره موبایل</CaptionComponent>
                </GS.Row>
                <GS.Row  className='right'>
                <CaptionComponent className={'medium'}>خود را وارد نمایید</CaptionComponent>
                </GS.Row>
            </GS.HalfPage>
        </GS.FullCenterDiv>
    )
}

export default PlayerSignupView