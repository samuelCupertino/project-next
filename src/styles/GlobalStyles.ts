import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    /* background-image: url(https://assets.materialup.com/uploads/d7b32276-79d9-46ef-9c5c-825151d1af62/attachment.png);
    background-size: 120%;
    background-position: center 15%; */
  }
`