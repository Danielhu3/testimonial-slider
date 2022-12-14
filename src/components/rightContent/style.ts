import styled from "styled-components";
import background from '../../images/pattern-bg.svg'

export const RightContent = styled.div`

    grid-area: right;
    display: flex;
    width: 60rem;
    height: 60rem;
    
    justify-content: center;
    align-items: center;

    position: relative;

    right: 3rem;
    z-index: 0;
    

    background: url(${background});

    background-repeat: no-repeat;
    background-size:contain;
    background-position: 100%;

    @media screen and (max-width:770px){
        justify-self: center;
    }


`