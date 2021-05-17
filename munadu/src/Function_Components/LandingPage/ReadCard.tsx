import { Icard } from "../../Page_Components/LandingPage";
import { Card } from "../../StyledComponents/Card";

interface Iprops {
  card: Icard;
  callback: Function;
}

export default function ReadCard({ card, callback }: Iprops) {
  return (
    <div
      onClick={() => {
        callback(card.id);
      }}
    >
      <Card background={card.img} />
    </div>
  );
}
