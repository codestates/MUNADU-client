import { useState } from "react";
import { setImg } from "../../Redux/Reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import Button from "../../StyledComponents/button";
import { Detail } from "../../StyledComponents/detail";
import { MyPageStyle } from "../../StyledComponents/myPage";
import Modal from "../Common/Modal";

export default function SetImage({ callback }: any) {
  const token = useSelector((state: RootState) => {
    return state.authReducer.accessToken;
  });
  const userImg = useSelector((state: RootState) => {
    return state.userReducer.img;
  });
  const dispatch = useDispatch();
  const [imgBase64, setImgBase64] = useState(userImg);
  const [imgFile, setImgFile] = useState<any>();
  const [onBtn, setOnBtn] = useState<boolean>(true);
  const [errMessage, setErrMessage] = useState<string>("");
  const [isModal, setIsModal] = useState<boolean>(false);

  const changeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      let reader = new FileReader();
      let formData = new FormData();
      reader.onloadend = () => {
        const base = reader.result;
        if (base) {
          let img = new Image();
          img.src = base.toString();

          img.onload = () => {
            if (img.height >= 500 || img.width >= 500) {
              setErrMessage("이미지 사이즈가 너무 큽니다.");
              setOnBtn(true);
            }
          };
          setImgBase64(base.toString());
        }
      };

      //파일이 정상적으로 업로드 된 경우 아래의 코드가 실행
      if (e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
        formData.append("image", e.target.files[0]);
        setImgFile(formData);
        setErrMessage("");
        setOnBtn(false);
      } else {
        setImgBase64(userImg);
        setOnBtn(true);
      }
    }
  };

  const uploadImg = (): void => {
    dispatch(setImg({ form: imgFile, token: token }));
    setIsModal(true);
    setOnBtn(true);
  };

  const closeModal = (): void => {
    setIsModal(false);
  };
  return (
    <>
      <MyPageStyle.Content>
        <MyPageStyle.SubTitle>프로필 이미지 변경</MyPageStyle.SubTitle>
        <MyPageStyle.ContentBoard>
          <Detail.ImgBox>
            <MyPageStyle.ImgLabel htmlFor="file">
              <Detail.Img src={imgBase64}></Detail.Img>
              <MyPageStyle.ImgInput
                type="file"
                accept="image/jpeg, image/png, image/jpg"
                onChange={changeImage}
                id="file"
              ></MyPageStyle.ImgInput>
            </MyPageStyle.ImgLabel>
          </Detail.ImgBox>
          <MyPageStyle.ImgBox>
            <MyPageStyle.GuideText>
              이미지를 눌러 원하는
              <br />
              이미지 파일을 업로드 해주세요
            </MyPageStyle.GuideText>
            <MyPageStyle.ErrMessage>{errMessage}</MyPageStyle.ErrMessage>
            <MyPageStyle.ButtonPosition>
              <Button
                onClick={uploadImg}
                color={onBtn ? "white" : ""}
                disabled={onBtn}
              >
                이미지 변경
              </Button>
              <Button
                onClick={() => {
                  callback(true);
                }}
              >
                취소
              </Button>
            </MyPageStyle.ButtonPosition>
          </MyPageStyle.ImgBox>
        </MyPageStyle.ContentBoard>
      </MyPageStyle.Content>

      {isModal ? (
        <Modal
          close={closeModal}
          headerText="프로필 이미지 변경 완료"
          okBtnText="확인"
          callback={closeModal}
        >
          <p>프로필 이미지 변경이 완료되었습니다.</p>
        </Modal>
      ) : null}
    </>
  );
}
