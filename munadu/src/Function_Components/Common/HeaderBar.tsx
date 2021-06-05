import styled from "styled-components";
import Header from "../../StyledComponents/header";
import Button from "../../StyledComponents/button";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setNoAuth, Istate } from "../../Redux/Reducers/authReducer";
import { setUser } from "../../Redux/Reducers/userReducer";
import { useState } from "react";

const HeaderBoard = styled.div`
  position: relative;
  z-index: 10;
`;

export default function HeaderBar({ isCheck = true }: { isCheck?: boolean }) {
  const isUser: Istate = useSelector((state: RootState) => {
    return state.authReducer;
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <HeaderBoard>
      <Header.HeaderWrapper>
        <Header.HeaderBox>
          <Header.HeaderLogo onClick={() => history.push("/")}>
            <img alt="logo" src={"/munadoLogo.svg"} />
          </Header.HeaderLogo>
          {!isUser.isLogin ? (
            <>
              <Header.BtnBoard>
                <Button
                  color={isCheck ? "white" : ""}
                  onClick={() => {
                    history.push("/signinpage");
                  }}
                >
                  로그인
                </Button>
                <Button
                  color={isCheck ? "" : "white"}
                  onClick={() => {
                    history.push("/signuppage");
                  }}
                >
                  회원가입
                </Button>
              </Header.BtnBoard>
              <Header.HbgBtn
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <img
                  alt="button"
                  src={isOpen ? "/exit.svg" : "/hamburger.svg"}
                ></img>
              </Header.HbgBtn>
              <Header.HbgMenu isOpen={isOpen}>
                <Header.HbgMenuBtnBoard>
                  <Button
                    color={isCheck ? "white" : ""}
                    onClick={() => {
                      history.push("/signinpage");
                    }}
                  >
                    로그인
                  </Button>
                  <Button
                    color={isCheck ? "" : "white"}
                    onClick={() => {
                      history.push("/signuppage");
                    }}
                  >
                    회원가입
                  </Button>
                </Header.HbgMenuBtnBoard>
                <Header.HbgMenuBtn
                  onClick={() => {
                    history.push({
                      pathname: "/mainpage",
                      state: { select: true },
                    });
                  }}
                >
                  추천 무술
                </Header.HbgMenuBtn>
                <Header.HbgMenuBtn
                  onClick={() => {
                    history.push({
                      pathname: "/mainpage",
                      state: { select: false },
                    });
                  }}
                >
                  무술 전체 보기
                </Header.HbgMenuBtn>
              </Header.HbgMenu>
            </>
          ) : (
            <>
              <Header.BtnBoard>
                <Button
                  color=""
                  onClick={() => {
                    dispatch(setNoAuth());
                    history.push("/");
                  }}
                >
                  로그아웃
                </Button>
                <Button
                  color="white"
                  onClick={() => {
                    dispatch(setUser(isUser.id));
                    history.push("/mypage");
                  }}
                >
                  내 정보
                </Button>
              </Header.BtnBoard>
              <Header.HbgBtn
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <img
                  alt="button"
                  src={isOpen ? "/exit.svg" : "/hamburger.svg"}
                ></img>
              </Header.HbgBtn>
              <Header.HbgMenu isOpen={isOpen}>
                <Header.HbgMenuBtnBoard>
                  <Button
                    color=""
                    onClick={() => {
                      dispatch(setNoAuth());
                      history.push("/");
                    }}
                  >
                    로그아웃
                  </Button>
                  <Button
                    color="white"
                    onClick={() => {
                      dispatch(setUser(isUser.id));
                      history.push("/mypage");
                    }}
                  >
                    내 정보
                  </Button>
                </Header.HbgMenuBtnBoard>
                <Header.HbgMenuBtn
                  onClick={() => {
                    history.push({
                      pathname: "/mainpage",
                      state: { select: true },
                    });
                  }}
                >
                  추천 무술
                </Header.HbgMenuBtn>
                <Header.HbgMenuBtn
                  onClick={() => {
                    history.push({
                      pathname: "/mainpage",
                      state: { select: false },
                    });
                  }}
                >
                  무술 전체 보기
                </Header.HbgMenuBtn>
              </Header.HbgMenu>
            </>
          )}
        </Header.HeaderBox>
      </Header.HeaderWrapper>
    </HeaderBoard>
  );
}
