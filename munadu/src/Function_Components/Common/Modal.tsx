import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "../../StyledComponents/button";

interface ModalProps {
  close: () => void;
  headerText: string;
  okBtnText: string;
  cancelBtnText?: string;
  callback?: () => void;
  children: React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >;
  modalWidthPercent?: number;
  modalHeightPercent?: number;
}

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    z-index: 2;
  }
`;
const DialogBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2rem;
  background: ${(props) => props.theme.color.grey};
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    /* z-index: 1; */
  }
`;
const DialogHeader = styled.div`
  display: flex;
  top: 0;
  left: 0;
  justify-content: flex-start;
  align-items: center;
  background: ${(props) => props.theme.color.black};
  width: 100%;
  min-height: 5vh;
  margin: 0;
  font-size: 1.25rem;
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-weight: 500;
  color: ${(props) => props.theme.color.white};
  padding-left: 2rem;
`;

const ButtonGruop = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0em;
`;
type sizeType = {
  modalWidthPercent: number;
  modalHeightPercent: number;
};
const Scale = keyframes`
  from {
    transform: scale(0,0);
  }
  to {
    transform: scale(1,1);
  }
`;
const DialogWrapper = styled.div<sizeType>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.modalWidthPercent}%;
  height: auto;
  min-height: ${(props) => props.modalHeightPercent}%;
  animation: ${Scale} 0.3s ease-out;
  position: relative;
  z-index: 6;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    width: 90%;
    z-index: 10;
  }
`;

export default function Modal({
  close,
  headerText,
  okBtnText,
  cancelBtnText,
  callback,
  children,
  modalWidthPercent,
  modalHeightPercent,
}: ModalProps) {
  const handleOkBtn = () => {
    if (callback) {
      callback();
    }
  };

  return (
    <DarkBackground>
      <DialogWrapper
        modalWidthPercent={modalWidthPercent ? modalWidthPercent : 38}
        modalHeightPercent={modalHeightPercent ? modalHeightPercent : 60}
      >
        <DialogHeader>{headerText}</DialogHeader>
        <DialogBlock>
          {children}
          <ButtonGruop>
            {cancelBtnText ? (
              <Button color={"white"} onClick={close}>
                {cancelBtnText}
              </Button>
            ) : null}
            <Button onClick={handleOkBtn}>{okBtnText}</Button>
          </ButtonGruop>
        </DialogBlock>
      </DialogWrapper>
    </DarkBackground>
  );
}
