import { ColumnCard } from "./styled-column";
import ItemCard from "../item-card/item-card";

type Props = {
  title: string;
  content: JSX.Element;
};

const Column = ({ title, content }: Props) => {
  return (
    <ColumnCard>
      <h1>{title}</h1>
      <ItemCard content={content} />
      <ItemCard content={content} />
      <ItemCard content={content} />
      <ItemCard content={content} />
    </ColumnCard>
  );
};

export default Column;
