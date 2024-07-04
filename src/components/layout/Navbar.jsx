import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import logo from '../../assets/images/Express Flow.png'
import { Dropdown, Image } from 'react-bootstrap'
import NoticeSlider from './NoticeSlider'

const Navbar = () => {
  return (
    <div className='sticky-top'>
    <nav className='navbar navbar-expand-lg  shadow mt-0'>
      <div className='container-fluid '>
        <Link to={'/'} className='navbar-brand' style={{marginLeft:'45px'}}> 
          <Image className='mr-4' src={logo} height={80}/>
          <span style={{ color: 'white',fontSize:'30px' }}><strong>𝕰𝖝𝖕𝖗𝖊𝖘𝖘 𝕱𝖑𝖔𝖜</strong></span>
        </Link> 
        <div className='collapse navbar-collapse' id='navbarScroll'>
          <ul className='navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll'>
          <li className='nav-item'>
              <NavLink className="nav-link " style={{ color: 'white' }} aria-current='page' to={'/trackOrder'}><strong>Track order</strong></NavLink>
            </li>
            <li className='nav-item' >

              <NavLink className="nav-link " style={{ color: 'white' }} aria-current='page' to={"/aboutUs"}><strong>About Us</strong></NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className="nav-link " style={{ color: 'white' }} aria-current='page' to={'/contactUs'}><strong>Contact Us</strong></NavLink>
            </li>
          </ul>
          <ul className='navbar-nav  align-items-center '>
          <li className='nav-item'>
              <NavLink className="nav-link " style={{ color: 'white' }} aria-current='page' to={'/deliveries'}><b>Deliveries</b></NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className="nav-link " style={{ color: 'white' }} aria-current='page' to={'/admin'}><strong>Admin</strong></NavLink>
            </li>
            
            <li className='nav-item'>
                <Dropdown className='nav-link'>
                  <Dropdown.Toggle variant='light' id='dropdown-basic'>
                    <strong>Account</strong>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      Login
                    </Dropdown.Item>
                  </Dropdown.Menu>

                </Dropdown>

            </li>

          </ul>

        </div>
        
      </div>
      
      
    </nav>
    <NoticeSlider/>
    </div>
    
  )
}

export default Navbar
