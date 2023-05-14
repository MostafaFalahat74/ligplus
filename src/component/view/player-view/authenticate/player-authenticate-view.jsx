import React from 'react'
import { TextFild, SubmitButton, CaptionComponent ,LinkButton} from '../../../commen/partials'
import { GlobalStyle as GS } from "../../../../assets/style/global-style";
import fotbal from '../../../../assets/images/fotbal.png'

const PlayerAuthenticateView = () => {
  return (
    <GS.FullCenterDiv>
      <GS.HalfPage>
        <GS.LoginImg src={fotbal} />
      </GS.HalfPage>
      <GS.HalfPage>
        <GS.Row>
          <TextFild className={'big'} />
          <SubmitButton className={'warning small'} title={'بعدی'} />
        </GS.Row>
        <GS.Row>
        <LinkButton className={'danger medium'} title={'ویرایش شماره'} />
        <SubmitButton className={'warning medium'} title={'ارسال مجدد کد'} />
        </GS.Row>
        <GS.Row className='right'>
          <CaptionComponent className={'big'}> کد ورود برای شما ارسال شد، لطفا پس از</CaptionComponent>
        </GS.Row>
        <GS.Row className='right'>
          <CaptionComponent className={'medium'}> دریافت کد آنرا وارد کنید  </CaptionComponent>
        </GS.Row>
      </GS.HalfPage>
    </GS.FullCenterDiv>
  )
}

export default PlayerAuthenticateView