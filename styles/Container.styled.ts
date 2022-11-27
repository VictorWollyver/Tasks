import styled from "styled-components";

const Container = styled.section<{ active: boolean }>`
  grid-column: 2;
  padding: 80px;

  .containerList {
    margin-top: 40px;
    margin-left: 20px;

    button {
      width: 150px ;
      padding: 8px 32px;
      font-size: 1rem;
      font-weight: 700;
      background: #f4f4f4  ;
      border: none;
      border-bottom: none;
      border-radius: 5px 5px 0 0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    ul {
      display: ${({ active }) => active? 'grid' : 'none' } ;
      width: 150px ;
      justify-content: center;
      background: #f2f2f2;
      border-radius: 0 0 5px 5px;

      li {
        font-weight: 500;
        padding: 5px ;
        cursor: pointer;
        text-align: center;
      }
    }
  }
 
`

export default Container