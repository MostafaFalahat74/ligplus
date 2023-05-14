import styled from "@emotion/styled/macro";
const FullCenterDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
overflow-x: hidden;
&.column{
  flex-direction: column;
}
`;
const CenterDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
overflow-x: hidden;
&.column{
  flex-direction: column;
}
`;
const MiddleBorderLine=styled.line`
border-right: 1px solid gray;
`;
const HalfPage=styled.div`
width: 50%;
display: flex;
align-items: center;
text-align: center;
flex-direction: column;
justify-content: center;
`;
const LoginImg=styled.img`
width: 80%;
;`

const Row=styled.div`
display: flex;
flex-direction: row;
width:100%;
&.right{
    padding-right: 20px;
    justify-content: right;
  }
;`
export const GlobalStyle = {
    FullCenterDiv,
    MiddleBorderLine,
    HalfPage,
    LoginImg,
    Row,
    CenterDiv
}