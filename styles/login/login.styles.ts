import styled from "styled-components";

const LoginStyle = styled.section`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: 1fr;
  height: 100vh;

  img {
    object-fit: cover;
    object-position: center;
  }

  form {
    align-self: center;
    justify-self: center;
    width: 500px;
    padding: 40px;
    display: flex;
    flex-direction: column;

    h2 {
      color: #1AC8ED;
      font-weight: bold;
      margin-bottom: 40px;
      font-size: 3rem;
    }
  }

  .forget {
    text-align: end;
    width: 100%;
    margin-top: -20px;
  }

  button {
    width: 100%;
    padding: 3px 16px;
    border-radius: 5px;
    background-color: #1AC8ED;
    color: #0F084B;
    font-weight: 600;
    font-size: 24px;
    border: none;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
      filter: brightness(0.9);
    }
  }

  a {
    color: #1AC8ED ;
    align-self: center;
    margin-top: 20px;
    font-weight: 400;
  }

  .error {
    font-size: .8rem;
		color: red;
		height: .5rem;
    margin-top: .5rem;
  }

`

export default LoginStyle

