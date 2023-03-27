import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 38px;

  h2 {
    font-size: 2.3rem;
    padding: 0 38px;
  }
`;

export const HeaderContainer = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 90%;

  h1 {
    font-size: 3rem;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    button {
      width: 12rem;
    }
  }
  flex: 1;
  margin-top: 32px;
  padding: 0 38px;
  section {
    display: flex;
    > div {
      max-width: 80%;
      flex: 1;
      margin-right: 16px;
    }

    button {
      max-width: 260px;
      height: 60px;
      margin: 0;
    }
  }
`;

export const ContactsContainer = styled.div`
  padding: 0 38px;
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  div {
    margin-top: 16px;
    margin-right: 32px;
  }
`;
