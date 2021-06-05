import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getReviewRank } from "../../Redux/Reducers/recommendReducer";
import { RootState } from "../../Redux/Store/store";
import {
  Box,
  ContentCard,
  ContentsTitle,
  ContentsWrapper,
  ContentHeader,
  ContentDetail,
  ContentHeaderName,
  CommentBox,
  ChartBox,
  CommentHeader,
  CommentDate,
  CommentTitle,
  CommentDetail,
} from "../../StyledComponents/recommendForm";
import { StarPhoto } from "../../StyledComponents/readreview";
import RadarChart from "../Common/RadarChart";
import { useHistory } from "react-router";
import star from "./img/star.svg";
import styled from "styled-components";

export const Ratings2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 12%;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    width: 30%;
  }
`;

const RecommendReview = () => {
  const reviewRank = useSelector(
    (state: RootState) => state.recommendReducer.data
  );
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getReviewRank());
  }, []);

  const moveToDetailPage = (id: number) => {
    history.push({
      pathname: "/detailpage",
      state: { martialId: id },
    });
  };
  const StarWrapper2 = styled.div`
    display: flex;
    @media only screen and (max-width: ${(props) => props.theme.width.media}) {
      width: 100%;
      height: auto;
    }
  `;

  return (
    <>
      <ContentsTitle>사형의 조언</ContentsTitle>
      <ContentsWrapper>
        {reviewRank.review.map((review, idx) => {
          return (
            <Box key={idx} onClick={() => moveToDetailPage(review.Martials_id)}>
              <ContentCard>
                <ContentHeader>
                  <ContentHeaderName>{review.martials.name}</ContentHeaderName>
                  <Ratings2>
                    <StarWrapper2>
                      <StarPhoto
                        src={star}
                        idx={1}
                        score={review.score}
                      ></StarPhoto>
                      <StarPhoto
                        src={star}
                        idx={2}
                        score={review.score}
                      ></StarPhoto>
                      <StarPhoto
                        src={star}
                        idx={3}
                        score={review.score}
                      ></StarPhoto>
                      <StarPhoto
                        src={star}
                        idx={4}
                        score={review.score}
                      ></StarPhoto>
                      <StarPhoto
                        src={star}
                        idx={5}
                        score={review.score}
                      ></StarPhoto>
                    </StarWrapper2>
                  </Ratings2>
                </ContentHeader>
                <ContentDetail>
                  <ChartBox>
                    <RadarChart
                      label={[
                        "실전성",
                        "근육 발달",
                        "난이도",
                        "운동 강도",
                        "부상 확률",
                      ]}
                      data={[
                        review.practicality,
                        review.muscle,
                        review.difficulty,
                        review.intensity,
                        review.injury,
                      ]}
                      width={10}
                      height={10}
                      displayScales={false}
                    ></RadarChart>
                  </ChartBox>
                  <CommentBox size="50%">
                    <CommentHeader>
                      <CommentTitle>{review.users.name}</CommentTitle>
                      <CommentDate>{review.createdAt.slice(0, 10)}</CommentDate>
                    </CommentHeader>
                    <CommentDetail>{review.comment}</CommentDetail>
                  </CommentBox>
                </ContentDetail>
              </ContentCard>
            </Box>
          );
        })}
      </ContentsWrapper>
    </>
  );
};

export default RecommendReview;
