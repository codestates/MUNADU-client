import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChannel } from "../../Redux/Reducers/recommendReducer";
import { RootState } from "../../Redux/Store/store";
import {
  ContentsTitle,
  ContentsWrapper,
  ChannelBox,
  ChannelBtn,
  ChannelCaption,
  ChannelCard,
  ChannelDetail,
  ChannelTitle,
} from "../../StyledComponents/recommendForm";
import hoguCouple from "./img/hoguCouple.svg";
import Viditory from "./img/Viditory.svg";
import YangTV from "./img/YangTV.svg";

const RecommendChannel = () => {
  const channel = useSelector(
    (state: RootState) => state.recommendReducer.data
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChannel());
  }, []);

  const moveToChannel = (url: string) => {
    window.open(url);
  };

  return (
    <>
      <ContentsTitle>무술 관련 채널</ContentsTitle>
      <ContentsWrapper>
        {channel.channel.map((channel, idx) => {
          const imgArr = [Viditory, hoguCouple, YangTV];
          return (
            <ChannelBox key={idx}>
              <ChannelCard>
                <img alt="logo" src={imgArr[idx]} />
                <ChannelDetail>
                  <ChannelTitle>{channel.name}</ChannelTitle>
                  <ChannelCaption>{channel.caption}</ChannelCaption>
                  <ChannelBtn onClick={() => moveToChannel(channel.url)}>
                    보러가기
                  </ChannelBtn>
                </ChannelDetail>
              </ChannelCard>
            </ChannelBox>
          );
        })}
      </ContentsWrapper>
    </>
  );
};

export default RecommendChannel;
