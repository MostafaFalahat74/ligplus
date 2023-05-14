import styled from 'styled-components'
const TextFildInput = styled.input`
  font-size: 1.5em;
  text-align: center;
  color: white;
  width:100% ;
  outline: none;
  &.secondary {
    background-color: secondary;
  }
  &.primary {
    background-color: blue;

  }
`;


export const TextFileStyleCompoents = {
  TextFildInput
}