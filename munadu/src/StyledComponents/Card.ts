import styled from "styled-components";

export const Card = styled.div<{ background: string }>`
  background-image: url(${(props) => props.background});
  background-color: #282c34;
  background-size: 100% 100%;
  height: 100px;
  width: 70px;
`;
