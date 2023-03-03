import { Main } from "./styled";
import { ItemProps } from "./types/item-types";
import Column from "./components/column/column";
import ItemsCards from "./components/item-card/item-card";
import Form from "./components/form/form";
import AddItem from "./components/add-item-form/add-item-form";
import { useEffect, useState } from "react";



function App() {

  const [items, setItems] = useState<ItemProps[]>([])

  const createItem = (newItem: ItemProps) => {
    setItems((prev) => ([
      ...prev, newItem
    ]))
  }

  function updateItems(item: ItemProps) {
    setItems(items.map((prevItem) => item.id === prevItem.id ? item : prevItem))
  }

  function deleteItem(item: ItemProps) {
    setItems(items.filter((prevItem) => prevItem.id !== item.id))
  }

  useEffect(() => {
  }, [items])

  return (
    <Main>
      <Column title="Novo" >
        <Form>
          <AddItem handleAddItem={createItem} />
        </Form>
      </Column>
      <Column title="To do">
        <ItemsCards items={items.filter(item => item.column === "to do")} onUpdateItem={updateItems} onDeleteItem={deleteItem} />
      </Column>
      <Column title="Doing">
        <ItemsCards items={items.filter(item => item.column === "doing")} onUpdateItem={updateItems} onDeleteItem={deleteItem} />
      </Column>
      <Column title="Done">
        <ItemsCards items={items.filter(item => item.column === "done")} onUpdateItem={updateItems} onDeleteItem={deleteItem} />
      </Column>
    </Main>
  );
}

export default App;
