import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReply } from "../../Redux/Reducers/replyReducer";
import { RootState } from "../../Redux/Store/store";
import Modal from "../Common/Modal";

interface IProps {
  replyId: number;
  deleteReplies: any;
}

export default function DeleteReply({ replyId, deleteReplies }: IProps) {
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
          headerText={"댓글 삭제"}
          okBtnText={"확인"}
          cancelBtnText={"뒤로"}
          callback={() => {
            // dispatch(deleteReply({ replyId, accessToken }));
            deleteReplies(replyId, accessToken);
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
