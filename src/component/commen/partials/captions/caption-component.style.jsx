import styled from 'styled-components'
const Typography = styled.p`
    font-weight: 400;
    font-size: 2rem;
    margin:5px 5px 10px 10px;
    &.big{
      width:97% ;
    }
    &.small{
      width:50% ;
    }
    &.medium{
      width:75% ;
    }

    @media screen and (max-width: 500px) {
      font-weight: 200;
      font-size: 15px;
    }

`;

export const CaptionComponentStyle = {
    Typography,
};
