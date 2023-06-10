import React, { useState } from 'react'
import { ModalCompoent } from '../../../commen/segment/modals/modal'
import UserEditModal from '../modals/user-edit/user-edit-modal'
import ReadLawsModal from '../modals/read-laws/read-laws-modal'
import { GlobalStyle as GS } from "@src/assets/style/global-style";
import { InitializeStyle as S } from '@src/component/view/player-view/initialize/player-initialize-view.style'
import { user, notifications, inbox, globalChat, fotbal } from '@src/assets/images'
const PlayerInitializeView = () => {
  const [show, setShow] = useState(false);
  const hanndleShow = () => {
    setShow(!show)
  }

  return (
    <>
      {/* <button onClick={hanndleShow}>test</button> */}
      {/* <ModalCompoent show={show} size={'small'} side={'center'}> <UserEditModal/></ModalCompoent> */}
      <S.InitializeContainer>
        <S.InitializePlayerProfile>
          <GS.Column>
            <S.Item>
              <GS.LoginImg src={user} />
            </S.Item>
            <S.Item>
              <GS.LoginImg src={notifications} />
            </S.Item>
            <S.Item>
              <GS.LoginImg src={inbox} />
            </S.Item>
            <S.Item>
              <GS.LoginImg src={inbox} />
            </S.Item>
          </GS.Column>
        </S.InitializePlayerProfile>

        <S.InitializePlayerHeaderLeftBar>
          <GS.Row>
            <S.Item>
              <GS.LoginImg src={user} />
            </S.Item>
            <S.Item>
              <GS.LoginImg src={notifications} />
            </S.Item>
            <S.Item>
              <GS.LoginImg src={inbox} />
            </S.Item>
            <S.Item>
              <GS.LoginImg src={user} />
            </S.Item>
            {/* <S.Item>
              <GS.LoginImg src={notifications} />
            </S.Item>
            <S.Item>
              <GS.LoginImg src={inbox} />
            </S.Item>
            <S.Item>
              <GS.LoginImg src={inbox} />
            </S.Item> */}
          </GS.Row>

          <GS.Row>
            <S.InitializeHeaderImg>
              <GS.LoginImg src={inbox} />
            </S.InitializeHeaderImg>
          </GS.Row>

        </S.InitializePlayerHeaderLeftBar>

        <S.InitializePlayerHeaderRightBar>
          <GS.Row>
            <S.Item>
              <GS.LoginImg src={user} />
            </S.Item>
            <S.Item>
              <GS.LoginImg src={notifications} />
            </S.Item>
            <S.Item>
              <GS.LoginImg src={inbox} />
            </S.Item>
            <S.InitializeStadium>
              {/* <S.HeaderImg> */}
                <GS.LoginImg src={fotbal} />
              {/* </S.HeaderImg> */}
            </S.InitializeStadium>
          </GS.Row>
        </S.InitializePlayerHeaderRightBar >

      </S.InitializeContainer>
    </>
  )
}

export default PlayerInitializeView