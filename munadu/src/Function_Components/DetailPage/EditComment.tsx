import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../Redux/Store/store";
import editBtn from "./editBtn.svg";
import DeleteComment from "./DeleteComment";

interface IProps {
  commentUserId: number;
  commentId: number;
  commentMartialId: number;
  comment: string;
  reviseComment: any;
}

const CommentEditBtn = styled.img`
  position: relative;
  cursor: pointer;
  margin-right: 2%;
`;

const EditContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const EditBtnWrapper = styled.div`
  position: absolute;
  left: -10px;
  width: 160px;
  height: 90px;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 1;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    left: -110px;
    width: 130px;
    height: auto;
  }
`;

const EditBtn = styled.div`
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
    width: 100%;
    height: 30px;
  }
`;

const EditComment = ({ commentUserId, commentId, reviseComment }: IProps) => {
  const editEl = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const getAuthInfo = useSelector((state: RootState) => state.authReducer);
  const { isLogin, accessToken, id } = getAuthInfo;

  useEffect(() => {
    const handleClick = (e: any) => {
      if (editEl.current && !editEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
  });

  const editSwitch = (toggle: boolean) => {
    setIsOpen(toggle);
  };
  const deleteSwitch = (toggle: boolean) => {
    setIsDeleteOpen(toggle);
  };

  return (
    <>
      {isLogin && commentUserId === id ? (
        isOpen ? (
          <EditContainer ref={editEl}>
            <CommentEditBtn
              src={editBtn}
              onClick={() => {
                isOpen ? setIsOpen(false) : setIsOpen(true);
              }}
            />

            <EditBtnWrapper>
              <EditBtn
                onClick={() => {
                  reviseComment(commentId);
                }}
              >
                한줄평 편집하기
              </EditBtn>

              <EditBtn
                onClick={() => {
                  setIsDeleteOpen(true);
                }}
              >
                삭제하기
              </EditBtn>
              {isDeleteOpen ? (
                <DeleteComment
                  accessToken={accessToken}
                  commentId={commentId}
                  editSwitch={editSwitch}
                  deleteSwitch={deleteSwitch}
                ></DeleteComment>
              ) : null}
            </EditBtnWrapper>
          </EditContainer>
        ) : (
          <EditContainer>
            <CommentEditBtn src={editBtn} onClick={() => setIsOpen(true)} />
          </EditContainer>
        )
      ) : null}
    </>
  );
};

export default EditComment;
