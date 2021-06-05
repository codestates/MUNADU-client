import { useState } from "react";
import Modal from "../Common/Modal";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../Redux/Reducers/commentReducer";

interface IProps {
  accessToken: string;
  commentId: number;
  editSwitch: (toggle: boolean) => void;
  deleteSwitch: (toogle: boolean) => void;
}
const DeleteComment = ({
  accessToken,
  commentId,
  editSwitch,
  deleteSwitch,
}: IProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    editSwitch(false);
    deleteSwitch(false);
  };
  const dispatch = useDispatch();

  return (
    <>
      {isOpen ? (
        <Modal
          close={closeModal}
          headerText={"한줄평 삭제"}
          okBtnText={"확인"}
          cancelBtnText={"뒤로"}
          callback={() => {
            dispatch(deleteComment({ accessToken, commentid: commentId }));
            setIsOpen(false);
            editSwitch(false);
            deleteSwitch(false);
          }}
          modalWidthPercent={38}
          modalHeightPercent={50}
        >
          <div>정말로 삭제하시겠습니까?</div>
        </Modal>
      ) : null}
    </>
  );
};

export default DeleteComment;
