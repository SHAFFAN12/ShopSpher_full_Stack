import { Link } from 'react-router-dom';
import Logo from '../../Assets/logo.jpg';
import { FaRegUser } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import CountryDropdown from '../CountryDropdown';
import { Button } from '@mui/material';
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import { useContext } from 'react';
import { MyContext } from '../../App';


const Header = () => {
    const context = useContext(MyContext);
    return(
        <>
        <div className='headerWrapper'>
            <div className="top-strip bg-blue">
                <div className="container">
                    <p className="mt-0 mb-0 text-center">Due to <b>COVID-19</b> epidemic, ordres may be proceed with a slight delay.</p>
                    
                </div>
            </div>
            
            <header>
                <div className="container">
                <div className="row">
                    <div className="logoWrapper d-flex align-items-center col-sm-2">
                        <Link to={'/'}><img src={Logo} alt='Logo'/></Link>
                    </div>
                    <div className="d-flex align-items-center col-sm-10 part2">
                        {
                            context.countryList.length!==0 && <CountryDropdown />
                        }
                        

                            <SearchBox/>

                        <div className="part3 d-flex align-items-center ml-auto">
                            {
                                context.isLogin!==true ? <Link to='/signIn'><Button className='btn-blue btn-round mr-3'>Sign In</Button></Link> :
                                <Button className='circle mr-3'><FaRegUser /></Button>
                            }
                            <div className="ml-auto cartTab d-flex align-items-center">
                                <span className='price'>Rs0.00</span>
                                <div className="position-relative ml-2">
                                <Button className='circle'><FaCartPlus /></Button>
                                <span className='count d-flex align-items-center justify-content-center'>1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

            </header>
            <Navigation/>
            
        </div>
        </>
    )
}

export default Header;