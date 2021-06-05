import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import styled from "styled-components";
import editBtn from "./editBtn.svg";
import EditReplyBtns from "./EditReplyBtns";
import { Photo3, LayerBtn } from "../../StyledComponents/readreview";

interface IProps {
  replyId: number;
  userId: number;
  replyUserId: number;
  deleteReplies: any;
  reviseReply: any;
}

export const EditBtnWrapper = styled.div`
  position: absolute;
  top: 2em;
  left: -10px;
  width: 160px;
  height: 90px;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 1;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    left: -70px;
    width: 140px;
    height: 50px;
  }
`;

export default function EditReply({
  replyId,
  userId,
  replyUserId,
  deleteReplies,
  reviseReply,
}: IProps) {
  const isLogin = useSelector((state: RootState) => state.authReducer.isLogin);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const kebabRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (e: any) => {
      if (kebabRef.current && !kebabRef.current.contains(e.target)) {
        setIsOpenEdit(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
  });
  const closeEditBtns = () => {
    setIsOpenEdit(false);
  };
  return (
    <>
      {isLogin && replyUserId === userId ? (
        <LayerBtn ref={kebabRef}>
          <Photo3 src={editBtn} onClick={() => setIsOpenEdit(true)}></Photo3>
          {isOpenEdit ? (
            <EditBtnWrapper>
              <EditReplyBtns
                replyId={replyId}
                deleteReplies={deleteReplies}
                reviseReply={reviseReply}
                closeEditBtns={closeEditBtns}
              />
            </EditBtnWrapper>
          ) : null}
        </LayerBtn>
      ) : null}
    </>
  );
}
