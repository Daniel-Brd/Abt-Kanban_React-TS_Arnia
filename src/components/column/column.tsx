import { ReactNode } from "react";
import { ColumnCard } from "./styled-column";

type ColumnProps = {
  title: string;
  children: ReactNode;
};

const Column: React.FC<ColumnProps> = ({ title, children }) => {

  return (
    <ColumnCard>
      <h1>{title}</h1>
      {children}
    </ColumnCard>
  );
};

export default Column;
