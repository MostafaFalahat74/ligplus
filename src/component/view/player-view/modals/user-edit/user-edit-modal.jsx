import { UserEditModalStyle as E } from '../user-edit/user-edit-modal.style'
import { GlobalStyle as Gs } from '../../../../../assets/style/global-style'
import user from '../../../../../assets/images/user.png';
import { Checkbox, InputLabel, FormControlLabel, FormGroup } from "@mui/material";
import { createGlobalStyle } from 'styled-components';
const UserEditModal = () => {
    const onChangeHandler = (e) => {
        console.log(e.target.id);
    }
    return (
        <Gs.CenterDiv className='column'>
            <E.UserEditTextFildInput className={'header'} placeholder={'در باره ی من'} />
            <E.UserEditBody>
                <E.UserEditBodyInfo>
                    <E.UserEditBodyFullName placeholder='نام و نام خانوادگی ...' />
                    <E.UserEditBodyRow>
                        <E.UserEditBodyGenderAndLocation placeholder='جنسیت' />
                        <E.UserEditBodyGenderAndLocation placeholder='محل زندگی' />
                    </E.UserEditBodyRow>




                    <E.UserEditBodyRow>
                        <Gs.HalfPage>
                            <E.UserEditBodyRow>
                                <InputLabel >قوانین را می پذیرم</InputLabel>
                                <Checkbox />
                            </E.UserEditBodyRow>
                        </Gs.HalfPage>

                        <Gs.HalfPage>
                            <E.UserEditBodyGenderAndLocation placeholder='تاریخ تولد' />
                        </Gs.HalfPage>

                    </E.UserEditBodyRow>
                    <E.UserEditBodyRow>
                        <Gs.HalfPage>
                            <E.UserEditBodyGenderAndLocation placeholder='کد معرف' />
                        </Gs.HalfPage>
                        <Gs.HalfPage>
                            <E.UserEditBodyRow>
                                <InputLabel >معرف دارم</InputLabel>
                                <Checkbox />
                            </E.UserEditBodyRow>
                        </Gs.HalfPage>
                    </E.UserEditBodyRow>
                </E.UserEditBodyInfo>
                <E.UserEditBodyImg>
                    <E.Img src={user} />
                </E.UserEditBodyImg>
            </E.UserEditBody>
            <E.UserEditFooter>
                <button>gg</button>
                <button>mm</button>
            </E.UserEditFooter>
        </Gs.CenterDiv>
    )
}
export default UserEditModal;
