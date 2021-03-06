// import Modal from "../Common/Modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Common/Modal";
import StarRatings from "react-star-rating-component";
import {
  PhotoAndText,
  TextAndInput,
  MartialTitle,
  Nation,
  Text,
  InputPeriod,
  InputAdvice,
  StarWrapper,
  Div,
  Form,
  ErrorMsg,
} from "../../StyledComponents/createreview";
import { RootState } from "../../Redux/Store/store";
import martialJson from "../Common/martialData.json";
import { updateReviews } from "../../Redux/Reducers/reviewReducer";
interface IProps {
  reviewId: number;
  martialId: number;
  closeEditBtns: any;
}
function UpdateReview({ reviewId, martialId, closeEditBtns }: IProps) {
  const [isModal, setIsModal] = useState(true);
  const [period, setPeriod] = useState(0);
  const [comment, setComment] = useState("");
  const [score, setScore] = useState(0);
  const [practicality, setPracticality] = useState(0);
  const [muscle, setMuscle] = useState(0);
  const [difficulty, setDifficulty] = useState(0);
  const [intensity, setIntensity] = useState(0);
  const [injury, setInjury] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();
  interface IMartial {
    id: number;
    name: string;
    weapon: number;
    uniform: number;
    origin: number;
    sports: number;
    attack: number;
    nation: string;
    caption: string;
    video: string;
    kcal: number;
    img: string;
    wiki: string;
  }
  const theMartial: IMartial = martialJson.martialData.filter(
    (martial) => martial.id === martialId
  )[0];
  const setInitialState = () => {
    setPeriod(0);
    setComment("");
    setScore(0);
    setPracticality(0);
    setMuscle(0);
    setDifficulty(0);
    setIntensity(0);
    setInjury(0);
    setIsModal(false);
    setErrorMsg("");
  };
  const closeModal = () => {
    setInitialState();
    closeEditBtns();
  };
  const accessToken = useSelector(
    (state: RootState) => state.authReducer.accessToken
  );
  const handlePeriod = (e: any) => {
    setPeriod(e.target.value);
  };
  const handleComment = (e: any) => {
    setComment(e.target.value);
  };
  const handlePracticality = (newPracticality: number) => {
    setPracticality(newPracticality);
  };
  const handleScore = (newScore: number) => {
    setScore(newScore);
  };
  const handleMuscle = (newMuscle: number) => {
    setMuscle(newMuscle);
  };
  const handleIntensity = (newIntensity: number) => {
    setIntensity(newIntensity);
  };
  const handleInjury = (newInjury: number) => {
    setInjury(newInjury);
  };
  const handleDifficulty = (newDifficulty: number) => {
    setDifficulty(newDifficulty);
  };

  const updateReview = async () => {
    // ????????? ??????
    // ?????? ??????
    if (
      !period ||
      !comment ||
      !score ||
      !practicality ||
      !muscle ||
      !difficulty ||
      !intensity ||
      !injury
    ) {
      setErrorMsg("?????? ????????? ??????????????? ?????????.");
    } else {
      dispatch(
        updateReviews({
          period,
          comment,
          score,
          practicality,
          muscle,
          difficulty,
          intensity,
          injury,
          reviewId,
          accessToken,
        })
      );
      setInitialState();
      closeEditBtns();
    }
  };

  return (
    <Div>
      {isModal ? (
        <Modal
          close={closeModal}
          headerText={"?????? ????????????"}
          okBtnText={"??????"}
          cancelBtnText={"??????"}
          callback={updateReview}
          modalWidthPercent={38}
          modalHeightPercent={50}
        >
          <Form>
            <PhotoAndText>
              <MartialTitle>{theMartial.name}</MartialTitle>
              <Nation>{theMartial.nation}</Nation>
            </PhotoAndText>
            <TextAndInput>
              <Text>?????? ??? ??????</Text>
              <StarWrapper>
                <StarRatings
                  name="score"
                  starCount={5}
                  value={score}
                  onStarClick={handleScore}
                />
              </StarWrapper>
            </TextAndInput>
            <TextAndInput>
              <Text>?????? ?????? ??????</Text>
              <InputPeriod
                type="number"
                min="0"
                max="99"
                placeholder="???"
                onChange={handlePeriod}
              ></InputPeriod>
            </TextAndInput>
            <TextAndInput>
              <Text>??????</Text>
              <InputAdvice
                onChange={handleComment}
                placeholder="????????? ??????????????? ????????? ????????? ?????? ?????? ???????????????.&#13;&#10;??????????????? ????????? ??? ??? ????????????."
              ></InputAdvice>
            </TextAndInput>
            <TextAndInput>
              <Text>?????????</Text>
              <StarWrapper>
                <StarRatings
                  name="practicality"
                  starCount={5}
                  value={practicality}
                  onStarClick={handlePracticality}
                />
              </StarWrapper>
            </TextAndInput>
            <TextAndInput>
              <Text>?????? ??????</Text>
              <StarWrapper>
                <StarRatings
                  name="muscle"
                  starCount={5}
                  value={muscle}
                  onStarClick={handleMuscle}
                />
              </StarWrapper>
            </TextAndInput>
            <TextAndInput>
              <Text>?????????</Text>
              <StarWrapper>
                <StarRatings
                  name="difficulty"
                  starCount={5}
                  value={difficulty}
                  onStarClick={handleDifficulty}
                />
              </StarWrapper>
            </TextAndInput>
            <TextAndInput>
              <Text>?????? ??????</Text>
              <StarWrapper>
                <StarRatings
                  name="intensity"
                  starCount={5}
                  value={intensity}
                  onStarClick={handleIntensity}
                />
              </StarWrapper>
            </TextAndInput>
            <TextAndInput>
              <Text>?????? ??????</Text>
              <StarWrapper>
                <StarRatings
                  name="injury"
                  starCount={5}
                  value={injury}
                  onStarClick={handleInjury}
                />
              </StarWrapper>
            </TextAndInput>
            <ErrorMsg>{errorMsg}</ErrorMsg>
          </Form>
        </Modal>
      ) : null}
    </Div>
  );
}

export default UpdateReview;
