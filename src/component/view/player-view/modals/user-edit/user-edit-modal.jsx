import { UserEditModalStyle as E } from '../user-edit/user-edit-modal.style'
import { GlobalStyle as Gs } from '../../../../../assets/style/global-style'
import user from '../../../../../assets/images/user.png';
const UserEditModal = () => {

    return (
        <Gs.CenterDiv className='column'>
            <E.UserEditTextFildInput value={''} className={'header'} placeholder={'در باره ی من'} />
            <E.UserEditBody>
                <E.UserEditBodyInfo>
                    <E.UserEditBodyFullName placeholder='نام و نام خانوادگی ...' />
                    <E.UserEditBodyRow>
                        <E.UserEditBodyGenderAndLocation placeholder='aaa' />
                        <E.UserEditBodyGenderAndLocation placeholder='nnnn' />
                    </E.UserEditBodyRow>
                    <E.UserEditBodyRow>
                        <E.UserEditBodyGenderAndLocation placeholder='aaa' />
                    </E.UserEditBodyRow>
                </E.UserEditBodyInfo>
                <E.UserEditBodyImg>
                    <E.Img src={user} />
                </E.UserEditBodyImg>
            </E.UserEditBody>
        </Gs.CenterDiv>
    )
}
export default UserEditModal;
