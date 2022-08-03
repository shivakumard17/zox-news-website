import React, { useState} from 'react'
import {NavBox,
 Nav,
 NavLinks,
 Social_links,
 NavUi_links,
 Heading,
 Search_box,
 Line,
 List,
 NavbarLink,
 Menuclose,
 Menuopen,
 MenuBox
} from './NavBar.styles.js'
import { FaInstagram,FaYoutube,FaTwitter } from 'react-icons/fa';


 
function NavBar() {

  const [menu ,setMenu]=useState(true);

  const menuClick =()=>{
     setMenu(!menu)
 }

  return (
 

    <NavBox>

        <Nav>
         <MenuBox onClick={menuClick}>   
        {menu?<Menuopen/>:<Menuclose/>}</MenuBox>
         <Heading>.ZOX NEWS</Heading>
          <Social_links>
            <li>
              <a href='https://www.instagram.com/accounts/login/' target="_blank"
						rel="noreferrer" > <FaInstagram/>  </a></li>

            <li>
              <a href='https://www.youtube.com/' target="_blank"
						rel="noreferrer" > <FaYoutube/></a></li>

            <li>
              <a href='https://twitter.com/i/flow/login' target="_blank"
						rel="noreferrer"> <FaTwitter/></a></li>
            
          </Social_links>
        </Nav>
          <NavLinks>
              <NavUi_links>

                <NavbarLink to="/"  ><List>All</List></NavbarLink>
                <NavbarLink to="/business" ><List>Business</List></NavbarLink>
                <NavbarLink to="/entertainment"><List>Entertainment</List></NavbarLink>
                <NavbarLink to="/health" ><List>Health</List></NavbarLink>
                <NavbarLink to="/science"><List>Science</List></NavbarLink>
                <NavbarLink to="/sports"><List>Sports</List></NavbarLink>
                <NavbarLink to="/technology"><List>Technology</List></NavbarLink>
                
              </NavUi_links>

          </NavLinks>
        <Line/>
    </NavBox>
  )
}

export default NavBar;