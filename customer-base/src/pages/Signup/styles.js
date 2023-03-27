import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 400px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 32px;
      font-size: 4rem;
    }

    p {
      margin-top: 10px;
      margin-bottom: 10px;

      > a {
        font-weight: bold;
        color: var(--orange);
      }
    }
  }
`;
