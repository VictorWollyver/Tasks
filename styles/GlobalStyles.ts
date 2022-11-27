import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins';
    color: #333;

   
  }

  html {
     @media(max-width: 700px) {
      font-size: 14px
    }

    @media(max-width: 600px) {
      font-size: 13px
    }
  }

  ul {
    list-style: none;
  }

  button {

    &:disabled {
      filter: brightness(.8);
      cursor: not-allowed;
    }
  }
`

export default GlobalStyles