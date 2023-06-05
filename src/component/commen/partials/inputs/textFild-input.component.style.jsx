import styled from 'styled-components'
import { TextField as TextFieldMUI } from "@mui/material";
const TextFildInput = styled.input`
  font-size: 1.5em;
  text-align: center;
  color: white;
  width:100% ;
  height:45px;
  border-radius: 5px;
  outline: none;
  margin:5px 5px 10px 10px;
  &.secondary {
    background-color: secondary;
  }
  &.primary {
    background-color: blue;
  }
  &.x-large{
    width:90% ;
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
`;


export const TextFileStyleCompoents = {
  TextFildInput
}