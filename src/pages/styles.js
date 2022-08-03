import styled from "styled-components";

export const Card=styled.div`

display: grid;
grid-template-columns: repeat(3,1fr);
gap: 15px;
margin-top: 25px;


@media (max-width: 768px) {
    /* screen width is less than 768px (medium) */
    grid-template-columns: repeat(2,1fr);
  }
  @media (max-width: 425px) {
    /* screen width is less than 768px (medium) */
    grid-template-columns: repeat(1,1fr);
  }

`
export const Box=styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 150px;
@media (max-width: 425px) {
    /* screen width is less than 768px (medium) */
    margin-top: 100px;
  }

`
export const ErrorBox=styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 5px;
`
export const ErrorImg=styled.img`
height: 150px;
width:300px;
margin-top: 25px;
`
export const ErrorMess=styled.h3`
color: #797b8f;
`



