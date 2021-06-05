import { useEffect, useState, useRef } from "react";
import ReadReply from "./ReadReply";
import star from "./star.svg";
import bar from "./bar.svg";
import date from "date-and-time";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import {
  getReviewList,
  getUserReviewList,
} from "../../Redux/Reducers/reviewReducer";
import {
  createReply,
  getReplyList,
  deleteReply,
} from "../../Redux/Reducers/replyReducer";
import EditReview from "./EditReview";
import {
  ReviewWrapper,
  TotalCount,
  ReviewBox,
  NameAndDateAndBtn,
  NameAndDate,
  RatingsAndDesc,
  Ratings,
  Desc,
  Photo2,
  Name,
  Name4,
  Date,
  StarPhoto,
  StarWrapper,
  NameAndBar,
  BarWrapper,
  BarPhoto,
  BarPhoto2,
  BarPhoto3,
  BarPhoto4,
  BarPhoto5,
  Name2,
  Name3,
  ReplyBox,
  ReplyTitle,
  CommentTextArea,
  CommentBtn,
} from "../../StyledComponents/readreview";

interface IProps {
  martialId?: number;
  userID?: number;
}

export default function ReadReview({ martialId = 1, userID }: IProps) {
  const [comment, setComment] = useState("");
  const [reviewID, setReviewID] = useState(0);
  const dispatch = useDispatch();
  const replyInput = useRef<HTMLInputElement>(null);
  const reviewList = useSelector(
    (state: RootState) => state.reviewReducer.reviewList
  );
  let sortedReviewList = reviewList.slice().sort((a: any, b: any) => {
    const theADate = a.createdAt.slice(0, 10);
    const theATime = a.createdAt.slice(11, 19);
    const aDate = date.parse(`${theADate} ${theATime}`, "YYYY-MM-DD HH:mm:ss");
    const theBDate = b.createdAt.slice(0, 10);
    const theBTime = b.createdAt.slice(11, 19);
    const bDate = date.parse(`${theBDate} ${theBTime}`, "YYYY-MM-DD HH:mm:ss");
    return bDate.getTime() - aDate.getTime();
  });
  const deleteReplies = (replyId: number, accessToken: string) => {
    dispatch(deleteReply({ replyId, accessToken }));
  };

  const isLogin = useSelector((state: RootState) => state.authReducer.isLogin);
  const userId = useSelector((state: RootState) => state.authReducer.id);
  const accessToken = useSelector(
    (state: RootState) => state.authReducer.accessToken
  );
  const replyList = useSelector(
    (state: RootState) => state.replyReducer.replyList
  );
  const userReviewList = useSelector(
    (state: RootState) => state.reviewReducer.userReviewList
  );
  const sortedUserReviewList = userReviewList.slice().sort((a: any, b: any) => {
    const theADate = a.createdAt.slice(0, 10);
    const theATime = a.createdAt.slice(11, 19);
    const aDate = date.parse(`${theADate} ${theATime}`, "YYYY-MM-DD HH:mm:ss");
    const theBDate = b.createdAt.slice(0, 10);
    const theBTime = b.createdAt.slice(11, 19);
    const bDate = date.parse(`${theBDate} ${theBTime}`, "YYYY-MM-DD HH:mm:ss");
    return bDate.getTime() - aDate.getTime();
  });

  if (userId === userID) sortedReviewList = sortedUserReviewList;

  const handleComment = async (e: any) => {
    await setComment(e.target.value);
  };
  const saveReivewId = (reviewId: number) => {
    setReviewID(reviewId);
  };

  useEffect(() => {
    dispatch(getReviewList(martialId));
    if (isLogin) dispatch(getUserReviewList(userId));
  }, []);

  useEffect(() => {
    dispatch(getReplyList());
  }, [replyList.length]);

  const resetComment = () => {
    setComment("");
  };

  return (
    <ReviewWrapper>
      <TotalCount>
        총 {sortedReviewList.length}
        개의 조언
      </TotalCount>
      {sortedReviewList.map((review, idx) => {
        return (
          <ReviewBox key={idx}>
            <NameAndDateAndBtn>
              <NameAndDate>
                <Photo2 src={review.users.img}></Photo2>

                <Name>{review.users.name}</Name>
                <Date>{review.updatedAt.slice(0, 10)}</Date>
              </NameAndDate>
              <EditReview
                userId={userId}
                reviewId={review.id}
                martialId={martialId}
                reviewUserId={review.Users_id}
              />
            </NameAndDateAndBtn>
            <RatingsAndDesc>
              <Ratings>
                <StarWrapper>
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
                </StarWrapper>
                <NameAndBar>
                  <Name>실전성</Name>
                  <BarWrapper>
                    <BarPhoto
                      src={bar}
                      idx={1}
                      practicality={review.practicality}
                    ></BarPhoto>
                    <BarPhoto
                      src={bar}
                      idx={2}
                      practicality={review.practicality}
                    ></BarPhoto>
                    <BarPhoto
                      src={bar}
                      idx={3}
                      practicality={review.practicality}
                    ></BarPhoto>
                    <BarPhoto
                      src={bar}
                      idx={4}
                      practicality={review.practicality}
                    ></BarPhoto>
                    <BarPhoto
                      src={bar}
                      idx={5}
                      practicality={review.practicality}
                    ></BarPhoto>
                  </BarWrapper>
                </NameAndBar>
                <NameAndBar>
                  <Name>근육 발달</Name>
                  <BarWrapper>
                    <BarPhoto2
                      src={bar}
                      idx={1}
                      muscle={review.muscle}
                    ></BarPhoto2>
                    <BarPhoto2
                      src={bar}
                      idx={2}
                      muscle={review.muscle}
                    ></BarPhoto2>
                    <BarPhoto2
                      src={bar}
                      idx={3}
                      muscle={review.muscle}
                    ></BarPhoto2>
                    <BarPhoto2
                      src={bar}
                      idx={4}
                      muscle={review.muscle}
                    ></BarPhoto2>
                    <BarPhoto2
                      src={bar}
                      idx={5}
                      muscle={review.muscle}
                    ></BarPhoto2>
                  </BarWrapper>
                </NameAndBar>
                <NameAndBar>
                  <Name>난이도</Name>
                  <BarWrapper>
                    <BarPhoto3
                      src={bar}
                      idx={1}
                      difficulty={review.difficulty}
                    ></BarPhoto3>
                    <BarPhoto3
                      src={bar}
                      idx={2}
                      difficulty={review.difficulty}
                    ></BarPhoto3>
                    <BarPhoto3
                      src={bar}
                      idx={3}
                      difficulty={review.difficulty}
                    ></BarPhoto3>
                    <BarPhoto3
                      src={bar}
                      idx={4}
                      difficulty={review.difficulty}
                    ></BarPhoto3>
                    <BarPhoto3
                      src={bar}
                      idx={5}
                      difficulty={review.difficulty}
                    ></BarPhoto3>
                  </BarWrapper>
                </NameAndBar>
                <NameAndBar>
                  <Name>운동 강도</Name>
                  <BarWrapper>
                    <BarPhoto4
                      src={bar}
                      idx={1}
                      intensity={review.intensity}
                    ></BarPhoto4>
                    <BarPhoto4
                      src={bar}
                      idx={2}
                      intensity={review.intensity}
                    ></BarPhoto4>
                    <BarPhoto4
                      src={bar}
                      idx={3}
                      intensity={review.intensity}
                    ></BarPhoto4>
                    <BarPhoto4
                      src={bar}
                      idx={4}
                      intensity={review.intensity}
                    ></BarPhoto4>
                    <BarPhoto4
                      src={bar}
                      idx={5}
                      intensity={review.intensity}
                    ></BarPhoto4>
                  </BarWrapper>
                </NameAndBar>
                <NameAndBar>
                  <Name>부상 확률</Name>
                  <BarWrapper>
                    <BarPhoto5
                      src={bar}
                      idx={1}
                      injury={review.injury}
                    ></BarPhoto5>
                    <BarPhoto5
                      src={bar}
                      idx={2}
                      injury={review.injury}
                    ></BarPhoto5>
                    <BarPhoto5
                      src={bar}
                      idx={3}
                      injury={review.injury}
                    ></BarPhoto5>
                    <BarPhoto5
                      src={bar}
                      idx={4}
                      injury={review.injury}
                    ></BarPhoto5>
                    <BarPhoto5
                      src={bar}
                      idx={5}
                      injury={review.injury}
                    ></BarPhoto5>
                  </BarWrapper>
                </NameAndBar>
              </Ratings>
              <Desc>
                <Name2>수련 기간</Name2>
                <Name>{review.period}년</Name>
                <Name3>조언</Name3>
                <Name4>{review.comment}</Name4>
              </Desc>
            </RatingsAndDesc>

            <ReplyBox>
              <CommentTextArea
                placeholder={
                  isLogin
                    ? "사형의 조언에 댓글을 남겨보세요"
                    : "로그인 후 댓글을 남길 수 있습니다"
                }
                onChange={handleComment}
                onKeyUp={() => saveReivewId(review.id)}
                ref={replyInput}
                value={review.id === reviewID ? comment : ""}
                disabled={isLogin ? false : true}
              />
              <CommentBtn
                width="5%"
                disabled={isLogin ? false : true}
                onClick={async (e: any) => {
                  e.preventDefault();
                  await dispatch(
                    createReply({
                      comment,
                      userId,
                      reviewId: review.id,
                      accessToken,
                    })
                  );
                  resetComment();
                }}
              >
                등록
              </CommentBtn>
            </ReplyBox>

            {replyList.filter((reply) => reply.Reviews_id === review.id)
              .length > 0 ? (
              <div>
                <ReplyTitle>댓글</ReplyTitle>
                <ReadReply
                  reviewId={review.id}
                  deleteReplies={deleteReplies}
                ></ReadReply>
              </div>
            ) : null}
          </ReviewBox>
        );
      })}
    </ReviewWrapper>
  );
}
