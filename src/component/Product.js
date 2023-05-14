import React from 'react'

function Product({ data }) {
    return (
        <>
            <ul className='products'>
                {
                    data.map((product) =>              
                        <li key={product.id} className='product'>
                            <img src={product.image} alt={''}/>
                            <p>{product.title}</p>
                            <div className='product-price'>
                                <button>افزودن یه سبد خرید</button>
                                <h6>{product.price}</h6>
                            </div>
                        </li>       
                    )
                }
            </ul>
        </>
    )
}

export default Product