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
      setEmailAlert("????????? ????????? ????????????.");
      setIsAlert({ ...isAlert, email: false });
    } else {
      setEmailAlert("?????? ????????? ??????????????????.");
      setIsAlert({ ...isAlert, email: true });
    }
    setEmail(e.target.value);
  };

  const currentName = (e: any) => {
    setName(e.target.value);
  };

  useEffect(() => {
    if (Inspect(name, "name")) {
      setNameAlert("?????? ????????? ??????????????????.");
      setIsAlert({ ...isAlert, name: true });
    } else if (name === "") {
      setNameAlert("");
      setIsAlert({ ...isAlert, name: false });
    } else {
      setNameAlert("??????, ????????? ????????? 2~10????????? ??????");
      setIsAlert({ ...isAlert, name: false });
    }
  }, [name]);

  const currentPassword = (e: any) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (Inspect(password, "password")) {
      setPasswordAlert("?????? ????????? ?????????????????????.");
      setIsAlert({ ...isAlert, password: true });
    } else if (password === "") {
      setPasswordAlert("");
      setIsAlert({ ...isAlert, password: false });
    } else {
      setPasswordAlert("????????? ????????? ??????????????? ?????????.");
      setIsAlert({ ...isAlert, password: false });
    }
  }, [password]);

  const currentCheckPassword = (e: any) => {
    if (password !== e.target.value) {
      setCheckPasswordAlert("?????? ????????? ????????????.");
      setIsAlert({ ...isAlert, checkpassword: false });
    } else {
      setCheckPasswordAlert("?????? ????????? ????????????.");
      setIsAlert({ ...isAlert, checkpassword: true });
    }
    setCheckPassword(e.target.value);
  };

  const handleSignUp = async () => {
    if (!email || !name || !password || !checkPassword) {
      setAlert("?????? ????????? ????????? ??????????????? ?????????.");
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
        setAlert("?????? ????????? ??????????????? ??????????????????.");
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
          <Title>?????? ??????</Title>
          <InputForm
            name="?????????"
            type="text"
            ref={emailRef}
            callback={currentEmail}
          ></InputForm>
          <Alert color={isAlert.email}>{emailAlert}</Alert>
          <InputForm
            name="?????????"
            type="text"
            callback={currentName}
          ></InputForm>
          <Alert color={isAlert.name}>{nameAlert}</Alert>
          <InputForm
            name="????????????"
            type="password"
            callback={currentPassword}
          ></InputForm>
          <Alert color={isAlert.password}>{passwordAlert}</Alert>
          <InputForm
            name="???????????? ??????"
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
            ?????? ??????
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
            ?????? ????????? ???????????????? <b>?????????</b>
          </Button>
          <GoogleLogin></GoogleLogin>
        </SignBoard>
      </SingBackground>
      <HalfBackground />
      {isModal ? (
        <Modal
          close={closeModal}
          headerText="?????? ?????? ??????"
          okBtnText="??????"
          callback={closeModal}
        >
          <div>
            ?????? ????????? ?????????????????????
            <br />
            ?????? ???????????? ???????????????
          </div>
        </Modal>
      ) : null}
    </>
  );
}
