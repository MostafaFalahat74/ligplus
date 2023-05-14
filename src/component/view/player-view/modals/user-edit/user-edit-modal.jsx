import { UserEditModalStyle as U } from '../user-edit/user-edit-modal.style'
const UserEditModal = () => {

    return (
        <div className='UserEdit'>
            <div className="header">
                <input className='about-me' placeholder="درباره ی من" />
            </div>
            <div className="body">
                <div className="user-img">
                    <h1>cccccc</h1>
                </div>
                <div className="info">
                    <input placeholder='نام و نام خانوادگی' />
                    <div>
                        <select>
                            <option>جنسیت</option>
                        </select>
                        <select>
                            <option>محل زندگی</option>
                        </select>
                    </div>
                    <div>
                        <input type='checkbox' />
                        <span>قوانین رو می پذیرم</span>
                        <input type='date' placeholder='تاریخ تولد' />
                    </div>
                    <div>
                        <input placeholder='کد معرف' />
                        <span>معرف دارم </span>
                        <input type='checkbox' />
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
