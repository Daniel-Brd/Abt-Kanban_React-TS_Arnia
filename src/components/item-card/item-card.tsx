import { Card } from "./styled-card";

type Content = {
  content: JSX.Element
}

const ItemCard = ({ content }: Content) => {
  return (
    <Card>
      {content}
    </Card>
  );
};

export default ItemCard;
