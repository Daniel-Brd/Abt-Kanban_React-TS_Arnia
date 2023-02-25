import { ItemProps } from "../../types/item-types";

const Item = ({ title, text }: ItemProps) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{text}</p>
    </>
  );
};

export default Item;
