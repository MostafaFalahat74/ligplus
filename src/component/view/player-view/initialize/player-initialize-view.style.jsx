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
//  align-items: center;
// justify-content: center;
width: 45%;
height: 100%;
`;
const Item = styled.div`
display: flex;
flex-direction: row;
width:100%;
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
background-color: deeppink;
`

const HeaderImg = styled.div`
display: flex;
margin-top:15%;
 justify-content: center;
width: 100%;
height:  30%;
`
  ;

export const InitializeStyle = {
  InitializePlayerProfile,
  InitializePlayerHeaderLeftBar,
  InitializePlayerHeaderRightBar,
  InitializeStadium,
  Item,
  InitializeContainer,
  InitializeHeaderImg,
  HeaderImg
}