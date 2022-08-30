import styled from "styled-components";

const FormModalAddTaskStyles = styled.form`

  button {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background.backgroundButtonAdd};
    font: ${({ theme }) => theme.fonts.labelInput};
    text-align: center;
    padding: 16px 32px;
    border-radius: ${({ theme }) => theme.system.radius};
    border: none;
    outline: none;
    cursor: pointer;
    &:hover {
      filter: brightness(.8);
    }
  }
`

export default FormModalAddTaskStyles