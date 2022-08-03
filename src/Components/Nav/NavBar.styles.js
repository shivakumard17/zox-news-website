import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {AiOutlineClose ,AiOutlineMenu} from "react-icons/ai";




//#2b2d42 heading-color
//catogiry-hilight #3e4052
//catogiry-inactive #454657
//bg #f6f4f0
//searchbar-color #797b8f
//author-date #797b8f
//text-heading #2b2d42
//p #797b8f

export const Menuclose=styled(AiOutlineClose)`

height: 2rem;
width: 2em; 
`
export const Menuopen=styled(AiOutlineMenu)`

height: 2rem;
width: 2em; 
`
export const MenuBox=styled.div`

display: none;
@media (max-width: 500px) {
    /* screen width is less than 768px (medium) */
    display: block;
  }

`
export const Heading=styled.h1`
color: #2b2d42;
font-size: 50px;
@media (max-width: 768px) {
    /* screen width is less than 768px (medium) */
    font-size: 30px;
  }
  @media (max-width: 340px) {
    /* screen width is less than 768px (medium) */
    font-size: 20px;
  }


`
export const NavBox=styled.div`
 position: fixed;
  top: 0;
  right: 0;
  left: 0;
   width: 100%;
   
   height:150px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items:center;
   background-color:#f6f4f0;
   @media (max-width: 500px) {
    /* screen width is less than 768px (medium) */
    height:100px;
  }

  
`
export const Line=styled.hr`
 width: 95%;
 margin-top: -15px;
 color:#797b8f ;
`
export const Nav=styled.div`

   width: 100%;
   height:90px;
   display: flex;
   justify-content: space-around;
   align-items:center;
   margin-top: 20px;
   @media (max-width: 500px) {
    /* screen width is less than 768px (medium) */
    margin-top: 8px;
  }


`



export const NavLinks=styled.div`

   width: 100%;
   height:90px;
   display: flex;
  
   justify-content: center;
   align-items:center;
   @media (max-width: 500px) {
    /* screen width is less than 768px (medium) */
   display: none;
  }

`
export const Social_links=styled.ul`
 display: flex;
  justify-content: center;
  align-items:center;
  gap: 15px;
  list-style-type: none;
  
 
  & li{
    background-color:#E8E8E8;
    padding: 5px 10px;
    border-radius: 8px;
    

    & a{
   color: #2b2d42;
  
  }
  
 &:hover{
   background-color:#2b2d42;
   
   & a{
      color: #ffff;
     
  }
 }

  }
 

`
export const NavUi_links=styled.ul`
 display: flex;

  justify-content: center;
  align-items:center;
  gap: 20px;
  list-style-type: none;
 
  
`
export const List=styled.li`
&:hover{
   color: #2b2d42;
}

`
export const NavbarLink=styled(NavLink)`
 color: #9F9FA6;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;

  &:hover:focus{
   color: #2b2d42;
}
&.active{
   color: #2b2d42;
   font-size: 1.2rem;
   
}
@media (max-width: 768px) {
    /* screen width is less than 768px (medium) */
    font-size: 0.8rem;
  }
  

`