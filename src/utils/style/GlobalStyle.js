import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
    max-width: 1440px;
    max-height:1024px;
    margin: auto;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
}
a {
    text-decoration:none;
}

li {
   list-style:none;
}
`;

export default GlobalStyle;
