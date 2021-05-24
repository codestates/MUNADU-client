import styled from "styled-components";

const page = styled.div``;

const board = styled.div`
  background: ${(props) => props.theme.color.black};
  display: flex;
`;

const textBoard = styled.div`
  display: flex;
  margin: 33px 0px 0px 36px;
  font-weight: 800;
  font-family: ${(props) => props.theme.fontFamily.mainFont};
  color: ${(props) => props.theme.color.white};
`;

const textContent = styled.div`
  margin-left: 5px;
`;

const contentBoard = styled.div`
  display: flex;
`;

const setBoard = styled.div`
  width: 64%;
  margin: 0px auto;
`;

const imgInput = styled.input`
  display: none;
`;
const imgLabel = styled.label``;

const content = styled.div`
  width: 100%;
  border: 2px solid ${(props) => props.theme.color.black};
  border-radius: 8px;
  padding: 5px;
`;

export const MyPageStyle = {
  board,
  textBoard,
  textContent,
  page,
  contentBoard,
  setBoard,
  imgInput,
  imgLabel,
  content,
};