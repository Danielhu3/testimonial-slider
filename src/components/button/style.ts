import styled from "styled-components";
export const Button = styled.button.attrs((props: {operation: string}) => props)`
    background-repeat: no-repeat;
    background-position: center;
    padding:2rem;
    background-color: white;

    border: none;
    box-shadow: 5px 10px 10px 2px hsla(240, 18%, 77%, 0.4);
    border-radius: ${props => props.operation === 'previous' ? '2rem 0 0 2rem' : '0 2rem 2rem 0'};

    cursor: pointer;
    
`
