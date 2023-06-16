import styled from 'styled-components'
const LoadingBarContainer=styled.div`
    width:100% ;
    height:100%;
;`

const LoadingBarBody=styled.div`
     position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);  
;`
export const LoadingBarSegment= {LoadingBarContainer , LoadingBarBody}