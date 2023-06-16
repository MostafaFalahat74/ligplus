import { UserEditModalStyle as E } from '../user-edit/user-edit-modal.style'
import { GlobalStyle as Gs } from '../../../../../assets/style/global-style'
import user from '../../../../../assets/images/user.png';
import { Checkbox , Label} from "@mui/material";
const UserEditModal = () => {

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
                            <E.UserEditBodyGenderAndLocation placeholder='تاریخ تولد' />
                        </Gs.HalfPage>
                        <Gs.HalfPage>
                            <E.UserEditBodyGenderAndLocation placeholder='تاریخ تولد' />
                        </Gs.HalfPage>
                    </E.UserEditBodyRow>
                    {/* <E.UserEditBodyRow>
                    <Gs.HalfPage>
                        <label>
                        <Checkbox>
                        </Checkbox>
                        <span>cccxc</span>
                        </label>

                    </Gs.HalfPage>
                    </E.UserEditBodyRow> */}
                </E.UserEditBodyInfo>
                <E.UserEditBodyImg>
                    <E.Img src={user} />
                </E.UserEditBodyImg>
            </E.UserEditBody>
        </Gs.CenterDiv>
    )
}
export default UserEditModal;
