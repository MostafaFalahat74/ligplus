import React, { useState } from 'react'
import { ModalCompoent } from '../../../commen/segment/modals/modal'
import UserEditModal from '../modals/user-edit/user-edit-modal'
import ChatRoomModal from '../modals/chat-room/chat-room.modal'
import ReadLawsModal from '../modals/read-laws/read-laws-modal'
import { GlobalStyle as GS } from "@src/assets/style/global-style";
import { InitializeStyle as S } from '@src/component/view/player-view/initialize/player-initialize-view.style';
import { user, notifications, inbox, globalChat, fotbal } from '@src/assets/images';
import { CaptionComponent } from '@components/commen/partials'
const PlayerInitializeView = () => {
  const [show, setShow] = useState(false);
  const hanndleShow = () => {
    setShow(!show)
  }

  return (
    <>
      <button onClick={hanndleShow}>test</button> 
       <ModalCompoent show={show} size={'quite-big'} side={'center'}> <ChatRoomModal/></ModalCompoent>

      {/* <S.InitializeContainer>
        <S.InitializePlayerProfile>
          <GS.Column>
            <S.Item>
              <S.InitializeImg src={user} />
            </S.Item>
            <S.Item>
              <S.InitializeImg src={notifications} />
            </S.Item>
            <S.Item>
              <S.InitializeImg src={inbox} />
            </S.Item>
            <S.Item>
              <S.InitializeImg src={inbox} />
            </S.Item>
          </GS.Column>
        </S.InitializePlayerProfile>

        <S.InitializePlayerHeaderLeftBar>
          <GS.Row>
            <S.Item>
              <S.InitializeImg src={user} />
            </S.Item>
            <S.Item>
              <S.InitializeImg src={notifications} />
            </S.Item>
            <S.Item>
              <S.InitializeImg src={inbox} />
            </S.Item>
            <S.Item>
              <S.InitializeImg src={user} />
            </S.Item>
          </GS.Row>

          <GS.Row>
            <S.InitializeHeaderImg>
              <GS.LoginImg src={inbox} />
            </S.InitializeHeaderImg>
          </GS.Row>

        </S.InitializePlayerHeaderLeftBar>

        <S.InitializePlayerHeaderRightBar>
          <GS.Row>
            <S.StadiumLeftBar>

              <S.StadiumRow>
                <S.StadiumLeftItem>
                  <S.InitializeImg src={user} />
                </S.StadiumLeftItem>
                <S.StadiumLeftItem>
                  <S.InitializeImg src={notifications} />
                </S.StadiumLeftItem>
                <S.StadiumLeftItem>
                  <S.InitializeImg src={inbox} />
                </S.StadiumLeftItem>
              </S.StadiumRow>

              <S.StadiumRowCaption>
                <CaptionComponent>سطح 1</CaptionComponent>
              </S.StadiumRowCaption>


              <S.StadiumRowCaption>
                <CaptionComponent>دسته</CaptionComponent>
              </S.StadiumRowCaption>

              <S.StadiumRowCaption>
                <CaptionComponent>طرفداران</CaptionComponent>
              </S.StadiumRowCaption>

            </S.StadiumLeftBar>

            <S.InitializeStadium>
              <GS.LoginImg src={fotbal} />
            </S.InitializeStadium>

          </GS.Row>

          <GS.Row>
            <S.ManegmentPanelMenu>
              <GS.LoginImg src={user} />
            </S.ManegmentPanelMenu>

            <S.ManegmentPanelMenu>
              <GS.LoginImg src={inbox} />
            </S.ManegmentPanelMenu>
            <S.ManegmentPanelMenu>
              <GS.LoginImg src={user} />
            </S.ManegmentPanelMenu>

            <S.ManegmentPanelMenu>
              <GS.LoginImg src={inbox} />
            </S.ManegmentPanelMenu>
            <S.ManegmentPanelMenu>
              <GS.LoginImg src={user} />
            </S.ManegmentPanelMenu>

            <S.ManegmentPanelMenu>
              <GS.LoginImg src={inbox} />
            </S.ManegmentPanelMenu>
            <S.ManegmentPanelMenu>
              <GS.LoginImg src={user} />
            </S.ManegmentPanelMenu>

            <S.ManegmentPanelMenu>
              <GS.LoginImg src={inbox} />
            </S.ManegmentPanelMenu>
            <S.ManegmentPanelMenu>
              <GS.LoginImg src={user} />
            </S.ManegmentPanelMenu>
          </GS.Row>

          <GS.Row>
          <S.ManegmentPanelItem>
            <GS.LoginImg src={inbox} />
          </S.ManegmentPanelItem>
          </GS.Row>

        </S.InitializePlayerHeaderRightBar >

      </S.InitializeContainer> */}
    </>
  )
}

export default PlayerInitializeView