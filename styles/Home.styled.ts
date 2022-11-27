import styled from "styled-components";


const Home = styled.div`
    display: grid;
    padding: 0 10px;
    text-align: center;
    height: 90vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
    justify-items: center;

     img {
    justify-self: center;
  }

  .description {
    font-weight: 275;
    font-size: 48px;
    letter-spacing: 30px;
    margin-top: 40px;

    @media (max-width: 900px) {
      font-size: 2rem
    }

     @media (max-width: 600px) {
      display: none;
    }
  }

  .buttonLogin {
    border: none;
    font-size: 48px ;
    font-weight: 700;
    letter-spacing: 30px;
    background: transparent ;
    margin-top: 80px;
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 10px;
    transition: background .3s;
    width: auto;
    

    &:hover {
      background-color: #1AC8ED;
      color: #0F084B;
    }
  }

  .link {
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 0;
    margin-top: 0;

    a {
      color: #1AC8ED;
    }
  }
`

export default Home