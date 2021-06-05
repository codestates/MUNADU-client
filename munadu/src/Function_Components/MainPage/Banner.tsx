import { useState } from "react";
import styled from "styled-components";

export const StyledBanner = styled.div`
  display: flex;
  width: 100%;
  height: 9.95em;
  background-color: #1c1c1c;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 1rem;
`;
const TextBanner = styled.div`
  font-family: Roboto Black;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #fbfbfb;
`;
interface IBannerButton {
  idx: boolean;
  tabValue: boolean;
}
const BannerButton = styled.div`
  font-family: Noto Sans KR Medium;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;
  margin-top: 3rem;
  & + & {
    padding-left: 4rem;
  }
  cursor: pointer;
  &:hover {
    color: #fbfbfb;
    text-decoration: underline;
  }
  text-decoration: ${(props) => {
    if (props.tabValue === props.idx) {
      return "underline";
    } else return "none";
  }};
  text-underline-position: under;
  color: ${(props: IBannerButton) =>
    props.idx === props.tabValue ? "#fbfbfb" : "#606060"};
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.8%;
`;

interface IProps {
  checkSelected: (e: boolean) => void;
  isSelected: boolean;
}

const Banner = ({ checkSelected, isSelected }: IProps) => {
  return (
    <StyledBanner>
      <TextWrapper>
        {isSelected ? (
          <TextBanner>
            여러분들에게 적합한 <br />
            무술을 추천해 드립니다.
          </TextBanner>
        ) : (
          <TextBanner>
            카테고리를 통해 직접 <br />
            본인에게 적합한 무술을 찾아보세요
          </TextBanner>
        )}
      </TextWrapper>
      <ButtonWrapper>
        <BannerButton
          idx={true}
          onClick={() => {
            checkSelected(true);
          }}
          tabValue={isSelected}
        >
          추천 무술
        </BannerButton>
        <BannerButton
          idx={false}
          onClick={() => {
            checkSelected(false);
          }}
          tabValue={isSelected}
        >
          무술 전체 보기
        </BannerButton>
      </ButtonWrapper>
    </StyledBanner>
  );
};

export default Banner;
