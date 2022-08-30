import styled from "styled-components";
import { ShowAlert } from "../../styles/Keyframes.styled";

const ModalAlertStyles = styled.div`
  border-radius: 10px;
  color: #fff;
  font-size: 2rem;
  background-color: #00cd00;
  border: 2px solid green;
  position: absolute;
  left: 50%;
  top: 20px;
  padding: 10px 40px;
  animation: ${ShowAlert} 3s forwards  ;
`

export default ModalAlertStyles