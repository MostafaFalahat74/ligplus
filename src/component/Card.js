import React from 'react'

function Card() {
    return (
        <>
            <div className='empty-card'>
                سبد خرید خالی میباشد
            </div>
            <div className='card-item'>
                <div className='card-item-detail'>
                    <img src={require('../images/mobile1.jpg')} />
                    <p>موبایل آیفون</p>
                </div>
                <div className='card-item-remove'>
                    <div className='card-price'>
                        <div className='item-price'>
                            <p>10000 ملیون</p>
                            <span className='qty'>2 خرید</span>
                        </div>
                    </div>
                    <div className='item-remove'>
                        <button>حذف از سبد</button>
                    </div>
                </div>
            </div>

            <div className='card-item'>
                <div className='card-item-detail'>
                    <img src={require('../images/mobile2.jpg')} />
                    <p>موبایل آیفون</p>
                </div>
                <div className='card-item-remove'>
                    <div className='card-price'>
                        <div className='item-price'>
                            <p>10000 ملیون</p>
                            <span className='qty'>2 خرید</span>
                        </div>
                    </div>
                    <div className='item-remove'>
                        <button>حذف از سبد</button>
                    </div>
                </div>
            </div>


            <div className='total-price'>
                <p>مجموع قیمت 0 تومان</p>
            </div>
        </>
    )
}

export default Card