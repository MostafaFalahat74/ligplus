import { ErrorMessageComponentStyle as S } from "@components/commen/partials/typographys/error-message/error-message-component.style";
export const ErrorMessageComponent = ({ children }) => {
    return <S.Typography>{children}</S.Typography>;
};
