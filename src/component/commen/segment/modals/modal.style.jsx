import styled from 'styled-components'
const Modal=styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);

    &.display-block {
        display: block;
      }
      &.display-none{
        display: none;  
      }
;`
const Body=styled.section`
&.center{
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            background: blue;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);  
          } 
          &.left{
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                background: blue; 
                top:50%;
                left:50%;
                transform: translate(-85%,-50%);   
          } 
          &.middle{
                width: 60%;
                height: 60%; 
          }  
          &.big{
                width: 90%;
                height: 90%;        
          }  
          &.quite-big{
                width: 80%;
                height: 80%;         
          }  
          &.small{
                width: 50%;
                height: 50%;        
          }  
`;
export const ModalStyle = {
    Modal,
    Body
}