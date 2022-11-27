import styled from "styled-components";
import { FieldError } from "react-hook-form";

const InputDiv = styled.div<{ error?: FieldError}>`
	margin-bottom: 20px;

	input {
			border-radius: 5px;
  		background-color: #f5f5f5;
			font-weight: 500;
  		border: ${({ error }) => error? '1px solid red' : '1px solid #ddd' };
  		padding: 8px 16px;
  		width: 100%;
  		outline-style: none;
			color: ${({ error }) => error ? '#9B2C2C' : '#333' };
			background-color: ${({ error }) => error? '#FFF5F5' : '#f5f5f5' };
			box-shadow: ${({ error }) => error? '0px 0px 4px 5px rgba(245, 101, 101, 0.1)' : 'none' };

  		&:focus, &:hover {
  	  		background-color: #fff;
  		}
	}

	label {
		font-weight: 500;
	}

	p {
		font-size: .8rem;
		color: red;
		height: .5rem;
	}
`

export default InputDiv

