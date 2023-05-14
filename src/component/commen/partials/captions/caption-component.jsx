import { CaptionComponentStyle as C } from './caption-component.style'


export const CaptionComponent = ({children}) => {
    return <>
        <C.Typography >{children}</C.Typography>
    </>
};