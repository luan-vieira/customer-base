import styled from "styled-components";

export const Container = styled.button`
  background: "f5f5f5";
  color: "#0c0d0d";
  height: 45px;
  border-radius: 8px;
  border: 2px solid var(--black);
  font-family: "Roboto Mono", monospace;
  margin-top: 16px;
  width: 100%;
  transition: 0, 5s;

  cursor: pointer;
  :hover {
    border: 2px solid #c85311;
  }
`;
