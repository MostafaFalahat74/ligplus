import React,{useState} from 'react'


function Filter({initType}) {
    return (
        <div className='filter'>
            <div className='product-count'>
                <p>تعداد محصولات 6 عدد میباشد</p>
            </div>
            <div className='sort'>
                <div className='sort-title'>
                    مرتب سازی بر اساس
                </div>
                <div className='sort-options'>
                    <div className='sort-item'>
                        <input name='sortType' onChange={()=>initType("asce")} type={'radio'} checked></input>
                        <label>محصولات جدید تر</label>
                    </div>
                    <div className='sort-item'>
                        <input name='sortType' onChange={()=>initType("desc")} type={'radio'}></input>
                        <label>محصولات قدیمی تر</label>
                    </div>
                </div>
            </div>
            <div className='brands'>
              <div className='brands-title'>  برند ها</div>
                <select>
                    <option>همه</option>
                    <option>سامسونگ</option>
                    <option>سونی</option>
                    <option>ال جی</option>
                </select>
            </div>
        </div>
    )
}

export default Filter