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
    console.log(items);
  }

  function updateItems(updatedItem: ItemProps) {
    const _updatedItems = items.map((item) => item.id === updatedItem.id ? updatedItem : item)
    setItems(_updatedItems)
  }

  function deleteItem(deletedItem: ItemProps) {
    const _updatedItems = items.filter((item) => item.id !== deletedItem.id)
    setItems(_updatedItems)
  }

  return (
    <Main>
      <Column title="Novo" content={<Form content={<AddItem handleAddItem={createItem} />} />} />
      <Column
        title="To do"
        content={<ItemsCards items={items.filter(item => item.column === "to do")} onUpdateItem={updateItems} onDeleteItem={deleteItem} />}
      />
      <Column
        title="doing"
        content={<ItemsCards items={items.filter(item => item.column === "doing")} onUpdateItem={updateItems} onDeleteItem={deleteItem} />}
      />
      <Column
        title="done"
        content={<ItemsCards items={items.filter(item => item.column === "done")} onUpdateItem={updateItems} onDeleteItem={deleteItem} />}
      />
    </Main>
  );
}

export default App;
