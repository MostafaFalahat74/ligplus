import styled from "@emotion/styled/macro";
const InitializePlayerProfile = styled.div`
display: flex;
// align-items: center;
// justify-content: center;
width: 9.1%;
height: 100%;
`;
const InitializePlayerHeaderLeftBar = styled.div`
display: flex;
// align-items: center;
// justify-content: center;
flex-direction: column;
width: 55%;
height: 100%;
`;

const InitializePlayerHeaderRightBar= styled.div`
display: flex;
flex-direction: column;
width: 50%;
height: 100%;
`
;

const InitializeStadium = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 45%;
height: 100%;
 margin-top: 5%;
`;
const Item = styled.div`
display: flex;
flex-direction: row;
width:100%;
`
const StadiumLeftItem = styled.div`
display: flex;
flex-direction: row;
width:18.333%;
`

const StadiumLeftBar = styled.div`
display: flex;
flex-direction: column;
width:55%;
background-color: aquamarine;
`

const InitializeContainer = styled.div`
display: flex;
width: 100vw;
height: 100vh;
top: 0 !important;
`

const InitializeHeaderImg = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 85%;
height:  85%;
`

const HeaderImg = styled.div`
display: flex;
margin-top:15%;
 justify-content: center;
width: 100%;
height:  30%;
`
const StadiumRow = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;

`
const StadiumRowCaption = styled.div`
display: flex;
align-items: center;
justify-content:  right;
width: 100%;
`

const ManegmentPanelMenu = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width:11.11%;
`
const ManegmentPanelItem = styled.div`
display: flex;
background-color: red;
border: 1px solid black;
border-radius: 5px;
width: 95%;
`
const InitializeImg = styled.img`
width: 40px;
height:40px;
`
  ;

export const InitializeStyle = {
  InitializePlayerProfile,
  InitializePlayerHeaderLeftBar,
  InitializePlayerHeaderRightBar,
  InitializeStadium,
  Item,
  ManegmentPanelMenu,
  InitializeContainer,
  InitializeHeaderImg,
  HeaderImg,
  StadiumLeftItem,
  StadiumLeftBar,
  StadiumRow,
  StadiumRowCaption,
  ManegmentPanelItem,
  InitializeImg
}