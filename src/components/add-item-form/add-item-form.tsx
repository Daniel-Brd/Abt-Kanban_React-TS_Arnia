import { useState } from "react";
import { ItemProps } from "../../types/item-types";

type AddItemProps = {
  handleAddItem: (newItem: ItemProps) => React.MouseEventHandler
}

const AddItem: React.FC<AddItemProps> = ({ handleAddItem }) => {

  const [currentItem, setCurrentItem] = useState({
    id: 0,
    title: "",
    text: "",
    column: "to do"
  });

  return (
    <>
      <label>
        <input
          id="title"
          type="text"
          placeholder="Título"
          value={currentItem.title}
          onChange={(event) => {
            setCurrentItem((prev) => ({ ...prev, title: event.target.value }));
          }}
        ></input>
      </label>
      <label>
        <textarea
          placeholder="Conteúdo"
          rows={5}
          value={currentItem.text}
          onChange={(event) => {
            setCurrentItem((prev) => ({ ...prev, text: event.target.value }));
          }}
        ></textarea>
      </label>
      <nav>
        <button onClick={() => {
          setCurrentItem((prev) => ({ ...prev, id: prev.id + 1 }))
          handleAddItem(currentItem)
          setCurrentItem((prev) => ({ ...prev, title: '', text: '' }))
        }}>
          <img src="src/assets/images/plus.svg" alt="" />
        </button>
      </nav>
    </>
  );
};

export default AddItem;
