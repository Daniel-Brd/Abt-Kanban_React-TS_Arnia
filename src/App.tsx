import { useState } from "react";
import { Main } from "./styled";
import Column from "./components/column/column";
import Form from "./components/form/form";
import Item from "./components/item/item";
import AddItem from "./components/add-item-form/add-item-form";
import { ItemProps } from "./types/item-types";

function App() {
  return (
    <Main>
      <Column title="Novo" content={<Form content={<AddItem />} />} />
      <Column
        title="To do"
        content={<Item title="lorem ipsum" text="lorem ipsum solor sitamet" />}
      />
      {/* <Column title="Doing" content={<Item />} />
      <Column title="Done" content={<Item />} /> */}
    </Main>
  );
}

export default App;
