import { LinkButtonCompoents as S } from './link.button.component.style'


export const LinkButtonCompoent = ({ className, title }) => {
    return <>
        <S.LinkButton className={className} title={title} type="submit" />
    </>
};