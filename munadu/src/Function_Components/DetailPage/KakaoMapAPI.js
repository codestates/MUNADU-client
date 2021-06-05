/*global kakao*/
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import martialJson from "../../Redux/martialDummy.json";
import { getCoordinate } from "../../Redux/Reducers/coordReducer";
import { setUser } from "../../Redux/Reducers/userReducer";
import myPosition from "../../Images/myPosition.svg";

const MapContents = styled.div`
  width: 100%;
  height: 100%;
`;
const Div = styled.div`
  width: 100%;
  height: 25em;
`;

export default function KakaoMapAPI({ martialId, userAddress }) {
  const isLogin = useSelector((state) => state.authReducer.isLogin);
  const { lat, lgt } = useSelector((state) => state.coordReducer);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_CLIENT_ID}&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("Mymap");
        let options = {
          // 로그인 상태이면서 프로필수정에서 주소를 등록한 경우, 그 주소를 초기 위치로 설정.
          // 아니면 첫 번째 무술 체육관 위치로 지정
          center:
            isLogin && userAddress && lat && lgt
              ? new kakao.maps.LatLng(lat, lgt)
              : new kakao.maps.LatLng(
                  martialJson.result[martialId - 1].coord[0].y,
                  martialJson.result[martialId - 1].coord[0].x
                ),
          level: 10,
        };

        const map = new window.kakao.maps.Map(container, options);
        // 자신의 위치를 맵에 마커로 표시
        // 로그인상태이면서 주소를 등록한 경우에만 위치 표기하고, 아니면 표시 안함
        let imageSrc = myPosition, // 마커이미지 주소
          imageSize = new kakao.maps.Size(52, 54), // 마커이미지 크기
          imageOption = { offset: new kakao.maps.Point(27, 69) };
        let markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );
        let marker = new kakao.maps.Marker({
          position:
            isLogin &&
            userAddress !== "null" &&
            new kakao.maps.LatLng(lat, lgt),
          image: markerImage,
        });
        isLogin && userAddress !== "null" && marker.setMap(map);

        // 체육관들의 위치를 맵에 마커로 표시
        martialJson.result[martialId - 1].coord.forEach((coord, idx) => {
          const marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(coord.y, coord.x),
          });
          let infowindow = new kakao.maps.InfoWindow({
            content: coord.place_name, // 인포윈도우에 표시할 내용
          });
          kakao.maps.event.addListener(
            marker,
            "mouseover",
            makeOverListener(map, marker, infowindow)
          );
          kakao.maps.event.addListener(
            marker,
            "mouseout",
            makeOutListener(infowindow)
          );
        });
        function makeOverListener(map, marker, infowindow) {
          return function () {
            infowindow.open(map, marker);
          };
        }

        // 인포윈도우를 닫는 클로저를 만드는 함수입니다
        function makeOutListener(infowindow) {
          return function () {
            infowindow.close();
          };
        }
      });
    };
  }, []);

  return (
    <Div>
      <MapContents id="Mymap"></MapContents>
    </Div>
  );
}
