import styled from "@emotion/styled/macro";
const FullCenterDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
overflow-x: hidden;
`;
const MiddleBorderLine=styled.line`
border-right: 1px solid gray;
`;
const HalfPage=styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
`;
const LoginImg=styled.img`
width: 80%;
;`

const Row=styled.div`
display: block;
;`
export const GlobalStyle = {
    FullCenterDiv,
    MiddleBorderLine,
    HalfPage,
    LoginImg,
    Row
}