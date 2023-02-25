import React from "react";
import ReactDOM from "react-dom/client";
import Column from "./components/column/column";
import Item from "./components/item/item";
import Form from "./components/form/form";
import AddItem from "./components/add-item-form/add-item-form";
import { GlobalStyle, Main } from "./styled";
import App from "./App";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
