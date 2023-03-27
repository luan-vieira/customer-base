import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--white);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 290px;
  height: 320px;
  padding: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--black);
  color: var(--black);

  h1 {
    font-size: 1.3rem;
  }

  hr {
    width: 90%;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  button {
    align-self: flex-end;
  }

  button + button {
    margin-bottom: 16px;
  }

  svg {
    font-size: 1.1rem;
    color: var(--orange);
    margin-right: 4px;
    transform: translateY(3px);
  }
  time {
    font-size: 0.8rem;
    margin-top: 4px;
  }
`;
