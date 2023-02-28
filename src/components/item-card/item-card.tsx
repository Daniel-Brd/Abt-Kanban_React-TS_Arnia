import { useState } from "react";
import { ItemProps } from "../../types/item-types";
import Item from "../item/item";
import { Card } from "./styled-card";

type CardProps = {
  items: ItemProps[]
  onUpdateItem: (item: ItemProps) => void
  onDeleteItem: (item: ItemProps) => void
}

const ItemsCards: React.FC<CardProps> = ({ items, onUpdateItem, onDeleteItem }) => {
  return (
    <>
      {items.map((item, index: number) => (
        <div key={index}>
          <Card>
            <Item item={item} onUpdateItem={onUpdateItem} onDeleteItem={onDeleteItem} />
          </Card>
        </div>
      ))}
    </>
  );
};

export default ItemsCards;
