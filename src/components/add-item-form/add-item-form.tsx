import { useState } from "react";
import { ItemProps } from "../../types/item-types";
import uuid from 'react-uuid'

type AddItemProps = {
  handleAddItem: (newItem: ItemProps) => void
}

const AddItem: React.FC<AddItemProps> = ({ handleAddItem }) => {

  const [currentItem, setCurrentItem] = useState({
    id: uuid(),
    title: "",
    text: "",
    column: "to do"
  });

  const { id, title, text, column } = currentItem

  return (
    <>
      <label>
        <input
          id="title"
          type="text"
          placeholder="Título"
          value={title}
          onChange={(event) => {
            setCurrentItem((prev) => ({ ...prev, title: event.target.value }));
          }}
        ></input>
      </label>
      <label>
        <textarea
          placeholder="Conteúdo"
          rows={5}
          value={text}
          onChange={(event) => {
            setCurrentItem((prev) => ({ ...prev, text: event.target.value }));
          }}
        ></textarea>
      </label>
      <nav>
        <button onClick={() => {
          handleAddItem(currentItem)
          setCurrentItem((prev) => ({ ...prev, id: uuid(), title: '', text: '' }))
        }}>
          <img src="src/assets/images/plus.svg" alt="" />
        </button>
      </nav>
    </>
  );
};

export default AddItem;
