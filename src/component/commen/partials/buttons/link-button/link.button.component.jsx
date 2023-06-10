import { LinkButtonCompoents as S } from './link.button.component.style'


export const LinkButtonCompoent = ({ className, title ,href}) => {
    return <>
        <S.LinkButton to={href}  className={className} type="submit" >{title}</S.LinkButton>
    </>
};