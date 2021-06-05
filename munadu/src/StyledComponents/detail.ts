import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
`;
const Board = styled.div`
  display: flex;
  margin: 0px auto 10px auto;
  width: 64%;

  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    width: 95%;
  }
`;
const ChildrenBoard = styled.div``;
const ImgBox = styled.div`
  width: 138px;
  height: 138px;
  border: 6px solid white;
  background-color: ${(props) => props.theme.color.white};
`;

export const Detail = { Img, Board, ChildrenBoard, ImgBox };
