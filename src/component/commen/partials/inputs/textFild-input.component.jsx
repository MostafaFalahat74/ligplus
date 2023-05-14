import { TextFileStyleCompoents as S } from './textFild-input.component.style'


export const TextFildInputComponent = ({ type, className, placeholder,value }) => {
    return <>
        <S.TextFildInput value={value} className={className} placeholder={placeholder} type={type} />
    </>
};
