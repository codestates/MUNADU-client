import styled from "styled-components";

const Board = styled.div`
  position: relative;
  z-index: 4;
  margin-top: -300px;
  height: 50vh;
  background-color: #1c1c1c;
  @media (max-width: ${(props) => props.theme.width.media}) {
    background: none;
    margin-top: 200px;
    width: 100%;
  }
`;

const Back = styled.div`
  background: linear-gradient(180deg, #1c1c1c 0%, rgba(28, 28, 28, 0.82) 100%);
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1;
`;

const CardBoard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  z-index: 1;
  width: 66%;
  margin: 0px auto;
  @media (max-width: ${(props) => props.theme.width.media}) {
    display: none;
  }
`;

const CardWrapper = styled.div`
  @media (max-width: ${(props) => props.theme.width.media}) {
    display: flex;
    align-self: center;
    padding: 0 20px;
    justify-content: space-between;
  }
`;
const LogoImg = styled.img`
  width: 200px;
  @media (max-width: ${(props) => props.theme.width.media}) {
    margin-top: 65vh;
    width: 150px;
  }
`;

const MartialImg = styled.img`
  @media (max-width: ${(props) => props.theme.width.media}) {
    position: flex;
    width: 60vw;
    height: 40vh;
    z-index: 1;
    top: -200px;
    opacity: 1;
    margin-top: 10vh;
  }
`;

const Title = styled.p`
  padding-left: 7px;
  font-size: 50px;
  color: ${(props) => props.theme.color.white};
  z-index: 1;
  font-family: Gmarket Sans TTF;
  font-style: normal;
  font-weight: normal;
  font-size: 44px;
  line-height: 55px;
  display: flex;
  align-items: left;
  letter-spacing: -0.015em;
  margin-top: 70px;
  flex-direction: column;
  margin-bottom: 15px;
  @media (max-width: ${(props) => props.theme.width.media}) {
    align-self: center;
    width: 100%;
    font-size: 30px;
    line-height: 35px;
  }
`;

const BtnWrapper = styled.div`
  @media (max-width: ${(props) => props.theme.width.media}) {
    display: flex;
    flex-direction: row;
    align-content: flex-start;
  }
`;

const Divide = styled.div`
  margin-left: 7px;
  width: 100px;
  height: 5px;
  background: #ffffff;
  margin-bottom: 15px;
`;

const Caption = styled.div`
  padding-left: 7px;
  font-family: Gmarket Sans TTF;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;
  color: ${(props) => props.theme.color.white};
  margin-bottom: 10px;
  @media (max-width: ${(props) => props.theme.width.media}) {
    font-size: 14px;
    line-height: 16px;
  }
`;

const Name = styled.p`
  position: relative;
  margin-top: 65vh;
  margin-left: 25vw;
  z-index: 4;
  font-family: Gmarket Sans TTF;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 58px;
  letter-spacing: -0.015em;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    #e9e9e9 27.6%,
    #a09c9c 47.92%,
    #dcd9d9 76.56%,
    #b9b6b6 88.02%,
    #bfbfbf 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #222222;
  @media (max-width: ${(props) => props.theme.width.media}) {
    display: none;
    /* margin-top: 20vh;
    margin-left: 33vw;
    font-size: 20px;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #222222; */
  }
`;

const Base = styled.div`
  display: flex;
`;

const Guide = styled.div`
  position: absolute;
  right: 20%;
  top: -280px;
  z-index: 5;
  @media (max-width: ${(props) => props.theme.width.media}) {
    top: -420px;
    padding: 0 5%;
    /* top: -330px; */
    right: 0;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 100%;
  }
`;
const Bgm = styled.div<{ isAudio: boolean }>`
  color: ${(props) => (props.isAudio ? "green" : props.theme.color.white)};
  border: 1px solid
    ${(props) => (props.isAudio ? "green" : props.theme.color.white)};

  width: 50px;
  text-align: center;
  border-radius: 10px;
  padding: 4px;
  margin: 0px 0px 50px 0px;
  float: right;
  cursor: pointer;
`;

const Left = styled.img`
  display: none;
  @media (max-width: ${(props) => props.theme.width.media}) {
    display: flex;
    cursor: pointer;
    z-index: 6;
  }
`;
const Right = styled.img`
  display: none;
  @media (max-width: ${(props) => props.theme.width.media}) {
    display: flex;
    cursor: pointer;
    z-index: 6;
  }
`;

export const Landing = {
  Left,
  Right,
  MartialImg,
  BtnWrapper,
  LogoImg,
  CardWrapper,
  Back,
  Board,
  CardBoard,
  Title,
  Name,
  Base,
  Guide,
  Bgm,
  Caption,
  Divide,
};
