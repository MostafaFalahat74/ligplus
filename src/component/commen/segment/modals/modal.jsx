import { ModalStyle } from './modal.style'

export const ModalCompoent = ({ children, side, size, show }) => {
    return <ModalStyle.Modal className={`${show ? "Modal display-block" : "modal display-none"}`}>
        <ModalStyle.Body className={`${side + ' ' + size}`} >
            {children}
        </ModalStyle.Body>
    </ModalStyle.Modal>
};


// import './modal.scss';

// const Modal = ({ children, side, size, show }) => {
//     return (
//         <div className={`${show ? "Modal display-block" : "modal display-none"}`}>
//             <section className={`${side + ' ' + size}`} >
//                               {children}
//             </section>
//         </div>
//     );
// }
// export default Modal;