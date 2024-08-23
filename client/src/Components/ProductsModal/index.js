import Dialog from '@mui/material/Dialog';
import { Rating } from '@mui/material';
import Button from "@mui/material/Button";
import { useContext } from 'react';
import { IoMdHeart } from "react-icons/io";
import { MdClose, MdOutlineCompareArrows } from "react-icons/md";
import { MyContext } from "../../App";
import QuantityDrop from '../QuantityDrop';
import ProductZoom from '../ProductZoom';
import { TiShoppingCart } from "react-icons/ti";


const ProductsModal = (props) => {
    
    const context = useContext(MyContext);
    return (
        <>
            <Dialog open={context.setIsOpenProductModal} className="productModal" onClose={() => context.setIsOpenProductModal(false)}>
                <Button className="closeButton" onClick={() => context.setIsOpenProductModal(false)}> 
                    <MdClose />
                </Button>
                <h4 className="mb-1 font-weight-bold">All Natural Italian-Style Chicken Meatballs</h4>
                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center mr-4">
                        <span>Brands:</span>
                        <span className='ml-2'><b>Welch's</b></span>
                    </div>
                    <Rating name="read-only" value={5} size="small" readOnly />
                </div>
                <hr />
                <div className='row mt-2 productDetailModal'>
                    <div className='col-md-5'>
                        <ProductZoom/>
                    </div>
                    <div className='col-md-7'>
                        <div className="d-flex info align-items-center mb-3">
                            <span className="oldPrice lg mr-2">Rs 9.00</span>
                            <span className="netPrice text-danger lg">Rs 8.00</span>
                        </div>
                        <span className="badge bg-success">IN STOCK</span>
                        <p className="mt-2">Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>
                        <div className="d-flex align-items-center">
                            <QuantityDrop />
                            <Button className="btn-blue btn-lg btn-big btn-round ml-3"><TiShoppingCart/>Add to Cart</Button>
                        </div>
                        <div className="d-flex align-items-center mt-5 actions">
                            <Button className="btn-round btn-sml" variant='outlined'><IoMdHeart /> &nbsp; Add To Wishlist</Button>
                            <Button className="btn-round btn-sml ml-3" variant='outlined'><MdOutlineCompareArrows /> &nbsp; Compare</Button>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );
}

export default ProductsModal;
