import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "../../Redux/Reducers/reviewReducer";
import { RootState } from "../../Redux/Store/store";
import Modal from "../Common/Modal";
interface IProps {
  reviewId: number;
}
export default function DeleteReview({ reviewId }: IProps) {
  const [isOpen, setIsOpen] = useState(true);
  const accessToken = useSelector(
    (state: RootState) => state.authReducer.accessToken
  );
  const closeModal = () => {
    setIsOpen(false);
  };
  const dispatch = useDispatch();

  return (
    <>
      {isOpen ? (
        <Modal
          close={closeModal}
          headerText={"사형의 조언 삭제"}
          okBtnText={"확인"}
          cancelBtnText={"뒤로"}
          callback={() => {
            dispatch(deleteReview({ reviewId, accessToken }));
            setIsOpen(false);
          }}
          modalWidthPercent={38}
          modalHeightPercent={50}
        >
          <div>정말로 삭제하시겠습니까?</div>
        </Modal>
      ) : null}
    </>
  );
}
