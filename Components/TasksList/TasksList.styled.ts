import styled from "styled-components";

const ListTasksStyle = styled.ul`

  li {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.colors.backgroundItems};
    border: 2px solid ${({ theme }) => theme.colors.borderColor};
    margin-bottom: 1rem;
    border-radius: 10px;
    cursor: pointer;
    transition: .2s;

    &:hover {
      transform: scale(1.01);
    }

    h2 {
      font-weight: 500; 
      font-size: 1rem;
    }
    
    p {
      font-size: 1rem;
      font-weight: 300;
    }

    p:last-child {
      font-weight: 400;
    }

  }
`

export default ListTasksStyle