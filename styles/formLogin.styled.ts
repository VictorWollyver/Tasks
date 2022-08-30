import styled from "styled-components";
import { showLoginForm } from "./Keyframes.styled";

interface formLoginProps {
  state: boolean
}


const FormLogin = styled.div<formLoginProps>`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    width: 100vw;
    animation: ${showLoginForm} 1s forwards;
    display: ${({ state }) => state? 'flex' : 'none' };

    .message {
      font-size: 3.5rem;
      max-width: 23rem;
      font-weight: 400;
    }

    form {
      /* background-color: ; */
      padding: 2rem;
      text-align: left;
      width: 500px;
    }

    .entrar {
      background-color: #333;
      color: #fff;
      padding: 16px 32px;
      border-radius: 5px;
      margin-right: 160px;
      margin-top: -0px;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 500;
    }
`

export default FormLogin