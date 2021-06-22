import RadarChart from "../Common/RadarChart";
import Bar from "./Bar";
import martialJson from "../Common/martialData.json";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import youtube from "./img/youtube.svg";
import wiki from "./img/wiki.svg";
import { useHistory } from "react-router";
import {
  MartialSummary,
  SummaryWrapper,
  BasicSummary,
  ChartSummary,
  ChartWrapper,
  SummaryKey,
  SummaryValue,
  KeyList,
  ValueList,
  IconImg,
  ChartTitle,
  UrlValue,
  RecommendWrapper,
  Recommend,
  RecommendBoxWrapper,
  RecommendBox,
  MartialImg,
  TitleAndCaption,
  RecommendTitle,
  RecommendCaption,
} from "../../StyledComponents/summary";

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
              <ValueList>{theMartial.nation}</ValueList>
            </SummaryKey>
            <SummaryKey>
              <KeyList>공격 방식</KeyList>
              {theMartial.weapon === 0 ? (
                <ValueList>맨손</ValueList>
              ) : theMartial.weapon === 1 ? (
                <ValueList>무기</ValueList>
              ) : (
                <ValueList>맨손 & 무기</ValueList>
              )}
            </SummaryKey>
            <SummaryKey>
              <KeyList>관련 영상</KeyList>
              <ValueList>
                <UrlValue onClick={() => moveToUrl(theMartial.video)}>
                  영상 보러 가기 <IconImg src={youtube} />
                </UrlValue>
              </ValueList>
            </SummaryKey>
            <SummaryKey>
              <KeyList>상세 정보</KeyList>
              <ValueList>
                <UrlValue onClick={() => moveToUrl(theMartial.wiki)}>
                  위키백과 <IconImg src={wiki} />
                </UrlValue>
              </ValueList>
            </SummaryKey>
            <SummaryKey>
              <KeyList>칼로리 소모</KeyList>
              <ValueList>
                <Bar percent={theMartial.kcal / 10}></Bar>
              </ValueList>
            </SummaryKey>
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
