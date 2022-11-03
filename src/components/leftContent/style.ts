import styled from "styled-components";

export const LeftContent = styled.div`

    grid-area: left;

    display:flex;
    flex-wrap: wrap;
    gap: 2rem;

    align-self: center;

    @media screen and (max-width:770px){
        justify-content: center;
    }

    
`