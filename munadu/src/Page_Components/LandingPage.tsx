import ReadCard from "../Function_Components/LandingPage/ReadCard";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store/store";
import { Landing } from "../StyledComponents/Landing";
import { Button } from "../StyledComponents/Button";
import { useState } from "react";
import { useHistory } from "react-router";

export interface Icard {
  id: number;
  name: string;
  img: string;
}

export default function LandingPage() {
  const [select, setSelect] = useState(0);
  const history = useHistory();
  const setCard = (key: number): void => {
    setSelect(key);
  };

  const cards: Icard[] = useSelector((state: RootState) => {
    return state.martialReducer.data.map((el: any) => {
      return {
        id: el.id,
        name: el.name,
        img: el.img,
      };
    });
  });

  return (
    <Landing.Board>
      <div>
        <Landing.Title>
          무나두
          <br />
          무술? 너도 할 수 있어! test
        </Landing.Title>
        <Button
          onClick={() => {
            history.push("/surveypage");
          }}
        >
          설문 조사
        </Button>
        <Button
          onClick={() => {
            history.push("/mainpage");
          }}
        >
          시작 하기
        </Button>
      </div>
      <Landing.Img src={cards[select].img} />
      <Landing.Name>{cards[select].name}</Landing.Name>
      <Landing.CardBoard>
        {cards.map((el, idx: number) => {
          return <ReadCard key={idx} card={el} callback={setCard}></ReadCard>;
        })}
      </Landing.CardBoard>
    </Landing.Board>
  );
}
