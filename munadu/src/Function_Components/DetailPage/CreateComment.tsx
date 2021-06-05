import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import {
  createComment,
  getCommentList,
} from "../../Redux/Reducers/commentReducer";
import {
  CommentCreateBox,
  CommentBtn,
  CommentCaution,
  CommentTextArea,
  CommentTitle,
} from "../../StyledComponents/CreateComment";

interface IProps {
  martialId: number;
}
export default function CreateComment({ martialId }: IProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommentList(martialId));
  }, []);

  const getAuthInfo = useSelector((state: RootState) => state.authReducer);
  const [comment, setComment] = useState("");
  const { isLogin, accessToken, id } = getAuthInfo;

  const handleComment = (e: any) => {
    setComment(e.target.value);
  };

  const ResetComment = () => {
    setComment("");
  };
  return (
    <>
      {isLogin ? (
        <CommentCreateBox>
          <CommentTitle>한줄평 남기기</CommentTitle>
          <CommentTextArea
            type="text"
            placeholder={"무술과 관련된 한줄평을 남겨주세요."}
            onChange={handleComment}
            value={comment}
          ></CommentTextArea>
          <CommentBtn
            color="black"
            width="5%"
            onClick={(e: any) => {
              e.preventDefault();
              dispatch(
                createComment({
                  comment,
                  userid: id,
                  martialid: martialId,
                  accessToken,
                })
              );
              ResetComment();
            }}
          >
            등록
          </CommentBtn>
        </CommentCreateBox>
      ) : (
        <CommentCreateBox>
          <CommentCaution>
            한줄평을 남기시려면 로그인 해주시기 바랍니다.
          </CommentCaution>
        </CommentCreateBox>
      )}
    </>
  );
}
