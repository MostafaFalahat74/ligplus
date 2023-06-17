import styled from "@emotion/styled/macro";
const UserEditTextFildInput = styled.input`
font-size: 1.5em;
text-align: center;
width: 90%;
height:45px;
border-radius: 5px;
outline: none;
margin:5px 5px 10px 10px;
background-color: transparent;
border: 1px solid white;
::placeholder{
color: white;
font-size: 25px ;
float: right;
}
color: white;
&.header{
}

`;
const UserEditBodyImg = styled.div`
width: 40%;
display: flex;
align-items: center;
justify-content: center;`;

const Img = styled.img`
width: 70%;
display: flex;
align-items: center;
justify-content: center;
`;
const UserEditFooter = styled.div`
width: 80%;
display: flex;
align-items: center;
justify-content: space-between;
`;
const UserEditBodyInfo = styled.div`
width: 60%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const UserEditBodyRow = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;
const UserEditBody = styled.div`
width: 80%;
display: flex;
align-items: center;
justify-content: center;
`;
const UserEditBodyFullName = styled.input`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: transparent;
height:45px;
font-size:18px;
border-radius: 5px;
outline: none;
::placeholder{
    color: white;
    float: right;
    }
`;
const UserEditBodyGenderAndLocation = styled.input`
width: 50%;
display: flex;
align-items: center;
`;

export const UserEditModalStyle = {
    UserEditTextFildInput,
    Img,
    UserEditBodyRow,
    UserEditBodyImg,
    UserEditFooter,
    UserEditBodyInfo,
    UserEditBody,
    UserEditBodyFullName,
    UserEditBodyGenderAndLocation,
    UserEditFooter
};
