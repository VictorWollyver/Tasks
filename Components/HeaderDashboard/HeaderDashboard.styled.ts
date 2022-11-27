import styled from "styled-components";

const HeaderDashboardStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  h1 {
    font: ${({ theme }) => theme.fonts.title};
    display: inline-block;
    min-width: max-content;

    span {
      margin: 0 1rem;
    }
  }

  p {
    font-size: 2rem;
    display: inline-block;
  }

  div {
    display: flex;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
  }

  .separator {
    background: #333;
    width: 20px;
    height: 5px;
    margin: 0 2rem;
    border-radius: 5px;

    @media(max-width: 750px) {
      display: none;
    }
  }

  .logout {
    border: none;
    background: transparent;
    font-weight: 500;
    font-size: 2rem;
    cursor: pointer;

    @media(max-width: 750px) {
      margin-left: 1rem;
    }
    &:hover {
      color: red;
      transition: .3s
    }
  }

  .add-task {
    background-color: #1AC8ED;
    padding: 4px 16px;
    border: 2px solid #0f084b;
    border-radius: 20px;
    font-size: 1.5rem;
    transition: .3s;
    cursor: pointer;
    color: #0F084B;
    font-weight: 600;

    @media(max-width: 650px) {
      margin-top: 1rem;
    }

    &:hover {
      color: #1AC8ED;
      background-color: #0F084B;
    }
  }
`

export default HeaderDashboardStyles