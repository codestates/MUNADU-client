import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store/store";
import { Istate } from "../Redux/Reducers/userReducer";
import { MyPageStyle } from "../StyledComponents/myPage";
import DetailInfo from "../Function_Components/Common/DetailInfo";
import { useState } from "react";
import SetImage from "../Function_Components/MyPage/SetImg";
import Button from "../StyledComponents/button";
import SetProfile from "../Function_Components/MyPage/SetProfile";
import SetPassword from "../Function_Components/MyPage/SetPassword";
import HeaderBar from "../Function_Components/Common/HeaderBar";
import UserRecord from "../Function_Components/MyPage/UserRecord";

export default function MyPage() {
  const userData: Istate = useSelector((state: RootState) => {
    return state.userReducer;
  });
  const isSocial = useSelector((state: RootState) => {
    return state.authReducer.isSocial;
  });
  const [isChange, setIsChange] = useState<boolean>(true);
  const userId = useSelector((state: RootState) => state.authReducer.id);
  return (
    <MyPageStyle.Page>
      <HeaderBar></HeaderBar>
      <MyPageStyle.Board>
        <DetailInfo img={userData.img ? userData.img : ""}>
          <MyPageStyle.TextBoard>
            <MyPageStyle.TextContent>{userData.name}</MyPageStyle.TextContent>
          </MyPageStyle.TextBoard>
        </DetailInfo>
      </MyPageStyle.Board>
      {isChange ? (
        <MyPageStyle.ContentBoard>
          <MyPageStyle.SetBoard>
            <MyPageStyle.BaseInfo>
              <MyPageStyle.Title>기본 정보</MyPageStyle.Title>
              <Button
                color="black"
                onClick={() => {
                  setIsChange(false);
                }}
              >
                내 정보 수정
              </Button>
            </MyPageStyle.BaseInfo>
            <MyPageStyle.UserProfile>
              <div>
                <MyPageStyle.UserInfo>이메일</MyPageStyle.UserInfo>
                <p>{userData.email}</p>
              </div>
              <div>
                <MyPageStyle.UserInfo>주소</MyPageStyle.UserInfo>
                <p>
                  {userData.address === "null"
                    ? "정보 수정을 통해 주소를 입력해주세요"
                    : userData.address}
                </p>
              </div>
            </MyPageStyle.UserProfile>
            <UserRecord userId={userId}></UserRecord>
          </MyPageStyle.SetBoard>
        </MyPageStyle.ContentBoard>
      ) : (
        <MyPageStyle.SetBoard>
          <MyPageStyle.ContentBoard>
            {isSocial ? (
              <>
                <SetImage callback={setIsChange}></SetImage>
                <SetProfile
                  userData={userData}
                  callback={setIsChange}
                ></SetProfile>
              </>
            ) : (
              <>
                <SetImage callback={setIsChange}></SetImage>
                <SetProfile
                  userData={userData}
                  callback={setIsChange}
                ></SetProfile>
                <SetPassword callback={setIsChange}></SetPassword>
              </>
            )}
          </MyPageStyle.ContentBoard>
        </MyPageStyle.SetBoard>
      )}
    </MyPageStyle.Page>
  );
}
