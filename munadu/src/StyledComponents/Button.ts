import styled from "styled-components";

export const Button: any = styled.button<{ background?: string }>`
  background: ${(props) => (props.background ? props.background : "#1c1c1c")};
  border-radius: 5px;
  color: #ffffff;
`;
