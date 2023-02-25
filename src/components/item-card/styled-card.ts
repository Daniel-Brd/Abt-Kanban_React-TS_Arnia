import styled from "styled-components";

export const Card = styled.article`
  background: var(--item-card-backgorund-color);
  color: var(--item-card-color);
  width: 100%;
  height: fit-content;
  border-radius: 25px;
  box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.28);
  padding: 5%;
  text-align: left;

  h1 {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;
