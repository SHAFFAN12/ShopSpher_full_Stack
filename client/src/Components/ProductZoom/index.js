import React, {useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Image1 from "../../Assets/product-image-2.jpg";
import Image2 from "../../Assets/product-image-2b.jpg";
import Image3 from "../../Assets/product-image-2c.jpg";
import Image4 from "../../Assets/product-image-1.jpg";
import Image5 from "../../Assets/cat-9(120x120).png";



const ProductZoom = () => {
    const [slideIndex, setslideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const goto = (index) => {
        setslideIndex(index);
        zoomSlider.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    }
  return (
    <div className='productZoom'>
        <div className='productZoom position-relative'>
                            <div className="badge badge-primary">23%</div>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={0}
                                navigation={false}
                                slidePerGroup={1}
                                modules={[Navigation]}
                                className="zoomSliderBig"
                                ref={zoomSliderBig}
                            >
                                <SwiperSlide>
                                    <div className='item'>
                                        <InnerImageZoom
                                            zoomType="hover" zoomScale={1}
                                            src={Image1}
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='item'>
                                        <InnerImageZoom
                                            zoomType="hover" zoomScale={1}
                                            src={Image2}
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='item'>
                                        <InnerImageZoom
                                            zoomType="hover" zoomScale={1}
                                            src={Image3}
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='item'>
                                        <InnerImageZoom
                                            zoomType="hover" zoomScale={1}
                                            src={Image4}
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='item'>
                                        <InnerImageZoom
                                            zoomType="hover" zoomScale={1}
                                            src={Image5}
                                        />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={0}
                            navigation={true}
                            slidePerGroup={1}
                            modules={[Navigation]}
                            className="zoomSlider"
                            ref={zoomSlider}
                        >
                            <SwiperSlide>
                                <div className={`item ${slideIndex === 0 && 'item_active'}`}>
                                    <img src={Image1} alt='' className='w-100' onClick={() => goto(0)} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`item ${slideIndex === 1 && 'item_active'}`}>
                                    <img src={Image2} alt='' className='w-100' onClick={() => goto(1)} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`item ${slideIndex === 2 && 'item_active'}`}>
                                    <img src={Image3} alt='' className='w-100' onClick={() => goto(2)} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`item ${slideIndex === 3 && 'item_active'}`}>
                                    <img src={Image4} alt='' className='w-100' onClick={() => goto(3)} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`item ${slideIndex === 4 && 'item_active'}`}>
                                    <img src={Image5} alt='' className='w-100' onClick={() => goto(4)} />
                                </div>
                            </SwiperSlide>
                        </Swiper>

    </div>
  )
}

export default ProductZoom;
