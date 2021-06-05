import RadarChart from "../Common/RadarChart";
import Bar from "./Bar";
import martialJson from "../Common/martialData.json";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import youtube from "./img/youtube.svg";
import wiki from "./img/wiki.svg";
import { useHistory } from "react-router";

const MartialSummary = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 54%;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;
const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 2%;
  height: 40%;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    flex-direction: column;
  }
`;
const BasicSummary = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
`;
const ChartSummary = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    /* margin: 5px; */
    width: 100%;
  }
`;

const ChartWrapper = styled.div`
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    width: 80%;
    height: auto;
    align-self: center;
  }
`;
const SummaryKey = styled.div`
  justify-content: space-around;
  flex-direction: column;
  min-width: 8em;
  display: flex;
`;
const SummaryValue = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding-right: 150px;
`;
const KeyList = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 29px;
  color: #1c1c1c;
  margin: 10%;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    margin: 10px;
    line-height: 0;
  }
`;
const ValueList = styled.div`
  width: 200px;
  font-family: Noto Sans KR Medium;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #1c1c1c;
  margin: 10%;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    margin: 10px;
  }
`;

const IconImg = styled.img`
  padding-left: 4px;
`;

const ChartTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 29px;
  color: #1c1c1c;
  margin-top: 3%;
  margin-left: 3%;
`;

const UrlValue = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RecommendWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  align-self: center;
  width: 88%;
  height: 25%;
  justify-content: space-between;
`;

const Recommend = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 29px;
  color: #1c1c1c;
`;
const RecommendBoxWrapper = styled.div`
  margin-top: 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    flex-direction: column;
  }
`;

const RecommendBox = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  width: 30%;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding-right: 1%;
  margin-bottom: 3%;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    width: 100%;
  }
`;

const MartialImg = styled.img`
  margin: 5%;
`;

const TitleAndCaption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const RecommendTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 29px;
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;
  color: #1c1c1c;
`;
const RecommendCaption = styled.div`
  font-family: Noto Sans KR Light;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;
  color: #1c1c1c;
`;

interface IProps {
  martialId: number;
}

const Summary = ({ martialId }: IProps) => {
  const moveToUrl = (url: string) => {
    window.open(url);
  };

  const makeRandomMartial = (martial: any) => {
    const newArr = martial.slice();
    const result = [];

    while (result.length < 3) {
      let target = newArr.splice(
        Math.floor(Math.random() * newArr.length),
        1
      )[0];
      result.push(target);
    }
    return result;
  };
  const reviewList = useSelector(
    (state: RootState) => state.reviewReducer.reviewList
  );
  const difficultyAvg =
    Math.round(
      (reviewList
        .map((reviewList) => reviewList.difficulty)
        .reduce((acc, cur) => acc + cur, 0) /
        reviewList.length) *
        10
    ) / 10;
  const practicalityAvg =
    Math.round(
      (reviewList
        .map((reviewList) => reviewList.practicality)
        .reduce((acc, cur) => acc + cur, 0) /
        reviewList.length) *
        10
    ) / 10;
  const muscleAvg =
    Math.round(
      (reviewList
        .map((reviewList) => reviewList.muscle)
        .reduce((acc, cur) => acc + cur, 0) /
        reviewList.length) *
        10
    ) / 10;
  const intensityAvg =
    Math.round(
      (reviewList
        .map((reviewList) => reviewList.intensity)
        .reduce((acc, cur) => acc + cur, 0) /
        reviewList.length) *
        10
    ) / 10;
  const injuryAvg =
    Math.round(
      (reviewList
        .map((reviewList) => reviewList.injury)
        .reduce((acc, cur) => acc + cur, 0) /
        reviewList.length) *
        10
    ) / 10;
  const avgLabel = [
    practicalityAvg,
    muscleAvg,
    difficultyAvg,
    intensityAvg,
    injuryAvg,
  ];

  const randomData = makeRandomMartial(martialJson.martialData);

  const theMartial = martialJson.martialData.filter(
    (martial) => martial.id === martialId
  )[0];

  const history = useHistory();

  const moveToDetailPage = (id: number) => {
    history.push({
      pathname: "/detailpage",
      state: { martialId: id },
    });
    window.location.replace("/detailpage");
  };

  return (
    <div>
      <MartialSummary>
        <SummaryWrapper>
          <BasicSummary>
            <SummaryKey>
              <KeyList>종주국</KeyList>
              <KeyList>공격 방식</KeyList>
              <KeyList>관련 영상</KeyList>
              <KeyList>상세 정보</KeyList>
              <KeyList>칼로리 소모</KeyList>
            </SummaryKey>
            <SummaryValue>
              <ValueList>{theMartial.nation}</ValueList>
              {theMartial.weapon === 0 ? (
                <ValueList>맨손</ValueList>
              ) : theMartial.weapon === 1 ? (
                <ValueList>무기</ValueList>
              ) : (
                <ValueList>맨손 & 무기</ValueList>
              )}
              <ValueList>
                <UrlValue onClick={() => moveToUrl(theMartial.video)}>
                  영상 보러 가기 <IconImg src={youtube} />
                </UrlValue>
              </ValueList>
              <ValueList>
                <UrlValue onClick={() => moveToUrl(theMartial.wiki)}>
                  위키백과 <IconImg src={wiki} />
                </UrlValue>
              </ValueList>
              <ValueList>
                <Bar percent={theMartial.kcal / 10}></Bar>
              </ValueList>
            </SummaryValue>
          </BasicSummary>
          <ChartSummary>
            <ChartTitle>사형의 판단</ChartTitle>
            <ChartWrapper>
              <RadarChart
                label={[
                  "실전성",
                  "근육 발달",
                  "난이도",
                  "운동 강도",
                  "부상 확률",
                ]}
                data={avgLabel}
                width={300}
                height={300}
                displayScales={false}
              ></RadarChart>
            </ChartWrapper>
          </ChartSummary>
        </SummaryWrapper>
        <RecommendWrapper>
          <Recommend>이런 무술은 어떠세요?</Recommend>
          <RecommendBoxWrapper>
            {randomData.map((martial, idx) => {
              return (
                <RecommendBox
                  key={idx}
                  onClick={() => moveToDetailPage(martial.id)}
                >
                  <MartialImg src={martial.img} width="100px" height="100px" />
                  <TitleAndCaption>
                    <RecommendTitle>{martial.name}</RecommendTitle>
                    <RecommendCaption>{martial.caption}</RecommendCaption>
                  </TitleAndCaption>
                </RecommendBox>
              );
            })}
          </RecommendBoxWrapper>
        </RecommendWrapper>
      </MartialSummary>
    </div>
  );
};

export default Summary;
