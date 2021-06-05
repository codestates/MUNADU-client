import { memo } from "react";
import { Icard } from "../../Page_Components/LandingPage";
import {
  Card,
  SelectCard,
  CardBack,
  NoSelectCard,
} from "../../StyledComponents/Card";

interface Iprops {
  card: Icard;
  callback: Function;
  isClick: boolean;
}

function ReadCard({ card, callback, isClick }: Iprops) {
  //
  if (isClick) {
    return (
      <SelectCard>
        <CardBack isSelect={isClick}>
          <Card
            background={card.img}
            onClick={(e) => {
              e.preventDefault();
              callback(card.id);
            }}
            isClick={isClick}
          />
        </CardBack>
      </SelectCard>
    );
  }
  return (
    <NoSelectCard>
      <CardBack isSelect={isClick}>
        <Card
          background={card.img}
          onClick={(e) => {
            e.preventDefault();
            callback(card.id);
          }}
          isClick={isClick}
        />
      </CardBack>
    </NoSelectCard>
  );
}

export default memo(ReadCard);
