// import React, { useState } from 'react';
// import fotball from './../images/fotbal-ground.png';
// import tree from './../images/tree.jpg';
// import cup2 from './../images/cup2.jpg';
// import cup1 from './../images/cup1.jpg';
// import like from './../images/like.jpg';
// import UserEdit from '../seqments/userEdit'
// import Modal from '../component/modal.jsx'
// const Initialize = () => {
//     const [show, setShow] = useState(false);

//     const hanndleShow = () => {
//         setShow(!show)
//     }
//     const handleSubmit = (e) => {

//     }
//     const bodyConent = (
//         <div style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             gap: 5

//         }}>
//             <button type='submit'>ثبت</button>
//             <button>لغو</button>
//         </div>
//     )

//     const footerContnet = (
//         <div>
//             footer
//         </div>
//     )
//     return (
//         <div className='base'>
//             {/* <div className='half-page left-side-init'>
//                 <div className='init-left-top'>
//                     <div className='left-top-elemet'>
//                         <img src={cup2} />
//                     </div>
//                     <div className='left-top-elemet'>
//                         <img src={cup2} />
//                         <h6>00</h6>
//                     </div>
//                     <div className='left-top-elemet'>
//                         <img src={cup2} />
//                         <h6>00</h6>
//                     </div>
//                     <div className='left-top-elemet'>
//                         <img src={tree} />
//                     </div>
//                     <div className='left-top-elemet'>
//                         <img src={tree} />
//                         <h6>00</h6>
//                     </div>
//                     <div className='left-top-elemet'>
//                         <img src={tree} />
//                         <h6>00</h6>
//                     </div>
//                 </div>
//                 <div className='init-left-body'>
//                     <div className='left-side'>
//                         <div className='left-side-element'>
//                             <img src={cup2} />
//                         </div>
//                         <div className='left-side-element'>
//                             <img src={cup2} />
//                         </div>
//                         <div className='left-side-element'>
//                             <img src={cup2} />
//                         </div>
//                     </div>
//                     <div className='right-side'>
//                         <img src={fotball} />
//                     </div>
//                 </div>
//             </div>
//             <div className='half-page right-side-init'>
//                 <div className='init-right-top '>
//                     <div className='half-page left-section'>
//                             <div className='left-top-elemet'>
//                                 <img src={cup2} />
//                             </div>
//                             <div className='left-top-elemet'>
//                                 <img src={cup2} />
//                             </div>
//                             <div className='left-top-elemet'>
//                                 <img src={cup2} />
//                             </div>
//                     </div>
//                     <div className='half-page right-section'>
//                         <img src={fotball} />
//                     </div>
//                     <div className='stadium'>
//                             <span className="name">ورزشگاه سطح 1</span>
//                             <span className="lig">لیگ دست 99</span>
//                             <div className='like'>
//                                 <img src={like} />
//                                 <span> 10</span>
//                             </div>
//                         </div>



//                 </div>
//             </div> */}
//             <button onClick={hanndleShow}>user edit</button>
//             {/* <Modal side='center' size='big' show={show}><>fffffffff</> </Modal> */}
//             <Modal side='center' size='big' show={show} body={bodyConent} footer={footerContnet} />
//         </div>
//     )
// }

// export default Initialize