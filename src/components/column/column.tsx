import { ColumnCard } from "./styled-column";

type ColumnProps = {
  title: string;
  content: React.ReactNode;
};

const Column: React.FC<ColumnProps> = ({ title, content }) => {

  return (
    <ColumnCard>
      <h1>{title}</h1>
      {content}
    </ColumnCard>
  );
};

export default Column;
