import { UserEditModalStyle as U } from '../user-edit/user-edit-modal.style'
import user from '../../../../../assets/images/user.png'
const UserEditModal = () => {

    return (
        <div className='UserEdit'>
            <div className="header">
                <input className='about-me' placeholder="درباره ی من" />
            </div>
            <div className="body">
                <div className="user-img">
                    <img src={user} />
                </div>
                <div className="info">
                    <input className='name' placeholder='نام و نام خانوادگی' />
                    <div className='gender-and-place'>
                        <select className='place'>
                            <option>محل زندگی</option>
                        </select>
                        <select className='gender'>
                            <option>جنسیت</option>
                        </select>
                    </div>
                    <div className='rule'>
                        <div className='accept-rule'>
                            <span>قوانین رو می پذیرم</span>
                            <input type='checkbox' />
                        </div>
                        <input className='date' type='date' placeholder='تاریخ تولد' />
                    </div>
                    <div className='representer'>
                        <input className='representer-code' placeholder='کد معرف' />
                        <div className='chk-representer'>
                            <span>معرف دارم </span>
                            <input type='checkbox' />
                        </div>
                    </div>
                </div>

            </div>
            <div className="footer">
                <button>
                    خروج
                </button>
                <button>
                    ثبت اطلاعات
                </button>
            </div>
        </div>);
}

export default UserEditModal;
