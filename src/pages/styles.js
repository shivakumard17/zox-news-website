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



