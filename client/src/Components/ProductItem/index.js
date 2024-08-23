import img1 from '../../Assets/product-image-1.jpg';
import { Button, Rating } from "@mui/material";
import { SlSizeFullscreen } from "react-icons/sl";
import { IoIosHeartEmpty } from "react-icons/io";
import { useContext } from 'react';
import {MyContext} from "../../App";


const ProductItem = (props) => {

    const context = useContext(MyContext);

    const viewProductDetails = (id) => {
        context.setIsOpenProductModal(true);
    }

    

    return (
        <>
            <div className={`productItem ${props.itemView}`}>
                <div className="imgWrapper">
                    <img src={img1} className="w-100" alt="Product" />
                    <span className='badge badge-primary'>28%</span>
                    <div className='actions'>
                        <Button onClick={() => viewProductDetails(1)}><SlSizeFullscreen /></Button>
                        <Button><IoIosHeartEmpty style={{ fontSize: '20px' }} /></Button>
                    </div>
                </div>
                <div className="info">
                    <h4>Werther's Original Caramel Hard Candies</h4>
                    <span className="text-success d-block">In Stock</span>
                    <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />
                    <div className="d-flex">
                        <span className="oldPrice">Rs 20.00</span>
                        <span className="netPrice text-danger ml-2">Rs 14.00</span>
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default ProductItem;
