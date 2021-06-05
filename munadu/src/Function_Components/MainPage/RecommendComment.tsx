import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentRank } from "../../Redux/Reducers/recommendReducer";
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
  CommentHeader,
  CommentDate,
  CommentTitle,
  CommentDetail,
} from "../../StyledComponents/recommendForm";
import { useHistory } from "react-router";

const RecommendComment = () => {
  const commentRank = useSelector(
    (state: RootState) => state.recommendReducer.data
  );
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getCommentRank());
  }, []);

  const moveToDetailPage = (id: number) => {
    history.push({
      pathname: "/detailpage",
      state: { martialId: id },
    });
  };

  return (
    <>
      <ContentsTitle>최신 한줄평</ContentsTitle>
      <ContentsWrapper>
        {commentRank.comment.map((comment, idx) => {
          return (
            <Box
              key={idx}
              onClick={() => moveToDetailPage(comment.Martials_id)}
            >
              <ContentCard>
                <ContentHeader>
                  <ContentHeaderName>{comment.martials.name}</ContentHeaderName>
                </ContentHeader>
                <ContentDetail>
                  <CommentBox size="100%">
                    <CommentHeader>
                      <CommentTitle>{comment.users.name}</CommentTitle>
                      <CommentDate>
                        {comment.createdAt.slice(0, 10)}
                      </CommentDate>
                    </CommentHeader>
                    <CommentDetail>{comment.comment}</CommentDetail>
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

export default RecommendComment;
