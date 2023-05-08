import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  div {
    span {
      color: var(--red);
    }
  }
`;

export const InputContainer = styled.div`
  background: var(--white);
  border-radius: 10px;
  border: 2px solid var(--gray);
  color: var(--gray);
  padding: 1rem;
  width: 100%;
  display: flex;
  transition: 0.4s;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
      svg {
        color: red;
      }
    `}

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--black);
    &::placeholder {
      color: var(--gray);
      font-family: "Barlow";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
