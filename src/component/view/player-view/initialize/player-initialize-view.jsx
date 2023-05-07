import React , {useState} from 'react'
import { ModalCompoent } from '../../../commen/segment/modals/modal'

const PlayerInitializeView = () => {
  const [show, setShow] = useState(false);
  const hanndleShow = () => {
    setShow(!show)
  }

  return (
    <>
      <button onClick={hanndleShow}>test</button>
      <ModalCompoent show={show} size={'big'} side={'center'}> ttttttttttt</ModalCompoent>
    </>
  )
}

export default PlayerInitializeView