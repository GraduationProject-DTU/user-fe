import React from 'react'
import './detail.css'

function ProductDetail() {
    return (
        <div className='product-detail-contain'>
            <div className='wrap-detail'>
                <div className='left'>
                    <div style={{ textAlign: 'center' }}>
                        <img className='product-detail-img' src="https://cf.shopee.vn/file/b6b3feb7c29646d0730a9571331c934f" alt="" />
                    </div>
                    <h3 className='title'>mô tả</h3>
                    <p>Tổng quan về cơ bản, Ombre Noire sẽ là một mùi được làm theo hướng rượu, thuốc lá, gia vị trên nền gỗ. Ấn tượng đầu tiên của tôi khi mới xịt mùi hương này là phải nhướn mày gật gù thích thú vì độ lạ. Ở phần mở đầu, có thể dễ dàng cảm giác được vị rượu cognac, cảm giác boozy không quá mạnh nhưng rất rõ. Cho một số bạn đọc chưa biết, “boozy” để chỉ cảm giác khi các bạn ngửi thấy mùi của rượu, đặc biệt là rượu Tây, sẽ luôn có một cảm giác kích thích trong não bộ và hơi chuyếnh choáng nhẹ. Các bạn sẽ dễ dàng bắt gặp cảm giác này ở một vài mùi hương khá phổ biến</p>
                </div>
                <div className='right'>
                    <h2>MEEA</h2>
                    <h5>200.000VND</h5>
                    <h1>..............</h1>

                </div>
            </div>

        </div>
    )
}

export default ProductDetail
