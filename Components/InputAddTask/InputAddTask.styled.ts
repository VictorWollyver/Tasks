import styled from "styled-components";

const ContainerInput = styled.div`

  margin-bottom: 4rem;

  label {
    font: ${({ theme }) => theme.fonts.labelInput};
    color: #333;
    margin-bottom: 1rem;
    display: block;
  }

  input {
    padding: 20px;
    font: ${({ theme }) => theme.fonts.listItemsDate};
    background-color: ${({ theme }) => theme.colors.background.backgroundInput};
    border-radius: ${({ theme }) => theme.system.radius};
    border: 2px solid ${({ theme }) => theme.colors.borders.borderInput} ;
    width: 100%;
    outline: none;
    transition: .3s;
    &:hover, &:focus {
      background-color: #fff;
    }
  }

  .messageError {
    color: red;
    font-weight: 400;
    margin-top: .5rem;
    height: .1rem;
  }
`

export default ContainerInput