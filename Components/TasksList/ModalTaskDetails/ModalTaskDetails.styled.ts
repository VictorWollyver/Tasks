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
    width: auto;
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
        line-height: 1;
      }
      span {
        background-color: rgba(255,0,0,20%) ;
        border: 1px solid #ff0000;
        color: #ff0000 ;
        border-radius: 10px;
        display: grid;
        cursor: pointer;
      }

      .created-data {
        margin-top: 1rem;
      }
    }

    h2 {
      font-weight: 400 ;
      font-size: 1.1rem;
      margin-top: -10px;
    }

    .description {
      margin: 1.5rem 0;
      
      p {
        font-size: 1rem;
      }

      h2 {
        font-size: 1.5rem;
        font-weight: 400;
      }
    }

    .error {
      font-size: .8rem;
      color: red;
      margin-top: 20px;
    }

    .delete {
      /* width: 5rem; */
      padding: 8px 16px;
      border-radius: 10px;
      background-color: rgba(255,0,0,20%) ;
      border: 1px solid #ff0000;
      color: #ff0000 ;
      margin-right: 1rem;
      cursor: pointer;
    }
  
  .update {
    padding: 8px 16px;
    border-radius: 10px;
    background-color: lime ;
    border: 1px solid green;
    color: green ;
    cursor: pointer;
  }
  }
`

export default BgModal