import styled from "styled-components";
import KakaoMapAPI from "./KakaoMapAPI";
import { useSelector, useDispatch } from "react-redux";

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
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    font-size: 1.2rem;
  }
`;

export default function ReadLocation({ martialId }) {
  const isLogin = useSelector((state) => state.authReducer.isLogin);
  return (
    <MapWrapper>
      <SubWrapper>
        {isLogin ? (
          <Text>내 위치와 체육관들의 위치를 표시합니다.</Text>
        ) : (
          <Text>체육관들의 위치를 표시합니다.</Text>
        )}
        <KakaoMapAPI martialId={martialId} />
      </SubWrapper>
    </MapWrapper>
  );
}
