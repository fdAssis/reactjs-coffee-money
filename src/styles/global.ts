import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  
  :root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33CC95;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {

    @media(max-width: 1080px){
      font-size: 93.75%; // 15px
    }

    @media(max-width: 720px){
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .new-modal-transition-overlay{
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .new-modal-transition{
    width: 100%;
    max-width: 575px;
    padding:3rem;
    position: relative;
    background:var(--background);
    border-radius: 0.25rem;
  }

  .button-close-modal{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    background: transparent;
    border: 0;
    transition: filter 0.2s ;

    &:hover {
      filter: brightness(0.5);
      img {
        width: 110%;
      }
    }
  }

`;