import { LuShirt } from "react-icons/lu";
import { GiCash } from "react-icons/gi";
import { CiDiscount1 } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";





const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="topInfo row">
                    <div className="col d-flex align-items-center">
                        <span><LuShirt/></span>
                        <span className='ml-2'>Everyday Fresh Products</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><TbTruckDelivery/></span>
                        <span className='ml-2'>Free delivery for order over Rs 70</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><CiDiscount1/></span>
                        <span className='ml-2'>Daily Mega Discounts</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><GiCash/></span>
                        <span className='ml-2'>Best price on the market</span>
                    </div>
                </div>

                <div className='row mt-5 linksWrap'>
                    <div className='col'>
                        <h5>FRUITS & VEGETABLES</h5>
                        <ul>
                            <li><Link to='#'/>FRUITS & VEGETABLES</li>
                            <li><Link to='#'/>Herbs & Seasonings</li>
                            <li><Link to='#'/>Fresh Fruits</li>
                            <li><Link to='#'/>Cuts & Sprouts</li>
                            <li><Link to='#'/>Exotic Fruits & Veggies</li>
                            <li><Link to='#'/>Packaged Produce</li>
                            <li><Link to='#'/>Party Trays</li>
                        </ul>
                    </div>
                   
                    <div className='col'>
                        <h5>BEVERAGES</h5>
                        <ul>
                            <li><Link to='#'/>Water</li>
                            <li><Link to='#'/>Sparkling Water</li>
                            <li><Link to='#'/>Soda & Pop</li>
                            <li><Link to='#'/>Coffee</li>
                            <li><Link to='#'/>Milk & Plant-Based Milk</li>
                            <li><Link to='#'/>Tea & Kombucha</li>
                            <li><Link to='#'/>Drink Boxes & Pouches</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h5>BREAKFAST & DAIRY</h5>
                        <ul>
                            <li><Link to='#'/>Milk & Flavoured Milk</li>
                            <li><Link to='#'/>Butter and Margarine</li>
                            <li><Link to='#'/>Cheese</li>
                            <li><Link to='#'/>Eggs Substitutes</li>
                            <li><Link to='#'/>Honey</li>
                            <li><Link to='#'/>Marmalades</li>
                            <li><Link to='#'/>Yogurt</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h5>MEAT & SEAFOOD</h5>
                        <ul>
                            <li><Link to='#'/>Breakfast Sausage</li>
                            <li><Link to='#'/>Dinner Sausage</li>
                            <li><Link to='#'/>Beef</li>
                            <li><Link to='#'/>Chicken</li>
                            <li><Link to='#'/>Sliced Deli Meat</li>
                            <li><Link to='#'/>Shrimp</li>
                            <li><Link to='#'/>Wild Caught Fillets</li>
                        </ul>
                    </div>
                    
                </div>

                <div className='copyright mt-3 pt-3 pb-3 d-flex'>
                    <p className="mb-0">Copyright 2024. All rights reserved</p>
                    <ul className="list list-inline ml-auto mb-0 socials">
                        <li className="list-inline-item">
                            <Link to="#"><FaFacebookF/></Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#"><FaInstagram/></Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#"><FaWhatsapp/></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;