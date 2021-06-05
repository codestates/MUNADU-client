import { useState } from "react";
import styled from "styled-components";
import UpdateReview from "./UpdateReview";
import DeleteReview from "./DeleteReview";

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
  reviewId: number;
  martialId: number;
  closeEditBtns: any;
}
export default function EditBtns({
  reviewId,
  martialId,
  closeEditBtns,
}: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const editReview = () => {
    setIsOpen(true);
  };
  const deleteReview = () => {
    setIsDeleted(true);
  };
  return (
    <BtnsWrapper>
      <Text onClick={editReview}>조언 편집하기</Text>
      {isOpen ? (
        <UpdateReview
          reviewId={reviewId}
          martialId={martialId}
          closeEditBtns={closeEditBtns}
        />
      ) : null}
      <Text onClick={deleteReview}>삭제하기</Text>
      {isDeleted ? <DeleteReview reviewId={reviewId} /> : null}
    </BtnsWrapper>
  );
}
