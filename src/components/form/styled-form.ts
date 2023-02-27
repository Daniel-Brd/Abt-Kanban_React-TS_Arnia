import styled from "styled-components";

export const Formulary = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  input,
  textarea {
    width: 100%;
    border: 1px solid #575757;
    border-radius: 25px;
    padding: 0.5em 1em;
  }

  input {
    height: 2em;
    font-weight: 700;
    font-size: 20px;
    color: var(--item-card-color);
  }

  textarea {
    resize: none;
    font-weight: 400;
    font-size: 16px;
  }

  nav {
    display: flex;
    justify-content: space-around;
  }
`;
