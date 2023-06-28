import styled from "@emotion/styled/macro";
const  ChatRoomTextFildInput = styled.input`
  font-size: 1em;
  text-align: center;
  border-radius: 5px;
  outline: none;
  height: 20px;
  width: 80%;
  margin:5px 5px 10px 10px;`

  const  ChatRoomButton = styled.button`
  font-size: 1em;
  text-align: center;
  width:20%;
  border-radius: 5px;
  margin:5px 5px 10px 10px;
  color: black;
  border: none;
  outline: none;
`;

const ChatRoomModalBody = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 100%;
background-color: green;
`;
const ChatRoomModalBodyMessage = styled.span`
width: 70%;
background-color: blue;
display: flex;
text-align:center;
align-items:center;
justify-content:right
`;
const ChatRoomModalBodyRow = styled.div`
width: 100%;
display: flex;
flex-direction:row;
height:35px;
`;
const ChatRoomModalBodyUser = styled.div`
width: 30%;
background-color: red;
flex-direction:row;
`;
const ChatRoomModalBodyBackButton = styled.div`
width: 7%;
display: flex;
justify-content:center;
height:20px
`;
const ChatRoomModalFooter = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 40px;
bottom: 0;
`;
const ChatRoomModalRows = styled.div`
display: flex;
flex-direction:column;
height: 100%;
width:93%;
`;

const ChatRoomModalBodyUserImage = styled.img`
width: 40%;
`;
const ChatRoomModalBodyUserInfo = styled.div`
display: flex;
flex-direction:column;
width: 60%;
`;

export const ChatRoomModalStyle = {
    ChatRoomModalBody,
    ChatRoomModalFooter,
    ChatRoomModalBodyMessage,
    ChatRoomModalBodyUser,
    ChatRoomModalBodyBackButton,
    ChatRoomModalBodyRow,
    ChatRoomModalRows,
    ChatRoomTextFildInput,
    ChatRoomButton,
    ChatRoomModalBodyUserImage,
    ChatRoomModalBodyUserInfo
};
