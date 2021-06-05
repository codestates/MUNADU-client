import styled from "styled-components";

export const CardBack = styled.div<{ isSelect: boolean }>`
  background: ${(props) =>
    props.isSelect
      ? "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(102, 32, 32))"
      : "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(54, 53, 53, 0.95))"};
`;

export const Card = styled.div<{ background: string; isClick: boolean }>`
  background-image: url(${(props) => props.background});
  background-size: 100% 100%;
  height: 100px;
  width: 70px;
  margin: ${(props) => (props.isClick ? "0px" : "5px")};
`;

export const SelectCard = styled.div`
  border: 5px solid rgba(255, 0, 0, 0.541);
  border-radius: 5px;
  width: 80px;
`;
export const NoSelectCard = styled.div`
  width: 80px;
  filter: grayscale(90%);
`;
