import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import { updateComment } from "../../Redux/Reducers/commentReducer";
import styled from "styled-components";

export const ReplyBox2 = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50vw;
  height: auto;
`;

export const CommentBtn2 = styled.button<{
  width?: string;
  margin?: string;
  height?: string;
}>`
  /* align-self: flex-end; */

  cursor: pointer;
  background-color: ${(props) => {
    if (props.disabled) return `#C4C4C4`;
    else return props.theme.color.black;
  }};
  color: ${(props) => props.theme.color.white};
  padding: 7px;
  margin: 1% 2%;
  border-radius: 5px;
  font-weight: 500;
  outline: none;
  border: 1px solid ${(props) => props.theme.color.black};
  min-width: 4rem;
  width: ${(props) => (props.width ? props.width : "")};
  height: ${(props) => (props.height ? props.height : "")};
`;

export const CommentTextArea2 = styled.input`
  border: 1px solid #c4c4c4;
  border-radius: 3px;
  display: flex;
  align-items: center;
  outline: none;
  resize: none;
  width: 40vw;
  margin: 1% 0;
  /* align-content: center; */
  padding: 1%;
  ::placeholder {
    color: #c4c4c4;
  }
`;

interface IProps {
  commentId: number;
  comment: string;
  completeEdit: () => void;
}
const UpdateComment = ({ comment, commentId, completeEdit }: IProps) => {
  const [curComment, setCurComment] = useState("");

  const handleComment = (e: any) => {
    setCurComment(e.target.value);
  };
  const resetComment = () => {
    setCurComment("");
  };
  const accessToken = useSelector(
    (state: RootState) => state.authReducer.accessToken
  );

  const dispatch = useDispatch();

  return (
    <ReplyBox2>
      <CommentTextArea2 placeholder={comment} onChange={handleComment} />
      <CommentBtn2
        width="2%"
        onClick={(e: any) => {
          e.preventDefault();
          if (curComment)
            dispatch(
              updateComment({
                accessToken,
                commentid: commentId,
                comment,
                curComment,
              })
            );
          resetComment();
          completeEdit();
        }}
      >
        확인
      </CommentBtn2>
    </ReplyBox2>
  );
};

export default UpdateComment;
