import React from "react";
import ReactDOM from "react-dom/client";
import ColumnCard from "./components/column-card/column-card";
import Item from "./components/item-card/item-card";
import { GlobalStyle, Main } from "./styled";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Main>
      <ColumnCard title="Novo" item={<Item />} />
      <ColumnCard title="To do" item={<Item />} />
      <ColumnCard title="Doing" item={<Item />} />
      <ColumnCard title="Done" item={<Item />} />
    </Main>
  </React.StrictMode>
);
