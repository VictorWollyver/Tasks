import { keyframes } from "styled-components";

export const ShowAlert = keyframes`
  0%{
    transform: translateY(-100px);
    opacity: 0;
  }
  50%{
    transform: translateY(0);
    opacity: 1;
  }
  100%{
    transform: translateY(-300px);
    opacity: 0;
  }
`

export const showModalForm = keyframes`
  0%{
    transform: scale(0.5);
    opacity: 0;
  }
  100%{
    transform: scale(1);
    opacity: 1;
  }
`

export const showLoginForm = keyframes`
  0% {
    transform: translateY(-200px);
    /* opacity: 0; */
  }
  100% {
    transform: translateY(300);
    /* opacity: 1; */
  }
`

export const hideHome = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100px);
  }
`