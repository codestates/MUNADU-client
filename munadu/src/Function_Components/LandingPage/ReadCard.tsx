import { memo } from "react";
import { Icard } from "../../Page_Components/LandingPage";
import { Card } from "../../StyledComponents/Card";

interface Iprops {
  card: Icard;
  callback: Function;
}

function ReadCard({ card, callback }: Iprops) {
  //
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        callback(card.id);
      }}
    >
      <Card background={card.img} />
    </div>
  );
}

export default memo(ReadCard);
