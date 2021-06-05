import styled from "styled-components";

export const MainPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  background-color: #eeeeee;
  /* overflow-x: hidden; */
`;
export const MainPageBox = styled.div`
  display: flex;
  width: 64%;
  height: auto;
  flex-direction: column;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    width: 90%;
  }
`;
export const Box = styled.div`
  display: flex;
  width: 32%;
  flex-direction: column;
  cursor: pointer;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    margin-bottom: 10px;
    width: 100%;
  }
`;
export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  /* height: 250px; */
  justify-content: space-between;
  margin-bottom: 20px;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    flex-direction: column;
    margin-bottom: 0;
    align-items: center;
    width: 100%;
  }
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 170px;
  width: 100%;
  background-color: white;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  &:hover {
    background-color: rgba(242, 242, 242, 0.5);
  }
`;

export const ContentsTitle = styled.div`
  margin-top: 2vh;
  margin-bottom: 1vh;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  color: #1c1c1c;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    margin-top: 20px;
  }
`;

export const DetailTitle = styled.div`
  margin-top: 2vh;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 29px;
  color: #000000;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    margin-top: 5px;
  }
`;

export const DetailCaption = styled.div`
  font-family: Noto Sans KR Light;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;
  color: #000000;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    margin-bottom: 20px;
  }
`;

export const ContentHeader = styled.div`
  width: 100%;
  height: 20%;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
`;
export const ContentDetail = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
`;
export const ContentHeaderName = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;
  color: #000000;
`;
export const CommentBox = styled.div<{ size: string }>`
  display: flex;
  flex-direction: column;

  width: ${(props) => props.size || "50%"};
`;

export const ChartBox = styled.div`
  width: 50%;
  padding: 3%;
`;

export const CommentHeader = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CommentTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;
  color: #1c1c1c;
  padding-left: 5%;
`;
export const CommentDate = styled.div`
  margin-left: 2%;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #606060;
`;
export const CommentDetail = styled.div`
  width: 100%;
  height: 85px;
  font-family: Noto Sans KR Medium;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #1c1c1c;
  padding-bottom: 10%;
  padding-left: 5%;
  padding-right: 5%;
  overflow: hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const ChannelDetail = styled.div`
  margin-left: 10%;
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const ChannelTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 29px;
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;
  color: #1c1c1c;
`;
export const ChannelCaption = styled.div`
  font-family: Noto Sans KR Medium;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #1c1c1c;
`;
export const ChannelBox = styled.div`
  display: flex;
  width: 32%;
  flex-direction: row;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    width: 100%;
    margin-bottom: 10px;
  }
`;
export const ChannelCard = styled.div`
  padding-left: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 170px;
  width: 100%;
  background-color: white;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

export const ChannelBtn = styled.button`
  margin-top: 5%;
  cursor: pointer;
  background-color: #eb3223;
  color: white;
  /* padding: 7px; */
  border-radius: 5px;
  font-weight: 500;
  outline: none;
  min-width: 5.5rem;
  border: none;
  width: 88px;
  height: 38px;
`;
