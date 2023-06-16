import '@components/config/i18n';
import { useTranslation } from "react-i18next";
import React, { useState } from 'react'
import { TextFild, SubmitButton, CaptionComponent, LinkButton } from '@components/commen/partials'
import { GlobalStyle as GS } from "@src/assets/style/global-style";
import fotbal from '@src/assets/images/fotbal.png';
import * as Yup from "yup";
import { Formik } from "formik";
import { endpoints, callApi } from "@components/config/callApi";
import { requestMethodes } from "@constants/content";
import { useLocation, useNavigate } from "react-router-dom";

const PlayerAuthenticateView = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  // const state= useLocation();
  // const {mobile}=state;
  // console.log('fir)((+st'+mobile)
  const [form, setForm] = useState({

    verificationCode: "",
    formErrors: {},
  });
  const { verificationCode, formErrors } = form;
  const productValidation = Yup.object({
    verificationCode: Yup.string()
      .trim()
      .required(t("required field"))
      .length(5, t("must be 5 characters"))
  });
  const handleAuthenticateFormChange = (e) => {
    const { name, value } = e.target;
     delete formErrors[name];
    setForm({ ...form, [name]: value });
    console.log(form)
  }
  const handleSubmit =  (e) => {
   navigate("/initialize");
  }
  return (
    <GS.FullCenterDiv>
      <GS.HalfPage>
        <GS.LoginImg src={fotbal} />
      </GS.HalfPage>
      <GS.HalfPage>
        <Formik
          enableReinitialize
          initialValues={{
            mobile: ""
          }}
          validationSchema={productValidation}
          onSubmit={(e) => handleSubmit(e)}

        >
          {(formik) => (
            <GS.SubmitForm onChange={handleAuthenticateFormChange}>
              <GS.Row>
                <TextFild
                  type={"text"}
                  name={"verificationCode"}
                  label={("verificationCode")}
                  placeholder={t("verification code")}
                  className={'x-large'}
                />
                <SubmitButton className={'warning small'} title={t("next")} />
              </GS.Row>
            </GS.SubmitForm>
          )}
        </Formik>
        <GS.Row>
          <LinkButton href={"/"} className={'danger medium'} title={t("edit mobile number")} />
          <SubmitButton className={'warning medium'} title={t('resend code')} />
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