import styled from "styled-components";
import quote from '../../images/pattern-quotes.svg'


export const LeftContent = styled.div`

    grid-area: left;

    display:flex;
    flex-wrap: wrap;
    gap: 2rem;

    align-self: center;

    background: url(${quote});
    background-repeat: no-repeat;
    background-position-x: 20%;


    @media screen and (max-width:770px){
        justify-content: center;
        background-position: top center;
    }

    
`