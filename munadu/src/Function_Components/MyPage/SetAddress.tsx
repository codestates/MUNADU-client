import { useState } from "react";
import Button from "../../StyledComponents/button";
import Modal from "../Common/Modal";
import DaumPostcode from "react-daum-postcode";

export default function SetAddress({ changeAddress }: any) {
  const [isModal, setIsModal] = useState<boolean>(false);

  const handleAddress = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    changeAddress(fullAddress);
    close();
  };

  const close = () => {
    setIsModal(false);
  };
  return (
    <>
      <Button
        margin={"0px 0px 0px 10px"}
        onClick={() => {
          setIsModal(true);
        }}
      >
        주소찾기
      </Button>
      {isModal ? (
        <Modal
          close={close}
          headerText="주소 찾기"
          okBtnText="취소"
          callback={close}
        >
          <DaumPostcode onComplete={handleAddress}></DaumPostcode>
        </Modal>
      ) : null}
    </>
  );
}
