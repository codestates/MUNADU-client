import { useState } from "react";
import styled from "styled-components";
import DeleteReply from "./DeleteReply";

const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  min-height: 4em;
  z-index: 3;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    min-height: 2em;
  }
`;
const Text = styled.div`
  height: 45px;
  width: 160px;
  font-family: Noto Sans KR Medium;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: -0.015em;
  cursor: pointer;
  border: 1px solid #eeeeee;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    height: 30px;
    width: 100%;
  }
`;

interface IProps {
  replyId: number;
  deleteReplies: any;
  reviseReply: any;
  closeEditBtns: any;
}
export default function EditReplyBtns({
  replyId,
  deleteReplies,
  reviseReply,
  closeEditBtns,
}: IProps) {
  const [isDeleted, setIsDeleted] = useState(false);

  const deleteReply = () => {
    setIsDeleted(true);
  };
  return (
    <BtnsWrapper>
      <Text
        onClick={() => {
          reviseReply(replyId);
          closeEditBtns();
        }}
      >
        댓글 편집하기
      </Text>

      <Text onClick={deleteReply}>삭제하기</Text>
      {isDeleted ? (
        <DeleteReply
          replyId={replyId}
          deleteReplies={deleteReplies}
          closeEditBtns={closeEditBtns}
        />
      ) : null}
    </BtnsWrapper>
  );
}
