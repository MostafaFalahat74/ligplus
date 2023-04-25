import './modal.scss';
import { useState } from 'react'

const Modal = ({ children, side , size }) => {
    const [show, setShow] = useState(true);
    return (
          <div className={`${show?"modal display-block":"modal display-none"}`}>
            <section className={`${side +' '+ size}`} >
                {children}
                {/* <button type="button" onClick={() => setShow(!show)}>
                    Close
                </button> */}
            </section>
        </div>
    );
}
export default Modal;