import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle, Main } from "./styled";
import Kanban from "./Kanban";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Kanban />
  </React.StrictMode>
);
