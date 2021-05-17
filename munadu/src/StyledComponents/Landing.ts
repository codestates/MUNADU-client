import styled from "styled-components";

const Board: any = styled.div<{ background: string }>`
  background-color: #999999;
`;

const CardBoard: any = styled.div`
  display: flex;
`;

const Title: any = styled.p`
  font: 27px;
  color: #923838;
`;

const Img: any = styled.img`
  width: 300px;
  height: 500px;
`;
const Name: any = styled.p`
  color: white;
`;

export const Landing = {
  Board,
  CardBoard,
  Title,
  Img,
  Name,
};
