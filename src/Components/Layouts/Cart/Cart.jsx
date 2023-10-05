import React from 'react'
import './cart.css'

function Cart() {
    return (
        <div className='cart-contain'>
            <div style={{ width: '100%' }}>
                <h1>Sản Phẩm Đã Chọn</h1>
                <p className='cart-empty'>Chưa có sản phẩm trong giỏ hàng</p>
                <button className='cart-btn-back'>Quay Trở Lại Cửa Hàng</button>
            </div>
        </div>
    )
}

export default Cart
