import { useState, useRef } from "react";
import SurveyJson from "./surveyContents.json";
import martialJson from "../Common/martialData.json";
import suggestedJson from "../Common/suggestedData.json";
import { useHistory } from "react-router";
import {
  Div,
  OptionAndBtn,
  ResultBox,
  Question,
  NewBtn,
  BtnWrapper,
  BtnWrapper2,
  OptionBox,
  Hr,
  ProgressBarBox,
  ProgressBar,
  AnswerText,
  Input,
  MartialBox,
  Photo,
  MartialTextWrapper,
  MartialName,
  MartialDescription,
} from "../../StyledComponents/survey";
import { saveAnswer, refreshAnswer } from "../../Redux/Reducers/surveyReducer";
import { RootState } from "../../Redux/Store/store";
import { useDispatch, useSelector } from "react-redux";

export default function SurveyList() {
  const [isInactive, setIsInactive] = useState(true);
  const [surveyResult, setSurveyResult] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const answer1Ref = useRef<HTMLInputElement>(null);
  const answer2Ref = useRef<HTMLInputElement>(null);
  const answer3Ref = useRef<HTMLInputElement>(null);
  const answer4Ref = useRef<HTMLInputElement>(null);

  const {
    weapon0 = "",
    uniform1 = "",
    origin2 = "",
    sports3 = "",
    manner4 = "",
    attack5 = "",
    result = [],
    isShow = false,
    index = 0,
  } = useSelector((state: RootState) => state.surveyReducer);
  const surveyState = useSelector((state: RootState) => state.surveyReducer);
  const handleReset = () => {
    dispatch(refreshAnswer());
    setIsInactive(true);
  };
  const moveToDetailPage = (id: number) => {
    history.push({
      pathname: "/detailpage",
      state: { martialId: id },
    });
  };
  const handleNext = () => {
    if (
      !answer1Ref.current?.checked &&
      !answer2Ref.current?.checked &&
      !answer3Ref.current?.checked &&
      answer4Ref.current &&
      !answer4Ref.current?.checked
    ) {
      return;
    }

    if (
      weapon0 !== "" ||
      uniform1 !== "" ||
      origin2 !== "" ||
      sports3 !== "" ||
      manner4 !== "" ||
      attack5 !== ""
    ) {
      let filterResult: any = [];
      switch (weapon0) {
        case "0":
          filterResult = martialJson.martialData.filter(
            (martial) => martial.weapon === 0
          );
          break;
        case "1":
          filterResult = martialJson.martialData.filter(
            (martial) => martial.weapon === 1
          );
          break;
        case "2":
          filterResult = martialJson.martialData.filter(
            (martial) => martial.weapon === 2
          );
          break;
        case "3":
          filterResult = martialJson.martialData;
          break;
      }

      switch (uniform1) {
        case "0":
          filterResult = filterResult.filter(
            (martial: any) => martial.uniform === 0
          );
          break;
        case "1":
          filterResult = filterResult.filter(
            (martial: any) => martial.uniform === 1
          );
          break;
        case "2":
          filterResult = filterResult.filter(
            (martial: any) => martial.uniform === 2
          );
          break;
        case "3":
          break;
      }
      switch (origin2) {
        case "0":
          filterResult = filterResult.filter(
            (martial: any) => martial.origin === 0
          );
          break;
        case "1":
          filterResult = filterResult.filter(
            (martial: any) => martial.origin === 1
          );
          break;
        case "2":
          break;
      }
      switch (sports3) {
        case "0":
          filterResult = filterResult.filter(
            (martial: any) => martial.sports === 0
          );
          break;
        case "1":
          filterResult = filterResult.filter(
            (martial: any) => martial.sports === 1
          );
          break;
        case "2":
          break;
      }
      switch (manner4) {
        case "0":
          filterResult = filterResult.filter(
            (martial: any) => martial.manner === 0
          );
          break;
        case "1":
          filterResult = filterResult.filter(
            (martial: any) => martial.manner === 1
          );
          break;
        case "2":
          break;
      }
      switch (attack5) {
        case "0":
          filterResult = filterResult.filter(
            (martial: any) => martial.attack === 0
          );
          break;
        case "1":
          filterResult = filterResult.filter(
            (martial: any) => martial.attack === 1
          );
          break;
        case "2":
          filterResult = filterResult.filter(
            (martial: any) => martial.attack === 2
          );
          break;
        case "3":
          break;
      }

      setSurveyResult(filterResult);

      dispatch(saveAnswer({ ...surveyState, result: surveyResult }));
    }

    if (index <= 4) {
      // setIndex(index + 1);
      dispatch(saveAnswer({ ...surveyState, index: index + 1 }));
      if (answer1Ref.current?.checked) answer1Ref.current.checked = false;
      if (answer2Ref.current?.checked) answer2Ref.current.checked = false;
      if (answer3Ref.current?.checked) answer3Ref.current.checked = false;
      if (answer4Ref.current && answer4Ref.current?.checked)
        answer4Ref.current.checked = false;
      setIsInactive(true);
    } else {
      // 설문 결과창 출력!

      dispatch(
        saveAnswer({
          ...surveyState,
          isShow: true,
          result: surveyResult,
          index: index + 1,
        })
      );
    }
  };
  const moveToMain = () => {
    history.push({
      pathname: "/mainpage",
      state: { select: false },
    });
  };
  const check = (e: any) => {
    if (e.target.checked) {
      setIsInactive(false);

      if (index === 0)
        dispatch(saveAnswer({ ...surveyState, weapon0: e.target.value }));

      if (index === 1)
        dispatch(saveAnswer({ ...surveyState, uniform1: e.target.value }));

      if (index === 2)
        dispatch(saveAnswer({ ...surveyState, origin2: e.target.value }));

      if (index === 3)
        dispatch(saveAnswer({ ...surveyState, sports3: e.target.value }));

      if (index === 4)
        dispatch(saveAnswer({ ...surveyState, manner4: e.target.value }));

      if (index === 5)
        dispatch(saveAnswer({ ...surveyState, attack5: e.target.value }));
    } else {
      console.log("오류입니다.");
    }
  };

  return (
    <Div>
      <ProgressBarBox>
        <ProgressBar idx={index} />
      </ProgressBarBox>
      {Math.floor((index / SurveyJson.surveys.length) * 100) + " %"}
      {isShow === false ? (
        <Question>{SurveyJson.surveys[index].question}</Question>
      ) : (
        <Question>
          {result !== undefined && result.length > 0
            ? `당신에게 어울리는 ${result.length}개의 무술을 찾았습니다.`
            : `아쉽지만 당신에 딱맞는 무술은 찾지 못했습니다. 이런 무술들은 어떠세요?`}
        </Question>
      )}
      <OptionAndBtn>
        {isShow === false ? (
          <OptionBox>
            <AnswerText htmlFor={"one"}>
              <Input
                id="one"
                type="radio"
                value="0"
                name="chkInfo"
                onClick={check}
                ref={answer1Ref}
              ></Input>
              {SurveyJson.surveys[index].answers[0]}
            </AnswerText>
            <Hr></Hr>
            <AnswerText>
              <Input
                type="radio"
                value="1"
                name="chkInfo"
                onClick={check}
                ref={answer2Ref}
              ></Input>
              {SurveyJson.surveys[index].answers[1]}
            </AnswerText>
            <Hr></Hr>
            <AnswerText>
              <Input
                type="radio"
                value="2"
                name="chkInfo"
                onClick={check}
                ref={answer3Ref}
              ></Input>
              {SurveyJson.surveys[index].answers[2]}
            </AnswerText>
            {SurveyJson.surveys[index].answers[3] ? (
              <div>
                <Hr></Hr>
                <AnswerText>
                  <Input
                    type="radio"
                    value="3"
                    name="chkInfo"
                    onClick={check}
                    ref={answer4Ref}
                  ></Input>
                  {SurveyJson.surveys[index].answers[3]}
                </AnswerText>
              </div>
            ) : null}
          </OptionBox>
        ) : result !== undefined && result.length > 0 ? (
          <ResultBox>
            {result.map((martial: any, idx: number) => {
              return (
                <MartialBox
                  key={idx}
                  onClick={() => moveToDetailPage(martial.id)}
                >
                  <Photo src={martial.img} />
                  <MartialTextWrapper>
                    <MartialName>{martial.name}</MartialName>
                    <MartialDescription>{martial.caption}</MartialDescription>
                  </MartialTextWrapper>
                </MartialBox>
              );
            })}
          </ResultBox>
        ) : (
          <ResultBox>
            {suggestedJson.martialData.map((martial: any, idx: number) => {
              return (
                <MartialBox
                  key={idx}
                  onClick={() => moveToDetailPage(martial.id)}
                >
                  <Photo src={martial.img} />
                  <MartialTextWrapper>
                    <MartialName>{martial.name}</MartialName>
                    <MartialDescription>{martial.caption}</MartialDescription>
                  </MartialTextWrapper>
                </MartialBox>
              );
            })}
          </ResultBox>
        )}
        {!isShow ? (
          <BtnWrapper>
            <NewBtn onClick={handleNext} disabled={isInactive}>
              다음
            </NewBtn>
          </BtnWrapper>
        ) : (
          <BtnWrapper2>
            <NewBtn onClick={handleReset}>설문 다시하기</NewBtn>
            <NewBtn onClick={moveToMain}>모든 무술 둘러보기</NewBtn>
          </BtnWrapper2>
        )}
      </OptionAndBtn>
    </Div>
  );
}
