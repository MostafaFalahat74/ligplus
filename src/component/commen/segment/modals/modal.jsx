import { ModalStyle } from './modal.style'

export const ModalCompoent = ({ children, side, size, show }) => {
    return <ModalStyle.Modal className={`${show ? "Modal display-block" : "modal display-none"}`}>
        <ModalStyle.Body className={`${side + ' ' + size}`} >
            {children}
        </ModalStyle.Body>
    </ModalStyle.Modal>
};