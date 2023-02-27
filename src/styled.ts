import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900display=swap');

  :root{
    --main-blue-color: #3A72F8;
    --column-background-color: #EAEAEA;
    --item-card-backgorund-color: #F8F8F8;
    --item-card-color: #575757;
  }
  
  *{
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button{
    border: none;
    background: none;
  }
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 2.5%;
  padding: 2.5% 5%;
  height: 100vh;
`;
