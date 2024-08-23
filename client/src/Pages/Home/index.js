import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import { Button } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoMailOpenOutline } from "react-icons/io5";
import banner1 from '../../Assets/banner-box.jpg';
import banner2 from '../../Assets/banner2.jpg';
import banner3 from '../../Assets/banner3.jpg';
import banner4 from '../../Assets/banner4.jpg';
import newsLetterImg from '../../Assets/coupon.png';
import Homebanner from "../../Components/Homebanner";
import ProductItem from "../../Components/ProductItem";
import HomeCategory from "../../Components/HomeCategory";






const Home = () => {

    return (
        <>
            <Homebanner />

            <HomeCategory />

            <section className='homeProducts'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className='sticky'>
                            <div className="banner">
                                <img src={banner1} className="cursor w-100" alt="" />
                            </div>
                            <div className="banner mt-4">
                                <img src={banner2} className="cursor w-100" alt="" />
                            </div>
                            </div>
                        </div>
                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className='mb-0 hd'>Best Sellers</h3>
                                    <p className='text-light text-sml mb-0'>Do not miss the current offers until the end of the march.</p>
                                </div>

                                <Button className='viewallbtn ml-auto'>View All <IoIosArrowRoundForward /></Button>
                            </div>

                            <div className="product_row w-100 mt-4">
                            <Swiper
                                    slidesPerView={4}
                                    spaceBetween={0}
                                    navigation={true}
                                    slidesPerGroup={3}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>

                                </Swiper>
                            </div>


                            <div className="d-flex align-items-center mt-5">
                                <div className="info w-75">
                                    <h3 className='mb-0 hd'>New Products</h3>
                                    <p className='text-light text-sml mb-0'>New Products with updated stocks.</p>
                                </div>

                                <Button className='viewallbtn ml-auto'>View All <IoIosArrowRoundForward /></Button>
                            </div>

                            <div className="product_row productRow2 w-100 mt-4 d-flex"> 
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                            </div>


                            <div className='d-flex mt-4 mb-5 bannerSec'>
                            <div className="banner">
                                <img src={banner3} className="cursor w-100" alt="" />
                            </div>
                            <div className="banner">
                                <img src={banner4} className="cursor w-100" alt="" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            
            <section className='newsLetterSection mt-3 mb-3 d-flex align-items-center'>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text-white mb-1">Rs 20 Discount for your first order</p>
                            <h3 className="text-white">Join our newsletter and get...</h3>
                            <p className="text-light">Join our email subscription now to get updates<br/> on promotions and coupons.</p>
                        
                            <form>
                                <IoMailOpenOutline/>
                                <input type='text' placeholder="Your Email Address"/>
                                <Button>Subscribe</Button>
                            </form>
                        
                        </div>
                        <div className="col-md-6">
                            <img src={newsLetterImg} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Home;