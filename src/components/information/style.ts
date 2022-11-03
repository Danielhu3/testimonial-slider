import styled from "styled-components";

export const Information = styled.div`

     display: grid;
     grid-template-columns: 1fr 1fr;
     grid-template-areas:  'left right';
                           

     @media screen and (max-width:770px){
          grid-template-columns: 1fr;
          grid-template-rows: 1fr 1fr;
          grid-template-areas: 'right'
                               'left';

     }


`