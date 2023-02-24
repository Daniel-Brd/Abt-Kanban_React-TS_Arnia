import React from "react";
import ReactDOM from "react-dom/client";
import Column from "./components/column/column";
import Item from "./components/item/item";
import Form from "./components/form/form";
import AddItem from "./components/add-item-form/add-item-form";
import { GlobalStyle, Main } from "./styled";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Main>
      <Column title="Novo" content={< Form content={<AddItem />} />} />
      <Column title="To do" content={<Item />} />
      <Column title="Doing" content={<Item />} />
      <Column title="Done" content={<Item />} />
    </Main>
  </React.StrictMode>
);
