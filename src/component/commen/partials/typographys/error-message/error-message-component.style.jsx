import styled from "@emotion/styled/macro";
import { Typography as TypographyMUI } from "@mui/material";

const Typography = styled(TypographyMUI)`
    font-size: 17px;
    margin-top: 5px;
    display:"block";
    color: red;
    @media screen and (max-width: 500px) {
        font-size: 14px;
      }
`;

export const ErrorMessageComponentStyle = {
    Typography,
};
