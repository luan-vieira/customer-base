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

  .classlink {
    padding-left: 1rem;
  }

  h1 {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 2.5rem;
    span {
      color: #c85311;
    }
  }

  div {
    flex: 1;
    display: flex;

    button {
      margin-left: 3.5rem;
    }
  }

  span {
    margin-bottom: 2rem;
    font-size: 1.7rem;
    flex-wrap: wrap;
  }
`;
