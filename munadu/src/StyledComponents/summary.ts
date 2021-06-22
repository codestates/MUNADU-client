import styled from "styled-components";

export const MartialSummary = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 54%;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;
export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 2%;
  height: 40%;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    flex-direction: column;
  }
`;
export const BasicSummary = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 20% 20% 20% 20% 20%;
  width: 40%;
`;
export const ChartSummary = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    width: 100%;
  }
`;

export const ChartWrapper = styled.div`
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    width: 80%;
    height: auto;
    align-self: center;
  }
`;
export const SummaryKey = styled.div`
  display: grid;
  grid-template-columns: 8em 70%;
  place-items: center start;
  min-width: 8em;
`;
export const SummaryValue = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding-right: 150px;
`;
export const KeyList = styled.div`
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-style: normal;
  font-weight: bold;
  font-size: 1.25rem;
  color: #1c1c1c;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    margin: 10px;
    line-height: 0;
  }
`;
export const ValueList = styled.div`
  width: 200px;
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-style: normal;
  font-weight: lighter;
  font-size: 1.25rem;
  color: #1c1c1c;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    margin: 10px;
  }
`;

export const IconImg = styled.img`
  padding-left: 4px;
`;

export const ChartTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 1.25rem;
  color: #1c1c1c;
  margin-top: 1em;
  margin-left: 3%;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    margin-top: 0.4em;
    margin-left: 10px;
  }
`;

export const UrlValue = styled.div`
  display: flex;
  align-items: center;
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-size: 1.25rem;
  cursor: pointer;
`;

export const RecommendWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  align-self: center;
  width: 88%;
  height: 25%;
  justify-content: space-between;
`;

export const Recommend = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 29px;
  color: #1c1c1c;
`;
export const RecommendBoxWrapper = styled.div`
  margin-top: 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    flex-direction: column;
  }
`;

export const RecommendBox = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  width: 30%;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding-right: 1%;
  margin-bottom: 3%;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    width: 100%;
  }
`;

export const MartialImg = styled.img`
  margin: 5%;
`;

export const TitleAndCaption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const RecommendTitle = styled.div`
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
export const RecommendCaption = styled.div`
  font-family: Noto Sans KR Light;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;
  color: #1c1c1c;
`;
