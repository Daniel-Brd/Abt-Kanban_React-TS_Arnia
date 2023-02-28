import { useState } from "react";
import { ItemProps } from "../../types/item-types";
import leftArrow from '../../assets/images/left-arrow.svg'
import rightArrow from '../../assets/images/right-arrow.svg'
import trash from '../../assets/images/trash.svg'
import { Options } from "./styled-item";


const Item = ({ item, onUpdateItem, onDeleteItem }: { item: ItemProps, onUpdateItem: (item: ItemProps) => void, onDeleteItem: (item: ItemProps) => void }) => {

  const [updatedItem, setUpdatedItem] = useState<ItemProps>({ ...item })


  function nextStatus(item: ItemProps) {
    if (item.hasOwnProperty('column') && item.column === 'to do') {
      setUpdatedItem((prev) => ({ ...prev, column: 'doing' }))
    } else if (item.hasOwnProperty('column') && item.column === 'doing') {
      setUpdatedItem((prev) => ({ ...prev, column: 'done' }))
    }
    onUpdateItem(updatedItem)
    console.log(updatedItem);

  }

  function prevStatus(item: ItemProps) {
    if (item.hasOwnProperty('column') && item.column === 'doing') {
      setUpdatedItem((prev) => ({ ...prev, column: 'to do' }))
    } else if (item.hasOwnProperty('column') && item.column === 'done') {
      setUpdatedItem((prev) => ({ ...prev, column: 'doing' }))
    }
    onUpdateItem(updatedItem)
  }

  return (
    <>
      <h1>{item.title}</h1>
      <p>{item.text}</p>
      <Options >
        {(item.hasOwnProperty('column') && item.column !== 'to do') && <button onClick={() => prevStatus(item)}><img src={leftArrow} alt="left arrow" /></button>}
        <button onClick={() => onDeleteItem(item)}><img src={trash} alt="trash" /></button>
        {(item.hasOwnProperty('column') && item.column !== 'done') && <button onClick={() => nextStatus(item)}><img src={rightArrow} alt='rigth arrow' /></button>}
      </Options>
    </>
  );
};

export default Item;
