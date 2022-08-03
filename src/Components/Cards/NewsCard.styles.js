import styled from "styled-components";

export const NewsCard=styled.div`
width:100%;


`
export const Anchor=styled.a`
text-decoration: none;
color: #fff; 
background-color:#2b2d42 ;

padding: 5px;
border-radius: 0 5px  5px 0;
&:hover{
color: #fff;
background-color:#393b50;

}

`
export const Card=styled.div`
 height: max-content;
 width: 400px;
 border: solid 1px #9F9FA6;
 border-radius: 9px;
 background-color:#fff;
 overflow-y: hidden;
 overflow-x: hidden;
 
 @media (min-width: 768px) and (max-width: 1248px) {
    /* screen width is between 768px (medium) and 1170px (large) */
    width: 300px;
  }

  @media (max-width: 425px) {
    /* screen width is less than 768px (medium) */
    width: 90%;
    margin-left: 25px;
  }

`
export const Imgage=styled.img`
width: 100%;
height:200px;
`
export const Author=styled.div`
display:flex;
justify-content: space-between;
`
export const Text=styled.p`
color: #9F9FA6;
font-weight: 500;
padding-left:8px;
padding-right:8px;
`
export const Heading=styled.h1`
color:#2b2d42;
font-size:1.5rem;
padding:8px;
`