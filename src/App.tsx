import { Main } from "./styled";
import { ItemProps } from "./types/item-types";
import Column from "./components/column/column";
import ItemsCards from "./components/item-card/item-card";
import Form from "./components/form/form";
import AddItem from "./components/add-item-form/add-item-form";
import { useState } from "react";



function App() {

  const [items, setItems] = useState<ItemProps[]>([])

  const createItem = (newItem: ItemProps) => {
    setItems((prev) => ([
      ...prev, newItem
    ]))
  }

  return (
    <Main>
      <Column title="Novo" content={<Form content={<AddItem handleAddItem={createItem} />} />} />
      <Column
        title="To do"
        content={<ItemsCards items={items.filter(item => item.column === "to do")} />}
      />
      <Column
        title="doing"
        content={<ItemsCards items={items.filter(item => item.column === "doing")} />}
      />
      <Column
        title="done"
        content={<ItemsCards items={items.filter(item => item.column === "done")} />}
      />
    </Main>
  );
}

export default App;
