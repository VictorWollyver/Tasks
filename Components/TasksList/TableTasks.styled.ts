import styled from "styled-components";

const TableTasks = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;

  tr{
    &:nth-child(even){
      background-color: #f4f4f4;
    }

    &:hover {
      background-color: #fff;
      transition: .3s;
    }
  }

  td, th{
    padding: 10px 20px ;
    cursor: pointer;
    font-weight: 500;
    
  }

  td{
    &:nth-child(1) {
      border-radius: 5px 0 0 5px;
    }

    &:nth-child(3) {
      border-radius: 0 5px 5px 0;
    }
  }

  .description, .description-title {
    @media(max-width: 500px) {
      display: none;
    }
  }

`

export default TableTasks