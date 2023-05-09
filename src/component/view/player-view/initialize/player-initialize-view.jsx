import React , {useState} from 'react'
import { ModalCompoent } from '../../../commen/segment/modals/modal'
import UserEditModal from '../modals/user-edit/user-edit-modal'

const PlayerInitializeView = () => {
  const [show, setShow] = useState(false);
  const hanndleShow = () => {
    setShow(!show)
  }

  return (
    <>
      <button onClick={hanndleShow}>test</button>
      <ModalCompoent show={show} size={'small'} side={'center'}> <UserEditModal/></ModalCompoent>
    </>
  )
}

export default PlayerInitializeView