import { useState, useEffect } from "react";
import styled from "styled-components";
import CreateReview from "../Function_Components/DetailPage/CreateReview";
import { PageContainer } from "../Page_Components/SurveyPage";
import star from "../Function_Components/DetailPage/star.svg";
import ReadReview from "../Function_Components/DetailPage/ReadReview";
import ReadComment from "../Function_Components/DetailPage/ReadComment";
import ReadLocation from "../Function_Components/DetailPage/ReadLocation";
import { useLocation } from "react-router";
import { RootState } from "../Redux/Store/store";
import DetailInfo from "../Function_Components/Common/DetailInfo";
import martialJson from "../Function_Components/Common/martialData.json";
import { useDispatch, useSelector } from "react-redux";
import { getAverage } from "../Redux/Reducers/avgReducer";
import { setUser } from "../Redux/Reducers/userReducer";
import HeaderBar from "../Function_Components/Common/HeaderBar";
import Summary from "../Function_Components/DetailPage/Summary";
import { getCoordinate } from "../Redux/Reducers/coordReducer";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  width: 64%;
  min-height: 100vh;
  height: auto;
  overflow: visible;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    width: 90%;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-family: ${(props) => props.theme.fontFamily.mainFont};
  font-size: 1.5rem;
  font-weight: bold;
  margin: 2% auto;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    /* flex-direction: column; */
  }
`;

const StarPhoto = styled.img`
  width: 2em;
  height: auto;
  margin-right: 2%;
`;

interface Itext {
  tabValue: number;
  idx: number;
}
export const Text = styled.div<Itext>`
  margin-right: 5%;
  cursor: pointer;
  text-decoration: ${(props) => {
    if (props.tabValue === props.idx) {
      return "underline";
    } else return "none";
  }};
  color: ${(props) => {
    if (props.tabValue !== props.idx) return "#606060";
  }};
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    font-size: 1.2rem;
    margin: 10px 0;
  }
`;
export const TextBox = styled.div`
  display: flex;
  justify-content: flex-start;
  min-width: 50%;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    justify-content: space-between;
    width: 100%;
    margin: 10px 5px;
  }
`;

const DescBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 2.5em;
  height: 100%;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    margin-left: 1em;
  }
`;

const StarAndRating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.7em;
`;
const Rating = styled.div`
  color: #ffffff;
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-weight: 500;
  font-size: 1.25rem;
  margin-left: 0.5em;
`;

const TextsBox = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Texts = styled.div`
  font-size: 1.5rem;
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-weight: 900;
  color: #fbfbfb;
  margin-right: 0.5em;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    font-size: 1.2rem;
  }
`;
const SmallTexts = styled.div`
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-weight: 500;
  font-size: 1rem;
  color: #606060;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    font-size: 1rem;
  }
`;

const TagBox = styled.div`
  display: flex;
  margin-top: 1em;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    display: none;
  }
`;
const Tag = styled.div`
  display: flex;
  background-color: #eeeeee;
  border-radius: 10px;
  padding: 5px;
  margin-right: 0.5em;
`;

const Board = styled.div`
  background: ${(props) => props.theme.color.black};
  display: flex;
  width: 100%;
`;

interface IProps {
  martialId: number;
}
const Div = styled.div`
  width: 100%;
`;

export default function DetailPage() {
  const [tabMenu, setTabMenu] = useState(0);

  const showReviewMenu = () => {
    setTabMenu(0);
  };
  const showCommentMenu = () => {
    setTabMenu(1);
  };
  const showLocationMenu = () => {
    setTabMenu(2);
  };
  const dispatch = useDispatch();
  const location = useLocation<IProps>();
  const martialId = location.state.martialId;

  const userId = useSelector((state: RootState) => state.authReducer.id);
  const userAddress = useSelector(
    (state: RootState) => state.userReducer.address
  );

  const theMartial = martialJson.martialData.filter(
    (martial) => martial.id === martialId
  )[0];
  const scoreAvg = useSelector((state: RootState) => state.avgReducer.scoreAvg);
  const isLogin = useSelector((state: RootState) => state.authReducer.isLogin);

  const tags: string[] = [];
  switch (theMartial.weapon) {
    case 0:
      tags.push("맨손");
      break;
    case 1:
      tags.push("무기");
      break;
    case 2:
      tags.push("맨손&무기");
      break;
    case 3:
      break;
  }
  switch (theMartial.uniform) {
    case 0:
      tags.push("도복");
      break;
    case 1:
      tags.push("자유복");
      break;
    case 2:
      tags.push("유니폼");
      break;
    case 3:
      break;
  }
  switch (theMartial.origin) {
    case 0:
      tags.push("동양");
      break;
    case 1:
      tags.push("서양");
      break;
    case 2:
      break;
  }
  switch (theMartial.sports) {
    case 0:
      tags.push("스포츠화");
      break;
    case 1:
      tags.push("규칙자유");
      break;
    case 2:
      break;
  }
  switch (theMartial.manner) {
    case 0:
      tags.push("예의강조");
      break;
    case 1:
      tags.push("자유로운매너");
      break;
    case 2:
      break;
  }
  switch (theMartial.attack) {
    case 0:
      tags.push("타격위주");
      break;
    case 1:
      tags.push("그라운드위주");
      break;
    case 2:
      tags.push("타격&그라운드");
      break;
    case 3:
      break;
  }
  useEffect(() => {
    dispatch(getAverage(martialId));
    if (userAddress) dispatch(getCoordinate(userAddress));
  }, []);

  return (
    <PageContainer>
      <Div>
        <HeaderBar />
      </Div>
      <Board>
        <DetailInfo svg={theMartial.img}>
          <DescBox>
            <StarAndRating>
              <StarPhoto src={star} />
              <Rating>{Math.round(scoreAvg * 10) / 10}</Rating>
            </StarAndRating>
            <TextsBox>
              <Texts>{theMartial.name}</Texts>
              <SmallTexts>{theMartial.nation}</SmallTexts>
            </TextsBox>
            <TagBox>
              {tags.map((tag, idx) => {
                return <Tag key={idx}>{tag}</Tag>;
              })}
            </TagBox>
          </DescBox>
        </DetailInfo>
      </Board>
      <ContentContainer>
        <TextWrapper>무술 개요</TextWrapper>
        <Summary martialId={martialId} />
        <TextWrapper>
          <TextBox>
            <Text onClick={showReviewMenu} idx={0} tabValue={tabMenu}>
              사형의 조언
            </Text>
            <Text onClick={showCommentMenu} idx={1} tabValue={tabMenu}>
              무술 한줄평
            </Text>
            <Text onClick={showLocationMenu} idx={2} tabValue={tabMenu}>
              도장 위치
            </Text>
          </TextBox>
          <div>
            {isLogin ? (
              <CreateReview
                Martials_id={martialId}
                Users_id={userId}
                tabValue={tabMenu}
              />
            ) : null}
          </div>
        </TextWrapper>
        {tabMenu === 0 ? (
          <ReadReview martialId={martialId} />
        ) : tabMenu === 1 ? (
          <ReadComment martialId={martialId} />
        ) : (
          <ReadLocation martialId={martialId} />
        )}
      </ContentContainer>
    </PageContainer>
  );
}
