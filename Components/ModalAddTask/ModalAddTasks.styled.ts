import styled from "styled-components";
import { showModalForm } from "../../styles/Keyframes.styled";

export const ContainerModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  transform: scale(1,1);
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: rgba(0,0,0, 0.5);
  transition: .5s;
  z-index: 999;
`

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 300px;
  padding: 48px 40px;
  border-radius: 12px;
  color: #f9f9f9;
  transition: 0.5s;
  background-color: #fff;
  z-index: 999999999;
  
  form {
    div {
      margin-bottom: 40px;
    }

    label {
      display: block;
    }

    input {
      border-radius: 5px;
  		background-color: #f5f5f5;
  		border: ${({ error }) => error? '1px solid red' : '1px solid #ddd' };
  		padding: 8px 16px;
  		width: 100%;
  		outline-style: none;
			color: ${({ error }) => error? '#333' : '#9B2C2C' };
			background-color: ${({ error }) => error? '#FFF5F5' : '#f5f5f5' };
			box-shadow: ${({ error }) => error? '0px 0px 4px 5px rgba(245, 101, 101, 0.1)' : 'none' };

  		&:focus, &:hover {
  	  		background-color: #fff;
  		}
    }

    .error {
      font-size: .8rem;
		  color: red;
		  height: .5rem;
    }

    button {
      width: 100%;
      padding: 8px 16px;
      color: #0F084B;
      background-color: #1AC8ED;
      border: none;
      border-radius: 5px;
      font-weight: 700;
      font-size: 1rem;
      cursor: pointer;
      margin-top: 10px;

      &:disabled {
        filter: brightness(.8);
        cursor: not-allowed;
      }
    }

  }
`
