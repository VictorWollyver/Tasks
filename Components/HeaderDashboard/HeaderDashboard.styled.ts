import styled from "styled-components";

const HeaderDashboardStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font: ${({ theme }) => theme.fonts.title};
    display: inline-block;

    span {
      margin: 0 1rem;
    }
  }

  p {
    font-size: 2rem;
    display: inline-block;
  }

  button {
    background-color: transparent;
    padding: 4px 16px;
    border: 3px solid #000;
    border-radius: 20px;
    font-size: 1.5rem;
    transition: .3s;
    cursor: pointer;
    color: #333;
    font-weight: 500;

    &:hover {
      color: #fff;
      background-color: #000;
    }
  }
`

export default HeaderDashboardStyles