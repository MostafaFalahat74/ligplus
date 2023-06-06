import { TextFileStyleCompoents as S } from './textFild-input.component.style';
import { useField } from "formik";
import { useTranslation } from "react-i18next";
import { ErrorMessage } from "@components/commen/partials";
import { GlobalStyle as GS } from "@global/global-style";

export const TextFildInputComponent = ({
    label,
    multiline,
    error,
    ...props
}) => {
    const { t } = useTranslation();
    const [field, meta] = useField(props);
    return <>
        <GS.Column>
            <S.TextFildInput
                className={field.className}
                placeholder={field.placeholder}
                type={field.type}
                 label={label}
                {...props}
                {...field}           
                multiline={multiline}
            />
            {meta.touched && meta.error && (
                <ErrorMessage>{meta.error}</ErrorMessage>
            )}
            {error && <ErrorMessage>{t(`${error}`)}</ErrorMessage>}
        </GS.Column>
    </>
};
