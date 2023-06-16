import '@components/config/i18n';
import { useTranslation } from "react-i18next";
import React, { useState } from 'react';
import { TextFild, SubmitButton, CaptionComponent } from '@components/commen/partials'
import { GlobalStyle as GS } from "@global/global-style";
import tree from '@images/tree.jpg';
import * as Yup from "yup";
import { Formik } from "formik";
import { endpoints, callApi } from "@components/config/callApi";
import { requestMethodes } from "@constants/content";
import { useNavigate } from "react-router-dom";
import { Loading } from "@components/commen/segment"


const PlayerSignupView = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [isRecivedData, setRecivedData] = useState(false);
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
        delete formErrors[name];
        setForm({ ...form, [name]: value });
        console.log(form)
    }

    const handleSubmit = async (e) => {
        setRecivedData(true);
        try {
            const { baseURL9000, v1 } = endpoints;
            const bodyForm = {
                mobile: e.mobile,
            };
            const result = await callApi({
                baseURL: baseURL9000,
                url: `${v1}/signup`,

                method: requestMethodes.post,
                body: bodyForm,
            });
            setRecivedData(false);
            console.log(result)
            if (result?.msgcode === 1000) {
                navigate("/authenticate")
            //  navigate("/authenticate" ,{state:{mobile:mobile}})
            }
            else if (result?.msgcode === 5000) {
                formErrors.mobile = "xxxxxxx"
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
        <>
            {
                isRecivedData ?
                <Loading>
                </Loading>
                :
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
                                <CaptionComponent className={'big'}>{t("enter your mobile number for login or reigister")}</CaptionComponent>
                            </GS.Row>
               
                        </GS.HalfPage>
                    </GS.FullCenterDiv>
     
  
            }
        </>

    )
}

export default PlayerSignupView