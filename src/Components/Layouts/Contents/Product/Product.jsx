import React from 'react'
import './product.css'

function Product() {
    return (
        <div id='product'>
            <h1 className='title-product'>SHOP</h1>
            <div className='contain'>
                <div className='product-category'>
                    <h2 className='title-brand'>THƯƠNG HIỆU</h2>
                    <div className='wrap-brand'>
                        <input className='inp-brand' placeholder='Tìm Kiếm Nhanh' />
                        <div className='brand'>
                            <p>MEE</p>
                            <p>MEE</p>
                            <p>MEE</p>
                            <p>MEE</p>
                            <p>MEE</p>
                            <p>MEE</p>
                            <p>MEE</p>
                        </div>
                    </div>
                    <h2 className='title-brand'>THEO GIÁ</h2>
                    <div className='contain-price'>
                        <div className='wrap-price '>
                            <input className='price-check' type="checkbox" />
                            <span>50.000 - 200.000</span>
                        </div>
                        <div className='wrap-price'>
                            <input className='price-check' type="checkbox" />
                            200.000 - 400.000
                        </div>
                        <div className='wrap-price'>
                            <input className='price-check' type="checkbox" />
                            Trên 500.000
                        </div>
                    </div>
                </div>
                <div className='product'>
                    <div className='wrap'>
                        <div className='header-product'>
                            <p>
                                Hiển thị 1-20 của 446 kết quả
                            </p>

                            <select className='product-dropbox'>
                                <option className='product-dropbox-text' selected='selected'>Mới Nhất </option>
                                <option className='product-dropbox-text'><span>Thứ tự theo giá : thấp đến cao </span></option>
                                <option className='product-dropbox-text'>Thứ tự theo giá : cao đến thấp </option>

                            </select>

                        </div>

                        <div className='product'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
