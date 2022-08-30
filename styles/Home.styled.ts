import styled from "styled-components";
import { showLoginForm, hideHome } from "./Keyframes.styled";

interface formLoginProps {
  state: boolean
}


const Home = styled.div<formLoginProps>`
    display: ${({ state }) => state? 'none' : 'grid' };

    padding: 0 10px;
    text-align: center;
    height: 90vh;
    width: 100vw;
    align-items: center;
    animation: ${({ state }) => state? '${hideHome} 1s forwards' : 'grid' } ;

     img {
    justify-self: center;
  }

  p {
    font-weight: 275;
    font-size: 48px;
    letter-spacing: 30px;
    margin-top: 40px;
  }

  .openFormLogin {
    border: none;
    font-size: 48px ;
    font-weight: 700;
    letter-spacing: 30px;
    background: transparent;
    margin-top: 80px;
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 10px;
    transition: background .3s;

    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
`

export default Home