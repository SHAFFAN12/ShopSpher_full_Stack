import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ProductsModal from './Components/ProductsModal';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Listing from './Pages/Listing';
import ProductDetails from './Pages/ProductDetails';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

const MyContext = createContext();

function App() {

  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState('');
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const [isHeaderFooterShow,setisHeaderFooterShow] = useState(true);
  const [isLogin,setIsLogin] = useState(false);


  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    const response = await axios.get(url).then((res) => {
      setCountryList(res.data.data);
      console.log(res.data.data);
    });
  }

  const values = {
    countryList,
    setselectedCountry,
    selectedCountry,
    isOpenProductModal,
    setIsOpenProductModal,
    isHeaderFooterShow,
    setisHeaderFooterShow,
    isLogin,
    setIsLogin
  }

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {
          isHeaderFooterShow === true && <Header />
        }  
        <Routes>
          <Route path='/' exact={true} element={<Home />} />
          <Route path='/cat/:id' exact={true} element={<Listing />} />
          <Route path='/product/:id' exact={true} element={<ProductDetails />} />
          <Route path='/cart' exact={true} element={<Cart/>} />
          <Route path='/signIn' exact={true} element={<SignIn/>} />
          <Route path='/signUp' exact={true} element={<SignUp/>} />
        </Routes>
        {
          isHeaderFooterShow === true && <Footer/>
        }  
        
        {
                isOpenProductModal && <ProductsModal  />
            }
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
