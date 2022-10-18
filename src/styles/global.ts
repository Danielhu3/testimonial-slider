import {createGlobalStyle} from 'styled-components'
import curve from '../images/pattern-curve.svg'
export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
    html{
        font-size: 62.5%;
    }
    body{
        font-size: 3.2rem;
        font-weight: 300;
        background: white;
    }
    .App{
        min-height: 100vh;
       display: flex;
       justify-content: center;
       align-items: center;

       background: url(${curve});
       background-repeat: no-repeat;
       background-position-y:100%;
       
       //padding: 10rem;
       
    }
`