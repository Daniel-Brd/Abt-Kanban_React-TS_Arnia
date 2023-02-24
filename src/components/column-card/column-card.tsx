import { Column } from "./styled-column-card";

type Props = {
  title: string;
  item: JSX.Element;
};

const ColumnCard = ({ title, item }: Props) => {
  return (
    <Column>
      <h1>{title}</h1>
      {item}
      {item}
      {item}
      {item}
      {item}
      {item}
    </Column>
  );
};

export default ColumnCard;
