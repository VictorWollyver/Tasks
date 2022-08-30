import styled from "styled-components";
import { showModalForm } from "../../../styles/Keyframes.styled";



const BgModal = styled.article`
  backdrop-filter: brightness(.8);
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;;
  display: grid;
  place-content: center;
  z-index: 99;

  .modal {
    background-color: #fff;
    border-radius: 10px;
    width: 600px;
    padding: 2rem;
    animation: ${showModalForm} .5s forwards;

    header {
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      h1 {
        font-size: 3rem;
      }
      span {
        background-color: rgba(255,0,0,20%) ;
        border: 1px solid #ff0000;
        color: #ff0000 ;
        border-radius: 10px;
        display: grid;
        place-content: center;
        cursor: pointer;
        
      }
    }

    h2 {
      font-weight: 400 ;
      font-size: 1.1rem;
      margin-top: -10px;
    }

    form {
      margin-top: 2rem;

      label {
        display: block;
        font-weight: 500;
        font-size: 1.5rem;
      }

      input {
        padding: 2rem;
        border-radius: 10px;
        outline: none;
        width: 100%;
        background-color: #f5f5f5 ;
        border: 1px solid #ddd;
        font-size: 1.3rem;
      }

      .delete {
        width: 5rem;
        padding: 8px 16px;
        border-radius: 10px;
        background-color: rgba(255,0,0,20%) ;
        border: 1px solid #ff0000;
        color: #ff0000 ;
        margin-right: 1rem;
        margin-top: 1rem;
        cursor: pointer;
        
      }

      .update {
        width: 5rem;
        padding: 8px 16px;
        border-radius: 10px;
        background-color: rgba(0,255,0,20%) ;
        border: 1px solid #00ff00;
        color: #00ff00 ;
        margin-left: 1rem;
        margin-top: 1rem;
        cursor: pointer;
      }
    }

  }
`

export default BgModal