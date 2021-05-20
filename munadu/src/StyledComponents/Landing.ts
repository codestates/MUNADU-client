import styled from "styled-components";

const Board: any = styled.div<{ background: string }>`
  position: relative;
  z-index: 4;
`;
//
const CardBoard: any = styled.div`
  display: flex;
  z-index: 1;
`;

const Title: any = styled.p`
  font: 27px;
  color: #923838;
  z-index: 1;
`;

const Img: any = styled.img`
  width: 300px;
  height: 500px;
  z-index: 1;
`;
const Name: any = styled.p`
  color: white;
  z-index: 1;
`;

export const Landing = {
  Board,
  CardBoard,
  Title,
  Img,
  Name,
};
