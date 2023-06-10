// import styled from 'styled-components'
import styled from "@emotion/styled/macro";
import { NavLink } from "react-router-dom";
const LinkButton = styled(NavLink)`
  font-size: 1.5em;
  text-align: center;
  height:45px;
  border-radius: 5px;
  margin:5px 5px 10px 10px;
  color: black;
  border: none;
  outline: none;
  &.primary {
    background-color: blue;
  }
  &.success {
    background-color: green;
  }
  &.danger {
    background-color: red;
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

export const LinkButtonCompoents = {
    LinkButton
}