import { useRef, useState, useEffect } from "react";
import InputForm from "../Function_Components/SignInPage/InputForm";
import Button from "../StyledComponents/button";
import Inspect from "../Function_Components/SignInPage/Inspect";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  SingBackground,
  SignBoard,
  Title,
  Alert,
} from "../StyledComponents/sign";
import { setAuth } from "../Redux/Reducers/authReducer";
import { RootState } from "../Redux/Store/store";
import GoogleLogin from "../Function_Components/SignInPage/GoogleLogin";
import HeaderBar from "../Function_Components/Common/HeaderBar";
import HalfBackground from "../StyledComponents/HalfBackground";
interface Ilogin {
  isLogin: boolean;
  accessToken: string;
  id: number;
  err: string;
  isSocial: boolean;
}

export default function SignInPage() {
  const isLogin: Ilogin = useSelector((state: RootState) => {
    return state.authReducer;
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const setEmailData = (e: any) => {
    setEmail(e.target.value);
  };
  const setPasswordData = (e: any) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    if (isLogin.isLogin) {
      setAlert("");
      history.push("/");
    } else {
      setAlert(isLogin.err);
    }
  }, [isLogin]);
  useEffect(() => {
    if (emailRef.current !== null) {
      emailRef.current.focus();
    }
  }, []);
  const logIn = () => {
    if (email === "" || password === "") {
      setAlert("이메일과 비밀번호를 정상적으로 입력해주세요");
    } else {
      if (Inspect(email, "email") && Inspect(password, "password")) {
        dispatch(setAuth({ email: email, password: password }));
      } else {
        setAlert("이메일과 비밀번호를 정상적으로 입력해주세요");
      }
    }
  };
  return (
    <>
      <HeaderBar />
      <SingBackground>
        <SignBoard
          onSubmit={(e) => {
            e.preventDefault();
            logIn();
          }}
        >
          <Title>로그인</Title>
          <InputForm
            name="이메일"
            type="text"
            ref={emailRef}
            callback={setEmailData}
          ></InputForm>
          <InputForm
            name="비밀번호"
            type="password"
            callback={setPasswordData}
          ></InputForm>
          <Alert>{alert}</Alert>
          <Button
            color="black"
            width="100%"
            margin="10px 0px"
            height="38px"
            type="submit"
          >
            로그인
          </Button>
          <Button
            color="white"
            margin="10px 0px"
            width="100%"
            height="38px"
            onClick={() => {
              history.push("/signuppage");
            }}
          >
            계정이 없으신가요? <b>회원가입</b>
          </Button>
          <GoogleLogin></GoogleLogin>
        </SignBoard>
      </SingBackground>
      <HalfBackground />
    </>
  );
}
