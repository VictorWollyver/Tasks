import styled from "styled-components";


const AccountContainer = styled.section`
  padding-left: 20rem;

  h1 {
    font: ${({theme}) => theme.fonts.title };
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`

export default AccountContainer