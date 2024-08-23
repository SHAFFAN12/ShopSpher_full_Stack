import React,{useState} from 'react'
import Sidebar from '../../Components/Sidebar';
import banner5 from "../../Assets/banner5.jpg";
import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
// import { IoGrid } from "react-icons/io5";
import { LuLayoutGrid } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ProductItem from "../../Components/ProductItem";
import Pagination from '@mui/material/Pagination';


const Listing = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [productView, setProductView] = useState('four'); 
  const openDropdown = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <section className="product_Listing_Page">
        <div className="container">
          <div className="productListing d-flex">
            <Sidebar />

            <div className="content_right">
              <img src={banner5} className="w-100" alt="" style={{ borderRadius: "8px" }} />

              <div className="showBy mt-3 mb-3 d-flex align-items-center">
                <div className="d-flex align-items-center btnWrapper">
                  <Button className={productView==='one' && 'act'} onClick={() => setProductView('one')}><IoIosMenu /></Button>
                  {/* <Button onClick={() => setProductView('two')}><IoGrid /></Button> */}
                  <Button className={productView==='three' && 'act'} onClick={() => setProductView('three')}><CgMenuGridR /></Button>
                  <Button className={productView==='four' && 'act'} onClick={() => setProductView('four')}><LuLayoutGrid /></Button>
                </div>

                <div className="ml-auto showByFilter">
                  <Button onClick={handleClick}>Show 9<FaAngleDown /></Button>
                  <Menu
                    className='w-100 showPerPageDropdown'
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openDropdown}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleClose}>10</MenuItem>
                    <MenuItem onClick={handleClose}>20</MenuItem>
                    <MenuItem onClick={handleClose}>30</MenuItem>
                    <MenuItem onClick={handleClose}>40</MenuItem>
                    <MenuItem onClick={handleClose}>50</MenuItem>
                    <MenuItem onClick={handleClose}>60</MenuItem>
                  </Menu>
                </div>

                
              </div>

              <div className="productListing">
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
              </div>


              <div className="d-flex align-items-center justify-content-center mt-5">
              <Pagination count={10} color="primary" size="large"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Listing
