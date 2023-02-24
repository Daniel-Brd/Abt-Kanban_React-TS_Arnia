import styled from "styled-components";

export const ColumnCard = styled.section`
  background-color: var(--column-background-color);
  border-radius: 7px;
  padding: 7.5%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.28);
  text-align: center;
  max-height: 100%;


  ::-webkit-scrollbar {
    display: none;
  }

  > h1 {
    font-weight: 800;
    font-size: 32px;
    line-height: 48px;
    color: var(--main-blue-color);
  }
`;
