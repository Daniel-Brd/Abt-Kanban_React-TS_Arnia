import { ColumnCard } from "./styled-column";
import ItemCard from "../item-card/item-card";

type ColumnProps = {
  title: string;
  content: JSX.Element;
};

const Column = ({ title, content }: ColumnProps) => {
  return (
    <ColumnCard>
      <h1>{title}</h1>
      <ItemCard content={content} />
    </ColumnCard>
  );
};

export default Column;
