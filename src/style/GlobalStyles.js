import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        /* font-family: "Open Sans"; */ // kommst von designtoken 
       /* display: flex;
       justify-content: center;
       align-items: center; */
    
    }
`

export default GlobalStyle