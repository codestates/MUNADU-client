import styled from "styled-components";
import Button from "../StyledComponents/button";
import SurveyJson from "../Function_Components/SurveyPage/surveyContents.json";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 100%;
  padding: 5% 5% 0 5%;
  max-height: 92vh;
`;
export const OptionAndBtn = styled.div`
  width: 100%;
  max-height: 65vh;
  overflow: auto;
`;
export const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  max-height: 10%;
  /* overflow: visible; */
  overflow: auto;
  background: #fffbfb;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  /* padding-top: 100%; */
`;
export const Question = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-weight: 500;
  line-height: 150%;
  min-height: 20%;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    font-size: 1.2rem;
  }
`;
export const NewBtn = styled(Button)`
  min-width: 20%;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 3%;
  background: ${(props) =>
    props.disabled ? "#C4C4C4" : props.theme.color.black};
`;
export const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 0px;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    justify-content: center;
  }
`;
export const BtnWrapper2 = styled(BtnWrapper)`
  justify-content: space-between;
  margin: 0;
`;

export const OptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  min-height: 50%;
  height: auto;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background: #fffbfb;
  margin-top: 1em;
  font-size: 1rem;
`;

export const Hr = styled.hr`
  margin: 0;
`;
export const DivAnswer = styled.div`
  margin: 0;
`;
export const ProgressBarBox = styled.div`
  width: 100%;
  height: 5px;
  background: #c4c4c4;
  padding: 0;
  margin-bottom: 10px;
`;

export type ProgressBarType = {
  idx: number;
};
export const ProgressBar = styled.div<ProgressBarType>`
  width: calc(${(props) => props.idx / SurveyJson.surveys.length}*100%);
  height: 100%;
  background: ${(props) => props.theme.color.black};
`;
export const AnswerText = styled.label`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-weight: 500;
  margin: 1em 0;
  cursor: pointer;
`;
export const Input = styled.input`
  margin: 0 15px 0 15px;
  font-size: 2rem;
  transform: scale(1.5);
`;
export const MartialBox = styled.div`
  display: flex;
  border-bottom: 1px solid #c4c4c4;
  padding: 10px;
  cursor: pointer;
`;
// ? border-bottom 은 props로 필터링된 배열의 length가 1개이거나 2개 이상일 때는 마지막 index는 props를 넣어서 border-bottom 설정하지말자.
export const Photo = styled.img`
  width: 3em;
  height: 3em;
  margin-right: 10px;
`;
export const MartialTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export interface SurveyProps {
  resetHeight: number;
}
export const MartialName = styled.div`
  font-size: 1.25rem;
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-weight: 700;
`;
export const MartialDescription = styled.div`
  font-size: 1rem;
  font-weight: 300;
  font-family: ${(props) => props.theme.fontFamily.subFont};
`;
