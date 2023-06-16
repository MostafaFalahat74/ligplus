import styled from 'styled-components'
import { Button as ButtonMUI  } from "@mui/material";
// const SubmitButton = styled.button`
const SubmitButton = styled(ButtonMUI)`
  font-size: 1.5em;
  text-align: center;
  color: black;
  border: none;
  outline: none;
  height:45px;
  border-radius: 5px;
  margin:5px 5px 10px 10px;
  &:hover {
        background-color: gold;
    }
  &.warning {
    background-color: yellow;
  }
  &.big{
    width:72% ;
  }
  &.small{
    width:28% ;
  }
  &.medium{
    width:47% ;
  }
  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`;


export const SubmitButtonCompoents = {
    SubmitButton
}