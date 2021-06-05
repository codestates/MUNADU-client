import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import { MyPageStyle } from "../../StyledComponents/myPage";
import { Input } from "../../StyledComponents/input";
import Button from "../../StyledComponents/button";
import { useEffect, useState } from "react";
import Modal from "../Common/Modal";
import Inspect from "../SignInPage/Inspect";
import { Alert } from "../../StyledComponents/sign";
import { setPassword } from "../../Redux/Reducers/userReducer";
import { setNoAuth } from "../../Redux/Reducers/authReducer";
import { useHistory } from "react-router-dom";

interface Idata {
  callback: any;
}

export default function SetPassword({ callback }: Idata) {
  const token: string = useSelector((state: RootState) => {
    return state.authReducer.accessToken;
  });
  const err: string = useSelector((state: RootState) => {
    return state.userReducer.err;
  });
  const [isChange, setIsChange] = useState<boolean>(true);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [beforePassword, setBeforePassword] = useState<string>("");
  const [afterPassword, setAfterPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [errMessage, setErrMessage] = useState<{
    afterpsd: string;
    checkpsd: string;
    errMsg: string;
  }>({
    afterpsd: "",
    checkpsd: "",
    errMsg: "",
  });
  const [isErr, setisErr] = useState<{
    afterpsd: boolean;
    checkpsd: boolean;
  }>({
    afterpsd: false,
    checkpsd: false,
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const closeModal = () => {
    dispatch(setNoAuth());
    setIsModal(false);
    history.push("/");
  };

  const changePsd = (e: any) => {
    setBeforePassword(e.target.value);
    setIsChange(false);
  };

  const changeAfterPsd = (e: any) => {
    setAfterPassword(e.target.value);
  };
  useEffect(() => {
    if (Inspect(afterPassword, "password") === false) {
      setErrMessage({
        ...errMessage,
        afterpsd: "비밀 번호는 문자와 숫자를 포함한 8자 이상으로 작성해주세요",
      });
      setisErr({ ...isErr, afterpsd: false });
    } else {
      setErrMessage({
        ...errMessage,
        afterpsd: "사용 가능한 비밀번호 입니다.",
      });
      setisErr({ ...isErr, afterpsd: true });
    }
  }, [afterPassword]);

  const changeCheckPsd = (e: any) => {
    setCheckPassword(e.target.value);
  };
  useEffect(() => {
    if (afterPassword !== checkPassword) {
      setErrMessage({
        ...errMessage,
        checkpsd: "비밀번호가 일치하지 않습니다.",
      });
      setisErr({ ...isErr, checkpsd: false });
    } else {
      setErrMessage({
        ...errMessage,
        checkpsd: "",
      });
      setisErr({ ...isErr, checkpsd: true });
    }
  }, [checkPassword]);

  const uploadPassword = () => {
    if (isErr.afterpsd && isErr.checkpsd) {
      dispatch(
        setPassword({
          password: beforePassword,
          afterpassword: afterPassword,
          token: token,
        })
      );
      setErrMessage({ ...errMessage, errMsg: "" });
      setIsModal(true);
    } else {
      setErrMessage({
        ...errMessage,
        errMsg: "정상적인 비밀번호를 입력해주세요",
      });
    }
    setIsChange(true);
  };
  return (
    <>
      <MyPageStyle.Content>
        <MyPageStyle.SubTitle>비밀번호 변경</MyPageStyle.SubTitle>
        <Input
          placeholder="현재 비밀번호"
          type="password"
          onChange={changePsd}
        ></Input>
        <Alert color={isErr.afterpsd}></Alert>
        <Input
          placeholder="변경할 비밀번호"
          type="password"
          onChange={changeAfterPsd}
        ></Input>
        <Alert color={isErr.afterpsd}>{errMessage.afterpsd}</Alert>
        <Input
          placeholder="변경할 비밀번호 확인"
          type="password"
          onChange={changeCheckPsd}
        ></Input>
        <Alert color={isErr.checkpsd}>{errMessage.checkpsd}</Alert>
        <Alert color={false}>{errMessage.errMsg}</Alert>
        <MyPageStyle.ButtonPosition>
          <Button
            onClick={uploadPassword}
            color={isChange ? "white" : "black"}
            disabled={isChange}
          >
            비밀번호 변경
          </Button>
          <Button
            onClick={() => {
              callback(true);
            }}
          >
            취소
          </Button>
        </MyPageStyle.ButtonPosition>
      </MyPageStyle.Content>

      {isModal ? (
        <Modal
          close={closeModal}
          headerText="비밀 번호 변경 완료"
          okBtnText="확인"
          callback={closeModal}
        >
          <p>{err}</p>
        </Modal>
      ) : null}
    </>
  );
}
