import React from 'react'
import productImage from '../../Assets/product-image-1.jpg'; 
import { Link } from 'react-router-dom';
import  Rating  from '@mui/material/Rating';
import  Button  from '@mui/material/Button';
import QuantityDrop from '../../Components/QuantityDrop';
import { IoIosClose } from 'react-icons/io';
import { TiShoppingCart } from "react-icons/ti";
const Cart = () => {
    return (
        <>
            <section className="section cartPage">
                <div className='container'>
                    <h2 className='hd mb-1'>Your Cart</h2>
                    <p>There are <b className="text-blue">3</b> products in your cart</p>
                    <div className="row">
                        <div className='col-md-9 pr-5'>
                            <div className='table-responsive'>
                                <table className='table '>
                                    <thead>
                                        <tr>
                                            <th width="35%">Product</th>
                                            <th width="15%">Unit Price</th>
                                            <th width="25%">Quantity</th>
                                            <th width="15%">Subtotal</th>
                                            <th width="10%">Remove</th>
                                        </tr>
                                    </thead>
                                
                                <tbody>
                                    <tr>
                                        <td width="35%">
                                            <Link to="/product/1">
                                            <div className="d-flex align-items-center cartItemImgWrapper">
                                                <div className='img_Wrapper'>
                                                    <img src={productImage} alt='' className='w-100'/>
                                                </div>

                                                <div className='info px-3'>
                                                    <h6>Field Roast Chao Cheeze Creamy Original</h6>
                                                    <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small"/>
                                                </div>
                                            </div>
                                            </Link>
                                        </td>
                                        <td width="15%">Rs 300</td>
                                        <td width="25%"><QuantityDrop/></td>
                                        <td width="15%">Rs 300</td>
                                        <td width="10%"><span className='remove'><IoIosClose/></span></td>
                                    </tr>
                                    <tr>
                                        <td width="35%">
                                            <Link to="/product/1">
                                            <div className="d-flex align-items-center cartItemImgWrapper">
                                                <div className='img_Wrapper'>
                                                    <img src={productImage} alt='' className='w-100'/>
                                                </div>

                                                <div className='info px-3'>
                                                    <h6>Field Roast Chao Cheeze Creamy Original</h6>
                                                    <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small"/>
                                                </div>
                                            </div>
                                            </Link>
                                        </td>
                                        <td width="15%">Rs 300</td>
                                        <td width="25%"><QuantityDrop/></td>
                                        <td width="15%">Rs 300</td>
                                        <td width="10%"><span className='remove'><IoIosClose/></span></td>
                                    </tr>
                                    <tr>
                                        <td width="35%">
                                            <Link to="/product/1">
                                            <div className="d-flex align-items-center cartItemImgWrapper">
                                                <div className='img_Wrapper'>
                                                    <img src={productImage} alt='' className='w-100'/>
                                                </div>

                                                <div className='info px-3'>
                                                    <h6>Field Roast Chao Cheeze Creamy Original</h6>
                                                    <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small"/>
                                                </div>
                                            </div>
                                            </Link>
                                        </td>
                                        <td width="15%">Rs 300</td>
                                        <td width="25%"><QuantityDrop/></td>
                                        <td width="15%">Rs 300</td>
                                        <td width="10%"><span className='remove'><IoIosClose/></span></td>
                                    </tr>
                                    <tr>
                                        <td width="35%">
                                            <Link to="/product/1">
                                            <div className="d-flex align-items-center cartItemImgWrapper">
                                                <div className='img_Wrapper'>
                                                    <img src={productImage} alt='' className='w-100'/>
                                                </div>

                                                <div className='info px-3'>
                                                    <h6>Field Roast Chao Cheeze Creamy Original</h6>
                                                    <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small"/>
                                                </div>
                                            </div>
                                            </Link>
                                        </td>
                                        <td width="15%">Rs 300</td>
                                        <td width="25%"><QuantityDrop/></td>
                                        <td width="15%">Rs 300</td>
                                        <td width="10%"><span className='remove'><IoIosClose/></span></td>
                                    </tr>
                                    <tr>
                                        <td width="35%">
                                            <Link to="/product/1">
                                            <div className="d-flex align-items-center cartItemImgWrapper">
                                                <div className='img_Wrapper'>
                                                    <img src={productImage} alt='' className='w-100'/>
                                                </div>

                                                <div className='info px-3'>
                                                    <h6>Field Roast Chao Cheeze Creamy Original</h6>
                                                    <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small"/>
                                                </div>
                                            </div>
                                            </Link>
                                        </td>
                                        <td width="15%">Rs 300</td>
                                        <td width="25%"><QuantityDrop/></td>
                                        <td width="15%">Rs 300</td>
                                        <td width="10%"><span className='remove'><IoIosClose/></span></td>
                                    </tr>
                                    <tr>
                                        <td width="35%">
                                            <Link to="/product/1">
                                            <div className="d-flex align-items-center cartItemImgWrapper">
                                                <div className='img_Wrapper'>
                                                    <img src={productImage} alt='' className='w-100'/>
                                                </div>

                                                <div className='info px-3'>
                                                    <h6>Field Roast Chao Cheeze Creamy Original</h6>
                                                    <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small"/>
                                                </div>
                                            </div>
                                            </Link>
                                        </td>
                                        <td width="15%">Rs 300</td>
                                        <td width="25%"><QuantityDrop/></td>
                                        <td width="15%">Rs 300</td>
                                        <td width="10%"><span className='remove'><IoIosClose/></span></td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="card border p-3 cartDetails">
                                <h4>Cart Totals</h4>

                                <div className="d-flex align-items-center mb-3">
                                    <span>Subtotal</span>
                                    <span className="ml-auto text-blue font-weight-bold">Rs 400.00</span>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <span>Shipping</span>
                                    <span className="ml-auto"><b>Free</b></span>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <span>Estimate For</span>
                                    <span className="ml-auto text-blue"><b>Karachi</b></span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span>Total</span>
                                    <span className="ml-auto text-blue font-weight-bold">Rs 600.00</span>
                                </div>
                                <br/>
                                <Button className="btn-blue btn-lg btn-big "><TiShoppingCart/>Add to Cart</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart;
