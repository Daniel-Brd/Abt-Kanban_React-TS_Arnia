import { ItemProps } from "../../types/item-types";
import Item from "../item/item";
import { Card } from "./styled-card";

type CardProps = {
  items: ItemProps[]
}

const ItemsCards: React.FC<CardProps> = ({ items }) => {

  return (
    <>
      {items.map((item, index: number) => (
        <div key={index}>
          <Card>
            <Item title={item.title} text={item.text} />
          </Card>
        </div>
      ))}
    </>
  );
};

export default ItemsCards;
