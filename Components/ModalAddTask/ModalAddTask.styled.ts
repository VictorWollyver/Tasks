import styled from "styled-components";
import { showModalForm } from "../../styles/Keyframes.styled";

const ContainerModal = styled.section`
  background-color: rgba(0,0,0, 0.5);
  display: grid;
  place-content: center;
  width: 100%;
  height: 100vh;
  z-index: 999999999;
  position: absolute;
  left: 0;
  top: 0;

  .modal {
    background-color: #fff;
    border-radius: ${({ theme }) => theme.system.radius};
    width: 600px;
    padding: 40px;
    animation: ${showModalForm} .5s forwards;
  }

`

export default ContainerModal