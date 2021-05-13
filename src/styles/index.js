import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --branco: #fff;
    --cinza-claro: #f5f5f5;
    --cinza-escuro: rgb(32, 32, 36);
    --preto: rgb(18, 18, 20);
    --vermelho:  #dc3545;
    --amarelo: #ffc107
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: var(--cinza-claro);
    font: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  .card-header,
  .card-footer{
    background-color: var(---branco)
  }

  a{
    text-decoration: none;
  }

  .ui-bordered {
    border: 1px solid rgba(24,28,33,0.06);
  }
  
  .dnd-group {
    border-radius: 5px;
    padding: .5rem;
  }
  
  .group-title {
    text-align: left;
    margin-bottom: .5rem;
    font-size: 1.5rem;
  }
`;

export default GlobalStyle;
