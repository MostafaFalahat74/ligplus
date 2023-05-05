import './modal.scss';

const Modal = ({ body, side, size, show, footer }) => {
    return (
        <div className={`${show ? "modal display-block" : "modal display-none"}`}>
            <section className={`${side + ' ' + size}`} >
                {/*                 {children} */}
                {/* <button type="button" onClick={() => setShow(!show)}>
                    Close
                </button> */}
                <div>{body}</div>
                <div>{footer}</div>
            </section>
        </div>
    );
}
export default Modal;