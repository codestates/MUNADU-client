import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import styled from "styled-components";
import editBtn from "./editBtn.svg";
import EditBtns from "./EditBtns";
import { Photo3, LayerBtn } from "../../StyledComponents/readreview";

const EditWrapper = styled.div`
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
interface IProps {
  userId: number;
  reviewId: number;
  martialId: number;
  reviewUserId: number;
}
export default function EditReview({
  userId,
  reviewId,
  martialId,
  reviewUserId,
}: IProps) {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const kebabRef = useRef<HTMLDivElement>(null);
  const isLogin = useSelector((state: RootState) => state.authReducer.isLogin);
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
      {isLogin && reviewUserId === userId ? (
        <LayerBtn ref={kebabRef}>
          <Photo3
            src={editBtn}
            // onClick={() => openEditMenu(review.id, martialId)}
            onClick={() => setIsOpenEdit(true)}
          ></Photo3>
          {isOpenEdit ? (
            <EditWrapper>
              <EditBtns
                reviewId={reviewId}
                martialId={martialId}
                closeEditBtns={closeEditBtns}
              />
            </EditWrapper>
          ) : null}
        </LayerBtn>
      ) : null}
    </>
  );
}
