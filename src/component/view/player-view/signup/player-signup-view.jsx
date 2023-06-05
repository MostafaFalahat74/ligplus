import '@components/config/i18n';
import { useTranslation } from "react-i18next";
import React, { useState } from 'react';
import { TextFild, SubmitButton, CaptionComponent } from '@components/commen/partials'
import { GlobalStyle as GS } from "@global/global-style";
import tree from '@images/tree.jpg';
import * as Yup from "yup";
import { Formik } from "formik";


const PlayerSignupView = () => {
    const { t } = useTranslation();
    const [form, setForm] = useState({

        mobile: "",
        formErrors: {},
    });
    const { mobile, formErrors } = form;
    const productValidation = Yup.object({
        mobile: Yup.string()
            .trim()
            .required(t("required field"))
            .min(3, t("must be at least 3 characters"))
            .max(64, t("must not be greater than 64 characters")),
    });
    return (
        <Formik
            enableReinitialize
            initialValues={{
                mobile
            }}
            validationSchema={productValidation}
            onSubmit={(e) => console.log('ddddddsada222')}
        >
            {(formik) => (
                <GS.FullCenterDiv>
                    <GS.HalfPage>
                        <GS.LoginImg src={tree} />
                    </GS.HalfPage>
                    <GS.HalfPage>
                        <GS.SubmitForm>
                            <GS.Row>
                                <TextFild
                                    type={"text"}
                                    name={"mobile"}
                                    placeholder={t("mobile placeholder")}
                                    className={'x-large'}
                                />
                                <SubmitButton className={'warning small'} title={t("next")} />
                            </GS.Row>
                        </GS.SubmitForm>
                        <GS.Row className='right'>
                            <CaptionComponent className={'big'}>جهت ثبت نام یا ورود شماره موبایل</CaptionComponent>
                        </GS.Row>
                        <GS.Row className='right'>
                            <CaptionComponent className={'medium'}>خود را وارد نمایید</CaptionComponent>
                        </GS.Row>
                    </GS.HalfPage>
                </GS.FullCenterDiv>
            )}
        </Formik>

    )
}

export default PlayerSignupView