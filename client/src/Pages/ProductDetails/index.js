import { useState } from "react";
import ProductZoom from '../../Components/ProductZoom';
import QuantityDrop from '../../Components/QuantityDrop';
import Rating from '@mui/material/Rating';
import Button from "@mui/material/Button";
import { BsCartFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import authorImg from "../../Assets/author-2.png";
import RelatedProducts from "./RelatedProducts";



const ProductDetails = () => {
    const [activeSize, setActiveSize] = useState(null);
    const [activeTabs, setActiveTabs] = useState(0);
    const isActive = (index) => { setActiveSize(index) }
    return (
        <>
            <section className="productDetails section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 pl-5">
                            <ProductZoom />
                        </div>
                        <div className="col-md-7 pl-5 pr-5">
                            <h2 className="hd text-capitalize">All Natural Italian-Style Chicken Meatballs</h2>
                            <ul className="list list-inline d-flex align-items-center">
                                <li className="list-inline-item">
                                    <div className="d-flex align-items-center">
                                        <span className="text-light">Brands: </span>
                                        <span>Welch's</span>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <div className="d-flex align-items-center">
                                        <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                                        <span className="text-light cursor ml-2">1 Review</span>
                                    </div>
                                </li>
                            </ul>

                            <div className="d-flex info mb-3">
                                <span className="oldPrice ">Rs 9.00</span>
                                <span className="netPrice text-danger ml-2">Rs 8.00</span>
                            </div>
                            <span className="badge badge-success">IN STOCK</span>
                            <p className="mt-3">Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>

                            <div className="productSize d-flex align-items-center">
                                <span>Size / Weight:</span>
                                <ul className="list list-inline mb-0 pl-4">
                                    <li className="list list-inline-item">
                                        <a className={`tag ${activeSize === 0 ? 'active' : ''}`} onClick={() => isActive(0)}>50g</a>
                                    </li>
                                    <li className="list list-inline-item">
                                        <a className={`tag ${activeSize === 1 ? 'active' : ''}`} onClick={() => isActive(1)}>100g</a>
                                    </li>
                                    <li className="list list-inline-item">
                                        <a className={`tag ${activeSize === 2 ? 'active' : ''}`} onClick={() => isActive(2)}>200g</a>
                                    </li>
                                    <li className="list list-inline-item">
                                        <a className={`tag ${activeSize === 3 ? 'active' : ''}`} onClick={() => isActive(3)}>300g</a>
                                    </li>
                                    <li className="list list-inline-item">
                                        <a className={`tag ${activeSize === 4 ? 'active' : ''}`} onClick={() => isActive(4)}>500g</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                                <QuantityDrop />
                                <Button className="btn-blue btn-lg btn-big btn-round"><BsCartFill />&nbsp; Add to Cart</Button>
                                <Tooltip title="Add To Wishlist" placement="bottom">
                                    <Button className="btn-blue btn-lg btn-big btn-circle ml-4"><FaRegHeart /></Button>
                                </Tooltip>

                                <Tooltip title="Add To Compare" placement="bottom">
                                    <Button className="btn-blue btn-lg btn-big btn-circle ml-2"><MdOutlineCompareArrows /></Button>
                                </Tooltip>
                            </div>
                        </div>
                    </div>

                    <br />

                    <div className="card mt-5 p-5 detailPageTabs">
                        <div className="customTabs">
                            <ul className="list list-inline">
                                <li className="list list-inline-item">
                                    <Button className={`${activeTabs === 0 && 'active'}`} onClick={() => setActiveTabs(0)}>Description</Button>
                                </li>
                                <li className="list list-inline-item">
                                    <Button className={`${activeTabs === 1 && 'active'}`} onClick={() => setActiveTabs(1)}>Additional Info</Button>
                                </li>
                                <li className="list list-inline-item">
                                    <Button className={`${activeTabs === 2 && 'active'}`} onClick={() => setActiveTabs(2)}>Reviews (3)</Button>
                                </li>
                            </ul>

                            <br />

                            {
                                activeTabs === 0 &&
                                <div className="tabContent">
                                    <p>Experience premium sound with UltraSoundX Wireless Earbuds. These sleek earbuds offer crystal-clear audio, deep bass, and advanced noise-cancellation for an immersive experience. With up to 12 hours of battery life and a compact charging case providing an additional 24 hours, you can enjoy uninterrupted music all day. </p>
                                </div>
                            }
                            {
                                activeTabs === 1 &&
                                <div className="tabContent">
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr className="stand-up">
                                                    <th>Stand Up</th>
                                                    <td>
                                                        <p>35"L x 24"W x 37-45"H(front to back Wheel)</p>
                                                    </td>
                                                </tr>
                                                <tr className="folded-wo-wheels">
                                                    <th>Folded (w/o wheels)</th>
                                                    <td>
                                                        <p>32.5"L x 18.5"W x 16.5"H</p>
                                                    </td>
                                                </tr>
                                                <tr className="folded-wo-wheels">
                                                    <th>Folded (w/o wheels)</th>
                                                    <td>
                                                        <p>32.5"L x 24"W x 16.5"H</p>
                                                    </td>
                                                </tr>
                                                <tr className="door-pass-through">
                                                    <th>Door Pass Through</th>
                                                    <td>
                                                        <p>24</p>
                                                    </td>
                                                </tr>
                                                <tr className="frame">
                                                    <th>Frame</th>
                                                    <td>
                                                        <p>Aluminium</p>
                                                    </td>
                                                </tr>
                                                <tr className="weight-wo-wheels">
                                                    <th>Weight (w/o wheels)</th>
                                                    <td>
                                                        <p>20 LBS</p>
                                                    </td>
                                                </tr>
                                                <tr className="weight-capacity">
                                                    <th>Weight Capacity</th>
                                                    <td>
                                                        <p>60 LBS</p>
                                                    </td>
                                                </tr>
                                                <tr className="width">
                                                    <th>Width</th>
                                                    <td>
                                                        <p>24"</p>
                                                    </td>
                                                </tr>
                                                <tr className="handle-height-ground-to-handle">
                                                    <th>Handle height (ground to handle)</th>
                                                    <td>
                                                        <p>37-45"</p>
                                                    </td>
                                                </tr>
                                                <tr className="wheels">
                                                    <th>Wheels</th>
                                                    <td>
                                                        <p>12" air / wide track slick tread</p>
                                                    </td>
                                                </tr>
                                                <tr className="seat-back-height">
                                                    <th>Seat back height</th>
                                                    <td>
                                                        <p>21.5"</p>
                                                    </td>
                                                </tr>
                                                <tr className="head-room-inside-canopy">
                                                    <th>Head room (inside canopy)</th>
                                                    <td>
                                                        <p>25"</p>
                                                    </td>
                                                </tr>
                                                <tr className="pa_color">
                                                    <th>Color</th>
                                                    <td>
                                                        <p>Black, Blue, Red, White</p>
                                                    </td>
                                                </tr>
                                                <tr className="pa_size">
                                                    <th>Size</th>
                                                    <td>
                                                        <p>M, S</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            }

                            {
                                activeTabs === 2 &&
                                <div className="tabContent">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h3>Customer Questions & Answers</h3>
                                            <br />


                                            <div className="card p-4 reviewsCard flex-row">
                                                <div className="image">
                                                    <div className="rounded-circle">
                                                        <img src={authorImg} alt="" />
                                                    </div>
                                                    <span className="text-g d-block text-center font-weight-bold">
                                                        Ali Ahmed
                                                    </span>
                                                </div>

                                                <div className="info pl-5">
                                                    <div className="d-flex align-items-center w-100">
                                                        <h5 className="text-light">19/07/2024</h5>
                                                        <div className="ml-auto">
                                                            <Rating name="half-rating-read" size="small" value={4.5} precision={0.5} readOnly />
                                                        </div>
                                                    </div>
                                                    <p>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>
                                                </div>
                                            </div>

                                            <br className="res-hide" />
                                            <br className="res-hide" />

                                            <form className="reviewForm">
                                                <h4>Add a Review</h4><br />
                                                <div className="form-group">
                                                    <textarea className="form-control" placeholder="Write a Review" name="review" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Name" name="userName" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <Rating name="rating" value={4.5} precision={0.5} readOnly/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <br />

                                                <div className="form-group">
                                                    <Button type="submit" className="btn-blue btn-lg btn-big btn-round">Submit Review</Button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                    <br/>

                    <RelatedProducts title="RELATED PRODUCTS"/>
                    <RelatedProducts title="RECENTLY VIEWED PRODUCTS"/>
                </div>
            </section>
        </>
    )
}

export default ProductDetails;

