import styled from "styled-components";

export const Information = styled.div`

     display: grid;
    
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 2fr 1fr;
    grid-template-areas:    '_ photo'
                            'text photo'
                            'info photo';


`