import { GlobalStyle as GS } from "@global/global-style";
import { ChatRoomModalStyle as C } from './chat-room.modal.style';
import { FiArrowLeft } from "react-icons/fi";
import { SubmitButtonCompoent } from './../../../../commen/partials/buttons/submit-button/submit.button.component';
import { user, notifications, inbox, globalChat, fotbal } from '@src/assets/images';
const ChatRoomModal = () => {

    return (
        <GS.CenterDiv className='column'>
            <C.ChatRoomModalBody>
                <C.ChatRoomModalBodyBackButton>
                    <FiArrowLeft />
                    aa
                </C.ChatRoomModalBodyBackButton>
                <C.ChatRoomModalRows>
                    <C.ChatRoomModalBodyRow>
                        <C.ChatRoomModalBodyMessage>
                            vxcvxcvxccvnxmn
                        </C.ChatRoomModalBodyMessage>
                        <C.ChatRoomModalBodyUser>
                            <C.ChatRoomModalBodyUserImage src={user} />

                            <C.ChatRoomModalBodyUserInfo>
                                cvxcx
                            </C.ChatRoomModalBodyUserInfo>
                            <C.ChatRoomModalBodyUserInfo>
                                cvxcx
                            </C.ChatRoomModalBodyUserInfo>
                        </C.ChatRoomModalBodyUser>
                    </C.ChatRoomModalBodyRow>
                </C.ChatRoomModalRows>

            </C.ChatRoomModalBody>
            <C.ChatRoomModalFooter>
                <C.ChatRoomTextFildInput />
                <C.ChatRoomButton>
                    ارسال
                </C.ChatRoomButton>
            </C.ChatRoomModalFooter>

        </GS.CenterDiv>
    )
}

export default ChatRoomModal;