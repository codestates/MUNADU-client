import { useEffect, useState } from "react";
import styled from "styled-components";
import Banner from "../Function_Components/MainPage/Banner";
import MartialListForm from "../Function_Components/MainPage/MartialListForm";
import RecommendForm from "../Function_Components/MainPage/RecommendForm";
import { useHistory, useLocation } from "react-router";
import HeaderBar from "../Function_Components/Common/HeaderBar";

interface IProps {
  select: boolean;
}

export default function MainPage() {
  const [isSelected, setIsSelected] = useState(true);
  const location = useLocation<IProps>();

  useEffect(() => {
    setIsSelected(location.state.select);
  }, [location]);

  const checkSelected = (e: boolean) => {
    setIsSelected(e);
  };

  const Main = styled.div`
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
  `;

  const SurveyBtn = styled.div`
    position: fixed;
    right: 16%;
    bottom: 5%;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: #1c1c1c;
    text-align: center;
    line-height: 5rem;
    color: white;
    font-family: Noto Sans KR Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.25));
    cursor: pointer;
    &:hover {
      background-color: rgba(12, 12, 12, 0.61);
    }
  `;
  const history = useHistory();
  const moveToSurveyPage = () => {
    history.push({
      pathname: "/surveypage",
    });
  };
  return (
    <Main>
      <HeaderBar />
      <Banner isSelected={isSelected} checkSelected={checkSelected}></Banner>
      {isSelected ? <RecommendForm /> : <MartialListForm />}
      <SurveyBtn onClick={() => moveToSurveyPage()}>설문조사</SurveyBtn>
    </Main>
  );
}
