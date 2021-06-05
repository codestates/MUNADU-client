import RecommendMartial from "./RecommendMartial";
import RecommendReview from "./RecommendReview";
import RecommendComment from "./RecommendComment";
import RecommendChannel from "./RecommendChannel";
import {
  MainPageWrapper,
  MainPageBox,
} from "../../StyledComponents/recommendForm";

const RecommendForm = () => {
  return (
    <MainPageWrapper>
      <MainPageBox>
        <RecommendMartial />
        <RecommendReview />
        <RecommendComment />
        <RecommendChannel />
      </MainPageBox>
    </MainPageWrapper>
  );
};

export default RecommendForm;
