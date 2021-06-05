import React, { useEffect, useRef, useState } from "react";
import {
  SingBackground,
  SignBoard,
  Title,
  Alert,
} from "../StyledComponents/sign";
import InputForm from "../Function_Components/SignInPage/InputForm";
import Button from "../StyledComponents/button";
import { useDispatch, useSelector } from "react-redux";
import Inspect from "../Function_Components/SignInPage/Inspect";
import { useHistory } from "react-router";
import { setAuth } from "../Redux/Reducers/authReducer";
import Modal from "../Function_Components/Common/Modal";
import axios from "axios";
import HeaderBar from "../Function_Components/Common/HeaderBar";
import HalfBackground from "../StyledComponents/HalfBackground";
import GoogleLogin from "../Function_Components/SignInPage/GoogleLogin";
import { RootState } from "../Redux/Store/store";
interface Ialert {
  email: boolean;
  password: boolean;
  name: boolean;
  checkpassword: boolean;
}

export default function SignUpPage() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [emailAlert, setEmailAlert] = useState<string>("");
  const [nameAlert, setNameAlert] = useState<string>("");
  const [passwordAlert, setPasswordAlert] = useState<string>("");
  const [checkPasswordAlert, setCheckPasswordAlert] = useState<string>("");
  const [alert, setAlert] = useState<string>("");
  const [isAlert, setIsAlert] = useState<Ialert>({
    email: false,
    password: false,
    name: false,
    checkpassword: false,
  });
  const [isModal, setIsModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const emailRef = useRef<HTMLInputElement>(null);

  const isLogin = useSelector((state: RootState) => {
    return state.authReducer.isLogin;
  });

  useEffect(() => {
    if (isLogin) {
      history.push("/");
    }
  }, [isLogin]);

  const currentEmail = (e: any) => {
    if (!Inspect(email, "email")) {
      setEmailAlert("이메일 형식이 아닙니다.");
      setIsAlert({ ...isAlert, email: false });
    } else {
      setEmailAlert("사용 가능한 이메일입니다.");
      setIsAlert({ ...isAlert, email: true });
    }
    setEmail(e.target.value);
  };

  const currentName = (e: any) => {
    setName(e.target.value);
  };

  useEffect(() => {
    if (Inspect(name, "name")) {
      setNameAlert("사용 가능한 닉네임입니다.");
      setIsAlert({ ...isAlert, name: true });
    } else if (name === "") {
      setNameAlert("");
      setIsAlert({ ...isAlert, name: false });
    } else {
      setNameAlert("공백, 특문을 제외한 2~10글자로 입력");
      setIsAlert({ ...isAlert, name: false });
    }
  }, [name]);

  const currentPassword = (e: any) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (Inspect(password, "password")) {
      setPasswordAlert("사용 가능한 비밀번호입니다.");
      setIsAlert({ ...isAlert, password: true });
    } else if (password === "") {
      setPasswordAlert("");
      setIsAlert({ ...isAlert, password: false });
    } else {
      setPasswordAlert("문자와 숫자로 구성되어야 합니다.");
      setIsAlert({ ...isAlert, password: false });
    }
  }, [password]);

  const currentCheckPassword = (e: any) => {
    if (password !== e.target.value) {
      setCheckPasswordAlert("비밀 번호가 다릅니다.");
      setIsAlert({ ...isAlert, checkpassword: false });
    } else {
      setCheckPasswordAlert("비밀 번호가 같습니다.");
      setIsAlert({ ...isAlert, checkpassword: true });
    }
    setCheckPassword(e.target.value);
  };

  const handleSignUp = async () => {
    if (!email || !name || !password || !checkPassword) {
      setAlert("모든 항목은 필수로 입력되어야 합니다.");
    } else {
      if (
        Inspect(email, "email") &&
        Inspect(name, "name") &&
        Inspect(password, "password") &&
        password === checkPassword
      ) {
        const singupData = await axios.post(
          `${process.env.REACT_APP_API_URL}/user/signup`,
          {
            email: email,
            password: password,
            name: name,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        if (singupData) {
          setIsModal(true);
        }
      } else {
        setAlert("모든 항목을 정상적으로 입력해주세요.");
      }
    }
  };

  const closeModal = () => {
    dispatch(setAuth({ email, password }));
    history.push("/");
  };

  return (
    <>
      <HeaderBar isCheck={false}></HeaderBar>
      <SingBackground>
        <SignBoard
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp();
          }}
        >
          <Title>회원 가입</Title>
          <InputForm
            name="이메일"
            type="text"
            ref={emailRef}
            callback={currentEmail}
          ></InputForm>
          <Alert color={isAlert.email}>{emailAlert}</Alert>
          <InputForm
            name="닉네임"
            type="text"
            callback={currentName}
          ></InputForm>
          <Alert color={isAlert.name}>{nameAlert}</Alert>
          <InputForm
            name="비밀번호"
            type="password"
            callback={currentPassword}
          ></InputForm>
          <Alert color={isAlert.password}>{passwordAlert}</Alert>
          <InputForm
            name="비밀번호 확인"
            type="password"
            callback={currentCheckPassword}
          ></InputForm>
          <Alert color={isAlert.checkpassword}>{checkPasswordAlert}</Alert>
          <Alert>{alert}</Alert>
          <Button
            color="black"
            width="100%"
            margin="10px 0px"
            height="38px"
            type="submit"
          >
            회원 가입
          </Button>
          <Button
            color="white"
            margin="10px 0px"
            width="100%"
            height="38px"
            onClick={() => {
              history.push("/signinpage");
            }}
          >
            이미 계정이 있으신가요? <b>로그인</b>
          </Button>
          <GoogleLogin></GoogleLogin>
        </SignBoard>
      </SingBackground>
      <HalfBackground />
      {isModal ? (
        <Modal
          close={closeModal}
          headerText="회원 가입 완료"
          okBtnText="확인"
          callback={closeModal}
        >
          <div>
            회원 가입이 완료되었습니다
            <br />
            메인 페이지로 이동합니다
          </div>
        </Modal>
      ) : null}
    </>
  );
}
