import '@components/config/i18n';
import { useTranslation } from "react-i18next";
import React, { useState } from 'react';
import { TextFild, SubmitButton, CaptionComponent } from '@components/commen/partials'
import { GlobalStyle as GS } from "@global/global-style";
import tree from '@images/tree.jpg';
import * as Yup from "yup";
import { Formik } from "formik";
import { endpoints ,callApi } from "@components/config/callApi";
import { requestMethodes } from "@constants/content";


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
    const handleMobileChange = (e) => {
        const { name, value } = e.target;
        //delete formErrors[name];
        setForm({ ...form, [name]: value });
        console.log(form)
    }

    const handleSubmit = async (e) => {
        try {
            const { baseURL9000, v1 } = endpoints;
            const bodyForm = {
                mobile: e.mobile,
            };
            const result = await callApi({
                baseURL: baseURL9000,
                url: `${v1}/user`,
                method: requestMethodes.post,
                body: bodyForm,
            });

            if (result?.status === true) {
                navigate("/client");
                toastContainer(
                    notificationTypes.success,
                    t("Added Successfully")
                );
            } else {
                setForm((prevState) => ({
                    ...prevState,
                    formErrors: {
                        ...prevState.formErrors,
                        ...result?.errors,
                    },
                }));
            }
        }
        catch (error) {
          console.log("error in sever");
        }
}
return (

    <GS.FullCenterDiv>
        <GS.HalfPage>
            <GS.LoginImg src={tree} />
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
                    <GS.SubmitForm onChange={handleMobileChange}>
                        <GS.Row>
                            <TextFild
                                type={"text"}
                                name={"mobile"}
                                label={t("mobile")}
                                placeholder={t("mobile placeholder")}
                                className={'x-large'}
                            />
                            <SubmitButton className={'warning small'} title={t("next")} />
                        </GS.Row>
                    </GS.SubmitForm>
                )}
            </Formik>
            <GS.Row className='right'>
                <CaptionComponent className={'big'}>جهت ثبت نام یا ورود شماره موبایل</CaptionComponent>
            </GS.Row>
            <GS.Row className='right'>
                <CaptionComponent className={'medium'}>خود را وارد نمایید</CaptionComponent>
            </GS.Row>
        </GS.HalfPage>
    </GS.FullCenterDiv>


)
}

export default PlayerSignupView