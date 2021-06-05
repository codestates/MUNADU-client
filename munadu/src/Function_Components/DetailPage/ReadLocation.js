import styled from "styled-components";
import KakaoMapAPI from "./KakaoMapAPI";
import { useSelector } from "react-redux";

const MapWrapper = styled.div`
  width: 100%;
  height: 70em;
`;
const SubWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;
const Text = styled.div`
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-weight: 500;
  font-size: 1.5rem;
  margin-bottom: 0.7em;
  line-height: 1.5em;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    font-size: 1.2rem;
  }
`;

export default function ReadLocation({ martialId }) {
  const isLogin = useSelector((state) => state.authReducer.isLogin);
  const userAddress = useSelector((state) => state.userReducer.address);

  return (
    <MapWrapper>
      <SubWrapper>
        {isLogin && userAddress !== "null" ? (
          <Text>내 위치와 체육관들의 위치를 표시합니다.</Text>
        ) : (
          <Text>
            체육관들의 위치를 표시합니다. <br /> 로그인 후 주소 등록 시 본인의
            위치를 표시할 수 있습니다.
          </Text>
        )}
        <KakaoMapAPI martialId={martialId} userAddress={userAddress} />
      </SubWrapper>
    </MapWrapper>
  );
}
