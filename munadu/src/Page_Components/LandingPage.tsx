import ReadCard from "../Function_Components/LandingPage/ReadCard";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store/store";
import { Landing } from "../StyledComponents/Landing";
import { memo, useState, useEffect } from "react";
import { useHistory } from "react-router";
import Button from "../StyledComponents/button";
import HeaderBar from "../Function_Components/Common/HeaderBar";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import { martialData } from "../Function_Components/Common/martialData.json";

export interface Icard {
  id: number;
  name: string;
  img: string;
}

function LandingPage() {
  const cards: any = martialData.map((martial) => {
    return {
      id: martial.id,
      name: martial.name,
      img: martial.img,
    };
  });
  const [audio, setAudio] = useState<boolean>(false);
  const [select, setSelect] = useState(0);
  const [img, setImg] = useState<string>(cards[select].img);
  const history = useHistory();

  const [bgm] = useState(new Audio("/landingBgm.mp3"));
  useEffect(() => {
    bgm.addEventListener("ended", () => setAudio(false));
    return () => {
      bgm.removeEventListener("ended", () => setAudio(false));
    };
  }, []);

  const setBgm = () => {
    setAudio(!audio);
  };
  useEffect(() => {
    audio ? bgm.play() : bgm.pause();
  }, [audio]);

  const setCard = (key: number): void => {
    setSelect(key - 1);
    const effect = new Audio("/button-45.mp3");
    effect.play();
  };
  useEffect(() => {
    setImg(cards[select].img);
  }, [select]);

  return (
    <div>
      <Landing.Back></Landing.Back>
      <HeaderBar></HeaderBar>
      <Landing.Board>
        <Landing.Guide>
          <Landing.Bgm isAudio={audio} onClick={setBgm}>
            {audio ? "OFF" : "BGM"}
          </Landing.Bgm>

          <Landing.Title>
            <Landing.LogoImg src={"/munadoLogo.svg"} />
            무술? 너도 할 수 있어!
          </Landing.Title>
          <Landing.Divide></Landing.Divide>
          <Landing.Caption>
            무나두는 무술 큐레이션 서비스입니다.
            <br />
            본인에게 알맞은 다양한 무술을 찾아보세요.
          </Landing.Caption>
          <Landing.BtnWrapper>
            <Button
              color="white"
              onClick={() => {
                history.push("/surveypage");
              }}
            >
              설문 조사
            </Button>
            <Button
              onClick={() => {
                history.push({
                  pathname: "/mainpage",
                  state: { select: true },
                });
              }}
            >
              시작 하기
            </Button>
          </Landing.BtnWrapper>
        </Landing.Guide>
        <Landing.CardWrapper>
          <Landing.Left
            src={"/LeftArrow.svg"}
            onClick={() => {
              if (select === 0) {
                return setSelect(29);
              }
              setSelect(select - 1);
            }}
          ></Landing.Left>
          {cards.map((el: any, idx: number) => {
            if (el.id === select + 1) {
              return (
                <Landing.MartialImg
                  key={idx}
                  className="landing_martial select"
                  src={img}
                ></Landing.MartialImg>
              );
            }
            return (
              <Landing.MartialImg
                key={idx}
                className="landing_martial"
                src="dummy.svg"
              ></Landing.MartialImg>
            );
          })}
          <Landing.Right
            src={"/RightArrow.svg"}
            onClick={() => {
              if (select === 29) {
                return setSelect(0);
              }

              setSelect(select + 1);
            }}
          ></Landing.Right>
        </Landing.CardWrapper>
        <Landing.Name>{cards[select].name}</Landing.Name>
        <Landing.Base>
          <Landing.CardBoard>
            {cards.map((el: any, idx: number) => {
              if (select === idx) {
                return (
                  <ReadCard
                    key={idx}
                    card={el}
                    callback={setCard}
                    isClick={true}
                  ></ReadCard>
                );
              }
              return (
                <ReadCard
                  key={idx}
                  card={el}
                  callback={setCard}
                  isClick={false}
                ></ReadCard>
              );
            })}
          </Landing.CardBoard>
        </Landing.Base>
      </Landing.Board>
    </div>
  );
}

export default memo(LandingPage);
