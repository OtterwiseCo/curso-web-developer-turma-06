import styled from "styled-components";

export const Button = styled.div`
  border: none;
  background-color: aquamarine;
  color: black;
  padding: 5px 10px;
  &:hover {
    color: white;
  }
  &:disabled {
    color: red;
    &:hover {
      color: red;
    }
  }
`;
