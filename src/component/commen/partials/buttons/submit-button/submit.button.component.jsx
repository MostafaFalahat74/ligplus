import { SubmitButtonCompoents as S } from './submit.button.component.style'


export const SubmitButtonCompoent = ({ className, title }) => {
    return <>
        <S.SubmitButton className={className} title={title} type="submit" />
    </>
};