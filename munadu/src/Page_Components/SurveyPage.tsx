import styled from "styled-components";
import SurveyList from "../Function_Components/SurveyPage/SurveyList";
import HeaderBar from "../Function_Components/Common/HeaderBar";
import HalfBackground from "../StyledComponents/HalfBackground";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.color.grey};
  width: 100%;
  height: 100vh;
  padding-bottom: 7%;
  overflow: auto;
`;

const SurveyBox = styled.div`
  width: ${(props) => props.theme.width.surveyBox};
  min-height: 57%;
  background: ${(props) => props.theme.color.grey};
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.07);
  z-index: 1;
  margin: auto 0;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    width: 90%;
  }
`;
const Div = styled.div`
  width: 100%;
`;
// 기본 margin 0으로 두고, margin-top = (전체높이 - box높이) /2 - headerHeight
export default function SurveyPage() {
  // const [boxHeight, setBoxHeight] = useState()
  return (
    <PageContainer>
      <Div>
        <HeaderBar />
      </Div>
      <HalfBackground />
      <SurveyBox>
        <SurveyList></SurveyList>
      </SurveyBox>
    </PageContainer>
  );
}
