import styled from "styled-components";

const Page = styled.div`
  overflow: auto;
  height: 100vh;
  background-color: #e5e5e5;
  display: block;
`;

const Board = styled.div`
  background: ${(props) => props.theme.color.black};
  display: flex;
  padding-bottom: 11px;
  height: auto;
`;

const TextBoard = styled.div`
  display: flex;
  margin: 33px 0px 0px 36px;
  font-weight: 800;
  font-family: ${(props) => props.theme.fontFamily.mainFont};
  color: ${(props) => props.theme.color.white};
`;

const TextContent = styled.div`
  margin: 80px 0px 0px 0px;
  font-size: 24px;
`;

const UserProfile = styled.div`
  width: 100%;
  margin: 11px 0px;
  padding: 17px 48px;
  font-size: 20px;
  background-color: ${(props) => props.theme.color.white};
  div {
    display: flex;
    margin: 0px;
    p {
      margin: 10px 0px;
    }
  }
  @media (max-width: 1024px) {
    padding: 10px 17px;
    font-size: 15px;
  }
`;

const UserInfo = styled.p`
  font-weight: bold;
  width: 90px;
`;

const ContentBoard = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px 0px;
`;

const BaseInfo = styled.div`
  button {
    float: right;
    margin-top: -55px;
  }
`;

const SetBoard = styled.div`
  width: 64%;
  margin: 0px auto;
  @media (max-width: 1024px) {
    width: 95%;
  }
`;

const ImgInput = styled.input`
  display: none;
`;
const ImgLabel = styled.label`
  cursor: pointer;
`;

const Content = styled.div`
  width: 48%;
  min-width: 400px;
  border: 2px solid #c4c4c4;
  padding: 10px;
  margin: 40px auto 0px 0px;
  background-color: ${(props) => props.theme.color.white};
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  @media (max-width: 1024px) {
    min-width: 360px;
    margin: 0px auto 10px 0px;
  }
`;
const ErrMessage = styled.p`
  color: red;
  text-align: center;
`;

const Title = styled.p`
  font-family: ${(props) => props.theme.fontFamily.mainFont};
  margin-left: 5px;
  font-size: 24px;
  font-style: normal;
  font-weight: bold;
`;

const SubTitle = styled.p`
  font-family: ${(props) => props.theme.fontFamily.mainFont};
  border-bottom: 1px solid #eeeeee;
  margin: 10px 0px 15px 0px;
  padding-bottom: 5px;
`;

const ButtonPosition = styled.div`
  display: flex;
  justify-content: center;
`;

const AddressBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5px;
  margin: 7px 0px;
`;

const ImgBox = styled.div`
  margin-left: 20px;
  @media (max-width: 1024px) {
    margin-left: 0px;
  }
`;

const GuideText = styled.p`
  text-align: center;
`;

export const MyPageStyle = {
  Board,
  TextBoard,
  TextContent,
  Page,
  ContentBoard,
  SetBoard,
  ImgInput,
  ImgLabel,
  Content,
  ErrMessage,
  Title,
  ButtonPosition,
  SubTitle,
  UserProfile,
  UserInfo,
  BaseInfo,
  GuideText,
  ImgBox,
  AddressBox,
};
