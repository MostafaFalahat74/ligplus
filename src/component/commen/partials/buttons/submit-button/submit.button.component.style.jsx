import styled from 'styled-components'
const SubmitButton = styled.button`
  font-size: 1.5em;
  text-align: center;
  color: black;
  border: none;
  width:100% ;
  &.warning {
    background-color: yellow;
  }
  &.big{
    width:250px ;
  }
  &.small{
    width:150px ;
  }
  &.medium{
    width:200px ;
  }
`;


export const SubmitButtonCompoents = {
    SubmitButton
}