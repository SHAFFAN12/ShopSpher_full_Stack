import { Button, Divider } from '@mui/material';
import React, { useState } from 'react';
import { MdMenuOpen } from "react-icons/md";
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
// import {MdOutlineMenu} from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import SearchBox from '../SearchBox';
// import { MdDarkMode } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import avatar from "../../assets/images/avatar.jpg";

import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Logout from '@mui/icons-material/Logout';
import PersonAdd from '@mui/icons-material/PersonAdd';
import { IoShieldHalfSharp } from "react-icons/io5";


const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpenNotificationDrop, setisOpenNotificationDrop] = useState(false);
  const openMyAccount = Boolean(anchorEl);
  const openNotification = Boolean(isOpenNotificationDrop);


  const handleOpenMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };

  const handleOpenNotificationDrop = () => {
    setisOpenNotificationDrop(true)
  }
  const handleCloseNotificationDrop = () => {
    setisOpenNotificationDrop(false)
  }

  return (
    <>
      <header className='d-flex align-items-center'>
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100">
            <div className="col-sm-2 part1">
              <Link to={"/"} className="d-flex align-items-center logo">
                <img src={logo} alt='' />
              </Link>
            </div>

            <div className="col-sm-3 d-flex align-items-center part2 pl-4">
              <Button className="rounded-circle mr-3"><MdMenuOpen /></Button>
              <SearchBox />
            </div>

            <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
              <Button className="rounded-circle mr-3"><MdOutlineLightMode /></Button>
              <Button className="rounded-circle mr-3"><GiShoppingCart /></Button>



              <Button className="rounded-circle mr-3"><HiOutlineMail /></Button>


              <div className="dropdownWrapper position-relative">
                <Button className="rounded-circle mr-3" onClick={handleOpenNotificationDrop}><FaRegBell /></Button>

                <Menu
                  anchorEl={isOpenNotificationDrop}
                  className="notifications dropdown_list"
                  id="notifications"
                  open={openNotification}
                  onClose={handleCloseNotificationDrop}
                  onClick={handleCloseNotificationDrop}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >

                  <div className='head pl-3 pb-0'><h4>Orders (12)</h4></div>
                  <Divider className="mb-1"/>
                  <div className="scroll">
                  <MenuItem onClick={handleCloseNotificationDrop}>
                   <div className="d-flex">
                   <div>
                   <div className="userImg">
                    <span className='rounded-circle'>
                      <img src={avatar} alt=''/>
                    </span>
                   </div>
                   </div>

                   <div className="dropdown-Info">
                    <h4>
                      <span>
                        <b>Mahmudul </b> 
                        added to his favourite list 
                        <b> Leather belt steve madden</b>
                        </span>
                        </h4>
                        <p className='text-sky mb-0'>few seconds ago</p>
                   </div>
                   </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseNotificationDrop}>
                   <div className="d-flex">
                   <div>
                   <div className="userImg">
                    <span className='rounded-circle'>
                      <img src={avatar} alt=''/>
                    </span>
                   </div>
                   </div>

                   <div className="dropdown-Info">
                    <h4>
                      <span>
                        <b>Mahmudul </b> 
                        added to his favourite list 
                        <b> Leather belt steve madden</b>
                        </span>
                        </h4>
                        <p className='text-sky mb-0'>few seconds ago</p>
                   </div>
                   </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseNotificationDrop}>
                   <div className="d-flex">
                   <div>
                   <div className="userImg">
                    <span className='rounded-circle'>
                      <img src={avatar} alt=''/>
                    </span>
                   </div>
                   </div>

                   <div className="dropdown-Info">
                    <h4>
                      <span>
                        <b>Mahmudul </b> 
                        added to his favourite list 
                        <b> Leather belt steve madden</b>
                        </span>
                        </h4>
                        <p className='text-sky mb-0'>few seconds ago</p>
                   </div>
                   </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseNotificationDrop}>
                   <div className="d-flex">
                   <div>
                   <div className="userImg">
                    <span className='rounded-circle'>
                      <img src={avatar} alt=''/>
                    </span>
                   </div>
                   </div>

                   <div className="dropdown-Info">
                    <h4>
                      <span>
                        <b>Mahmudul </b> 
                        added to his favourite list 
                        <b> Leather belt steve madden</b>
                        </span>
                        </h4>
                        <p className='text-sky mb-0'>few seconds ago</p>
                   </div>
                   </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseNotificationDrop}>
                   <div className="d-flex">
                   <div>
                   <div className="userImg">
                    <span className='rounded-circle'>
                      <img src={avatar} alt=''/>
                    </span>
                   </div>
                   </div>

                   <div className="dropdown-Info">
                    <h4>
                      <span>
                        <b>Mahmudul </b> 
                        added to his favourite list 
                        <b> Leather belt steve madden</b>
                        </span>
                        </h4>
                        <p className='text-sky mb-0'>few seconds ago</p>
                   </div>
                   </div>
                  </MenuItem>
                  
                  <MenuItem onClick={handleCloseNotificationDrop}>
                   <div className="d-flex">
                   <div>
                   <div className="userImg">
                    <span className='rounded-circle'>
                      <img src={avatar} alt=''/>
                    </span>
                   </div>
                   </div>

                   <div className="dropdown-Info">
                    <h4>
                      <span>
                        <b>Mahmudul </b> 
                        added to his favourite list 
                        <b> Leather belt steve madden</b>
                        </span>
                        </h4>
                        <p className='text-sky mb-0'>few seconds ago</p>
                   </div>
                   </div>
                  </MenuItem>
                  </div>

                  <div className="pl-3 pr-3 w-100 pt-2 pb-1"><Button className="btn-blue w-100">View All Notificationns</Button></div>
                  
                </Menu>


                
              </div>

              <div className="myAccountWrapper">
                <Button className="myAccount d-flex align-items-center" onClick={handleOpenMyAccDrop}>
                  <div className="userImg">
                    <span className="rounded-circle">
                      <img src={avatar} alt="" />
                    </span>
                  </div>

                  <div className="userInfo">
                    <h4>Shaffan</h4>
                    <p className="mb-0">@shaffan20</p>
                  </div>
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={openMyAccount}
                  onClose={handleCloseMyAccDrop}
                  onClick={handleCloseMyAccDrop}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >


                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    My Account
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <IoShieldHalfSharp />
                    </ListItemIcon>
                    Reset Password
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>


            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
